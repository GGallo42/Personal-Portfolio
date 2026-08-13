/* =========================================================================
   FIELD NOTEBOOK No. 001 — behaviour
   One authored motion moment: every figure draws itself in ink, once.
   ========================================================================= */

(function () {
  'use strict';

  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ---------------------------------------------------------------------
     Ink-draw: give each stroke its own length so the dash animation runs
     at a believable, roughly constant pen speed.
     --------------------------------------------------------------------- */

  function prepareFigure(figure) {
    var strokes = figure.querySelectorAll('.draw');
    var cursor = 0;

    Array.prototype.forEach.call(strokes, function (stroke) {
      var length = 260;

      if (typeof stroke.getTotalLength === 'function') {
        try {
          length = Math.max(stroke.getTotalLength(), 1);
        } catch (err) {
          /* Older engines refuse getTotalLength on shapes; the fallback holds. */
        }
      }

      stroke.style.setProperty('--len', length.toFixed(1));
      stroke.style.setProperty('--delay', Math.round(cursor) + 'ms');
      cursor += Math.min(length * 0.45, 90);
    });
  }

  var figures = document.querySelectorAll('.ink-figure, .pen-mark');

  Array.prototype.forEach.call(figures, prepareFigure);

  if (reduceMotion || !('IntersectionObserver' in window)) {
    Array.prototype.forEach.call(figures, function (figure) {
      figure.classList.add('is-drawn');
    });
  } else {
    var drawObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('is-drawn');
        drawObserver.unobserve(entry.target);
      });
    }, { threshold: 0.22, rootMargin: '0px 0px -8% 0px' });

    Array.prototype.forEach.call(figures, function (figure) {
      drawObserver.observe(figure);
    });
  }

  /* ---------------------------------------------------------------------
     Index tabs track the open page
     --------------------------------------------------------------------- */

  var tabs = document.querySelectorAll('.tab[href^="#"]');

  if (tabs.length && 'IntersectionObserver' in window) {
    var tabByTarget = {};

    Array.prototype.forEach.call(tabs, function (tab) {
      tabByTarget[tab.getAttribute('href').slice(1)] = tab;
    });

    var watched = Object.keys(tabByTarget)
      .map(function (id) { return document.getElementById(id); })
      .filter(Boolean);

    var visible = {};

    var tabObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        visible[entry.target.id] = entry.isIntersecting ? entry.intersectionRatio : 0;
      });

      var best = null;
      var bestRatio = 0;

      Object.keys(visible).forEach(function (id) {
        if (visible[id] > bestRatio) {
          bestRatio = visible[id];
          best = id;
        }
      });

      Array.prototype.forEach.call(tabs, function (tab) {
        tab.classList.toggle('is-current', best !== null && tab === tabByTarget[best]);
      });
    }, { threshold: [0, 0.15, 0.4, 0.75] });

    watched.forEach(function (section) { tabObserver.observe(section); });
  }

  /* ---------------------------------------------------------------------
     The top band's menu (below 1000px)
     --------------------------------------------------------------------- */

  var toggle = document.querySelector('.topbar__toggle');
  var menu = document.getElementById('topbar-menu');

  if (toggle && menu) {
    var setMenu = function (open) {
      toggle.setAttribute('aria-expanded', String(open));
      toggle.setAttribute('aria-label', open ? 'Close contents' : 'Open contents');
      menu.hidden = !open;
    };

    setMenu(false);

    toggle.addEventListener('click', function () {
      setMenu(toggle.getAttribute('aria-expanded') !== 'true');
    });

    menu.addEventListener('click', function (event) {
      if (event.target.closest('a')) setMenu(false);
    });

    document.addEventListener('keydown', function (event) {
      if (event.key === 'Escape' && toggle.getAttribute('aria-expanded') === 'true') {
        setMenu(false);
        toggle.focus();
      }
    });

    window.addEventListener('resize', function () {
      if (window.innerWidth > 1000) setMenu(false);
    });
  }
})();
