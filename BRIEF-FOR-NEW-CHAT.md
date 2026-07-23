# Fables of Whimsy — project brief & handoff

> Paste this whole file (or just point at it) at the start of your next
> Claude Code session — the one opened **with `joshbachynski/fablesofwhimsywebsite`
> as the repository** — and it'll have the full context to continue instantly.

---

## The original request (verbatim)

> use this new repo to save it https://github.com/joshbachynski/fablesofwhimsywebsite
>
> i need a website for my bookish collective event-based business that holds
> brunch and bookstore crawls, bookish themed events, whimsical workshops,
> book club, and more. We need an about, an events calendar page which will
> list upcoming events with links to a page for each, link to our instagram,
> email, sign up for our newsletter. Each event page will have the details of
> the event and a link to the eventbrite page (if the tickets are up for sale).
> It needs to be pretty and visually engaging. We will eventually add our own
> photography but for now are using stock photos. Brand-effect and breathtaking
> style are more important than website functionality. The first thing they
> should think when they see it is "oh, pretty, wow!"
>
> Our aesthetic is **magic meets art nouveau**. I'm attaching our logo, a
> colour swatch, and some photos to use for the site that we've bought.

**Requested pages / features — all built:**
- [x] Home (breathtaking hero, "oh pretty wow" on load)
- [x] About
- [x] Events calendar listing upcoming events, each linking to its own page
- [x] Individual event pages with details + Eventbrite link (only shown when tickets are live)
- [x] Instagram link
- [x] Email link
- [x] Newsletter sign-up
- [x] Magic-meets-art-nouveau visual language throughout

---

## Why this was delivered as a bundle (important context)

The session where this was built was **scoped to a different repo (`hieb1`)**
and could not be re-scoped mid-session, so it could not push directly to
`fablesofwhimsywebsite`. It also could not read the attached logo/photos as
files (attachments came through as on-screen images only), and outbound image
downloads were blocked. So the site was built with:
- hand-drawn **inline-SVG** art-nouveau ornamentation (needs no image files), and
- **labelled image slots** you drop the real photos into.

**To finish cleanly:** open a **new** Claude Code session with
`joshbachynski/fablesofwhimsywebsite` selected as the repository, commit these
files, then add the real logo + photos (see below).

---

## Brand palette — "Dark Fantasy" (from the swatch)

These hex values are already set as CSS variables at the top of
`assets/css/style.css`. They were sampled from the swatch image; tweak to taste.

| Swatch name        | Hex (as used) |
| ------------------ | ------------- |
| Moonlit Ivory      | `#f4ebcb`     |
| Raven Black        | `#0a0a0c`     |
| Emerald Gaze       | `#0d3b2c`     |
| Gleaming Amethyst  | `#4b2d55`     |
| Starforged Silver  | `#7e8892`     |
| Ember Gray         | `#3a3832`     |
| Starfall Blue      | `#121a2e`     |
| Nighthade Purple   | `#22162a`     |
| Gilt gold (frames) | `#c6a15b` → `#e4c983` → `#8c6d34` (used as the metallic accent) |

> If you have the **exact** brand hex codes, update the `:root { … }` block in
> `assets/css/style.css` and the whole site recolours.

---

## The attached photos & where each is used

The site references these by filename in `assets/img/`. Drop the purchased
files in with these names and they appear automatically.

| Filename (expected)   | The photo you sent                                   | Used on |
| --------------------- | ---------------------------------------------------- | ------- |
| `tower-starfield.jpg` | Stone tower ruins, looking up at a starry night sky  | Home hero, Book Club event |
| `coffee-books.jpg`    | Two espresso cups beside an open book with blossoms  | About page, Brunch & Crawl event |
| `key-book.jpg`        | An antique key resting on the pages of an old book   | About page, Bookbinding Workshop event |
| `library-archway.jpg` | Grand candlelit library with a hidden brick archway  | Home feature, Masquerade event |

(You also sent the colour swatch itself — that's a reference, not used on the site.)

The **logo** ("fables 2 logo.svg") goes to `assets/logo/fables-logo.svg`
(replace the placeholder wordmark that's there now).

---

## What to tell the new session

Something like:

> "This repo has the Fables of Whimsy static site (see README.md and
> BRIEF-FOR-NEW-CHAT.md). I've added the real logo and photos to `assets/`.
> Please verify everything renders, swap in the real brand hexes if I give
> them, and set up GitHub Pages."

Placeholders and TODOs to finish, all noted in `README.md`:
- Replace logo + photos (drag-and-drop).
- Point the newsletter `<form>` at your email provider (Mailchimp/Buttondown/etc.).
- Update Instagram handle + email (currently `@fablesofwhimsy` /
  `hello@fablesofwhimsy.com`) in each page footer.
- Turn on GitHub Pages.

---

## File map

```
fables-of-whimsy/
├── index.html            Home
├── about.html            About / story
├── events.html           Events calendar (auto-lists from data file)
├── event.html            Single-event template (event.html?e=<slug>)
├── README.md             How to run, deploy, and add events
├── BRIEF-FOR-NEW-CHAT.md This file
├── .nojekyll             Lets GitHub Pages serve assets as-is
└── assets/
    ├── css/style.css     All styling + palette variables
    ├── js/
    │   ├── main.js           nav, scroll reveal, sticky header
    │   ├── events-data.js    ← THE ONLY FILE YOU EDIT TO ADD EVENTS
    │   └── events-render.js  paints the calendar + event pages
    ├── logo/             drop fables-logo.svg here (placeholder included)
    └── img/              drop the 4 photos here (see img/README.txt)
```
