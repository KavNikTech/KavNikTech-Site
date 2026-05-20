# Changelog

Notable changes to the KavNik Technologies website repository are recorded here.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/). Dates use ISO-8601 (YYYY-MM-DD).

## [Unreleased]

### Added

- **`apps/expenses-ios/`** — App overview, learn, demo (coming soon), privacy, and terms for *Expenses Tracker &amp; Splitter* (iPhone &amp; iPad); hub-area feature detail from the Swift project; cross-link with *Time &amp; Date Calc - Aviation*.
- **`assets/images/expenses-ios-icon.png`** — App icon asset for site cards and Open Graph.
- **`sitemap.xml`** — URLs for `apps/expenses-ios/` pages (including learn and demo).
- **`docs/HOSTING_GUIDE.md`** — [AdMob and apex (`app-ads.txt`)](docs/HOSTING_GUIDE.md#admob-and-apex-app-adstxt): how to verify `https://kavniktech.com` vs `www` with `curl`, and Netlify/DNS steps when apex HTTPS fails while `www` works.
- **`app-ads.txt`** (root) — Restored for AdMob seller verification; Netlify redirect/headers for `/app-ads.txt` and explicit `Google-adstxt` allow in `robots.txt`.
- **`assets/images/time-date-calc-aviation-ios-icon.png`** — Distinct icon for *Time &amp; Date Calc - Aviation* on iOS cards and app pages.
- **Theme behavior** — Default follows <code>prefers-color-scheme</code>; header control cycles Automatic → Light → Dark (see <code>assets/js/scripts.js</code>, <code>themePreference</code> in <code>localStorage</code>).
- `CHANGELOG.md`, `SECURITY.md`, README maintenance notes, extended `sitemap.xml`, and **RFC 9116** [`.well-known/security.txt`](.well-known/security.txt).

### Changed

- **`apps/index.html`**, **`index.html`** — List *Expenses* alongside *Cogno Reflex*; updated apps listing meta description.
- **`apps/time-date-calc-aviation-ios/index.html`** — “Also available” link to *Expenses Tracker &amp; Splitter (iOS)*.
- **`README.md`** — Project tree documents `apps/expenses-ios/`.
- **iOS app hub &amp; learn** — Richer overview (Fuel + Expense Splitter detail), history/Premium sections, <code>og:image</code>; learn TOC and step-by-step Fuel / Expense sections.
- **Android app hub, learn, Terms** — Fuel Calculator and Expense Splitter documented; Utilities order matches the app (Calculator, Time Zone, Countdown, Expense Splitter); Time Calculators list is Smart Time → Aviation → Fuel.
- **Public copy cleanup** — No package/bundle IDs or ad publisher lines on marketing pages; generic advertising wording where used; Play Store search links; generalized company <code>privacy.html</code> examples. (<code>app-ads.txt</code> was later restored for AdMob verification.)

## [2026-04-04]

### Added

- **`apps/time-date-calc-aviation-ios/`** — App overview, learn, demo, privacy policy, and terms of service for *Time & Date Calc - Aviation* (iPhone & iPad), consistent with the native SwiftUI product.
- **Apps listing & home** — Distinct Android vs iOS cards for the time/date suite; full-width row for Cogno Reflex; hero and about copy updated for App Store availability.
- **Cross-links** — Android app overview and learn page link to the iOS hub where helpful.
- **CSS** — `.app-platform-label`, `.nk-app-suite-heading`, `.app-card-span-2` in `assets/css/styles.css`.
- **`.cursorrules`** — Project rule: do not run `git push` unless explicitly requested.

### Changed

- Removed “iOS coming soon” style messaging in favor of live iOS product links on `index.html`, `about.html`, `apps/index.html`, and `apps/smart-time-date-calculator/index.html`.
