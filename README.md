# Vataj Transport LLC website

Website for Vataj Transport LLC, a car hauling company based in Putnam County, New York: https://vatajtransport.com

It's a single static page built with plain HTML, CSS and a little JavaScript, so there's no build step. To preview it, open `index.html` in a browser. To publish it, upload these files to any static host (GitHub Pages, Netlify, Cloudflare Pages, etc.).

## Still to fill in

Search `index.html` for `[` to find each one.

| Placeholder | What to put |
|---|---|
| `[NUMBER]` | USDOT number (shown on the door-lettering panel and in the footer) |
| `[INSURANCE CARRIER]`, `[COVERAGE DETAILS]` | Insurer name and the coverage you want to advertise |
| `[REVIEW TEXT]`, `[CUSTOMER NAME]`, `[REVIEW SOURCE]` | Real reviews only. Delete the reviews block until you have some |
| `[PHOTO OF YOUR TRUCK…]` | Replace the dashed box with a real photo (see the comment above it) |
| `[A FEW SENTENCES…]` | A short paragraph in your own words for the "Who you're dealing with" section |
| `[FORMSPREE_FORM_ID]` | See below |

## Quote form (Formspree)

1. Create a free account at formspree.io, click **New Form**, and set it to send to vatajxf@mailbox.org.
2. Copy the form ID, which is the part after `/f/` in the endpoint (e.g. `https://formspree.io/f/abcdwxyz`).
3. In `index.html`, replace `[FORMSPREE_FORM_ID]` with that ID.
4. Send a test request from the live site.

Until the ID is filled in, the form shows "Form not connected yet" and doesn't submit.

## Domain

The site works at both `vatajtransport.com` and `www.vatajtransport.com`. The page tells search engines that `https://vatajtransport.com/` (without www) is the main address. In your host or DNS settings, set `www` to **redirect** to `vatajtransport.com` so there's only one version.

## Files

- `index.html`: the page, plus its search, social-sharing and business-listing info
- `styles.css`: all styles
- `main.js`: quote form submission, earliest-date check, footer year
- `img/`: logos (navy horizontal, white horizontal, navy mark)
- `favicon.svg`, `favicon.ico`, `apple-touch-icon.png`, `icon-192.png`, `icon-512.png`, `site.webmanifest`: browser and phone icons
- `og-image.png`: preview image shown when the link is shared
- `robots.txt`, `sitemap.xml`

The full brand kit (business cards, vehicle decals, brand guide, fonts) isn't in this repo.
