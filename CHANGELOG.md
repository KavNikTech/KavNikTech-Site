# Changelog

Notable changes to the KavNik Technologies website repository are recorded here.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/). Dates use ISO-8601 (YYYY-MM-DD).

## [Unreleased]

### Added

- `CHANGELOG.md` (this file), root `SECURITY.md`, and README maintenance / structure updates.
- `sitemap.xml` entries for Android Terms of Service and all public iOS app pages.
- **RFC 9116** — [`.well-known/security.txt`](.well-known/security.txt) for machine-readable security contact on the live site.

## [2026-04-04]

### Added

- **`apps/time-date-calc-aviation-ios/`** — App overview, learn, demo, privacy policy, and terms of service for *Time & Date Calc - Aviation* (iPhone & iPad), consistent with the native SwiftUI product.
- **Apps listing & home** — Distinct Android vs iOS cards for the time/date suite; full-width row for Cogno Reflex; hero and about copy updated for App Store availability.
- **Cross-links** — Android app overview and learn page link to the iOS hub where helpful.
- **CSS** — `.app-platform-label`, `.nk-app-suite-heading`, `.app-card-span-2` in `assets/css/styles.css`.
- **`.cursorrules`** — Project rule: do not run `git push` unless explicitly requested.

### Changed

- Removed “iOS coming soon” style messaging in favor of live iOS product links on `index.html`, `about.html`, `apps/index.html`, and `apps/smart-time-date-calculator/index.html`.
