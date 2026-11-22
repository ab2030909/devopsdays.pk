# DevOps Days Islamabad 2026 — Participant Email Campaign

A premium, responsive, dark-mode HTML email for registered attendees. It reuses
the website's visual identity (neon purple `#A855F7` / `#C084FC`, cyber cyan
`#22D3EE`, near-black `#050505`, mono + Segoe UI typography, logo from
`devopsdays.pk/hero-logo.webp`).

## Files

| File | Purpose |
|------|---------|
| `index.html` | The email. Table-based layout, inline CSS, bulletproof buttons, MSO/Outlook fallbacks. **Send this.** |
| `email.txt`  | Plain-text multipart alternative. |
| `email.css`  | Reference stylesheet only (clients strip `<link>`; real styles are inlined in `index.html`). |
| `assets/`    | Local copies of brand images if you prefer self-hosting instead of absolute URLs. |
| `README.md`  | This file. |

## 1. Configuration — replace these placeholders

Before sending, find-and-replace in `index.html` **and** `email.txt`:

| Placeholder | Replace with |
|-------------|--------------|
| `{{WHATSAPP_GROUP_URL}}` | Official attendees WhatsApp group invite (e.g. `https://chat.whatsapp.com/XXXXXXXX`) |
| `{{LINKEDIN_URL}}`  | LinkedIn page URL |
| `{{INSTAGRAM_URL}}` | Instagram profile URL |
| `{{FACEBOOK_URL}}`  | Facebook page URL |
| `{{X_TWITTER_URL}}` | X / Twitter profile URL |

PowerShell example:

```powershell
(Get-Content index.html -Raw).Replace('{{WHATSAPP_GROUP_URL}}','https://chat.whatsapp.com/XXXX') | Set-Content index.html
```

## 2. Event facts baked in (verify before send)

- **Date:** Wednesday, November 25, 2026
- **Time:** 09:00 AM PKT
- **Venue:** Islamabad Chamber of Commerce & Industries (ICCI), G-8, Islamabad
- **Directions:** Google Maps link is embedded on the venue button.
- **Live countdown CTA:** links to `https://www.devopsdays.pk/#home` (the site's own live countdown). Update if the anchor changes.

## 3. Countdown note

Email clients block JavaScript, so the Days/Hours/Minutes/Seconds boxes are a
**static** presentation (showing the headline date). The **VIEW LIVE COUNTDOWN**
button sends readers to the real live countdown on the website. Update the "Days"
number (currently `16`) if you want it accurate to the send date, or just leave
the date-focused design.

## 4. Preview

Open `index.html` in any browser for a desktop preview; resize the window (or use
devtools device mode) to check the mobile layout. Email previews may differ
slightly from browsers — for final QA use Litmus or Email on Acid.

## 5. Sending through an email platform

**Mailchimp / Brevo / Sender etc.**
1. Create a campaign → choose "Code your own" / "Paste HTML".
2. Paste the full contents of `index.html`.
3. Paste `email.txt` into the plain-text version field.
4. Insert the platform's unsubscribe/footer merge tag if required by law.
5. Set a recipient list of registered participants, send a test to yourself first.

**Amazon SES / SMTP / transactional**
- Send as `multipart/alternative` with `email.txt` (text part) and `index.html`
  (HTML part). Set a descriptive subject, e.g. *"You're invited — DevOps Days Islamabad 2026"*.

## 6. Compatibility

Built for Gmail, Outlook (Windows/MSO VML buttons included), Apple Mail, and
mobile clients. 600px max width, responsive stacking under 620px, dark-mode safe,
absolute HTTPS images with alt text, no JavaScript, no external CSS.

> Scope: this is standalone in `/email-campaign/`. It does **not** touch or deploy
> the production website.
