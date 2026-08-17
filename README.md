# 加州駕駛筆試練習 · California DMV Knowledge Test Practice (Chinese)

A phone-friendly practice app for the California Class C driver's licence written
test, in Traditional and Simplified Chinese. When you answer wrong it tells you
**why that answer was wrong**, gives the correct one, and cites the page of the
official Chinese handbook it came from.

Plain HTML, CSS and JavaScript. No build step, no dependencies, no server-side
code, no tracking. Everything is stored in the browser's `localStorage`.

## Running it locally

```bash
python -m http.server 8123
```

Then open <http://127.0.0.1:8123>.

To use it on a phone on the same WiFi, find your computer's local IP
(`ipconfig` on Windows) and open `http://<that-ip>:8123` on the phone — but see
Deploying below for the option that doesn't need your laptop switched on.

## Deploying to a public URL (GitHub Pages)

The repo is already initialised and committed. To publish:

```bash
gh repo create dmv-practice --public --source=. --push
```

Then enable Pages — Settings → Pages → Source: *Deploy from a branch* →
branch `main`, folder `/ (root)` → Save. The site appears at
`https://<your-username>.github.io/dmv-practice/` within a minute or two.

Without the `gh` CLI: create an empty repo on github.com, then

```bash
git remote add origin https://github.com/<your-username>/dmv-practice.git
git push -u origin main
```

and enable Pages the same way.

Any static host works equally well — Netlify, Cloudflare Pages, Vercel — since
there is nothing to build.

## Modes

| Mode | What it does |
| --- | --- |
| 模擬考試 | 46 random questions, 38 correct to pass — the real first-time-applicant format |
| 續期模擬 | 18 questions, 15 to pass — the renewal format |
| 練習模式 | Every question in the bank, with an explanation immediately after each answer |
| 錯題本 | Only questions previously missed; a question leaves after two consecutive correct answers |
| 官方樣題 | DMV's four published sample tests, wording and choice order exactly as published |

Exam modes withhold all feedback until the end, like the real test. Practice
modes explain as you go.

## The question bank

120 questions in `data/`:

- **40 official** (`official.js`) — every question from DMV's four Chinese
  sample tests, Traditional text **verbatim**. Two of them repeat earlier ones,
  so they carry `dupeOf` and are kept out of the shuffled pool while still
  appearing in their own sample test. That leaves 118 in the pool.
- **80 handbook-derived** (`handbook-1.js` … `handbook-4.js`) — written from the
  Chinese handbook to cover topics the samples underweight: right-of-way,
  bicycles and motorcycles, DUI limits, lane markings, freeway merging, school
  and work zones, adverse conditions, insurance and registration.

Every question carries both scripts, a rationale, a one-line explanation for
**each** wrong choice, and a handbook page number.

### Where the answers come from

DMV does not publish an answer key — the sample-test pages grade server-side and
reveal nothing. Answers here were derived from the Chinese handbook and
cross-checked against DMV's **English** editions of the same four tests.

That cross-check mattered. The English and Chinese editions list the choices in
**different orders**, so answers are matched by content, never by position. It
also surfaced a translation defect: English test 1 question 1 asks *"When is it
legal to **drive off the road** to pass another vehicle?"* while the Chinese
edition drops "off the road", which makes the question look ambiguous. The
explanation for `official-t1-q1` points this out.

### Simplified Chinese

Written by hand, not machine-converted. DMV's Chinese uses Hong Kong register
that differs from mainland usage as *vocabulary*, not just glyphs — 行車線/车道,
泊車/停车, 腳踏車/自行车, 煞車/刹车, 訊號燈/信号灯. A glyph-level conversion
would produce "行车线", which reads wrong. **Traditional is authoritative**;
never regenerate it from the Simplified.

### Editing questions

Data lives in `data/*.js`, one `Q({...})` call per question. After any edit open
`tools/validate.html` in a browser — it checks that every `answer` index is in
range, both scripts are present with matching choice counts, `whyWrong` has an
entry per wrong choice and `null` at the answer, page numbers are within 1–92,
and no two pool questions are identical. It needs no tooling beyond a browser.

## Handbook text

`tools/handbook.txt` is the extracted Chinese handbook with page markers, used to
verify the citations. Page numbers in the app are the **printed** page numbers
shown on the handbook page itself, which run 6 lower than the PDF page numbers.

To regenerate it, download the PDF from
<https://www.dmv.ca.gov/portal/file/california-driver-handbook-chinese-pdf/> and:

```bash
bash tools/extract-handbook.sh tools/handbook.pdf tools/handbook.txt
```

Needs `pdftotext` (poppler). The PDF is AES-256 encrypted with an empty user
password, which pdftotext opens without any special handling.

## Accuracy and limits

This is an unofficial study aid. Answers are the author's reading of the
handbook, not DMV's answer key, which is why every explanation cites a page you
can check. The app says as much in its footer. Two questions are worth knowing
about:

- `official-t2-q1` (motorised wheelchair in the crosswalk) and `official-t4-q9`
  (pedestrian still crossing on a flashing DON'T WALK) both hinge on how far a
  driver must wait — until the pedestrian is clear of your path, or fully across.
  The handbook establishes the duty to yield but doesn't crisply settle the
  boundary. The answers given follow the handbook's own wording in each section.

If the real test disagrees with anything here, the real test is right.

## Licence and attribution

Question text from the four sample tests and material drawn from the *California
Driver's Handbook* are © California Department of Motor Vehicles, licensed
CC BY-NC 4.0 for non-commercial educational use. This app is a non-commercial
study aid and is not affiliated with or endorsed by the California DMV.
