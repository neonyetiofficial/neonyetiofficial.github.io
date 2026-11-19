/* Neon Yeti — tiny language switch (TR / EN / DE).
   Content for every language is in the HTML; elements carry data-l="xx".
   Without JavaScript the page shows the default language set on <html data-lang>. */
(function () {
  var SUPPORTED = ["tr", "en", "de"];
  var KEY = "neonyeti-lang";
  var root = document.documentElement;

  function stored() {
    try { return localStorage.getItem(KEY); } catch (e) { return null; }
  }
  function store(l) {
    try { localStorage.setItem(KEY, l); } catch (e) { /* ignore */ }
  }
  function fromUrl() {
    var m = /[?&]lang=([a-z]{2})/i.exec(window.location.search);
    return m ? m[1].toLowerCase() : null;
  }
  function fromBrowser() {
    var langs = navigator.languages || [navigator.language || ""];
    for (var i = 0; i < langs.length; i++) {
      var code = String(langs[i]).slice(0, 2).toLowerCase();
      if (SUPPORTED.indexOf(code) !== -1) return code;
    }
    return null;
  }

  function apply(l) {
    if (SUPPORTED.indexOf(l) === -1) l = "en";
    root.setAttribute("data-lang", l);
    root.setAttribute("lang", l);
    var t = root.getAttribute("data-title-" + l);
    if (t) document.title = t;
    var btns = document.querySelectorAll("[data-set-lang]");
    for (var i = 0; i < btns.length; i++) {
      btns[i].setAttribute("aria-pressed", btns[i].getAttribute("data-set-lang") === l ? "true" : "false");
    }
  }

  apply(fromUrl() || stored() || fromBrowser() || root.getAttribute("data-lang") || "en");

  document.addEventListener("click", function (ev) {
    var b = ev.target.closest ? ev.target.closest("[data-set-lang]") : null;
    if (!b) return;
    var l = b.getAttribute("data-set-lang");
    store(l);
    apply(l);
  });

  var y = document.querySelectorAll("[data-year]");
  for (var j = 0; j < y.length; j++) y[j].textContent = new Date().getFullYear();
})();
