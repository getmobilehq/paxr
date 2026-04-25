# SKILLS.md — Paxr Platform Build Plan
> Discrete, dependency-ordered skill modules for the Claude Code build loop.
> Update the `Status` field as you progress. Never skip ahead of dependencies.
> File location: repo root `/SKILLS.md`

---

## Status Legend

| Symbol | Meaning |
|---|---|
| `✅ DONE` | Acceptance check passed and committed |
| `🔵 IN_PROGRESS` | Actively being built this session |
| `⬜ TODO` | Not started — waiting for dependencies |
| `🔴 BLOCKED` | Dependency not met or error — see LOOP.md |

---

## Platform Vision (Updated after founder session — April 2026)

Paxr is not a warranty app. Paxr is the **ownership companion** — the single layer
that sits between a customer and every product they own, from first scan to next purchase.

```
Consumer promise:  "Peace, handled." — warranty management that does itself
Brand promise:     "Your partner in the product lifecycle."
                   Registration → usage intelligence → research → next launch
```

The warranty is the entry point. The lifecycle is the product.

---

## Platform Architecture

```
Surface 1 — Customer PWA        The vault + ownership companion
Surface 2 — WhatsApp Agent      The daily touchpoint
Surface 3 — Stripe Billing      Revenue layer
Surface 4 — Admin Dashboard     Internal ops
Surface 5 — Partner Portal      Brand self-serve (Phase 2)
Surface 6 — Native App          Phase 3 only — when traction justifies
```

---

## Full Dependency Graph

```
SK-00  Marketing Website          ✅ DONE (website live — update via SK-00b)

SK-00b Website Update             ⬜ TODO (founder session additions — no deps)

SK-01  Scaffold
  └── SK-02  Database Schema
        └── SK-03  Authentication
              │
              ├── SK-04  Warranty Vault API
              │     ├── SK-05  Customer PWA — Vault UI       Surface 1
              │     ├── SK-06  QR Resolver
              │     └── SK-07  Document Storage + OCR
              │
              ├── SK-08  Notification Engine
              │     └── SK-09  WhatsApp Agent                Surface 2
              │                  └── SK-14  Digital Manual    Surface 2 extension
              │
              ├── SK-10  Stripe Billing                      Surface 3
              │
              └── SK-11  Admin Dashboard                     Surface 4
                    └── SK-12  Partner Portal                Surface 5
                          ├── SK-13  Analytics Layer
                          └── SK-15  Brand Research Panel    Surface 5 extension
```

**MVP critical path:**
`SK-01 → SK-02 → SK-03 → SK-04 → SK-05 → SK-06 → SK-08 → SK-09 → SK-10`

**Minimum viable demo** (real user, end-to-end):
`SK-01 through SK-05` — auth + vault + manual add. Ship this. Get feedback. Then continue.

---

## SK-00 · Marketing Website

```
Status:      ✅ DONE
Depends on:  none
Phase:       MVP
Surface:     getpaxr.com
```

Website live. All 4 pages built. Copy matches content bible.
Pages: Home · How it works · Pricing · For brands

**Note:** New content from founder session requires updates — see SK-00b.

---

## SK-00b · Website Content Update

```
Status:      ⬜ TODO
Depends on:  SK-00 (website must already exist)
Phase:       MVP — ship before platform build starts
Priority:    P0 — changes brand positioning for brand partners
Source file: content/paxr-website-update.html
```

### Objective

Update the existing getpaxr.com website with three additions from the founder session:
1. Digital manual feature — added to How it works page and Features section on Home
2. Lifecycle brand positioning — updated brand page headline, new value prop section
3. Trustpilot/review scrape section — social proof from real warranty complaints online

**Do not rebuild the website. Make targeted updates only.**
All new copy is in `content/paxr-website-update.html` — implement it exactly.

### Changes by page

```
Home page:
  ├── Features grid: add "Ask your manual" as Feature 7
  ├── For brands teaser: updated headline + new lifecycle positioning line
  └── Stats bar: consider adding "£380 avg annual loss" stat if not present

How it works page:
  └── Add new section: "Your product companion" — after the Vault section
      Content: digital manual, install help, usage questions

For brands page:
  ├── Hero headline: updated (see content file)
  ├── Problem section: add 3rd stat — "88% of sold products invisible post-sale"
  ├── Value props: add 2 new props — "Lifecycle intelligence" + "Research panel"
  └── New section: "Your partner in the product lifecycle" — full new section

Pricing page:
  └── Pro plan: add "Digital manual access" and "Product Q&A" to feature list
```

### Acceptance check

```bash
pnpm build --filter=web          # zero errors
pnpm typecheck                   # zero type errors
# Manual checks:
# Home: 7 feature cards visible (was 6)
# Home: For brands teaser has updated lifecycle copy
# How it works: new "Product companion" section present
# For brands: new value props present (lifecycle + research panel)
# For brands: new lifecycle section present
# Pricing: Pro plan feature list updated
# All copy matches content/paxr-website-update.html exactly
# No existing copy removed unless explicitly marked for replacement
```

### Tasks

- [ ] Read `content/paxr-website-update.html` fully before touching any file
- [ ] Update Home: Features grid — add Feature 7 "Ask your manual"
- [ ] Update Home: For brands teaser — new headline and lifecycle line
- [ ] Update How it works: add "Your product companion" section
- [ ] Update For brands: hero headline
- [ ] Update For brands: problem stats — add 3rd stat
- [ ] Update For brands: value props — add lifecycle + research panel
- [ ] Update For brands: add new lifecycle section (full section, not just a card)
- [ ] Update Pricing: Pro plan feature list additions
- [ ] Verify no existing copy was accidentally removed

---

## SK-01 · Project Scaffold

```
Status:      ⬜ TODO
Depends on:  none
Phase:       MVP
Priority:    P0
```

### Objective

Bootstrap the Turborepo monorepo. All apps must start cleanly before anything else.

### Key files

```
paxr/
├── turbo.json
├── package.json                   # pnpm workspaces
├── pnpm-workspace.yaml
├── tsconfig.base.json             # strict + @paxr/* aliases
├── .env.example
├── packages/config/
│   ├── env.ts                     # Zod env validation — boot fails if vars missing
│   └── tailwind.config.ts         # Paxr design tokens as Tailwind classes
├── apps/web/                      # Next.js — marketing site (✅) + customer PWA
├── apps/admin/                    # Next.js — admin dashboard
└── apps/partner/                  # Next.js — partner portal
```

### Tailwind tokens (required)

```typescript
colors: {
  paxr: {
    deep: '#0E1B29', depth: '#1C2E40',
    jade: '#3EC99A', 'jade-dim': '#2D9A76',
    stone: '#F6F5F1', pale: '#EAE9E4',
    mist: '#8FA3B1', amber: '#E8A020', error: '#C0392B',
  }
},
fontFamily: {
  display: ['Fraunces', 'serif'],
  body: ['DM Sans', 'sans-serif'],
  mono: ['Courier Prime', 'monospace'],
}
```

### Acceptance check

```bash
pnpm install && pnpm typecheck && pnpm lint
pnpm dev   # all 3 apps start, no crashes
```

### Tasks

- [ ] Init Turborepo with pnpm workspaces
- [ ] `tsconfig.base.json` — strict mode, `@paxr/*` path aliases
- [ ] `packages/config/env.ts` — Zod validation for all vars in AGENT.md §12
- [ ] `packages/config/tailwind.config.ts` — all Paxr tokens + font families
- [ ] Scaffold `apps/web`, `apps/admin`, `apps/partner` — Next.js 15 App Router
- [ ] Service stubs: `qr-resolver`, `notification`, `whatsapp`
- [ ] Turborepo pipelines: `build`, `dev`, `lint`, `typecheck`, `test`
- [ ] `.env.example` — all vars from AGENT.md §12

---

## SK-02 · Database Schema

```
Status:      ⬜ TODO
Depends on:  SK-01
Phase:       MVP
Priority:    P0
```

### Objective

Complete database schema. Ten tables + the new `manuals` table (SK-14 prep).

### Files

```
packages/db/src/schema/
├── users.ts
├── brands.ts
├── products.ts
├── qr_codes.ts
├── devices.ts
├── warranties.ts          # status enum + expiry_date index
├── documents.ts
├── notifications.ts
├── agent_sessions.ts
├── subscriptions.ts
└── manuals.ts             # NEW — product manuals (FK → products)
```

### manuals table schema

```typescript
// New table for SK-14 — Digital Manual feature
// Created now so schema is complete from the start
manuals: {
  id:           uuid PK
  product_id:   uuid FK → products (not null)
  brand_id:     uuid FK → brands (not null)
  source_type:  enum('pdf', 'url', 'text')
  source_url:   varchar(1024) nullable     // URL to PDF or web page
  content_text: text nullable              // extracted/ingested text content
  page_count:   integer nullable
  language:     varchar(8) default 'en'
  indexed_at:   timestamp nullable         // when content was vectorised/indexed
  created_at:   timestamp
  updated_at:   timestamp
}
```

### Seed data

```
3 brands:    Hoover · Russell Hobbs · Grundig
10 products: 2–3 per brand
3 QR codes:  one per brand, valid PAXR format
1 manual:    Hoover H-Wash 500 — sample text content for dev testing
2 test users: test-free@paxr.dev · test-pro@paxr.dev
5 warranties: 2 active · 2 expiring_soon · 1 expired
```

### Acceptance check

```bash
pnpm db:generate && pnpm db:migrate && pnpm db:seed
pnpm typecheck
# All 11 tables present in Supabase Studio
# RLS enabled on users, devices, warranties, documents, manuals
```

### Tasks

- [ ] All 10 original table schemas
- [ ] `manuals.ts` — new table per schema above
- [ ] Warranty status enum: active / expiring_soon / expired / claimed
- [ ] Soft-delete `deleted_at` on devices, warranties, documents
- [ ] Indexes: `warranties.expiry_date`, `warranties.user_id`, `manuals.product_id`
- [ ] Drizzle relations for all FKs including manuals → products
- [ ] Export inferred TypeScript types
- [ ] Seed.sql with all data including one sample manual

---

## SK-03 · Authentication

```
Status:      ⬜ TODO
Depends on:  SK-02
Phase:       MVP
Priority:    P0
```

### Objective

Email + Google OAuth for customers. Email-only for admin. Magic link for partners.
Single Supabase Auth instance serving all three apps.

### Auth rules by surface

```
Customer (apps/web):    Email + Google OAuth. Self-serve signup.
Admin (apps/admin):     Email only. No self-serve. Manual DB insert.
Partner (apps/partner): Magic link only. Invite-only. Admin creates.
```

### Sign-up copy

```
Headline:  "Start protecting your things."
Sub:       "Free for your first 3 warranties. No credit card needed."
CTA:       "Create account"
```

### Sign-in copy

```
Headline:  "Welcome back."
CTA:       "Sign in"
```

### Acceptance check

```bash
pnpm test:unit -- packages/api-client/src/auth
# 1. Email signup → verification → vault
# 2. Sign out → sign in → session restored
# 3. /app/* without auth → redirect to sign-in
# 4. /admin/* without admin role → 403
# 5. /partner/* without partner role → 403
```

### Tasks

- [ ] `@supabase/ssr` client factories: `createBrowserClient`, `createServerClient`
- [ ] Customer sign-up, sign-in, OTP verify pages
- [ ] Google OAuth configuration in Supabase dashboard
- [ ] `requireUser()`, `requireAdmin()`, `requirePartner()` middleware
- [ ] Admin sign-in page (email only)
- [ ] Partner magic link sign-in page

---

## SK-04 · Warranty Vault API

```
Status:      ⬜ TODO
Depends on:  SK-03
Phase:       MVP
Priority:    P0
```

### Objective

Complete CRUD API for warranties, devices, brands, and products.
Status always computed dynamically — never stored.

### API routes

```
GET  /api/v1/warranties           grouped by computed status
POST /api/v1/warranties           create device + warranty in one call
GET  /api/v1/warranties/[id]      single warranty detail
PATCH /api/v1/warranties/[id]     partial update
DELETE /api/v1/warranties/[id]    soft delete — sets deleted_at

GET  /api/v1/devices              user's device list
POST /api/v1/devices
GET  /api/v1/brands               for search autocomplete
GET  /api/v1/products             search by brand
```

### Status computation (never stored — always computed)

```typescript
function computeStatus(expiryDate: Date): WarrantyStatus {
  const days = differenceInDays(expiryDate, new Date())
  if (days < 0)   return 'expired'
  if (days <= 90) return 'expiring_soon'
  return 'active'
}
```

### Standard response shape (use everywhere)

```typescript
type ApiResponse<T> = {
  data: T | null
  error: string | null
  meta?: { page?: number; total?: number }
}
```

### Acceptance check

```bash
pnpm test:unit -- packages/db/src/queries
# POST warranty → 201, computed status correct
# GET warranties → grouped correctly
# PATCH → updated_at refreshed
# DELETE → deleted_at set, not hard-deleted
# RLS: cross-user access returns empty / 403
```

### Tasks

- [ ] Query functions in `packages/db/src/queries/`
- [ ] All 8 API routes with Zod input validation
- [ ] `computeStatus()` utility in `packages/db/src/queries/warranties.ts`
- [ ] Soft delete on warranties and devices
- [ ] Typed API client in `packages/api-client/src/`
- [ ] RLS policies: `user_id = auth.uid()` on warranties and devices
- [ ] Unit tests for all query functions

---

## SK-05 · Customer PWA — Vault UI

```
Status:      ⬜ TODO
Depends on:  SK-04
Phase:       MVP
Priority:    P0
Surface:     Surface 1 — Customer PWA
```

### Objective

The core consumer experience. All screens from the platform content bible.
Source of truth for all copy: `content/paxr-platform-content.html` — Surface 1.

### Screens

```
/vault              Vault dashboard — warranties by status
/vault/[id]         Warranty detail
/add                Add mode picker (QR · Manual · Photo)
/add/scan           QR scanner — browser camera
/add/manual         Manual entry form
/add/confirm        Review + confirm
/agent              Agent chat UI
/profile            Profile + notification prefs + plan
/profile/link-whatsapp  Link WhatsApp number
/upgrade            Upgrade to Pro
```

### Design spec

```
Background:   #F6F5F1 (Stone)
Dark bg:      #0E1B29 (Deep) — nav, dark sections
Accent:       #3EC99A (Jade) — one element per screen max
Warning:      #E8A020 (Amber) — expiring_soon indicators only
Error:        #C0392B — expired status, form errors
Bottom nav:   4 tabs: Vault · Add · Agent · Profile
PWA:          manifest.json + service worker + install prompt after 2nd visit
```

### Acceptance check

```bash
pnpm build --filter=web && pnpm typecheck
# Chrome mobile:
# 1. Empty vault state — symbol mark + CTAs
# 2. Manual add → confirm → vault shows warranty
# 3. Card: brand, product, countdown, status badge
# 4. Tap card → detail with all sections
# 5. Profile page — plan status, notification prefs
# 6. PWA installable from browser
```

### Tasks

- [ ] PWA config: `manifest.json`, service worker, `next-pwa`
- [ ] `AppNav.tsx` — top nav + 4-tab bottom nav
- [ ] Vault dashboard — 3 sections + `WarrantyCard.tsx` + `EmptyVault.tsx`
- [ ] `StatusBadge.tsx` — 4 states
- [ ] `CountdownDays.tsx` — Courier Prime, status-coloured
- [ ] Add mode picker
- [ ] QR scanner — `getUserMedia()` + Barcode Detection API
- [ ] Manual entry form — brand autocomplete, date pickers, validation
- [ ] Confirm screen + success state
- [ ] Warranty detail — all sections from platform content bible
- [ ] Agent chat UI — all states from platform content bible (Pro gate for Free users)
- [ ] Profile page — all sections
- [ ] WhatsApp linking flow
- [ ] Upgrade page + free plan limit modal
- [ ] All error toasts + empty states from platform content bible
- [ ] Loading skeletons
- [ ] Full responsive pass (375px → 1280px)

---

## SK-06 · QR Resolver

```
Status:      ⬜ TODO
Depends on:  SK-04
Phase:       MVP
Priority:    P0
```

### Objective

Resolve any QR scan to product + warranty in under 200ms.
HMAC-SHA256 checksums. Redis cache. Graceful fallback for unknown codes.

### QR format

```
PAXR-{brand_slug}-{product_sku}-{hmac_sha256}
```

### Resolution response

```typescript
{
  resolved:                  boolean
  confidence:                'full' | 'partial' | 'none'
  brand?:                    Brand
  product?:                  Product
  standard_warranty_months?: number
  warranty_terms_url?:       string
  has_manual?:               boolean   // NEW — tells UI whether manual Q&A is available
}
```

### Acceptance check

```bash
pnpm test:unit -- services/qr-resolver
# Valid QR → full resolution < 200ms
# Cache hit → < 20ms
# Tampered checksum → rejected
# Unknown QR → { resolved: false } gracefully
```

### Tasks

- [ ] PAXR QR format specification
- [ ] HMAC-SHA256 checksum verify
- [ ] Redis cache: `qr:{sha256(code)}`, 7d TTL
- [ ] Main resolver: parse → verify → DB lookup → cache → respond
- [ ] `has_manual` field in response (check manuals table)
- [ ] Unknown QR fallback
- [ ] `POST /api/v1/qr/resolve` endpoint
- [ ] Wire to QR scan screen in SK-05
- [ ] 10 valid QR codes in seed.sql

---

## SK-07 · Document Storage + OCR

```
Status:      ⬜ TODO
Depends on:  SK-04
Phase:       MVP
Priority:    P1
```

### Objective

Receipts and warranty certificates. OCR extracts purchase date automatically.

### File constraints

```
Types: image/jpeg · image/png · application/pdf
Max:   10MB
Path:  {user_id}/{warranty_id}/{timestamp}-{filename}
TTL:   Signed URLs expire after 15 minutes
```

### Acceptance check

```bash
pnpm test:unit -- services/ocr
# Upload JPEG → stored · OCR extracts purchase_date (≥80% on clear receipts)
# Signed URL → accessible, expires
# Bad type / oversized → rejected with correct error
```

### Tasks

- [ ] Supabase Storage bucket `warranty-documents` (private)
- [ ] `POST /api/v1/documents` — validate, upload, OCR
- [ ] Google Vision OCR — extract purchase_date, product_name, retailer
- [ ] `GET /api/v1/documents/[id]` — signed URL
- [ ] Soft delete
- [ ] File upload UI in warranty detail + confirm screens (SK-05)

---

## SK-08 · Notification Engine

```
Status:      ⬜ TODO
Depends on:  SK-03
Phase:       MVP
Priority:    P0
```

### Objective

Scheduled expiry reminders at 90/30/7/1 day triggers. Multi-channel. Fully idempotent.

### Trigger templates (copy — use exactly)

```
90d: "Your {product} warranty expires in 3 months (on {date}). No action needed yet."
30d: "Your {product} warranty expires in 30 days. A 2-year extension is £{price}. Reply YES."
7d:  "Final reminder — your {product} warranty expires in 7 days. Reply YES to renew."
1d:  "Your {product} warranty expires tomorrow. Reply YES to renew — last chance."
```

### Channel priority

```
Pro:  WhatsApp → Push → Email
Free: Push → Email
```

### Idempotency

```sql
SELECT id FROM notifications
WHERE warranty_id=$1 AND trigger_days=$2
  AND channel=$3 AND sent_at > NOW() - INTERVAL '25 hours'
-- If exists → skip
```

### Acceptance check

```bash
pnpm test:unit -- services/notification
# Scheduler fires → alerts dispatched
# Re-run → zero duplicates
# Preferences respected
```

### Tasks

- [ ] pg-boss cron: `check-expiring-warranties` at 09:00 UTC
- [ ] Query: `WHERE expiry_date = TODAY + N AND deleted_at IS NULL`
- [ ] Idempotency check before every send
- [ ] Web Push channel (VAPID keys + subscription storage)
- [ ] Resend email channel
- [ ] Twilio SMS channel
- [ ] Notification preferences API

---

## SK-09 · WhatsApp Agent

```
Status:      ⬜ TODO
Depends on:  SK-08
Phase:       MVP
Priority:    P0
Surface:     Surface 2 — WhatsApp + Agent chat UI
```

### Objective

WhatsApp webhook + Claude AI agent. Proactive alerts via SK-08. Agent responses via Claude.
All conversation scripts in `content/paxr-platform-content.html` — Surface 2.

### Agent model

```
claude-sonnet-4-20250514 — always. Never haiku.
```

### System prompt location

```
packages/agent/prompts/system.ts — never inline
```

### Agent tools

```typescript
get_warranties(userId)
get_warranty_detail(warrantyId)
check_expiry(warrantyId)
initiate_renewal(warrantyId, confirmed)
get_claim_instructions(warrantyId)
add_warranty(input)
// SK-14 adds: ask_manual(productId, question)
```

### Rate limit

```
50 agent messages per user per day — enforced via Redis
```

### Acceptance check

```bash
pnpm test:unit -- packages/agent && pnpm test:unit -- services/whatsapp
# 1. "What warranties do I have?" → list
# 2. "Is my TV under warranty?" → check
# 3. "My dishwasher broke" → coverage + claim steps
# 4. Renew flow → confirm → renewal handled
# 5. Unknown device → "I don't see that in your vault."
# 6. WhatsApp inbound → agent responds
# 7. PWA agent chat → same agent, web interface
```

### Tasks

- [ ] WhatsApp Business API webhook (verify + receive)
- [ ] Webhook signature verification (HMAC-SHA256)
- [ ] WhatsApp sender: text, templates, interactive buttons
- [ ] Submit + get approved: 3 message templates (expiry-30, expiry-7, renewal-confirm)
- [ ] Redis session store: `wa:{phone_hash}`, 24h TTL
- [ ] Phone linking API + UI (SK-05 profile page)
- [ ] Anthropic client with retry + backoff
- [ ] Full system prompt in `packages/agent/prompts/system.ts`
- [ ] All 6 agent tools with Zod input schemas
- [ ] Agent loop: call → tool use → execute → respond
- [ ] `POST /api/v1/agent` for PWA chat interface
- [ ] Agent chat page wired (SK-05)
- [ ] 50 msg/day rate limit via Redis

---

## SK-10 · Stripe Billing

```
Status:      ⬜ TODO
Depends on:  SK-03
Phase:       MVP
Priority:    P1
Surface:     Surface 3 — Billing
```

### Plans

```typescript
const PLAN_LIMITS = {
  free: { max_warranties: 3, whatsapp: false, digital_manual: false },
  pro:  { max_warranties: Infinity, whatsapp: true, digital_manual: true },
}
```

### Stripe events to handle

```
checkout.session.completed      → upgrade to Pro
customer.subscription.deleted   → downgrade to Free
customer.subscription.updated   → update record
invoice.payment_failed          → warn user
invoice.payment_succeeded       → extend subscription
```

### Upgrade page copy

```
Headline:  "Upgrade to Paxr Pro."
Price:     "£10 / year"
Badge:     "30-day free trial"
Sub:       "Less than 83p a month. Cancel anytime."
Features:
  Unlimited warranties
  WhatsApp AI agent
  Automatic renewal handling
  Claim guidance
  Ask your product manual anything  ← NEW (SK-14)
  Receipt + document storage
  SMS fallback
CTA:       "Start free trial"
Below:     "No credit card required today"
```

### Acceptance check

```bash
pnpm test:unit -- apps/web/app/api/v1/billing
# Free user: 4th warranty → upgrade_required error
# Stripe test payment → Pro access
# subscription.deleted webhook → downgraded to Free
# Signature verification: tampered → 400
```

### Tasks

- [ ] Stripe product + price (£10/yr + 30-day trial)
- [ ] Checkout session endpoint
- [ ] Customer portal endpoint
- [ ] Webhook handler (5 events above)
- [ ] Free plan limit enforcement in SK-04 warranty create endpoint
- [ ] Upgrade page (copy above — includes digital manual feature)
- [ ] Billing management page

---

## SK-11 · Admin Dashboard

```
Status:      ⬜ TODO
Depends on:  SK-04, SK-10
Phase:       MVP
Priority:    P1
Surface:     Surface 4 — Internal ops
```

### Screens

```
/admin              Overview — metrics (all from platform content bible)
/admin/users        User list + user detail
/admin/warranties   All warranties — search, filter, override
/admin/brands       Brand list + onboard new brand
/admin/agent        WhatsApp bot logs — conversations, delivery, errors
/admin/system       Scheduler status, API health, manual trigger
```

### Acceptance check

```bash
# Log in as admin (manual DB seed)
# Overview metrics match seed data
# User search works
# Brand onboarding creates brand + sends portal invite
# Bot logs show conversations
# Non-admin → 403
```

### Tasks

- [ ] Admin auth middleware (`requireAdmin()`)
- [ ] Admin sidebar nav
- [ ] Overview: all metrics from platform content bible ADM-02
- [ ] Users list + detail + admin actions (force Pro, reset password, delete)
- [ ] Warranties list + search + filter + override with reason field
- [ ] Brands list + new brand onboarding form (from platform content bible ADM-05)
- [ ] Bot logs: conversations, delivery status, retry action
- [ ] System: scheduler status + WhatsApp/Stripe/Supabase health + manual run

---

## SK-12 · Partner Portal

```
Status:      ⬜ TODO
Depends on:  SK-11
Phase:       Phase 2
Priority:    P2
Surface:     Surface 5 — Brand partner self-serve
```

### Screens

```
/partner            Overview dashboard
/partner/products   Product catalogue + add/edit
/partner/qr-codes   Generate + download + manage QR codes
/partner/analytics  Registration trends + renewal rate + lifecycle
/partner/insights   Customer lifecycle intelligence (SK-15 prep)
```

### Acceptance check

```bash
# Magic link sign-in works
# Dashboard shows brand-scoped metrics only
# QR code generated → downloads PNG
# Analytics render with seed data
# RLS: partner cannot see another brand's data
```

### Tasks

- [ ] Magic link auth (invite-only)
- [ ] Brand-scoped RLS
- [ ] Overview dashboard (metrics from platform content bible PTR-02)
- [ ] Product catalogue + add product form (PTR-03)
- [ ] QR code generator (PTR-04) — `qrcode` library → PNG export
- [ ] Analytics (PTR-05) — recharts time-series + per-product breakdown
- [ ] "Insights" tab stub — ready for SK-15

---

## SK-13 · Analytics Layer

```
Status:      ⬜ TODO
Depends on:  SK-12
Phase:       Phase 2
Priority:    P2
```

### Metrics

```
Consumer:   warranties_added_per_day · qr_scan_conversion
            notification_open_rate · renewal_rate
            d7_retention · d30_retention · avg_warranties_per_user

Brand:      registrations_per_product · time_to_register
            warranty_lifecycle · renewal_conversion
```

### Acceptance check

```bash
pnpm test:unit -- packages/db/src/analytics
# All queries < 500ms with seed data
# Admin metrics match hand-calculated values
# Partner analytics scoped correctly
```

### Tasks

- [ ] Composite indexes for analytics queries
- [ ] Metric query functions in `packages/db/src/analytics/`
- [ ] Admin analytics API (service role key)
- [ ] Wire to admin overview (SK-11) and partner analytics (SK-12)

---

## SK-14 · Digital Manual + Product Q&A

```
Status:      ⬜ TODO
Depends on:  SK-09 (WhatsApp agent must exist)
Phase:       Phase 2
Priority:    P1 — high-value differentiator, relatively simple to build
Surface:     Surface 2 extension (agent) + Surface 1 (PWA detail screen)
```

### What Marv said

> "Your customer can ask questions to the manual. That one is a game changer.
> You can help people with installing their product. People can ask questions."

### Objective

Ingest product manuals (PDF or URL) per product in the brand partner catalogue.
Make them queryable via the Paxr agent — both on WhatsApp and in the PWA agent chat.
When a user asks "how do I set the timer on my washing machine?" — Paxr answers
from that product's manual, with a reference to the page or section.

This extends the agent from warranty-only to **full product companion**.

### How it works

```
Brand partner uploads manual → stored in manuals table
                             → text extracted (PDF parse or URL scrape)
                             → content indexed for semantic search

User asks agent a product question
  → agent calls ask_manual(productId, question)
  → semantic search over manual content
  → Claude synthesises answer with section reference
  → returns: answer + "From your {product} manual, page {n}"
```

### Files to create

```
services/manual-ingestion/src/
├── index.ts                    # ingest(productId, source) function
├── pdf-parser.ts               # extract text from PDF manuals
├── url-scraper.ts              # scrape text from product support pages
├── chunker.ts                  # split into searchable chunks
└── indexer.ts                  # store chunks in DB or vector store

packages/agent/tools/
└── ask-manual.ts               # new agent tool — semantic search over manual

apps/web/app/api/v1/manuals/
└── route.ts                    # POST — ingest manual for product
                                # GET  — check if manual available for product

apps/web/app/(app)/vault/[id]/
└── manual/page.tsx             # "Ask your manual" tab on warranty detail

apps/partner/app/(partner)/products/
└── [id]/manual/page.tsx        # Upload/manage manual for a product
```

### New agent tool

```typescript
ask_manual(input: { product_id: string; question: string })
// Returns: { answer: string; source_section?: string; page_number?: number }
// If no manual: returns { answer: null, reason: 'no_manual_available' }
```

### Agent response format (WhatsApp)

```
User: "How do I clean the filter on my Hoover washing machine?"
Paxr: "To clean the filter on the Hoover H-Wash 500: open the
       panel on the bottom-front of the machine, turn the filter
       anticlockwise to remove, rinse under cold water, and replace.
       Do this every 3 months. (From your Hoover manual, Section 5.)"
```

### PWA warranty detail screen addition

```
New tab on warranty detail: "Manual"
  Headline:    "Ask your {product} manual."
  Sub:         "Get instant answers about installation, settings, and care."
  Input:       "Ask a question..."
  Empty state: "Your {product} manual is ready. What do you need to know?"
  No manual:   "Your {brand} manual isn't available yet. We're working on it."
```

### WhatsApp trigger

```
On QR registration (if manual available):
  Paxr: "Your {product} is registered. I also have your product manual
         — ask me anything about installation or settings any time."
```

### Plan gating

```
Free:  ask_manual NOT available
Pro:   ask_manual fully available — unlimited questions
```

### Manual ingestion — partner portal additions

```
Product detail page: new section "Product manual"
  Upload manual CTA:   "Upload product manual (PDF)"
  URL option:          "Or link to your online manual"
  Status states:
    No manual:         "No manual uploaded yet."
    Processing:        "Processing manual... this takes a few minutes."
    Indexed:           "Manual ready — customers can now ask questions."
    Error:             "Manual processing failed. Try re-uploading."
```

### Acceptance check

```bash
pnpm test:unit -- packages/agent/tools/ask-manual
pnpm test:unit -- services/manual-ingestion
# 1. Ingest Hoover manual PDF → text extracted → chunks stored
# 2. ask_manual('hoover-hwash-500', 'how do I clean the filter?') → correct answer
# 3. ask_manual for product without manual → { answer: null, reason: 'no_manual_available' }
# 4. WhatsApp: "How do I install my dishwasher?" → answer from manual with section ref
# 5. PWA: ask manual tab loads, question returns answer
# 6. Free user asks manual question → upgrade prompt
# 7. Partner: upload PDF → status shows "Processing" then "Indexed"
```

### Tasks

- [ ] `manuals` table already in SK-02 — verify it exists
- [ ] PDF text extraction: `pdf-parse` library
- [ ] URL scraping: `cheerio` + `node-fetch`
- [ ] Text chunker: split into 500-token overlapping chunks
- [ ] Chunk storage: store in `manual_chunks` table (id, manual_id, chunk_index, content, embedding_placeholder)
- [ ] `ask_manual` tool: keyword + semantic search over chunks, pass top 3 to Claude for synthesis
- [ ] Add `ask_manual` to agent tool registry in `packages/agent/tools/index.ts`
- [ ] Update system prompt to include manual capability
- [ ] `POST /api/v1/manuals` — upload endpoint (admin + partner portal)
- [ ] `GET /api/v1/manuals?product_id=` — check availability
- [ ] Manual tab on warranty detail page (PWA)
- [ ] Manual upload section in partner portal product detail
- [ ] Manual ingestion status polling (Processing → Indexed)
- [ ] Plan gate: Free users see upgrade prompt
- [ ] WhatsApp trigger message on QR registration if manual available
- [ ] Integration tests: ingest → query → correct answer

---

## SK-15 · Brand Research Panel

```
Status:      ⬜ TODO
Depends on:  SK-12 (partner portal must exist)
Phase:       Phase 3
Priority:    P2 — high commercial value, build after partner portal is stable
Surface:     Surface 5 extension (partner portal) + Surface 1 addition (customer opt-in)
```

### What Marv said

> "We can get them to sign up for a fee, to give you personalised feedback on your product.
> Give you 1,000 customer ideas — you synthesise — you have your next product.
> The customer that loves your product will always buy your new release.
> So they are your test field. They are already trained testers."

### Objective

Turn Paxr's registered customer base into an opt-in research panel for brands.
Customers consent to give product feedback. Brands pay to access verified owners
at specific lifecycle stages — filtered by product, time-owned, region, and usage signals.

This is a **new revenue stream** that does not require any new consumer acquisition —
it monetises the data relationship Paxr already has.

### How it works

```
Customer side:
  User opts in to research panel during onboarding or in profile settings
  They set preferences: willing to give feedback on which product categories
  Paxr occasionally sends short surveys via WhatsApp (2–3 questions max)
  Users receive: in-app credit, discount extensions, or small rewards

Brand side:
  Brand requests a research cohort via partner portal
  Specifies: product, ownership duration, region, sample size
  Paxr matches and invites opted-in users
  Results aggregated and delivered to brand portal dashboard
  Brand pays per response or per cohort
```

### Files to create

```
packages/db/src/schema/
└── research_panel.ts          # user research preferences + opt-in status
└── research_requests.ts       # brand research requests
└── research_responses.ts      # user survey responses

apps/web/app/(app)/profile/
└── research/page.tsx          # "Join research panel" opt-in screen

apps/partner/app/(partner)/
└── insights/
    ├── page.tsx               # Research panel overview
    ├── new-request/page.tsx   # Create research request
    └── [id]/page.tsx          # View results

services/research/src/
├── matcher.ts                 # match brand request to eligible users
├── survey-sender.ts           # WhatsApp survey dispatch
└── aggregator.ts              # anonymise + aggregate results
```

### Customer opt-in screen copy

```
Headline:  "Help shape future products."
Sub:       "Join the Paxr research panel. Get occasional questions from
            brands about products you own. Earn rewards for your time."
Opt-in CTA: "Join the panel"
What to expect:
  "2–3 questions at a time. No spam. You control which categories."
  "Rewards: extended warranties, in-app credit, or partner discounts."
Preference:  "Which product categories are you happy to give feedback on?"
             [Appliances · Electronics · Kitchen · Home · All of the above]
```

### Partner portal research screen copy

```
Page title:    "Customer insights."
Sub:           "Request feedback from verified owners of your products."
Empty state:   "No research requests yet. Create your first request."
New request:
  Product:      "Which product?"
  Duration:     "How long have they owned it? (months)"
  Region:       "Region (UK / Global)"
  Sample size:  "How many responses? (min 50)"
  Questions:    "Your questions (max 3)"
  Estimated cost: "Estimated cost: £{n} ({n}p per response)"
  CTA:          "Submit request"
Results:
  Response rate: "{n}% responded"
  Summary:       AI-synthesised key themes from responses
  Export:        "Export raw responses as CSV"
```

### WhatsApp survey message format

```
Paxr: "Hi {name}. {brand} would like your feedback on your {product}
       (you've had it for {n} months). Just 2 quick questions.
       Ready? Reply YES to start or NO to skip."
```

### Acceptance check

```bash
pnpm test:unit -- services/research
# 1. User opts in → preferences saved
# 2. Brand creates research request → eligible users matched
# 3. Survey sent via WhatsApp → user receives
# 4. User responds → response stored + anonymised
# 5. Brand portal → results aggregated with key themes
# 6. User who opted out → never matched to any request
```

### Tasks

- [ ] DB schema: research_panel, research_requests, research_responses
- [ ] Customer opt-in page + preferences UI
- [ ] Profile settings: manage/update research panel preferences
- [ ] `matcher.ts`: query users by product ownership + duration + region + opt-in status
- [ ] `survey-sender.ts`: dispatch via WhatsApp + track send status
- [ ] `aggregator.ts`: anonymise + aggregate responses + Claude synthesis of key themes
- [ ] Partner portal: insights section (all screens above)
- [ ] New research request form + cost estimation
- [ ] Results view with AI summary
- [ ] Billing: research panel charges via Stripe (separate product/price from subscription)

---

## Build Progress

| Skill | Title | Status | Surface | Phase |
|---|---|---|---|---|
| SK-00 | Marketing Website | ✅ DONE | getpaxr.com | MVP |
| SK-00b | Website Content Update | ⬜ TODO | getpaxr.com | MVP |
| SK-01 | Project Scaffold | ⬜ TODO | All | MVP |
| SK-02 | Database Schema | ⬜ TODO | All | MVP |
| SK-03 | Authentication | ⬜ TODO | All | MVP |
| SK-04 | Warranty Vault API | ⬜ TODO | Backend | MVP |
| SK-05 | Customer PWA — Vault UI | ⬜ TODO | Surface 1 | MVP |
| SK-06 | QR Resolver | ⬜ TODO | Surface 1 | MVP |
| SK-07 | Document Storage + OCR | ⬜ TODO | Surface 1 | MVP |
| SK-08 | Notification Engine | ⬜ TODO | All | MVP |
| SK-09 | WhatsApp Agent | ⬜ TODO | Surface 2 | MVP |
| SK-10 | Stripe Billing | ⬜ TODO | Surface 3 | MVP |
| SK-11 | Admin Dashboard | ⬜ TODO | Surface 4 | MVP |
| SK-12 | Partner Portal | ⬜ TODO | Surface 5 | Phase 2 |
| SK-13 | Analytics Layer | ⬜ TODO | All | Phase 2 |
| SK-14 | Digital Manual + Q&A | ⬜ TODO | Surface 1+2 | Phase 2 |
| SK-15 | Brand Research Panel | ⬜ TODO | Surface 5 | Phase 3 |

**Total skills: 17 · Completed: 1 (SK-00) · MVP remaining: 11**

---

*SKILLS.md — Paxr v0.3 · getpaxr.com · Peace, handled. · April 2026*
