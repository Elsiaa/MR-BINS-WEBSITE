/* Single source of truth for bin pricing & store day (America/New_York). */
window.PRICE_CONFIG = {
  ladder: { 0: 14, 1: 13, 2: 12, 3: 11, 4: 10, 5: 9, 6: null }, // Sun..Sat, null = closed
  closedLabel: "Closed · restock",
};
window.MRB_LADDER = window.PRICE_CONFIG.ladder;
window.MRB_DAY = (function () {
  try {
    var w = new Intl.DateTimeFormat("en-US", {
      weekday: "short",
      timeZone: "America/New_York",
    }).format(new Date());
    return { Sun: 0, Mon: 1, Tue: 2, Wed: 3, Thu: 4, Fri: 5, Sat: 6 }[w];
  } catch (e) {
    return new Date().getDay();
  }
})();
