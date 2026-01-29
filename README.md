# KavNik Technologies — Website

Static website for KavNik Technologies (software solutions for iOS, macOS, Android, watchOS).

---

## Project structure

```
KavNikTech_Site/
├── index.html              # Home
├── about.html              # About us
├── contact.html            # Contact form
├── privacy.html            # Privacy policy
├── README.md               # This file
│
├── apps/                   # Software solutions (individual app pages)
│   ├── index.html          # Apps listing
│   ├── smart-time-date-calculator/
│   │   ├── index.html
│   │   ├── demo.html
│   │   ├── learn.html
│   │   └── privacy.html
│   └── cogno-reflex.html
│
├── assets/
│   ├── css/
│   │   └── styles.css      # All styles
│   ├── js/
│   │   └── scripts.js      # All scripts
│   └── images/
│       ├── kavnik-technologies-logo.png
│       ├── smart-time-date-icon.png
│       └── cogno-reflex-icon.png
│
└── docs/                   # Guides and reference
    ├── HOSTING_GUIDE.md
    ├── SECURITY_CHECK.md
    └── README_ASSETS_AND_COPY.txt
```

---

## Local preview

Open `index.html` in a browser, or run a local server from this folder so links (e.g. `apps/`) work correctly.

---

## Hosting & updates

See **docs/HOSTING_GUIDE.md** for deployment (e.g. Netlify) and connecting your Zoho domain.

To add a new app: create a new HTML file in `apps/` (copy from `apps/smart-time-date-calculator.html`), then add a card linking to it in `apps/index.html` and in the home page app grid in `index.html`.
