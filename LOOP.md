# LOOP.md — Paxr Build Loop
> The agentic session state file. Read this at the start of every Claude Code session.
> File location: repo root `/LOOP.md`

---

## The Loop

```
START OF EVERY SESSION:

  [1] READ AGENT.md      → project context, design system, tech stack, rules
  [2] READ LOOP.md       → current state, what's done, what's next, blockers
  [3] READ SKILLS.md     → find next ⬜ TODO skill with all deps ✅ DONE

THEN:

  [4] Set chosen skill to 🔵 IN_PROGRESS in SKILLS.md
      Update "Current Skill" in this file

  [5] BUILD
      Create every file in scope
      Follow AGENT.md standards
      Write tests alongside code
      If session ends mid-skill → record in Session Log below

  [6] RUN ACCEPTANCE CHECK
      PASS → [7]
      FAIL → fix, re-run, max 3 attempts → if still failing: 🔴 BLOCKED

  [7] Mark ✅ DONE in SKILLS.md
      git add -A
      git commit -m "feat(sk-XX): [title] — acceptance check passed"

  [8] Update this file → back to [3]
```

---

## Loop Rules

1. Always read all three files at session start. No exceptions.
2. Never start a skill with unmet dependencies.
3. Never leave a skill 🔵 IN_PROGRESS without a note in Session Log.
4. One clean commit per completed skill.
5. ✅ DONE = acceptance check passed. Not just "code written."
6. Do not build out of scope — log ideas in Future Ideas.
7. Three failures = 🔴 BLOCKED. Log it. Move to next independent skill.

---

## Current State

```
Session:          #3 — Founder session additions integrated
Last Completed:   SK-00 — Marketing Website ✅
Current Skill:    — (not started)

Next eligible skills (no unmet deps):
  SK-00b  Website Content Update    ← do this FIRST (high value, low effort)
  SK-01   Project Scaffold          ← do this second

Build Phase:      MVP
Overall Progress: 1 / 17 skills complete (6%)

Platform vision updated:
  Paxr is the ownership companion — not just a warranty agent.
  Two new skills added after founder session with Marv:
    SK-14  Digital Manual + Product Q&A  (Phase 2 · high priority)
    SK-15  Brand Research Panel          (Phase 3)
  Website update required (SK-00b) — new positioning + features.
```

---

## Platform Architecture (Confirmed)

```
Surface 1  Customer PWA       The vault + ownership companion
Surface 2  WhatsApp Agent     The daily touchpoint
Surface 3  Stripe Billing     Revenue layer
Surface 4  Admin Dashboard    Internal ops
Surface 5  Partner Portal     Brand self-serve (Phase 2)
Surface 6  Native App         Phase 3 — only at 1,000 Pro users
```

---

## Positioning (Updated — Marv session)

```
Consumer tagline:  "Peace, handled."
                   Warranty management that does itself.

Brand tagline:     "Your partner in the product lifecycle."
                   From first scan to next purchase.

Extended value:    Registration → usage Q&A → lifecycle intelligence
                   → research panel → next product launch testing
```

---

## Recommended Session Order

```
Session 3:   SK-00b  Website Update         (~1–2 hours)
             Update existing site with new features + positioning.
             High visibility. Do before any platform code.

Session 4:   SK-01   Project Scaffold        (~1 hour)
Session 5:   SK-02   Database Schema         (~2 hours) ← includes manuals table
Session 6:   SK-03   Authentication          (~2 hours)
Session 7:   SK-04   Warranty Vault API      (~3 hours)
Session 8:   SK-05   Customer PWA Vault UI   (~4 hours)

── MILESTONE 1: MINIMUM VIABLE DEMO ──────────────────────────────
  User can sign up, add a warranty manually, see it in vault.
  Show this. Get feedback before continuing.
──────────────────────────────────────────────────────────────────

Session 9:   SK-06   QR Resolver             (~2 hours)
Session 10:  SK-08   Notification Engine     (~2 hours)

  ⚠️  Apply for WhatsApp Business API NOW (Meta takes 1–3 days to approve)
  Do this at start of Session 10 so it's ready for Session 11.

Session 11:  SK-09   WhatsApp Agent          (~4 hours)

── MILESTONE 2: PAXR IS PAXR ─────────────────────────────────────
  Scan QR → registered → WhatsApp alert → reply YES → renewed.
  The full product loop works end-to-end.
──────────────────────────────────────────────────────────────────

Session 12:  SK-10   Stripe Billing          (~2 hours)
Session 13:  SK-11   Admin Dashboard         (~3 hours)

── MILESTONE 3: MVP COMPLETE ────────────────────────────────────
  Real users. Real revenue. A platform you can operate.
─────────────────────────────────────────────────────────────────

Phase 2 (after MVP):
  SK-07   Document Storage + OCR
  SK-14   Digital Manual + Q&A       ← high priority Phase 2
  SK-12   Partner Portal
  SK-13   Analytics Layer

Phase 3:
  SK-15   Brand Research Panel
  Native mobile app (when 1,000 Pro users)
```

---

## Content Files (Read-Only — Source of Truth)

| File | What it contains |
|---|---|
| `content/paxr-website-content.html` | Original website copy — all 4 pages |
| `content/paxr-website-update.html` | **NEW** — website changes from founder session |
| `content/paxr-platform-content.html` | Platform copy — all 4 surfaces, every screen |
| `content/paxr-brand-identity.html` | Design system reference |
| `content/paxr-design-handoff.html` | Design tokens + CSS variables |

Claude Code reads these. Never writes to them.

---

## Session Log

### Session #1 — April 2026
Completed: SK-00 — Marketing Website
Notes: Website built and deployed at getpaxr.com. All 4 pages live.

### Session #2 — April 2026
Completed: SKILLS.md + LOOP.md restructured for four-surface architecture.
Notes: Platform architecture confirmed: PWA + WhatsApp + Billing + Admin.
No native app until 1,000 Pro users.

### Session #3 — April 2026
Completed: Founder session with Marv integrated into build plan.
Added: SK-00b (website update), SK-14 (digital manual), SK-15 (research panel).
Notes: Paxr positioning expanded from warranty agent to ownership companion.
Brand tagline: "Your partner in the product lifecycle."
Website update content created in `content/paxr-website-update.html`.
Platform content bible updated with manual + research panel features.
Next: Run SK-00b (website update) then SK-01 (scaffold).

---

## Acceptance Check Results

| Skill | Result | Notes |
|---|---|---|
| SK-00 | ✅ Passed | Website live at getpaxr.com |
| SK-00b | ⬜ Not run | Pending |

---

## Blockers

*None currently.*

---

## Completed Skills

| Skill | Title | Session |
|---|---|---|
| SK-00 | Marketing Website | Session #1 |

---

## Before Starting SK-00b — Read the Content File

```bash
# SK-00b uses targeted file edits — NOT a rebuild
# Read the content file first:
cat content/paxr-website-update.html

# Then make surgical changes to:
apps/web/app/page.tsx                      # Home — features + brands teaser
apps/web/app/how-it-works/page.tsx         # New section
apps/web/app/brands/page.tsx               # New headline + value props + section
apps/web/app/pricing/page.tsx              # Pro plan feature list

# Verify nothing existing was removed:
git diff --stat                             # should show only additions
```

---

## Before Starting SK-01 — Setup Checklist

```bash
# Tools
node --version   # v20+
pnpm --version   # v9+

# Supabase
brew install supabase/tap/supabase
supabase start   # saves API URL + keys

# Accounts needed (create all before building — not mid-session)
# anthropic.com/api        → ANTHROPIC_API_KEY
# dashboard.stripe.com     → STRIPE keys
# developers.facebook.com  → WhatsApp Business API (1–3 days approval)
# resend.com               → RESEND_API_KEY
# console.twilio.com       → TWILIO keys + phone number
# upstash.com              → Redis REST tokens
# sentry.io                → SENTRY_DSN

cp .env.example .env.local
# Fill in everything available now
```

---

## WhatsApp Business API — Apply Early

```
Do this before Session 10 (Notification Engine):
  1. developers.facebook.com
  2. Create Meta Business account
  3. New app → Business → WhatsApp
  4. Get test phone number (free from Meta)
  5. Submit business verification

Templates to submit (need Meta approval before SK-09):
  paxr_expiry_30     "Your {{1}} warranty expires in 30 days. Renew for £{{2}}?"
  paxr_expiry_7      "Final reminder — {{1}} expires in 7 days. Reply YES to renew."
  paxr_renewal_done  "Done. {{1}} covered until {{2}}. Certificate emailed."
  Category: UTILITY for all three
```

---

## Design Tokens Quick Reference

```css
--paxr-deep:    #0E1B29   /* dark bg */
--paxr-jade:    #3EC99A   /* THE accent — one element per screen max */
--paxr-stone:   #F6F5F1   /* app background — never pure white */
--paxr-mist:    #8FA3B1   /* secondary text */
--paxr-amber:   #E8A020   /* expiry warning only */
--paxr-error:   #C0392B   /* expired, errors */
--paxr-pale:    #EAE9E4   /* borders, dividers */
```

Fonts: `Fraunces` (headings) · `DM Sans` (body) · `Courier Prime` (data)
Grid: 4 / 8 / 12 / 16 / 24 / 32 / 48 / 64 / 96px — never arbitrary values

---

## Agent Voice Quick Reference

```
✓  "Added."
✓  "Covered until November 2027."
✓  "I don't see that in your vault."
✗  No exclamation marks — ever
✗  No passive voice
✗  No filler ("Hi there!", "Just a quick reminder...")
```

---

## Future Ideas

- Bank statement import (Plaid) → auto-detect purchases
- Barcode scan → product lookup (no QR needed)
- Resale assist — surface warranty when listing on eBay
- Family vault sharing
- Bulk receipt import
- Insurance gap detection
- Carbon score per device (repair vs replace)
- Apple Wallet / Google Wallet warranty cards
- Native mobile app — build at 1,000 Pro users

---

## Commit Reference

```bash
git commit -m "feat(sk-00b): website update — lifecycle positioning + manual feature"
git commit -m "feat(sk-01): project scaffold — all apps start, typecheck passes"
git commit -m "feat(sk-02): database schema — 11 tables inc manuals, migrations applied"
git commit -m "feat(sk-03): authentication — email + google, all 3 apps protected"
git commit -m "feat(sk-04): warranty vault api — crud complete, status computed, rls verified"
git commit -m "feat(sk-05): customer pwa — vault, add flow, detail, agent chat ui"
git commit -m "feat(sk-06): qr resolver — full resolution <200ms, cache + fallback"
git commit -m "feat(sk-08): notification engine — scheduler running, idempotent"
git commit -m "feat(sk-09): whatsapp agent — end-to-end scan→register→alert→renew"
git commit -m "feat(sk-10): stripe billing — free/pro, webhooks, upgrade flow"
git commit -m "feat(sk-11): admin dashboard — overview, users, warranties, brands, logs"
git commit -m "feat(sk-14): digital manual — ingest + ask_manual tool + pwa tab"
```

---

*LOOP.md — Paxr v0.3 · getpaxr.com · Peace, handled. · April 2026*
