# 加州駕駛筆試練習 · California DMV Knowledge Test Practice

A phone-friendly practice app for the California Class C driver's licence written
test, in **Traditional Chinese, Simplified Chinese, and English** — switchable at
any time, including mid-question. When you answer wrong it tells you **why that
answer was wrong**, gives the correct one, and cites the handbook page it came
from.

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

## Deployed

Live at <https://luisguan.github.io/dmv-practice/>, served by GitHub Pages from
`main` at the repo root. To publish a change:

```bash
git push
```

Pages rebuilds within a minute or two. There is no build step and no Actions
workflow — the files in the repo are exactly what is served. Any other static
host (Netlify, Cloudflare Pages, Vercel) would work the same way.

All asset paths are relative, so the site works from the `/dmv-practice/`
subpath. Do not change them to absolute `/…` paths — that would break it.

### Bump `?v=` when you change js/, css/ or data/

Every asset in `index.html` is referenced with a `?v=N` query string. **Increment
it on every deploy that touches those folders.**

GitHub Pages serves `Cache-Control: max-age=600`, so a returning visitor can
receive the new `index.html` while still holding stale `.js` files from cache.
That mix genuinely breaks the app — it is how `EN is not defined` happened on the
first English deploy: new HTML loaded the new `data/en-*.js`, but `data/bank.js`
came from cache without the `EN()` function, and English silently rendered empty.

Versioned URLs prevent it. Each cached `index.html` points at one complete
generation of assets, so an old visitor gets a consistent old app, and the entire
set flips together when the HTML refreshes. As a second line of defence, the app
falls back to Traditional Chinese for any language field that is missing, so a
half-updated load degrades to the wrong language rather than a blank screen.

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

## Question sources

The home screen has a **Question sources** setting with three checkboxes. Each
question is tagged with where it came from, and the mock exam, renewal exam,
practice, and review modes draw only from the ticked sources. (Official samples
mode always shows the real sample tests regardless of the setting.)

| Source | Count | Default |
| --- | --- | --- |
| DMV official samples | 38 | on |
| Your question bank | 166 | on |
| Written by this app from the handbook | 80 | **off** |

Turning every source off is not possible -- clearing the last one re-enables the
DMV samples rather than leaving an empty app.

## The question bank

286 questions in `data/`:

- **40 official** (`official.js`) — every question from DMV's four Chinese
  sample tests, Traditional text **verbatim**. Two of them repeat earlier ones,
  so they carry `dupeOf` and are kept out of the shuffled pool while still
  appearing in their own sample test. That leaves 284 in the pool overall.
- **166 from the user-supplied bank** (`provided-1.js` … `provided-5.js`,
  `provided-signs.js`) — the rules tested by a question bank supplied by the
  user, each answer checked against the handbook and carrying its page. These
  use `P()`, a compact authoring form, and carry a rationale and citation but no
  per-distractor explanation.
- **80 handbook-derived** (`handbook-1.js` … `handbook-4.js`) — written from the
  Chinese handbook to cover topics the samples underweight: right-of-way,
  bicycles and motorcycles, DUI limits, lane markings, freeway merging, school
  and work zones, adverse conditions, insurance and registration.

### What was rejected from the supplied bank

Of 246 parsed questions, 80 did not make it in:

- **Three answers contradicted the handbook** and were dropped: a left turn from
  a one-way street placed in the *right* curb lane (p.22 says far-left), a
  tailgater answered by *slowing down* (p.57 says maintain your speed, then
  merge right), and two sets of double yellow lines described as impassable
  "for any reason" (p.13 permits designated openings). Two of those also
  contradicted other questions in the same bank.
- **Two were inconsistent**: a school bus answer requiring the bus to resume
  motion (p.51 ends the duty when the lights stop flashing), and a tire blowout
  answered with "use the brakes lightly" (p.68 prescribes easing off the
  accelerator and warns braking can cause a loss of control).
- **Around ten could not be cited to the handbook**, including the Class C
  three-axle/6,000 lb rule (true under CVC 12804.9, simply not in the handbook),
  a 35 mph hydroplaning threshold, and "BAC of 0.02% doubles your chances".
- **One conflicted with DMV's own sample answer** on how long to wait for a
  pedestrian after a flashing DON'T WALK -- the same question already flagged
  under Accuracy and limits below.
- **The rest were duplicates.** The bank asked about flashing yellow lights six
  times and fog headlights four times.

### Sign questions

26 questions showed a sign image and asked what it meant, so their text alone
was useless. `data/signs.js` draws 19 signs as inline SVG -- the 26 collapse
because several asked about the same sign -- and the artwork appears on the
**question** side. Traffic control devices are standard government designs, so
drawing them keeps the app offline-capable, crisp at any text size, and free of
any external image host. Each SVG carries an `aria-label` describing its
*appearance* only; describing its meaning would give the answer away.

Every question carries all three languages, a rationale, and a handbook page
number. The official and handbook questions additionally carry a one-line
explanation for **each** wrong choice; the supplied bank does not, so its
feedback card shows the choice picked, the correct answer with its rationale,
and the citation.

English lives in separate overlay files (`en-official.js`, `en-handbook-1.js`,
`en-handbook-2.js`) that attach to a question by id via `EN()`. Keeping it apart
from the Chinese means editing one can never disturb the other — and the
verbatim Chinese, which is the harder thing to reconstruct, stays untouched.

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

### The three languages

All three list the choices **in the same order**, because a single `answer` index
is shared across them. DMV's own English and Chinese editions order the choices
*differently*, so the English text here is reordered to match the Chinese. Never
restore DMV's English ordering without also remapping `answer` — the validator
checks the counts but cannot catch a silent reordering.

**English** for the 40 official questions is DMV's own wording, verbatim,
including its typos ("with 5 days", "Occuring"). The 80 handbook questions follow
the English handbook's terminology.

**Simplified Chinese** was written by hand, not machine-converted. DMV's Chinese
uses Hong Kong register that differs from mainland usage as *vocabulary*, not
just glyphs — 行車線/车道, 泊車/停车, 腳踏車/自行车, 煞車/刹车, 訊號燈/信号灯. A
glyph-level conversion would produce "行车线", which reads wrong.
**Traditional is authoritative**; never regenerate it from the Simplified.

### Editing questions

Chinese lives in `data/handbook-*.js` and `data/official.js`, one `Q({...})` call
per question. English lives in `data/en-*.js`, one `EN(id, {...})` call per
question. After any edit open `tools/validate.html` in a browser — it checks that
every `answer` index is in range, all three languages are present with matching
choice counts, `whyWrong` has an entry per wrong choice and `null` at the answer,
page numbers are within 1–92, no `EN()` call points at a missing id, and no two
pool questions are identical. It needs no tooling beyond a browser.

## Handbook text

`tools/handbook.txt` (Chinese) and `tools/handbook-en.txt` (English) are the
extracted handbooks with page markers, used to verify the citations.

Page numbers in the app are the **printed** page numbers shown on the page
itself, which run 6 lower than the PDF page numbers. The English and Chinese
handbooks are **paginated identically** — every cited page was checked in both —
so one page number serves all three languages.

To regenerate, download the PDFs from
<https://www.dmv.ca.gov/portal/file/california-driver-handbook-chinese-pdf/> and
<https://www.dmv.ca.gov/portal/file/california-driver-handbook-pdf> then:

```bash
bash tools/extract-handbook.sh tools/handbook.pdf tools/handbook.txt
```

```bash
bash tools/extract-handbook.sh tools/handbook-en.pdf tools/handbook-en.txt
```

Needs `pdftotext` (poppler). The PDFs are AES-256 encrypted with an empty user
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
