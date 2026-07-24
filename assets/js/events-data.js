/* =====================================================================
   FABLES OF WHIMSY — EVENTS  (single source of truth)
   ---------------------------------------------------------------------
   TO ADD AN EVENT: copy one { … } block below, paste it into the list,
   and fill in the blanks. That's it — the Events page and each event's
   own page update automatically. No other file needs editing.

   FIELD GUIDE
   -----------
   slug        : url id, lowercase-with-dashes. The event's page is
                 event.html?e=<slug>   (must be unique)
   title       : event name
   category    : short label e.g. "Bookstore Crawl", "Workshop", "Book Club"
   date        : "YYYY-MM-DD"  (used for sorting + the calendar chip)
   endDate     : optional "YYYY-MM-DD" for multi-day events
   time        : freeform e.g. "10:00 AM – 1:00 PM"
   location    : venue / neighbourhood
   image       : path to hero photo, e.g. "assets/img/coffee-books.svg"
                 (leave "" to use a painted art-nouveau backdrop)
   excerpt     : one enticing sentence for the events grid
   body        : array of paragraphs (HTML allowed) for the detail page
   includes    : optional array of bullet strings ("what's included")
   price       : freeform e.g. "$45 per reader" or ""
   eventbrite  : FULL Eventbrite URL. Leave "" and the button becomes
                 "Tickets coming soon" automatically.
   ===================================================================== */

window.FABLES_EVENTS = [
  {
    slug: "moonlit-brunch-bookstore-crawl",
    title: "The Moonlit Brunch & Bookstore Crawl",
    category: "Brunch · Bookstore Crawl",
    date: "2026-08-16",
    time: "10:00 AM – 2:00 PM",
    location: "The Old Quarter — three independent bookshops",
    image: "assets/img/coffee-books.jpg",
    excerpt:
      "Espresso, pastries, and a guided wander through three enchanting independent bookshops — with a secret literary favour at each door.",
    price: "$48 per reader",
    eventbrite: "",
    includes: [
      "Welcome brunch board & bottomless coffee",
      "Guided crawl through three curated bookshops",
      "A sealed 'blind date with a book' at every stop",
      "A pressed-flower bookmark to keep",
    ],
    body: [
      "Begin the morning the way every good story begins — over coffee, with the promise of somewhere new to go. We gather at first light over a brunch board of warm pastries, seasonal fruit, and endless coffee, then set out on foot through the Old Quarter.",
      "Three independent bookshops await, each chosen for its particular magic. At every door you'll be handed a sealed <em>blind date with a book</em> — a story disguised so you choose it by feeling alone. Our hosts share the tales behind each shop as we wander cobbled lanes between them.",
      "Come as you are, leave with a small library and a head full of new worlds. Bring a tote — you will need it.",
    ],
  },
  {
    slug: "ink-and-ivy-bookbinding",
    title: "Ink & Ivy — A Whimsical Bookbinding Workshop",
    category: "Whimsical Workshop",
    date: "2026-08-30",
    time: "1:00 PM – 4:00 PM",
    location: "The Conservatory Studio",
    image: "assets/img/key-book.svg",
    excerpt:
      "Bind your own botanical journal by candlelight — marbled papers, waxed thread, and pressed ivy under gilded covers.",
    price: "$65 per maker · materials included",
    eventbrite: "",
    includes: [
      "All tools & materials — papers, thread, board, press",
      "A pot of tea and something sweet",
      "Your finished hand-bound journal to take home",
    ],
    body: [
      "There is a particular alchemy to making the thing that will hold your words. In this three-hour workshop you'll learn a simple, sturdy binding and dress it in marbled papers, waxed linen thread, and pressed ivy sealed beneath a gilded cover.",
      "No experience is needed — only a willingness to get a little glue on your fingers. We keep the group small, the tea hot, and the candles lit. You'll leave with a journal that looks as though it was found in an old library, and the skill to make a dozen more.",
    ],
  },
  {
    slug: "nighthade-book-club-nocturne",
    title: "The Nighthade Book Club — Nocturne Edition",
    category: "Book Club",
    date: "2026-09-06",
    time: "7:00 PM – 9:00 PM",
    location: "The Amethyst Room",
    image: "assets/img/tower-starfield.svg",
    excerpt:
      "A candlelit evening of discussion, cordials, and constellations — this season's read unravelled beneath the stars.",
    price: "$22 · includes a welcome cordial",
    eventbrite: "",
    includes: [
      "Guided discussion led by our resident bibliophile",
      "A welcome cordial & grazing table",
      "This month's title revealed on sign-up",
    ],
    body: [
      "Our book club meets when the sky turns violet. Each Nocturne Edition takes a single book and turns it over slowly — its secrets, its silences, the lines that lodged themselves behind your ribs.",
      "Expect candlelight, cordials, and conversation that wanders happily past its bedtime. Newcomers are always welcome; you needn't have finished the book to have feelings about it.",
    ],
  },
  {
    slug: "equinox-masquerade-soiree",
    title: "Equinox Masquerade — A Bookish Soirée",
    category: "Bookish Themed Event",
    date: "2026-09-21",
    time: "8:00 PM – late",
    location: "The Grand Library Hall",
    image: "assets/img/library-archway.svg",
    excerpt:
      "Come masked as your favourite fictional soul for a night of readings, revelry, and a hidden door in the stacks.",
    price: "$70 · costume encouraged",
    eventbrite: "",
    includes: [
      "Welcome elixir on arrival",
      "Live readings & a roaming storyteller",
      "Prizes for the most bookish disguise",
      "Access to the after-hours 'hidden stacks'",
    ],
    body: [
      "Once a season we throw open the doors of the Grand Library after dark. Come masked as a character who has haunted you — the villain you secretly adore, the heroine you'd follow anywhere — for a night of live readings, roaming storytellers, and dancing between the stacks.",
      "Somewhere in the shelves there is a door that isn't usually there. Find it, and see where it leads. Costume is warmly encouraged; imagination is required.",
    ],
  },
  {
    slug: "solstice-storytelling-salon",
    title: "Solstice Storytelling Salon",
    category: "Bookish Themed Event",
    date: "2026-06-20",
    time: "6:00 PM – 9:00 PM",
    location: "The Conservatory Garden",
    image: "",
    excerpt:
      "Our midsummer salon of shared tales beneath the longest evening's light. (A past gathering — thank you for coming.)",
    price: "",
    eventbrite: "",
    includes: [],
    body: [
      "On the longest evening of the year we gathered in the garden to tell stories aloud — the old way, passed mouth to ear. Thank you to everyone who brought a tale.",
      "Keep an eye on the calendar for the next salon.",
    ],
  },
];
