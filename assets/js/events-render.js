/* =====================================================================
   FABLES OF WHIMSY — event rendering
   Reads window.FABLES_EVENTS and paints the calendar + detail pages.
   No build step, no dependencies — plain browser JS.
   ===================================================================== */
(function () {
  "use strict";
  var EVENTS = (window.FABLES_EVENTS || []).slice();

  var MON = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
  var MON_FULL = ["January","February","March","April","May","June","July","August","September","October","November","December"];
  var DAY = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

  function parse(d) { var p = (d || "").split("-"); return new Date(+p[0], (+p[1] || 1) - 1, +p[2] || 1); }
  function isPast(d) { var t = new Date(); t.setHours(0,0,0,0); return parse(d) < t; }
  function esc(s){ return String(s == null ? "" : s).replace(/[&<>"]/g, function(c){ return {"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]; }); }
  function longDate(d){ var x = parse(d); return DAY[x.getDay()] + ", " + MON_FULL[x.getMonth()] + " " + x.getDate() + ", " + x.getFullYear(); }
  function ticketState(ev){ return ev.eventbrite ? "live" : (isPast(ev.date) ? "past" : "soon"); }

  /* Painted fallback backdrop when no photo is supplied */
  function backdrop(seed){
    var pairs = [["#4b2d55","#121a2e"],["#0d3b2c","#121a2e"],["#22162a","#4b2d55"],["#121a2e","#0d3b2c"]];
    var p = pairs[Math.abs(hash(seed)) % pairs.length];
    return "background:radial-gradient(120% 120% at 30% 10%,"+p[0]+",transparent 60%),linear-gradient(140deg,"+p[1]+","+p[0]+");";
  }
  function hash(s){ var h = 0; s = s || ""; for (var i=0;i<s.length;i++){ h = (h<<5) - h + s.charCodeAt(i); h |= 0; } return h; }

  var ARROW = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M4 12h15M13 6l6 6-6 6"/></svg>';

  /* ---- Events grid (events.html) ----------------------------------- */
  function card(ev){
    var d = parse(ev.date), state = ticketState(ev);
    var media = ev.image
      ? '<img src="'+esc(ev.image)+'" alt="'+esc(ev.title)+'" loading="lazy" onerror="this.style.display=\'none\'">'
      : "";
    var pill = state === "live" ? '<span class="pill pill--live">Tickets Live</span>'
             : state === "past" ? '<span class="pill pill--past">Past Gathering</span>'
             : '<span class="pill pill--soon">Coming Soon</span>';
    return ''+
    '<article class="ev-card reveal">'+
      '<a class="ev-card__media" href="event.html?e='+encodeURIComponent(ev.slug)+'" style="'+backdrop(ev.slug)+'">'+
        media+
        '<span class="ev-card__date"><span class="d">'+d.getDate()+'</span><span class="m">'+MON[d.getMonth()]+' '+d.getFullYear()+'</span></span>'+
      '</a>'+
      '<div class="ev-card__body">'+
        '<span class="ev-card__tag">'+esc(ev.category)+'</span>'+
        '<h3><a href="event.html?e='+encodeURIComponent(ev.slug)+'" style="color:inherit">'+esc(ev.title)+'</a></h3>'+
        '<div class="ev-card__meta">'+esc(ev.time || "")+(ev.location ? ' · '+esc(ev.location) : "")+'</div>'+
        '<p class="ev-card__excerpt">'+esc(ev.excerpt || "")+'</p>'+
        '<div class="ev-card__foot">'+
          '<a class="ev-card__link" href="event.html?e='+encodeURIComponent(ev.slug)+'">Read more '+ARROW+'</a>'+
          pill+
        '</div>'+
      '</div>'+
    '</article>';
  }

  function renderGrid(){
    var upEl = document.getElementById("events-upcoming");
    var pastEl = document.getElementById("events-past");
    if (!upEl && !pastEl) return;
    var byDate = function(a,b){ return parse(a.date) - parse(b.date); };
    var upcoming = EVENTS.filter(function(e){ return !isPast(e.date); }).sort(byDate);
    var past = EVENTS.filter(function(e){ return isPast(e.date); }).sort(function(a,b){ return parse(b.date)-parse(a.date); });

    if (upEl){
      upEl.innerHTML = upcoming.length
        ? upcoming.map(card).join("")
        : '<p class="center measure lead">The next chapter is being written. Join our newsletter below to be first through the door.</p>';
    }
    if (pastEl){
      var wrap = document.getElementById("events-past-section");
      if (past.length){ pastEl.innerHTML = past.map(card).join(""); }
      else if (wrap){ wrap.classList.add("hidden"); }
    }
    // re-arm reveal for freshly injected cards
    if (window.FABLES_revealScan) window.FABLES_revealScan();
  }

  /* ---- Event detail (event.html) ----------------------------------- */
  function renderDetail(){
    var root = document.getElementById("event-detail");
    if (!root) return;
    var slug = new URLSearchParams(location.search).get("e");
    var ev = EVENTS.filter(function(e){ return e.slug === slug; })[0];

    if (!ev){
      root.innerHTML = '<div class="wrap section center"><p class="eyebrow">Lost in the stacks</p>'+
        '<h1>This tale isn’t on our shelves.</h1>'+
        '<p class="lead measure">The event you’re looking for may have wandered off. Return to the calendar to find what’s next.</p>'+
        '<a class="btn" href="events.html">View the calendar</a></div>';
      document.title = "Not found · Fables of Whimsy";
      return;
    }

    document.title = ev.title + " · Fables of Whimsy";
    var state = ticketState(ev);
    var mediaStyle = ev.image ? "" : backdrop(ev.slug);
    var mediaImg = ev.image ? '<img src="'+esc(ev.image)+'" alt="'+esc(ev.title)+'" onerror="this.style.display=\'none\'">' : "";

    var ticketBtn =
      state === "live"
        ? '<a class="btn btn--solid" href="'+esc(ev.eventbrite)+'" target="_blank" rel="noopener">Get Tickets on Eventbrite</a>'
        : state === "past"
          ? '<span class="pill pill--past" style="display:block;text-align:center;padding:.8rem">This gathering has passed</span>'
          : '<span class="btn btn--ghost" style="width:100%;justify-content:center;cursor:default;pointer-events:none;opacity:.8">Tickets coming soon</span>';

    var includes = (ev.includes && ev.includes.length)
      ? '<h3>What’s included</h3><ul class="stack" style="padding-left:1.1rem">'+
        ev.includes.map(function(i){ return '<li>'+esc(i)+'</li>'; }).join("")+'</ul>'
      : "";

    var body = (ev.body || []).map(function(p){ return '<p>'+p+'</p>'; }).join("");

    root.innerHTML =
      '<section class="ev-hero">'+
        '<div class="ev-hero__media" style="'+mediaStyle+'">'+mediaImg+'</div>'+
        '<div class="wrap ev-hero__inner reveal">'+
          '<a class="ev-card__link" href="events.html" style="margin-bottom:1rem">&larr; All events</a>'+
          '<p class="eyebrow" style="margin-top:1rem">'+esc(ev.category)+'</p>'+
          '<h1 class="gilt">'+esc(ev.title)+'</h1>'+
          '<p class="lead" style="max-width:52ch">'+esc(ev.excerpt || "")+'</p>'+
        '</div>'+
      '</section>'+
      '<section class="section"><div class="wrap ev-detail">'+
        '<div class="ev-body reveal">'+body+includes+'</div>'+
        '<aside class="ev-facts reveal d1">'+
          '<dl>'+
            '<dt>When</dt><dd>'+longDate(ev.date)+(ev.endDate ? ' – '+longDate(ev.endDate) : "")+'</dd>'+
            (ev.time ? '<dt>Time</dt><dd>'+esc(ev.time)+'</dd>' : "")+
            (ev.location ? '<dt>Where</dt><dd>'+esc(ev.location)+'</dd>' : "")+
            (ev.price ? '<dt>Contribution</dt><dd>'+esc(ev.price)+'</dd>' : "")+
          '</dl>'+
          ticketBtn+
        '</aside>'+
      '</div></section>';

    if (window.FABLES_revealScan) window.FABLES_revealScan();
  }

  document.addEventListener("DOMContentLoaded", function(){ renderGrid(); renderDetail(); });
})();
