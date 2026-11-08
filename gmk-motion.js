window.GMKM = {
  done: false,
  init: function (tries) {
    var self = this; tries = tries || 0;
    if (self.done) return;
    var g = window.gsap, ST = window.ScrollTrigger, h1 = document.querySelector('h1');
    if (!g || !ST || !h1) { if (tries < 80) setTimeout(function () { self.init(tries + 1); }, 100); return; }
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) { self.done = true; return; }
    self.done = true; g.registerPlugin(ST);
    var q = function (s) { return Array.prototype.slice.call(document.querySelectorAll(s)); };
    var flow = function (el) { var c = getComputedStyle(el); return c.position !== 'absolute' && c.position !== 'fixed' && c.display !== 'none'; };
    var clear = { clearProps: 'opacity,transform,clipPath' };

    g.from(Array.prototype.slice.call(h1.parentElement.children).filter(flow), Object.assign({ opacity: 0, y: 34, duration: .9, ease: 'power3.out', stagger: .09, delay: .1 }, { onComplete: function () { g.set(h1.parentElement.children, { clearProps: 'opacity,transform' }); } }));

    var boxes = q('main > section');
    if (!boxes.length) boxes = q('section').map(function (s) { return s.querySelector(':scope > div[style*="max-width"]') || s; });
    boxes.forEach(function (el) {
      if (el.contains(h1) || el.querySelector('h1') || el.closest('[style*="position:fixed"]')) return;
      g.from(el, Object.assign({ opacity: 0, y: 72, scale: .985, duration: 1.1, ease: 'power3.out', scrollTrigger: { trigger: el, start: 'top 86%', once: true } }, clear));
    });

    q('section img[src*="illu-"], section img[src*="brand-07"]').forEach(function (el) {
      g.from(el, Object.assign({ opacity: 0, scale: .92, duration: 1, ease: 'power3.out', scrollTrigger: { trigger: el, start: 'top 88%', once: true } }, clear));
    });

    q('[id="ar"] button').forEach(function (el) {
      el.addEventListener('mousemove', function (e) { var r = el.getBoundingClientRect(); g.to(el, { x: (e.clientX - r.left - r.width / 2) * .08, y: (e.clientY - r.top - r.height / 2) * .18, duration: .3, ease: 'power2.out' }); });
      el.addEventListener('mouseleave', function () { g.to(el, { x: 0, y: 0, duration: .5, ease: 'elastic.out(1,.5)' }); });
    });

    window.addEventListener('load', function () { ST.refresh(); });
    setTimeout(function () { ST.refresh(); }, 1200);
  }
};
