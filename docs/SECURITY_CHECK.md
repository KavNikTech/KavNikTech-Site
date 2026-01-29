# Security Check Summary

**Last checked:** Current codebase (static site, no backend)

---

## ✅ What’s in good shape

| Area | Status |
|------|--------|
| **No `innerHTML` / `document.write`** | All dynamic text uses `textContent` (e.g. form errors), so no client-side XSS from injected HTML. |
| **No hardcoded secrets** | No API keys, passwords, or tokens in the repo. Formspree form ID in the form action is meant to be public. |
| **Scripts** | Only local scripts (`assets/scripts.js`). No third-party script tags. |
| **Form submission** | Contact form posts to Formspree over HTTPS. Validation and error display use safe patterns. |
| **Links** | No `target="_blank"` without `rel="noopener noreferrer"` (none used yet). |
| **Dependencies** | No npm/node; plain HTML/CSS/JS, so no dependency vulnerabilities. |

---

## ⚠️ When you add or change things

1. **Real Google Play / external links**  
   If you use `target="_blank"` (open in new tab), add `rel="noopener noreferrer"` to the same `<a>` tag to avoid tab-nabbing and unnecessary referrer leakage.  
   Example:  
   `<a href="https://play.google.com/..." target="_blank" rel="noopener noreferrer">View on Play Store</a>`

2. **Formspree**  
   After you replace `YOUR_FORM_ID` with your real Formspree form ID, the form action URL will be public. That’s normal; Formspree is designed for that. Don’t put any secret keys in the HTML or JS.

3. **Hosting**  
   Use **HTTPS only** (Netlify/Vercel do this by default). Don’t serve the site over plain HTTP in production.

4. **User-generated content**  
   If you ever add comments, search, or anything that displays user input, sanitize or escape it and avoid `innerHTML` with raw user data to prevent XSS.

---

## Summary

No security issues found in the current static site. The main follow-ups are: use HTTPS when hosted, and when you add external links that open in a new tab, use `rel="noopener noreferrer"`.
