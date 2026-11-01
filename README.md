# GATE CSE 2027 Study Hub

A free, static study site for the GATE 2027 Computer Science (CS) paper. It has subject-wise topics, video playlists, practice links, a timed sample mock test and a week-by-week roadmap. It has no build step, no dependencies and no backend.

## Run locally

Open `index.html` in a browser, or serve the folder:

```bash
python -m http.server 8000
```

Then open http://localhost:8000.

## Publish on GitHub Pages

Go to Settings → Pages → Deploy from a branch → `main` / `(root)`. All asset paths are relative, so the site works from the repository subpath (`https://<user>.github.io/<repo>/`).

## Pages

| File | Page |
|------|------|
| `index.html` | Home: exam facts and links to each section |
| `learn.html` | Every syllabus topic with a lecture video and past questions, plus full playlists |
| `practice.html` | Past questions per syllabus topic, full papers and sample questions |
| `mock.html` | Timed sample test |
| `roadmap.html` | Week-by-week plan with one task per syllabus topic, saved ticks |

Each page has its own copy of the header and footer. If you change the navigation, update all five files. `app.js` and `styles.css` are shared, and `app.js` renders only the sections that exist on the current page.

## Update content

### Syllabus topics (`syllabus.js`, generated)

`syllabus.js` lists every topic of the official GATE 2027 CS and GA syllabi, in the official order and wording. Each topic has one lecture video and a GATE Overflow tag page. Learn, Practice and Roadmap all read from it. Don't edit it by hand. Edit the table `S` in `tools/gen_syllabus.py`, then regenerate:

```bash
python tools/scrape_playlists.py videos.json
python tools/gen_syllabus.py videos.json tools/go_tag_cache.json syllabus.js
```

A topic's video is written as `'playlist_key#index'`, an index into that playlist's scraped video list. If no verified lecture fits, it is written as `'search:query'` and shown as a labelled YouTube search link. GATE Overflow tags are confirmed through archive.org, because the live site blocks scripts. A topic whose tag can't be confirmed falls back to the subject's question page.

### Everything else (`app.js`)

- `SUBJECTS`: marks ranges, full playlists and the subject practice page. To check a playlist id:
  `curl "https://www.youtube.com/oembed?format=json&url=https://www.youtube.com/playlist?list=<ID>"`
- `SAMPLES`: practice questions as `[subject, syllabus topic, question, answer, explanation]`.
- `MOCK` / `MOCK_MINUTES`: the sample test (`mcq`, `msq` or `nat`). `s` and `t` give each question's syllabus section and topic.
- `ROADMAP`: weeks given as Monday start dates. `study` turns each syllabus topic of the listed subjects or sections into a task, and `tasks` adds extra items.

## Sources (checked 1 Nov 2026)

- Exam dates, paper pattern and syllabus: [GATE 2027 official site, IIT Madras](https://gate2027.iitm.ac.in/)
- Historical subject marks (2023–2025 papers): [GO Classes analysis](https://www.goclasses.in/blog/a-strategic-analysis-of-subject-wise-weightage-trends-in-gate-cse-2023-2025)
- Past questions: [GATE Overflow](https://gateoverflow.in/previous-years) (subject pages confirmed via archived copies; the live site blocks automated checks)

The only data the site saves is roadmap ticks, in your browser's `localStorage`.
