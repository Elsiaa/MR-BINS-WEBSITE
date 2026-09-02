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
