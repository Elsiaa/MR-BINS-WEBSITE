/* Single source of truth for all pricing. The admin portal (admin.html) edits and
   republishes this file; a local override in this browser (admin preview) wins if present. */
window.PRICE_CONFIG = {
  ladder: { 0: 14, 1: 13, 2: 12, 3: 11, 4: 10, 5: 9, 6: null }, // Sun..Sat, null = closed
  closedLabel: "Closed · restock",
};
window.MRB_DEPTS = {
  general: {
    name: "General Bin Items",
    restock: "New stock every Friday!",
    tag: "★ New stock. Best selection. Unbeatable prices.",
    drop: 5,
    prices: [7, 5, 3, 2, 1, 9, null],
  },
  shoes: {
    name: "Shoes",
    restock: "New stock every Friday!",
    tag: "★ Top brands. Great prices.",
    drop: 5,
    prices: [10, 6, 6, 3, 3, 10, null],
  },
  clothing: {
    name: "Clothing",
    restock: "New stock every Sunday!",
    tag: "★ All clothing. All week.",
    drop: 0,
    prices: [6, 6, 6, 6, 6, 4, null],
  },
  food: {
    name: "Food",
    restock: "New stock every Wednesday!",
    tag: "★ Fresh stock. Great savings.",
    drop: 3,
    prices: [3, 2, 2, 1, 1, 1, null],
  },
};
window.MRB_ITEMS = [
  ["Audio", "Sony Wireless Headphones", "$98", "mrbins-prod-head.jpg"],
  ["Footwear", "Nike Running Sneakers", "$110", "mrbins-prod-shoe.jpg"],
  ["Kitchen", "Keurig Coffee Maker", "$99", "mrbins-prod-coffee.jpg"],
  ["Toys", "LEGO City Set", "$79", "mrbins-prod-lego.jpg"],
  ["Audio", "JBL Bluetooth Speaker", "$89", "mrbins-prod-speaker.jpg"],
  ["Home", "Modern Accent Lamp", "$59", "mrbins-lamp.png"],
];
try {
  var _ov = JSON.parse(localStorage.getItem("mrb-pricing-override") || "null");
  if (_ov && _ov.ladder) window.PRICE_CONFIG.ladder = _ov.ladder;
  if (_ov && _ov.depts) window.MRB_DEPTS = _ov.depts;
  if (_ov && _ov.items) window.MRB_ITEMS = _ov.items;
} catch (e) {}
window.MRB_LADDER = window.PRICE_CONFIG.ladder;
window.MRB_DAY = function () {
  try {
    var w = new Intl.DateTimeFormat("en-US", {
      weekday: "short",
      timeZone: "America/New_York",
    }).format(new Date());
    return { Sun: 0, Mon: 1, Tue: 2, Wed: 3, Thu: 4, Fri: 5, Sat: 6 }[w];
  } catch (e) {
    return new Date().getDay();
  }
};
window.MRB_DAY = window.MRB_DAY();
