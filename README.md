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
| `learn.html` | Subjects, topics and video playlists |
| `practice.html` | Past-question links and sample questions |
| `mock.html` | Timed sample test |
| `roadmap.html` | Week-by-week plan with saved ticks |

Each page has its own copy of the header and footer. If you change the navigation, update all five files. `app.js` and `styles.css` are shared, and `app.js` renders only the sections that exist on the current page.

## Update content

All content lives in `app.js`:

- `SUBJECTS`: topics, marks ranges, video playlists and practice links. Use `yt(playlistId)` for a verified playlist. If a playlist cannot be verified, use `search('Channel topic')` with `search: true`. To check a playlist id:
  `curl "https://www.youtube.com/oembed?format=json&url=https://www.youtube.com/playlist?list=<ID>"`
- `SAMPLES`: practice questions shown under Practice.
- `MOCK` / `MOCK_MINUTES`: the sample test (`mcq`, `msq` or `nat`).
- `ROADMAP`: weeks, given as Monday start dates and their tasks.

## Sources (checked 1 Nov 2026)

- Exam dates, paper pattern and syllabus: [GATE 2027 official site, IIT Madras](https://gate2027.iitm.ac.in/)
- Historical subject marks (2023–2025 papers): [GO Classes analysis](https://www.goclasses.in/blog/a-strategic-analysis-of-subject-wise-weightage-trends-in-gate-cse-2023-2025)
- Past questions: [GATE Overflow](https://gateoverflow.in/previous-years) (subject pages confirmed via archived copies; the live site blocks automated checks)

The only data the site saves is roadmap ticks, in your browser's `localStorage`.
