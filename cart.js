/* Header cart, shared by every page.
   Mystery boxes are the only thing you can buy, and their cart lives in
   localStorage "mbcart" (written by mystery-box.html). The header badge shows
   that real count, and the cart button opens the real cart drawer. */
(function () {
  function read() {
    try {
      var c = JSON.parse(localStorage.getItem("mbcart") || "{}") || {};
      var n = 0;
      for (var k in c) n += +c[k] || 0;
      return n;
    } catch (e) {
      return 0;
    }
  }
  function paint() {
    var b = document.getElementById("cartBadge");
    if (!b) return;
    var n = read();
    b.textContent = n;
    b.classList.toggle("show", n > 0);
  }
  function openDrawer() {
    var d = document.getElementById("mbcart");
    if (d) d.classList.add("open");
    return !!d;
  }
  /* runs before each page's old placeholder cart handler and replaces it */
  document.addEventListener(
    "click",
    function (e) {
      var btn = e.target.closest && e.target.closest("#cartBtn");
      if (!btn) return;
      e.preventDefault();
      e.stopPropagation();
      if (!openDrawer()) location.href = "mystery-box.html#cart";
    },
    true
  );
  /* the mystery-box page rewrites the cart on every add/remove */
  document.addEventListener("click", function () {
    setTimeout(paint, 0);
  });
  window.addEventListener("storage", paint);
  window.addEventListener("pageshow", paint);
  function init() {
    paint();
    if (location.hash === "#cart" && openDrawer() && history.replaceState)
      history.replaceState(null, "", location.pathname + location.search);
  }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init);
  else init();
})();
