# Mr. Bins — website

Static marketing site for Mr. Bins (Prime Bins), a bin store chain with 5 Northeast Pennsylvania
locations selling unsorted Amazon / big-box returns and overstock.

Live: https://elsiaa.github.io/MR-BINS-WEBSITE/

## Pages
- `index.html` — home (walkthrough hero, this week's bins, pricing ladder, mystery box promo, Google reviews, stores, FAQ, careers)
- `deals.html` — per-department weekly price ladders (from the primebins.com price flyer)
- `mystery-box.html` — mystery box store (Taster $25 / Classic $50 / Loaded $100). Checkout is Stripe-ready: paste Payment Links into `STRIPE_PAYMENT_LINKS`; until then the button reserves by email and no payment is processed online.
- `shop.html` — featured items in this week's bins
- `locations.html` — 5 stores with addresses, phones, hours, directions (JSON-LD LocalBusiness included)
- `loyalty.html` — loyalty program
- `careers.html` — open roles + application form (mailto)
- `gallery.html` — reels + real shopper photos from Google reviews

## Shared data
- `pricing.js` — single source of truth for the $14→$9 daily ladder and "today" (America/New_York). All pages read `window.MRB_LADDER` / `window.MRB_DAY`.
- `reviews.js` — 139 real five-star Google reviews scraped from the Wilkes-Barre listing.
- `i18n.js` — English/Spanish toggle.

## Run locally
```bash
bunx http-server -p 4173
```

## Placeholders / owner questions
- Bethlehem store phone number (currently omitted).
- Stripe Payment Links for mystery box checkout (`mystery-box.html` → `STRIPE_PAYMENT_LINKS`).
- Forms (careers, loyalty) are mailto: — move to Formspree/backend when ready.
- Branding: site says "Mr. Bins"; emails/socials are @primebins (intentional per owner).
