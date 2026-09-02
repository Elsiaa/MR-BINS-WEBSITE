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
window.MRB_FLAGS = { mysteryBox: true };
window.MRB_LOCATIONS = [
  {
    name: "Wilkes-Barre",
    addr: "400 S Main Street, Wilkes-Barre, PA 18701",
    img: "mrbins-loc-wilkesbarre.jpg",
    flag: true,
    dir: "https://www.google.com/maps/dir//400%20S.%20Main%20St.%20Wilkes-Barre,%20PA%2018701",
    tel: "5705002637",
    telLabel: "570-500-2637",
    fb: "https://www.facebook.com/MrBinsWilkes/",
  },
  {
    name: "Bethlehem",
    addr: "104 E 3rd St, Bethlehem, PA 18015",
    img: "mrbins-loc-bethlehem.jpg",
    flag: false,
    dir: "https://maps.app.goo.gl/a7dCWwpr3Hwb5f9k7",
    tel: "5705002637",
    telLabel: "Call flagship",
    fb: "https://www.facebook.com/profile.php?id=61591918074337",
  },
  {
    name: "Allentown",
    addr: "2300 Lehigh St, Allentown, PA 18103",
    img: "mrbins-loc-allentown.jpg",
    flag: false,
    dir: "https://maps.app.goo.gl/EPof4gvC6XoFjNft5",
    tel: "5707635862",
    telLabel: "570-763-5862",
    fb: "https://www.facebook.com/profile.php?id=61588881423852",
  },
  {
    name: "Hazleton",
    addr: "1099 N Church St, Hazle Township, PA 18202",
    img: "mrbins-loc-hazleton.jpg",
    flag: false,
    dir: "https://www.google.com/maps/dir//Church+Hill+Mall,+North+Church+Street,+Hazleton,+PA",
    tel: "2722237093",
    telLabel: "272-223-7093",
    fb: "https://www.facebook.com/profile.php?id=61567723192235",
  },
  {
    name: "Scranton",
    addr: "1790 N Keyser Ave, Scranton, PA 18508",
    img: "mrbins-loc-scranton.jpg",
    flag: false,
    dir: "https://www.google.com/maps/place/Keyser+Oak+Shopping+Center",
    tel: "2722281375",
    telLabel: "272-228-1375",
    fb: "https://www.facebook.com/profile.php?id=61583223531760",
  },
];
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
  if (_ov && _ov.flags) window.MRB_FLAGS = _ov.flags;
  if (_ov && _ov.locations) window.MRB_LOCATIONS = _ov.locations;
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
