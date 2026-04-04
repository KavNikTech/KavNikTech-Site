# Security policy

This repository is a **static website** (HTML, CSS, and JavaScript). There is no application server or database in this repo; production content is served over HTTPS (for example via Netlify).

## Machine-readable contact

Security scanners and researchers can read **[`.well-known/security.txt`](https://www.kavniktech.com/.well-known/security.txt)** on the live site (RFC 9116).

## Reporting a vulnerability

If you believe you have found a **security issue** affecting this site (for example broken access controls on hosting, sensitive data exposed in the repository, or a client-side vulnerability in our scripts), please report it responsibly:

- **Email:** [support@kavniktech.com](mailto:support@kavniktech.com?subject=Security%20report%20%E2%80%94%20kavniktech.com)

Include enough detail to reproduce or assess the issue (URLs, steps, screenshots if useful). Do **not** open a public GitHub issue for undisclosed security reports.

We will acknowledge receipt when we can and work with you on a fix and disclosure timeline where applicable.

## Scope

- In scope: this website’s published pages, assets in this repo, and hosting configuration you can infer from public behavior.
- Out of scope: third-party services (Formspree, DNS, Apple/Google store policies) except where our integration is clearly at fault; unrelated KavNik apps are separate codebases unless the report is about **links or copy on this site only**.

## References

- Periodic checklist for this codebase: [docs/SECURITY_CHECK.md](docs/SECURITY_CHECK.md)
