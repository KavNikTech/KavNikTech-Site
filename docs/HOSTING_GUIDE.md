# How to Host Your KavNik Technologies Website

You have a **domain from Zoho** and a **static website** (HTML, CSS, JS). Here’s how to host the site and connect your domain.

---

## Option A: Netlify (recommended, free)

Netlify is free for static sites and works well with a custom domain.

### 1. Put your site on Netlify

**Option 1 – Drag and drop (no Git needed)**

1. Go to [netlify.com](https://www.netlify.com) and sign up (free).
2. In the dashboard, open **“Sites”** → **“Add new site”** → **“Deploy manually”**.
3. **Drag and drop** your project folder (`KavNikTech_Site` – the one that contains `index.html`, `assets/`, etc.) into the upload area.
4. Netlify will build and give you a URL like `random-name-123.netlify.app`. Your site is live.

**Option 2 – With Git (GitHub/GitLab)**

1. Push your project to a GitHub (or GitLab) repository.
2. In Netlify: **Add new site** → **Import an existing project** → connect GitHub and choose the repo.
3. Set **Build command** to empty and **Publish directory** to `/` (or the folder that contains `index.html`).
4. Deploy. Netlify will give you a `*.netlify.app` URL.

### 2. Connect your Zoho domain

1. In Netlify: **Site settings** → **Domain management** → **Add custom domain**.
2. Enter your domain (e.g. `kavniktech.com` or `www.kavniktech.com`) and follow the steps.
3. Netlify will show you what DNS records to add.

### 3. Set DNS at Zoho

1. Log in to **Zoho** (where you bought the domain).
2. Open **Domain** / **DNS** management for your domain.
3. Add the records Netlify asked for. Usually:

   **For root domain (e.g. kavniktech.com):**

   - Type: **A**  
     Name: `@` (or leave blank)  
     Value: `75.2.60.5` (Netlify’s load balancer – confirm in Netlify’s instructions)

   **For www (e.g. www.kavniktech.com):**

   - Type: **CNAME**  
     Name: `www`  
     Value: `your-site-name.netlify.app` (from Netlify)

4. Save. DNS can take from a few minutes up to 24–48 hours to update.

### 4. HTTPS

In Netlify, go to **Domain settings** → **HTTPS** and enable **Let’s Encrypt**. Netlify will issue a free SSL certificate so your site is served over `https://`.

---

## Option B: Vercel (free)

1. Go to [vercel.com](https://vercel.com) and sign up.
2. **Add New** → **Project** → import from Git or upload your folder.
3. Deploy. You get a `*.vercel.app` URL.
4. **Settings** → **Domains** → add your Zoho domain.
5. In Zoho DNS, add the A and CNAME records Vercel shows you.

---

## Option C: GitHub Pages (free)

1. Create a GitHub account and a repository (e.g. `kavniktech-website`).
2. Upload your site files (the folder with `index.html`, `assets/`, etc.) to the repo.
3. **Settings** → **Pages** → Source: **Deploy from a branch** → branch `main` (or `master`) → folder `/ (root)` → Save.
4. Your site will be at `https://yourusername.github.io/repo-name/`.
5. For a custom domain: in **Pages** settings, set **Custom domain** to your Zoho domain (e.g. `www.kavniktech.com`). Then in Zoho DNS add the records GitHub shows (usually A records and a CNAME for `www`).

---

## Option D: Zoho Sites (if you use Zoho)

If you use **Zoho Sites** (Zoho’s website builder):

- You typically build the site inside Zoho; it’s not ideal for “uploading” this exact HTML/CSS/JS project as-is.
- For **this** static site, Options A–C above are better: host the files on Netlify/Vercel/GitHub and only **point your Zoho domain** to that host via DNS (as in the steps above).

---

## Summary: Easiest path with your Zoho domain

1. **Host the site** on Netlify (drag-and-drop or Git).
2. In Netlify, add your domain (e.g. `kavniktech.com` and `www.kavniktech.com`).
3. In **Zoho**, open DNS for that domain and add the A and CNAME records Netlify gives you.
4. Wait for DNS to propagate, then your site will be live at your domain with free HTTPS.

If you tell me your exact domain (e.g. `kavniktech.com` or something else), I can tailor the DNS steps for that name.
