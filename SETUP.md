# Nails by Brielle — Setup Guide

The website is a free static site on GitHub Pages. Booking, the calendar,
and text-message reminders are handled by the **Goldie** app (free plan,
up to 20 appointments/month).

## Brielle's steps (one time, ~15 minutes, all on her phone)

1. Install **Goldie: Appointment Scheduling** from the App Store / Google Play
   and create a free account.
2. In Goldie, set your **working hours** — the weekly time windows you're
   available. Clients can only book inside these.
3. Create one **service**: name it "Nail Appointment", set the **duration to
   3 hours**, and add your price.
4. Turn on **text reminders** to clients (Settings → Messages/Reminders) and
   notifications to yourself for new bookings.
5. Open your **online booking page** in Goldie and copy its link
   (looks like `https://booking.heygoldie.com/your-name`).
6. Send that link to Devon.

After that: every booking shows up in your Goldie calendar, you get notified,
and clients get automatic reminder texts. If you outgrow 20 appointments a
month, Goldie Pro ($19.99/mo) removes the cap.

## Devon's steps

### Wire up the booking link (when Brielle sends it)

1. Open `js/nav.js` and paste her link into `BOOKING_URL = "..."`.
2. Optionally update the "text to book" fallback in `index.html`
   (the `#book` section) — or leave it as a backup contact method.
3. Commit and push — the live site updates in about a minute.

### Replace placeholder content

- **Business name**: search-and-replace "Nails by Brielle" across the four
  HTML files, and update her real phone number (currently `555-5555` in
  `index.html`).
- **Photos**: drop image files into `images/`, then in `portfolio.html`
  replace each `<div class="placeholder-img ...">` with
  `<img src="./images/photo.jpg" alt="describe the nails">`. Same idea for
  the about photo. Phone photos are huge — resize to ~1200px wide first
  (e.g. squoosh.app) so the page stays fast.
- **Prices/services**: edit the cards in `services.html`.
- **Bio**: edit `about.html`.
- **Logo**: swap `images/logo.svg` for real branding when she has it.

### Run and test locally

```bash
cd ~/repos/brielle-nails
python3 -m http.server 8000
```

Open <http://localhost:8000>. Edit a file, refresh the browser, see the
change. Stop the server with Ctrl+C.

Debugging basics:
- **F12** opens DevTools. **Console** tab shows JavaScript errors;
  **Elements** tab lets you inspect and live-tweak CSS.
- **Ctrl+Shift+M** toggles phone-size emulation — check every page at
  iPhone size, since most clients will book from a phone.
- **Lighthouse** tab (Chrome, mobile mode) scores performance and
  accessibility; aim for 90+.
- Paste the live URL into <https://validator.w3.org> to catch HTML mistakes.

### Deploy changes

```bash
git add -A && git commit -m "describe the change" && git push
```

GitHub Pages redeploys automatically (~1 minute). Always check the live
site on a real phone after a change.

### End-to-end booking test (once Goldie is wired up)

Book a fake appointment from your phone through the live site. Confirm:
it appears in Brielle's Goldie calendar → she gets a notification → you
receive the reminder text at the time she configured. Then cancel it in
Goldie (the client gets a cancellation text — good, that's a feature test
too).

## Later: custom domain

1. Buy the domain (~$10–12/yr, e.g. Cloudflare or Namecheap).
2. GitHub repo → Settings → Pages → Custom domain → enter it (this creates
   a `CNAME` file in the repo).
3. At the registrar, add the DNS records GitHub shows you (A records for
   the apex domain, a CNAME for `www`).
4. Tick "Enforce HTTPS" once the certificate is issued (can take an hour).

No code changes needed — all links in the site are relative.
