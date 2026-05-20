# KavNik Technologies — Website

Static website for [KavNik Technologies](https://www.kavniktech.com) (software for iOS, iPadOS, Android, and related platforms).

---

## Project structure

```
KavNikTech-Site/
├── index.html                 # Home
├── about.html
├── contact.html
├── privacy.html
├── 404.html
├── README.md                  # This file
├── CHANGELOG.md               # Release-style change history
├── SECURITY.md                # How to report security issues
├── robots.txt
├── app-ads.txt                # AdMob / IAB app-ads seller verification (do not remove)
├── sitemap.xml
├── .well-known/
│   └── security.txt          # RFC 9116 — security contact on the live site
├── netlify.toml
│
├── apps/
│   ├── index.html             # Apps listing (use this URL in links — see below)
│   ├── cogno-reflex.html
│   ├── smart-time-date-calculator/   # Android · Time & Date Calculator (Google Play)
│   │   ├── index.html
│   │   ├── learn.html
│   │   ├── demo.html
│   │   ├── privacy.html
│   │   └── terms-of-service.html
│   ├── time-date-calc-aviation-ios/  # iOS · Time & Date Calc - Aviation (App Store)
│   │   ├── index.html
│   │   ├── learn.html
│   │   ├── demo.html
│   │   ├── privacy.html
│   │   └── terms-of-service.html
│   └── expenses-ios/           # iOS · Expenses Tracker & Splitter (App Store)
│       ├── index.html
│       ├── learn.html
│       ├── demo.html
│       ├── privacy.html
│       └── terms-of-service.html
│
├── assets/
│   ├── css/styles.css
│   ├── js/scripts.js
│   └── images/                # logos, app icons (incl. time-date-calc-aviation-ios-icon.png, expenses-ios-icon.png)
│
└── docs/
    ├── HOSTING_GUIDE.md
    ├── SECURITY_CHECK.md
    └── README_ASSETS_AND_COPY.txt
```

**Linking note:** Use `apps/index.html` (not bare `apps/`) for the apps page so it opens correctly from disk and from the server (see `.cursorrules`).

---

## Maintenance & history

| Artifact | Purpose |
|----------|---------|
| [CHANGELOG.md](CHANGELOG.md) | Notable site and repo changes (Keep a Changelog style). |
| [SECURITY.md](SECURITY.md) | Where and how to report security issues. |
| [docs/SECURITY_CHECK.md](docs/SECURITY_CHECK.md) | Internal checklist for static-site safety. |
| [sitemap.xml](sitemap.xml) | SEO: canonical URLs for crawlers (update when you add pages). |
| [robots.txt](robots.txt) | Crawler hints and sitemap location. |
| [app-ads.txt](app-ads.txt) | AdMob / IAB app-ads seller verification at `/app-ads.txt` (keep deployed; do not delete). |
| [`.well-known/security.txt`](.well-known/security.txt) | Security contact for researchers (served at `/.well-known/security.txt` in production). |

---

## Local preview

Open `index.html` in a browser, or serve the folder with a local HTTP server so all relative links behave like production.

Example:

```bash
python3 -m http.server 8080
```

Then open `http://127.0.0.1:8080/`.

**Theme:** By default the site follows your system/browser light or dark preference. Use the moon / sun / half-moon control in the header to cycle **Automatic (device)** → **Light** → **Dark**; your choice is saved in the browser.

---

## Hosting & deployment

See **[docs/HOSTING_GUIDE.md](docs/HOSTING_GUIDE.md)** for Netlify, domain (e.g. Zoho), and deployment notes.

**AdMob / `app-ads.txt`:** Google may verify **`https://kavniktech.com/app-ads.txt`** (apex), not only `www`. If AdMob fails but `www` works in a browser, check **HTTPS on the apex host** and DNS—see [AdMob and apex (`app-ads.txt`)](docs/HOSTING_GUIDE.md#admob-and-apex-app-adstxt) in the hosting guide.

**Do not edit `_redirects` in this repo** unless you fully understand Netlify’s redirect rules (see `.cursorrules`).

---

## Adding a new app section

1. Add HTML under `apps/` (folder or single file), following an existing app as a template.
2. Link it from `apps/index.html` and from the home page app grid in `index.html` if it should appear there.
3. Add canonical URLs to `sitemap.xml`.
4. Summarize the change in `CHANGELOG.md` under `[Unreleased]` or a dated section.
