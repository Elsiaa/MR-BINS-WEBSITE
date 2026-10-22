/* Price wording shared by every page.
   The ladder lives in pricing.js, which the admin page regenerates on publish,
   so the logic that turns it into sentences lives here instead.

   Current model (matches primebins.com): Friday is restock day at the top
   price, then the bin price drops each day until Thursday. Saturday closed. */
(function () {
  var NAMES = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  function L() {
    return window.MRB_LADDER || {};
  }

  /* Tomorrow's bin price, or null when closed. */
  window.MRB_TOMORROW = function (day) {
    var v = L()[(day + 1) % 7];
    return v == null ? null : v;
  };

  /* Cheapest open day still coming before the price goes back up.
     Returns {p, name} or null when nothing cheaper is ahead. */
  window.MRB_LOW = function (day) {
    var lad = L(), cur = lad[day], best = null;
    for (var i = 1; i < 7; i++) {
      var d = (day + i) % 7, v = lad[d];
      if (v == null) continue;
      if (cur != null && v > cur) break;
      if (!best || v < best.p) best = { p: v, name: NAMES[d] };
      cur = v;
    }
    return best;
  };

  /* Next day the price jumps back up (restock), e.g. "Fri". */
  window.MRB_RESTOCK = function (day) {
    var lad = L(), cur = lad[day];
    for (var i = 1; i < 8; i++) {
      var d = (day + i) % 7, v = lad[d];
      if (v == null) continue;
      if (cur != null && v > cur) return NAMES[d];
      cur = v;
    }
    return "Fri";
  };

  /* Small tag on product cards: where the price is heading. */
  window.MRB_TAG = function (day) {
    var low = window.MRB_LOW(day);
    return low ? "↓ $" + low.p + " " + low.name : "Restock " + window.MRB_RESTOCK(day);
  };

  /* Sentence after "Everything below is $X today." */
  window.MRB_NEXT_LINE = function (day) {
    var lad = L(), t = window.MRB_TOMORROW(day), now = lad[day];
    if (t == null) return " Closed tomorrow.";
    if (now != null && t > now) return " Tomorrow is restock day: $" + t + ".";
    return " Tomorrow it’s $" + t + ".";
  };
})();
