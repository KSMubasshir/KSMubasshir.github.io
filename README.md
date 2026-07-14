# ksmubasshir.github.io

Personal academic website of **Kazi Samin Mubasshir** — Ph.D. candidate, Department of Computer Science, Purdue University. Migrated from Google Sites (ksmubasshir.com) to a static GitHub Pages site.

## Structure

```
index.html                  Home (about, research interests, news, artifacts)
publications.html           Publications
cv.html                     CV (inline PDF viewer + download)
academic-services.html      Reviewing, AEC, mentoring
education-employment.html   Education & employment history
awards-and-honors.html      Awards and honors
assets/style.css            Shared stylesheet (navy/teal theme)
```

## Two things to add after cloning

1. **Profile photo** — drop your headshot at `assets/profile.jpg` (square, ~400×400+). Until then, the page falls back to the Google-hosted image, which may eventually expire.
2. **CV PDF** — drop `kazi_academic_cv.pdf` into `assets/` so the inline viewer and download button on the CV page work. The "View on Google Drive" button works regardless.

## Deploying on GitHub Pages

If this repo is named `KSMubasshir.github.io`, Pages serves it automatically at
`https://ksmubasshir.github.io` once you enable **Settings → Pages → Deploy from branch → main / (root)**.

To point your custom domain at it, add a `CNAME` file containing `www.ksmubasshir.com` and update your DNS (CNAME record for `www` → `ksmubasshir.github.io`).

## Local preview

```bash
python3 -m http.server 8000
# open http://localhost:8000
```

No build step — plain HTML/CSS.
