/* Fables of Whimsy — interactions
   - sticky header state
   - mobile nav
   - scroll-reveal
   - current year                                            */
(function () {
  "use strict";

  // Sticky header shade on scroll
  var header = document.querySelector(".site-header");
  function onScroll() {
    if (!header) return;
    header.classList.toggle("scrolled", window.scrollY > 24);
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  // Mobile nav
  var toggle = document.querySelector(".nav__toggle");
  var links = document.querySelector(".nav__links");
  if (toggle && links) {
    toggle.addEventListener("click", function () {
      var open = links.classList.toggle("open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
    links.addEventListener("click", function (e) {
      if (e.target.tagName === "A") links.classList.remove("open");
    });
  }

  // Scroll reveal (re-scannable so dynamically injected cards animate too)
  var supported = "IntersectionObserver" in window;
  var io = supported
    ? new IntersectionObserver(
        function (entries) {
          entries.forEach(function (en) {
            if (en.isIntersecting) {
              en.target.classList.add("in");
              io.unobserve(en.target);
            }
          });
        },
        { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
      )
    : null;

  function scan() {
    var reveals = document.querySelectorAll(".reveal:not(.in)");
    reveals.forEach(function (el) {
      if (el.dataset.observed) return;
      el.dataset.observed = "1";
      if (io) io.observe(el);
      else el.classList.add("in");
    });
  }
  window.FABLES_revealScan = scan;
  scan();

  // Current year in footers
  document.querySelectorAll("[data-year]").forEach(function (el) {
    el.textContent = new Date().getFullYear();
  });
})();
