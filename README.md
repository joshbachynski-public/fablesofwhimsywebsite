# Fables of Whimsy — website

A brand-first, visually-led site for **Fables of Whimsy**, a bookish collective
hosting brunch & bookstore crawls, whimsical workshops, a candlelit book club,
and enchanted literary events. Aesthetic: **magic meets art nouveau**.

Built as a plain static site — **no build step, no frameworks**. It runs by
opening a file, and deploys free on GitHub Pages.

---

## Pages

| File | What it is |
| --- | --- |
| `index.html` | Home — the breathtaking art-nouveau hero, offerings, feature, newsletter |
| `about.html` | The story of the collective |
| `events.html` | The calendar — auto-lists upcoming events (and a "gatherings past" archive) |
| `event.html?e=<slug>` | A single event's page — details + Eventbrite button |

Everything is styled from one stylesheet: `assets/css/style.css`.

---

## See it locally

Just open `index.html` in a browser. For the events pages to work best
(they read a small JS data file), serve the folder over http:

```bash
# from inside this folder
python3 -m http.server 8080
# then visit http://localhost:8080
```

---

## Add your logo & photos (30 seconds)

1. **Logo** — replace `assets/logo/fables-logo.svg` with your real logo
   (keep the filename). See `assets/logo/README.txt`.
2. **Photos** — drop your images into `assets/img/` using the filenames in
   `assets/img/README.txt`. Until you do, the site shows painted backdrops in
   your palette, so it never looks empty.

---

## Add or edit an event (the only file you touch)

Open **`assets/js/events-data.js`**, copy one `{ … }` block, paste it into the
list, and fill in the blanks. The events calendar and the event's own page
update automatically. Field guide is at the top of that file.

- **Tickets not on sale yet?** Leave `eventbrite: ""` → the button shows
  *"Tickets coming soon."*
- **Tickets live?** Paste the full Eventbrite URL into `eventbrite:` →
  a gold **"Get Tickets on Eventbrite"** button appears and the card gets a
  *"Tickets Live"* badge.
- Events automatically move from **Upcoming** to the **archive** once their
  date passes.

---

## Newsletter signup

The signup forms are wired for visual completeness (they show a friendly
confirmation). To actually collect addresses, connect the `<form>` to your
provider — Mailchimp, Buttondown, ConvertKit, etc. Search the `.html` files
for `id="newsletter"` and drop in your provider's embed / form action.

Update the **Instagram** handle and **email** in the footer of each page
(search for `fablesofwhimsy` and `hello@fablesofwhimsy.com`).

---

## Deploy on GitHub Pages (free)

1. Push this folder to the repo (it can live at the repo root).
2. On GitHub: **Settings → Pages → Build and deployment → Source: Deploy from
   a branch**, pick your branch and `/ (root)`, **Save**.
3. Your site goes live at `https://<user>.github.io/<repo>/` in a minute or two.
   (A `.nojekyll` file is included so Pages serves everything as-is.)

Using a custom domain later? Add a `CNAME` file with your domain and point
DNS at GitHub Pages.

---

## Brand notes

- **Palette** and **fonts** are defined as CSS variables at the top of
  `assets/css/style.css` — change them in one place.
- Fonts load from Google Fonts (Cinzel, Cinzel Decorative, EB Garamond,
  Marcellus, Tangerine).
- All ornamentation (arch, dividers, flourishes, icons) is hand-drawn inline
  SVG — infinitely crisp, no image files, fully recolourable.

Made with candlelight & coffee. ✦
