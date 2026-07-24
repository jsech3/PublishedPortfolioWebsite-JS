# Portfolio Website Update Documentation
**Date:** July 24, 2026
**Site:** https://jacksechler.me
**Repository:** https://github.com/jsech3/PublishedPortfolioWebsite-JS

---

## Summary of Changes Implemented Today

Focused update to the **About** page (new role, photo, bio, skills) and the
**Photos** gallery (removed 5 images). All changes are live and verified.

---

### 1. About Page — New Role & Bio ✅
`src/pages/about.astro`

- **Bio rewritten** to reflect the new role, in a plainer voice (dropped
  marketing phrasing like "passion for," "actionable insights"):
  > "Data Architect at Energy Recovery, currently leading a migration of the
  > company's core data systems to Azure and Microsoft Fabric. My background is
  > in business intelligence and analytics, and most of my work comes down to
  > making messy data something a team can actually rely on."
- **Professional Experience** updated:
  - Added **Data Architect at Energy Recovery** — *2026 – Present* — "Rebuilding
    the company's data platform on Azure and Microsoft Fabric, moving core
    systems off legacy infrastructure."
  - **Business Analyst II at PG&E** closed out from *2025 – Present* to
    *2025 – 2026* (contract ended April 2026), description put in past tense.
  - Inventory Planner / Analyst at RH — unchanged.
- **SEO meta description** updated from "Business Analyst at PG&E…" to
  "Data Architect at Energy Recovery…"

**Note on Education:** the two Psychology entries (BA + BS, CU Boulder, 2020)
were confirmed intentional and left as-is.

---

### 2. About Page — Skills Chips ✅
`src/pages/about.astro`

Added, keeping all existing chips:
`Azure`, `Microsoft Fabric`, `ETL`, `Data Warehousing`, `Data Modeling`,
`Database Design`, `Data Migration`.

Full list is now: Power BI, SQL, Python, Node.js, Tableau, Excel, Docker,
JavaScript, Azure, Microsoft Fabric, ETL, Data Warehousing, Data Modeling,
Database Design, Data Migration.

*Open item:* Node.js / JavaScript / Docker read more "web dev" than "data
architect." Kept per request; candidates for trimming/reordering later.

---

### 3. About Page — New Portrait Photo ✅
`public/images/PortraitPhotoJS2026.jpg` (new file; `about.astro` `<img src>` updated)

- Replaced the B&W studio headshot with a new candid.
- Cropped from the **full-resolution original** (1320×2868 PNG in the Photos
  library), not the downscaled derivative, so it stays sharp.
- Framing was iterated several times to keep a clean 3:4 (the frame is
  `aspect-[3/4]` with `object-cover`); final crop is a wider **1160×1547** pull
  (roughly the widest this candid allows before the friend's arm and street
  dominate and the face shrinks).
- The previous B&W headshot (`public/images/PortraitPhotoJS.jpg`) was **left in
  place** unused, in case it's wanted back.

---

### 4. Photos Gallery — Removed Images ✅
`src/pages/photos.astro`

Removed 5 gallery entries (14 → 9 photos):

| Title | File |
|---|---|
| Bird Sanctuary Friend | `SedonaJackBird1.jpeg` |
| Culinary Adventures | `SedonaCooking.jpeg` |
| Beach Club Vibes | `NikkiBeach.jpeg` |
| Underwater World | `StMartinScuba2.jpeg` |
| NOLA Gardens | `NolaPark1.jpeg` |

Only the gallery **entries** were removed; the image files remain in
`public/images/` (unreferenced) and everything is in git history, so removals
are reversible.

---

### 5. Footer ✅
`src/layouts/Layout.astro`

Copyright bumped **© 2024 → © 2026**.

---

## Commits (this session, oldest first)

```
0ca0293  Update About page: new role, photo, bio, and skills
d8f827b  Refine About photo crop, rewrite bio, prune Photos gallery
f7a87f8  Plain-language the Energy Recovery experience bullet
1a29789  Reframe About portrait so the full head/face fits
32de292  Zoom out About portrait for a wider frame
0b5d83d  Zoom out About portrait further (wider crop)
666f993  Zoom out About portrait a little more
7758588  Zoom out About portrait a little more (near photo's width limit)
ab66ffc  Remove two more photos from the gallery
```

---

## Deployment Notes (how this repo ships)

- **Hosting:** Netlify. **Domain:** jacksechler.me (registered at Hostinger,
  nameservers delegated to Netlify DNS — `*.nsone.net`).
- **Auto-deploy:** push to `main` of `jsech3/PublishedPortfolioWebsite-JS` →
  Netlify runs a clean `npm ci` + `astro build` and publishes. Live within
  ~15–30s in this session.
- **Live source folder on disk:** `Github Project/portfolio-website/` (the other
  copies — `PublishedSiteJS3.24.25/` and `Archive/PublishedSiteJS/` — are stale
  snapshots pointed at the same remote; do not edit those).
- **Local build gotchas (this machine):**
  - The repo's `git remote` is SSH (`git@github.com:…`), but SSH auth was not
    available in this environment. Pushes went out over **authenticated HTTPS
    via the GitHub CLI** helper:
    `git -c credential.helper='!gh auth git-credential' push https://github.com/jsech3/PublishedPortfolioWebsite-JS.git main`
  - `npm run build` failed initially with an esbuild "installed for another
    platform" error because `node_modules` had been copied in. Fixed with
    `rm -rf node_modules/esbuild node_modules/@esbuild && npm install esbuild`.
    This does **not** affect Netlify (it installs clean). The resulting
    `package.json` / `package-lock.json` churn was reverted so commits stayed
    scoped to content.

---

## Verification

Each deploy was confirmed live by re-fetching the page and (for the photo)
matching the served `content-length` to the local file. Final state:
- About: new bio, Data Architect role, updated skills, 2026 footer — all live.
- Photos: 9 images, all 5 removed entries absent — live.
