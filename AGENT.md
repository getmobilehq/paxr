# AGENT.md — Paxr
> Claude Code master instruction file. Read this **entirely** before writing any code.
> This is the single source of truth for how this codebase is built, structured, and evolved.
> File location: repo root `/AGENT.md`

---

## 0. Who You Are

You are the lead engineer on **Paxr** — an AI-native warranty management agent.
Your job is not just to write code. You are building a product. Every decision must pass this test:

> *"Does this make the product simpler, faster, or more reliable for a user registering a warranty in under 20 seconds?"*

If the answer is no — stop and reconsider.

---

## 1. Project Overview

| Field | Value |
|---|---|
| Product | Paxr — Your Warranty Agent |
| Domain | getpaxr.com |
| Tagline | Peace, handled. |
| Mission | Make warranty management zero-effort via an AI agent |
| Stage | MVP (Phase 1) |
| Monorepo | Turborepo + pnpm workspaces |
| Primary language | TypeScript (strict mode, no exceptions) |
| Testing | Vitest (unit) · Playwright (e2e) · MSW (API mocking) |

---

## 2. Monorepo Structure

```
paxr/
├── apps/
│   ├── mobile/               # Expo React Native — consumer app
│   ├── web/                  # Next.js 15 — marketing site + web app
│   └── partner/              # Next.js 15 — brand partner portal
├── packages/
│   ├── db/                   # Drizzle ORM schema + migrations
│   ├── ui/                   # Shared component library
│   ├── agent/                # Claude AI agent core
│   ├── api-client/           # Type-safe API client
│   └── config/               # Shared ESLint, TSConfig, Tailwind, env
├── services/
│   ├── qr-resolver/          # QR → Product + Warranty resolution
│   ├── notification/         # Expiry scheduler + multi-channel dispatch
│   └── whatsapp/             # WhatsApp Business API webhook handler
├── supabase/
│   ├── migrations/           # SQL migration files
│   └── seed.sql              # Dev seed data
├── content/
│   ├── paxr-website-content.html   # All marketing copy — source of truth
│   ├── paxr-brand-identity.html    # Design system reference
│   └── paxr-design-handoff.html    # Design tokens + component specs
├── AGENT.md                  # You are here
├── SKILLS.md                 # Build skill modules
├── LOOP.md                   # Active session state
├── turbo.json
├── package.json
└── .env.example
```

---

## 3. Design System (LOCKED — Apply to Every Screen)

### Colours

```css
:root {
  /* Core palette */
  --paxr-deep:     #0E1B29;   /* Primary dark. Dark UIs, text on light */
  --paxr-depth:    #1C2E40;   /* Card surfaces on dark */
  --paxr-jade:     #3EC99A;   /* THE accent. One element per screen max */
  --paxr-jade-dim: #2D9A76;   /* Jade hover state */
  --paxr-stone:    #F6F5F1;   /* App background — never pure white */
  --paxr-pale:     #EAE9E4;   /* Borders, dividers, light card surfaces */
  --paxr-mist:     #8FA3B1;   /* Secondary text, labels, metadata */

  /* Semantic */
  --paxr-amber:    #E8A020;   /* Expiry warnings ONLY. Never decorative */
  --paxr-error:    #C0392B;   /* Expired status, errors, destructive */

  /* Tailwind mapping */
  /* Use paxr-deep, paxr-jade, paxr-stone as primary class names */
}
```

### Typography

| Role | Font | Weight | When |
|---|---|---|---|
| Display / Hero | Fraunces | 900 | Wordmark, hero headlines, campaign |
| Headings | Fraunces | 700 | Screen titles, section headers |
| Agent / Quote | Fraunces | 300 italic | Agent messages, pull quotes |
| UI labels | DM Sans | 500 | Category labels, nav, buttons |
| Body / UI | DM Sans | 400 | All body copy, forms, descriptions |
| Data / Code | Courier Prime | 400 | Dates, warranty codes, serial numbers |

**Google Fonts CDN (add to every app):**
```
https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,300;0,9..144,700;0,9..144,900;1,9..144,300&family=DM+Sans:wght@300;400;500&family=Courier+Prime:wght@400;700&display=swap
```

### Spacing (8pt grid — no arbitrary pixel values)

```
--space-1:  4px    --space-2:  8px    --space-3: 12px
--space-4:  16px   --space-6:  24px   --space-8: 32px
--space-12: 48px   --space-16: 64px   --space-24: 96px
```

### Border radius

```
6px  → buttons, badges, tags
8px  → cards, inputs (default)
12px → larger cards, modals
20px → full-bleed mobile cards
9999px → pills, avatars
```

### Motion

```
Duration:  200ms standard · 400ms page transitions
Easing:    ease-out cubic — always. No spring, no bounce.
Rule:      Paxr never bounces. It settles.
```

### Design rules (absolute — never break these)

1. Wordmark is always lowercase `paxr` — never `Paxr`, never `PAXR`
2. Jade used for **maximum one element per screen** — scarcity is its power
3. Jade means resolved/active/confirmed — never use it decoratively
4. Amber means expiry warning — never use it decoratively
5. Background is always `#F6F5F1` Stone — never `#FFFFFF` pure white
6. **No exclamation marks** in any UI copy — ever. Paxr states, never shouts
7. No gradients — flat fills only throughout the product
8. No drop shadows except functional focus rings (`box-shadow: 0 0 0 3px`)

---

## 4. Technology Stack (LOCKED)

### Frontend

| Layer | Choice |
|---|---|
| Mobile | Expo SDK 51 + React Native |
| Web / Marketing | Next.js 15 App Router |
| Styling | NativeWind v4 (mobile) + Tailwind CSS (web) |
| State | Zustand + TanStack Query v5 |
| Mobile navigation | Expo Router v3 |
| Forms | React Hook Form + Zod |
| Animations | Reanimated 3 (mobile) + CSS transitions (web) |

### Backend

| Layer | Choice |
|---|---|
| API | Next.js API Routes (`/app/api/v1/`) |
| Auth | Supabase Auth (email + Google + Apple) |
| Database | PostgreSQL via Supabase |
| ORM | Drizzle ORM |
| File storage | Supabase Storage |
| Job scheduler | pg-boss (runs in Postgres) |
| Cache / sessions | Upstash Redis |
| AI agent | Anthropic `claude-sonnet-4-20250514` |

### Integrations

| Service | Purpose |
|---|---|
| WhatsApp Business API | Primary agent channel (Pro plan) |
| Twilio | SMS fallback |
| Stripe | Subscriptions — Free + Pro £10/yr |
| Expo Push | Mobile push notifications |
| Google Vision API | Receipt OCR |
| Resend | Transactional email |
| Sentry | Error monitoring (production) |

---

## 5. Database Conventions

- All tables: `snake_case` naming
- Every table has: `id uuid DEFAULT gen_random_uuid() PRIMARY KEY`, `created_at timestamptz`, `updated_at timestamptz`
- Schema defined in Drizzle ORM only — never raw SQL for schema
- Migrations: `supabase/migrations/` via `drizzle-kit generate`
- RLS enabled on every user-facing table — non-negotiable
- Never log PII

### Core tables

```
users             extends Supabase auth.users
brands            manufacturer/brand catalogue
products          product catalogue (FK → brands)
qr_codes          QR code → product mapping
devices           user-registered devices (FK → users, products)
warranties        warranty records (FK → devices)
documents         receipts and certificates (FK → warranties)
notifications     notification log (FK → users, warranties)
agent_sessions    conversation state per user (FK → users)
subscriptions     Stripe subscription records (FK → users)
```

### Warranty status enum

```typescript
type WarrantyStatus = 'active' | 'expiring_soon' | 'expired' | 'claimed'
// active:          >90 days remaining
// expiring_soon:   ≤90 days remaining
// expired:         past expiry date
// claimed:         claim filed against this warranty
```

---

## 6. API Conventions

```
Base path:    /app/api/v1/[resource]/route.ts
Auth:         createServerClient() from @supabase/ssr — every protected route
Validation:   Zod schema on all inputs before DB touch
Response:     { data: T | null, error: string | null }
Errors:       Never throw bare errors to client
Rate limiting: Upstash Redis on all public endpoints
```

```typescript
// Standard response shape — use everywhere, no exceptions
type ApiResponse<T> = {
  data: T | null
  error: string | null
  meta?: { page?: number; total?: number; count?: number }
}

// Result pattern for service-layer functions
type Result<T> = { ok: true; data: T } | { ok: false; error: string }
```

---

## 7. AI Agent Rules

The agent (`packages/agent/`) is the most important package in the codebase.

```
Model:          claude-sonnet-4-20250514 (always — no exceptions)
Context:        include user profile, vault summary, conversation history (last 10 msgs)
Persona:        Paxr — concise, declarative, active voice
System prompt:  packages/agent/prompts/system.ts — never inline it
Tool schemas:   all inputs typed with Zod
```

### Required tools

```typescript
get_warranties(userId: string)
get_warranty_detail(warrantyId: string)
check_expiry_status(warrantyId: string)      // returns days remaining
initiate_renewal(warrantyId: string, confirm: boolean)
get_claim_instructions(warrantyId: string)
add_warranty(input: AddWarrantyInput)
```

### Agent voice — examples

```
✓  Done. Covered until November 2027.
✓  Your Hoover warranty expires in 23 days. Renew for £29?
✓  I don't see that device in your vault.
✓  Certificate sent to your email.
✗  We're delighted to confirm your warranty has been registered!
✗  Please be advised that your warranty is approaching expiration.
✗  Hi there! Just a friendly reminder...
```

---

## 8. QR Resolver

**This is the moat.** Every brand partner that joins makes it more valuable.

```
Format:      PAXR-{brand_slug}-{product_sku}-{hmac_checksum}
Checksum:    HMAC-SHA256 — reject any code that fails verification
Resolution:  brand_id + product_id + warranty_months + terms_url
Cache:       Redis, TTL 7 days per code
Fallback:    unknown QR → return { resolved: false } → trigger manual entry
```

---

## 9. Notification Rules

```
Triggers:    90 days · 30 days · 7 days · 1 day before expiry
Channels:    WhatsApp (Pro) → Push → SMS → Email
Idempotent:  check notifications table before every send — no duplicates
Copy:        services/notification/templates/ — never hardcoded inline
```

---

## 10. Website Copy — Source of Truth

All marketing website copy lives in `content/paxr-website-content.html`.

**Pages:**

| Page | Path | Sections |
|---|---|---|
| Home | `/` | Hero · Proof bar · Problem · How it works · Features · Agent · Pricing · Brands teaser · Final CTA |
| How it works | `/how-it-works` | Hero · 3 registration methods · The vault · Agent alerts · Claims |
| Pricing | `/pricing` | Hero · Plan comparison · FAQ (6 questions) |
| For brands | `/brands` | Hero · Problem · How it works · Value props · Contact form |
| Privacy | `/privacy` | Structure only — solicitor required |
| Terms | `/terms` | Structure only — solicitor required |

**Rule:** All copy in the web app must match `paxr-website-content.html` exactly. Do not paraphrase.

---

## 11. Coding Standards

### TypeScript

```typescript
// ✅ Named exports, explicit types, Zod validation
export const createWarranty = async (
  input: z.infer<typeof CreateWarrantySchema>
): Promise<Result<Warranty>> => { ... }

// ❌ Never
const createWarranty = async (input: any) => { ... }
export default function() { ... }  // avoid default exports in lib code
```

### File naming

```
React components:  PascalCase.tsx
Utils / hooks:     camelCase.ts
Constants:         SCREAMING_SNAKE_CASE.ts
Type files:        types.ts (co-located)
Test files:        [name].test.ts
```

### Import order

```typescript
// 1. React
import { useState } from 'react'
// 2. Third-party
import { z } from 'zod'
// 3. Workspace packages
import { db } from '@paxr/db'
// 4. Local
import { WarrantyCard } from './WarrantyCard'
```

### Comments

```typescript
// WHY this exists, not WHAT it does
// TODO(phase-2): description of deferred work
/** JSDoc on every exported function */
```

---

## 12. Environment Variables

Validated at boot via `packages/config/env.ts` (Zod schema).
Never use `process.env` directly in app code — always import from `env.ts`.

```bash
# Supabase
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
SUPABASE_SERVICE_ROLE_KEY=

# AI
ANTHROPIC_API_KEY=

# Payments
STRIPE_SECRET_KEY=
STRIPE_WEBHOOK_SECRET=
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=

# Cache
UPSTASH_REDIS_REST_URL=
UPSTASH_REDIS_REST_TOKEN=

# Notifications
RESEND_API_KEY=
TWILIO_ACCOUNT_SID=
TWILIO_AUTH_TOKEN=
TWILIO_PHONE_NUMBER=
EXPO_ACCESS_TOKEN=

# Integrations
GOOGLE_VISION_API_KEY=
WHATSAPP_API_TOKEN=
WHATSAPP_PHONE_NUMBER_ID=
WHATSAPP_WEBHOOK_VERIFY_TOKEN=

# App
NEXT_PUBLIC_APP_URL=https://getpaxr.com
NEXT_PUBLIC_APP_ENV=development
SENTRY_DSN=
```

---

## 13. Commands

```bash
pnpm install                      # install all deps
pnpm dev                          # start all apps
pnpm dev --filter=web             # start web only
pnpm dev --filter=mobile          # start mobile only
pnpm dev --filter=partner         # start partner portal only

pnpm db:generate                  # generate Drizzle migration
pnpm db:migrate                   # apply migrations to local Supabase
pnpm db:seed                      # seed dev data
pnpm db:studio                    # open Drizzle Studio UI

pnpm test                         # run all tests
pnpm test:unit                    # Vitest only
pnpm test:e2e                     # Playwright only
pnpm typecheck                    # tsc --noEmit across all packages
pnpm lint                         # ESLint across all packages
pnpm format                       # Prettier

pnpm build                        # build all
pnpm build --filter=web           # build web only
```

---

## 14. Git Conventions

**Commit format:** `type(scope): description`

```
Types:   feat · fix · chore · refactor · test · docs · content
Scopes:  mobile · web · partner · agent · db · qr · notifications
         whatsapp · auth · billing · ui · config
```

**Examples:**
```bash
git commit -m "feat(web): build home page hero section"
git commit -m "feat(db): add warranties table with RLS policies"
git commit -m "feat(agent): implement get_warranties tool"
git commit -m "fix(qr): handle tampered checksum gracefully"
```

Branch from `main`. PR back. Never commit directly to `main`.

---

## 15. Security Rules

- Never log tokens, keys, or PII
- RLS on every user-facing Supabase table — no exceptions
- Verify webhook signatures (Stripe, WhatsApp) before processing payload
- Rate limit auth: 5 attempts / 15 minutes
- QR codes: HMAC-SHA256 checksums — reject any that fail
- File uploads: validate MIME server-side, 10MB max, malware scan in production

---

## 16. The Build Loop

Read `LOOP.md` at the start of every session.
Read `SKILLS.md` to find the next skill to build.
Follow the loop defined in `LOOP.md` without deviation.

---

*AGENT.md — Paxr v0.1 · getpaxr.com · Peace, handled. · April 2026*
