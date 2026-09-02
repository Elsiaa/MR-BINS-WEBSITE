/* Site feature switches, driven by window.MRB_FLAGS from pricing.js.
   Mystery box off hides every mystery box surface site-wide. */
(function () {
  if (window.MRB_FLAGS && window.MRB_FLAGS.mysteryBox === false) {
    if (/mystery-box\.html/.test(location.pathname)) {
      location.replace("index.html");
      return;
    }
    var st = document.createElement("style");
    st.textContent =
      'a[href="mystery-box.html"],a[href^="mystery-box.html#"],a[href="#online"],' +
      "#mbpromo,#shopmb,.mband,#mbfab,#mbcart,.cartbtn{display:none !important}";
    if (document.head) document.head.appendChild(st);
    else
      document.addEventListener("DOMContentLoaded", function () {
        document.head.appendChild(st);
      });
  }
})();

/* locations render from config so the admin portal can add and edit stores */
(function () {
  function esc(t) {
    var d = document.createElement("div");
    d.textContent = t == null ? "" : String(t);
    return d.innerHTML;
  }
  function card(l) {
    return (
      '<div class="locard"><div class="locimg">' +
      (l.flag ? '<span class="flagb">Flagship</span>' : "") +
      '<img src="' +
      esc(l.img) +
      '" alt="' +
      esc(l.name) +
      ' store" loading="lazy" />' +
      '</div><div class="locbody"><h3>' +
      esc(l.name) +
      "</h3>" +
      '<p class="locaddr">' +
      esc(l.addr) +
      "</p>" +
      '<p class="lochrs">Sun&ndash;Thu 9&ndash;7 &middot; Fri 9&ndash;5 &middot; Sat closed</p>' +
      '<div class="locbtns">' +
      (l.dir
        ? '<a class="ldir" href="' +
          esc(l.dir) +
          '" target="_blank" rel="noopener">Directions &rarr;</a>'
        : "") +
      (l.tel ? '<a href="tel:' + esc(l.tel) + '">' + esc(l.telLabel || l.tel) + "</a>" : "") +
      (l.fb ? '<a href="' + esc(l.fb) + '" target="_blank" rel="noopener">Facebook</a>' : "") +
      "</div></div></div>"
    );
  }
  function render() {
    var L = window.MRB_LOCATIONS;
    if (!L || !L.length) return;
    var grid = document.getElementById("findstore");
    if (grid && grid.classList.contains("locgrid")) {
      grid.innerHTML = L.map(card).join("");
    }
  }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", render);
  else render();
})();
