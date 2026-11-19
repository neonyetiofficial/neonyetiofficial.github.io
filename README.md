# Neon Yeti — website

Static site for the indie studio **Neon Yeti** (plain HTML/CSS + a tiny JS language switch, no build step).
Hosted on GitHub Pages.

| Path | Content |
|------|---------|
| `index.html` | Home: studio intro, games, contact |
| `microsurvivor/` | MicroSurvivor game page |
| `microsurvivor/privacy/` | MicroSurvivor privacy policy (TR + EN) — the URL for Google Play Console |
| `app-ads.txt` | Ad network authorization (paste lines from the LevelPlay / Unity dashboard) |
| `assets/` | `style.css`, `lang.js`, `logo.svg` |

## Languages
Every text exists in the HTML for each language and carries `data-l="tr"`, `data-l="en"` or `data-l="de"`.
`assets/lang.js` picks the language (`?lang=tr` in the URL → saved choice → browser language → English)
and CSS hides the others. Without JavaScript the English text is shown.
The privacy policy is TR + EN; German visitors see the English version with a note.

## To do
- Paste the real `app-ads.txt` lines.
- Add the Google Play badge + link in `microsurvivor/index.html` once the game is live (see the TODO comment).
- Replace the screenshot placeholders (`microsurvivor/index.html`) with real images.

## Local preview
Open `index.html` in a browser, or run `python -m http.server` in this folder and open http://localhost:8000.
