"""Fetch video ids + titles for YouTube playlists (first page, up to ~100) into videos.json."""
import json, re, sys, urllib.request

PLAYLISTS = {
    'gs_dm': 'PLxCzCOWd7aiH2wwES9vPWsEL6ipTaUSl3', 'neso_dm': 'PLBlnK6fEyqRhqJPDXcvYlLfXPh37L89g3',
    'gs_la': 'PLxCzCOWd7aiGmXGb0t8YXtWl7qAe6hk25', 'gp_calc': 'PLU6SqdYcYsfIiBE81kdYJiXDdZ2JdVKGS',
    'go_calc': 'PLIPZ2_p3RNHi3R5H_NDKCB3aGvtLYlLrz', 'gs_prob': 'PLxCzCOWd7aiFjZP4z1_3Kr3m3J5wu5Q8V',
    'neso_de': 'PLBlnK6fEyqRjMH3mWf6kwqiTbT798eAOm', 'gs_coa': 'PLxCzCOWd7aiHMonh3G6QNKq53C6oNXGrX',
    'neso_coa': 'PLBlnK6fEyqRgLLlzdgiTUKULKJPYc0A4q', 'neso_c': 'PLBlnK6fEyqRggZZgYpPMUxdY1CYkZtARR',
    'neso_ds': 'PLBlnK6fEyqRj9lld8sWIUNwlKfdUoPd1Y', 'gs_ds': 'PLxCzCOWd7aiEwaANNt3OqJPVIxwp2ebiT',
    'ab_algo': 'PLDN4rrl48XKpZkf03iYFl-O29szjTrs_O', 'gs_daa': 'PLxCzCOWd7aiHcmS4i14bI0VrMbZTUvlTa',
    'gs_toc': 'PLxCzCOWd7aiFM9Lj5G9G_76adtyb4ef7i', 'neso_toc': 'PLBlnK6fEyqRhd3kSEsaT5rxvVnIh4UK-r',
    'gs_cd': 'PLxCzCOWd7aiEKtKSIHYusizkESC42diyc', 'neso_cd': 'PLBlnK6fEyqRjT3oJxFXRgjPNzeS-LFY-q',
    'gs_os': 'PLxCzCOWd7aiGz9donHRrE9I3Mwn6XdP8p', 'neso_os': 'PLBlnK6fEyqRiVhbXDGLXDk_OQAeuVcp2O',
    'gs_db': 'PLxCzCOWd7aiFAN6I8CuViBuCdJgiOkT2Y', 'gs_cn': 'PLxCzCOWd7aiGFBD2-2joCpWOLUrDLvVV_',
    'neso_cn': 'PLBlnK6fEyqRgMCUAG0XRw78UA8qnv6jEx', 'kg_ga': 'PLmXKhU9FNesQr-O9_Ibx6Ei-USREN7NYE',
    'gs_la2': 'PLxCzCOWd7aiHnkPiCulMX5SIHMl2ZMmzL', 'go_la': 'PLIPZ2_p3RNHhGLQ1ZT37KLpBMAD90CM4_',
    'gs_graph': 'PLxCzCOWd7aiG0M5FqjyoqB20Edk0tyzVt', 'kg_graph': 'PLmXKhU9FNesTpQNP_OpXN7WaPwGx7NWsq',
    'kg_sets': 'PLmXKhU9FNesRORH5XXsErmamVvUT_zbG4', 'go_dm': 'PLIPZ2_p3RNHgjPQN2GtCVOCgrkH2zCkSU',
}
if len(sys.argv) > 2:
    PLAYLISTS = {k: v for k, v in PLAYLISTS.items() if k in sys.argv[2].split(',')}

def walk(o, out):
    if isinstance(o, dict):
        r = o.get('playlistVideoRenderer')
        if r and r.get('videoId'):
            out.append((r['videoId'], ''.join(x['text'] for x in r['title']['runs'])))
        l = o.get('lockupViewModel')
        if l and l.get('contentType') == 'LOCKUP_CONTENT_TYPE_VIDEO':
            out.append((l['contentId'], l['metadata']['lockupMetadataViewModel']['title']['content']))
        for v in o.values():
            walk(v, out)
    elif isinstance(o, list):
        for v in o:
            walk(v, out)

result = {}
for key, pid in PLAYLISTS.items():
    req = urllib.request.Request('https://www.youtube.com/playlist?list=' + pid,
                                 headers={'Accept-Language': 'en', 'User-Agent': 'Mozilla/5.0'})
    html = urllib.request.urlopen(req, timeout=30).read().decode('utf-8', 'replace')
    m = re.search(r'var ytInitialData = (\{.*?\});</script>', html, re.S)
    key_m = re.search(r'"INNERTUBE_API_KEY":"([^"]+)"', html)
    ver_m = re.search(r'"INNERTUBE_CLIENT_VERSION":"([^"]+)"', html)
    vids = []
    data = json.loads(m.group(1)) if m else {}
    walk(data, vids)
    # Follow continuation tokens to load videos beyond the first page (~100).
    for _ in range(10):
        toks = re.findall(r'"continuationCommand":\s*\{"token":\s*"([^"]+)"', json.dumps(data))
        if not toks or not key_m:
            break
        body = json.dumps({'context': {'client': {'clientName': 'WEB', 'clientVersion': ver_m.group(1), 'hl': 'en'}},
                           'continuation': toks[0]}).encode()
        r2 = urllib.request.Request('https://www.youtube.com/youtubei/v1/browse?key=' + key_m.group(1), data=body,
                                    headers={'Content-Type': 'application/json', 'User-Agent': 'Mozilla/5.0'})
        data = json.loads(urllib.request.urlopen(r2, timeout=30).read())
        before = len(vids)
        walk(data, vids)
        if len(vids) == before:
            break
    seen, uniq = set(), []
    for vid, title in vids:
        if vid not in seen:
            seen.add(vid); uniq.append({'id': vid, 'title': title})
    result[key] = {'pid': pid, 'videos': uniq}
    print(f'{key:9} {len(uniq):4} videos', file=sys.stderr)

json.dump(result, open(sys.argv[1], 'w', encoding='utf-8'), ensure_ascii=False, indent=1)
