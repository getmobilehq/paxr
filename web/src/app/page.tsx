import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/Container";
import { Eyebrow } from "@/components/Eyebrow";
import { ButtonLink, ArrowRight } from "@/components/Button";
import { PhoneFrame, StatusBar } from "@/components/PhoneFrame";
import { ChatBubble, ChatStack, Mono } from "@/components/ChatBubble";
import { Mark } from "@/components/Wordmark";

export const metadata: Metadata = {
  title: "Paxr — Your AI Warranty Agent | Peace, handled.",
  description:
    "Paxr manages every warranty in your home. Scan a QR code to register in under 20 seconds. Get WhatsApp reminders before warranties expire. Renew automatically. Start free.",
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <SocialProof />
      <Problem />
      <HowItWorks />
      <Features />
      <AgentSection />
      <PricingPreview />
      <BrandsTeaser />
      <FinalCTA />
    </>
  );
}

function Hero() {
  return (
    <section className="relative -mt-[64px] flex min-h-screen items-center overflow-hidden bg-paxr-deep pt-[64px] text-paxr-stone">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 30% 20%, rgba(246,245,241,0.3) 0, transparent 40%), radial-gradient(circle at 75% 70%, rgba(62,201,154,0.12) 0, transparent 55%)",
        }}
      />
      <Mark
        tone="stone"
        size={220}
        className="pointer-events-none absolute right-10 top-20 opacity-15"
      />
      <Container className="relative py-20 md:py-24">
        <div className="grid items-center gap-14 md:grid-cols-[1.15fr_1fr]">
          <div>
            <Eyebrow onDark className="text-paxr-jade">
              Your warranty agent
            </Eyebrow>
            <h1 className="mt-7 font-display text-[clamp(64px,10vw,120px)] font-semibold leading-[0.95] -tracking-[0.035em] text-paxr-stone">
              Peace,
              <br />
              <em className="font-light italic text-paxr-jade">handled.</em>
            </h1>
            <p className="mt-8 max-w-[560px] text-[18px] leading-relaxed text-paxr-stone/70">
              Paxr manages every warranty in your home — registers them in
              seconds, reminds you before they expire, and renews them for you.
              Without you having to think about it.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-3">
              <ButtonLink href="/signup" size="lg">
                Start for free
                <ArrowRight />
              </ButtonLink>
              <ButtonLink
                href="/how-it-works"
                variant="ghost"
                size="lg"
                onDark
              >
                See how it works
              </ButtonLink>
            </div>
            <p className="mt-5 text-[12px] text-paxr-stone/50">
              Free for up to 3 warranties · No credit card required
            </p>
          </div>

          <div className="relative flex justify-center">
            <HeroPhoneMockup />
          </div>
        </div>
      </Container>
    </section>
  );
}

function HeroPhoneMockup() {
  return (
    <PhoneFrame className="max-w-[280px]">
      <StatusBar />
      <div className="flex items-center justify-between px-4 pb-3 pt-2.5">
        <span className="font-display text-[22px] font-black tracking-[0.04em] text-paxr-deep">
          pax<span className="text-paxr-jade">r</span>
        </span>
        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-paxr-pale font-display text-[11px] font-medium text-paxr-deep">
          E
        </span>
      </div>
      <div className="px-4 pb-3.5 text-[11px] text-paxr-mist">
        <strong className="font-medium text-paxr-deep">14 warranties</strong> ·
        2 expiring soon
      </div>

      <div className="flex-1 space-y-3 px-3">
        <HeroMiniCard
          brand="Hoover"
          product="H-Wash 500"
          days={412}
          tone="jade"
        />
        <HeroMiniCard
          brand="Sony"
          product="Bravia A80L OLED"
          days={23}
          tone="amber"
        />
      </div>

      <div className="mt-auto flex shrink-0 items-center justify-around bg-paxr-deep px-6 pb-5 pt-3">
        {[
          { label: "Vault", active: true },
          { label: "Agent", active: false },
          { label: "Profile", active: false },
        ].map((t) => (
          <span
            key={t.label}
            className={
              t.active
                ? "text-[10px] uppercase tracking-[0.1em] text-paxr-jade"
                : "text-[10px] uppercase tracking-[0.1em] text-paxr-stone/40"
            }
          >
            {t.label}
          </span>
        ))}
      </div>
    </PhoneFrame>
  );
}

function HeroMiniCard({
  brand,
  product,
  days,
  tone,
}: {
  brand: string;
  product: string;
  days: number;
  tone: "jade" | "amber";
}) {
  const bar = tone === "amber" ? "bg-paxr-amber" : "bg-paxr-jade";
  const count = tone === "amber" ? "text-paxr-amber-ink" : "text-paxr-jade-dim";
  return (
    <div className="relative overflow-hidden rounded-xl border border-paxr-line bg-white p-3">
      <span className={`absolute inset-x-0 top-0 h-0.5 ${bar}`} />
      <div className="text-[9px] font-medium uppercase tracking-[0.18em] text-paxr-mist">
        {brand}
      </div>
      <div className="mt-1 font-display text-[13px] font-semibold leading-tight text-paxr-deep">
        {product}
      </div>
      <div className="mt-2 flex items-baseline gap-1.5">
        <span
          className={`font-mono text-[20px] font-medium leading-none ${count}`}
        >
          {days}
        </span>
        <span className="text-[10px] text-paxr-mist">days left</span>
      </div>
    </div>
  );
}

function SocialProof() {
  const stats = [
    {
      value: "£380",
      body: "Average UK household loses each year in repairs that should have been covered under warranty.",
    },
    {
      value: "14",
      body: "Devices in the average UK home with potential warranty coverage. Most go unregistered.",
    },
    {
      value: "<20 sec",
      body: "Time to register a warranty with Paxr. No portals. No forms. Just scan.",
    },
  ];
  return (
    <section className="border-y border-paxr-line bg-paxr-pale py-16">
      <Container>
        <div className="grid gap-10 md:grid-cols-3">
          {stats.map((s) => (
            <div
              key={s.value}
              className="border-t border-paxr-line pt-5 md:border-t-0 md:pt-0"
            >
              <div className="font-display text-[36px] font-semibold leading-none -tracking-[0.02em] text-paxr-deep">
                {s.value}
              </div>
              <p className="mt-3 max-w-[320px] text-[14px] leading-relaxed text-paxr-ink-3">
                {s.body}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

function Problem() {
  const cards = [
    {
      title: "Forgotten and fragmented",
      body: "Warranty cards live in drawers, email inboxes, and manufacturer portals you'll never visit again. There's no single view of what you own.",
    },
    {
      title: "Silent expiry",
      body: "Most warranties expire without a single notification. You find out when something breaks and there's nothing left to claim on.",
    },
    {
      title: "Missed renewals",
      body: "Extended warranty options pass unnoticed. The window closes. You pay full price for repairs that could have cost you nothing.",
    },
  ];
  return (
    <section className="bg-white py-28">
      <Container>
        <SectionHead
          eyebrow="The problem"
          title={<>Your warranties are expiring quietly.</>}
          sub="The average UK home has 14 devices with active warranty coverage. Most people have no idea — until something breaks."
        />
        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {cards.map((c) => (
            <div
              key={c.title}
              className="rounded-lg border border-paxr-line bg-paxr-stone p-7"
            >
              <h3 className="mb-3 font-display text-[20px] font-semibold leading-snug -tracking-[0.01em] text-paxr-deep">
                {c.title}
              </h3>
              <p className="text-[14px] leading-relaxed text-paxr-ink-3">
                {c.body}
              </p>
            </div>
          ))}
        </div>
        <p className="mt-12 text-[16px] text-paxr-ink-3">
          Paxr fixes all three. Here&apos;s how.
        </p>
      </Container>
    </section>
  );
}

function HowItWorks() {
  const steps = [
    {
      n: "01",
      title: "Scan the QR code.",
      body: "Find the Paxr QR code printed inside your product box, on the manual, or on a card included by the manufacturer. Open the app. Scan. Done.",
      sup: "No QR code? Add manually or photograph your receipt — Paxr reads the date and product details automatically.",
    },
    {
      n: "02",
      title: "Your warranty is in the vault.",
      body: "Paxr reads the QR code, confirms your product and warranty terms, and adds it to your vault. You see the expiry date, the warranty type, and exactly how long you're covered for.",
    },
    {
      n: "03",
      title: "Paxr handles everything else.",
      body: "From here, you don't need to think about it. Paxr monitors every warranty, messages you on WhatsApp before anything expires, and renews them for you the moment you reply.",
    },
  ];
  return (
    <section className="bg-paxr-stone py-28">
      <Container>
        <SectionHead
          eyebrow="How it works"
          title={<>From box to protected in 20 seconds.</>}
        />
        <ol className="mt-14 grid gap-12 md:grid-cols-3">
          {steps.map((s) => (
            <li key={s.n} className="border-t border-paxr-line pt-6">
              <div className="font-mono text-[13px] tracking-[0.18em] text-paxr-mist">
                {s.n}
              </div>
              <h3 className="mt-4 font-display text-[22px] font-semibold leading-snug -tracking-[0.01em] text-paxr-deep">
                {s.title}
              </h3>
              <p className="mt-3 text-[14px] leading-relaxed text-paxr-ink-3">
                {s.body}
              </p>
              {s.sup && (
                <p className="mt-3 text-[12px] italic text-paxr-mist">
                  {s.sup}
                </p>
              )}
            </li>
          ))}
        </ol>
        <div className="mt-14 flex flex-wrap items-center gap-3">
          <ButtonLink href="/signup">Start for free</ButtonLink>
          <ButtonLink href="/how-it-works" variant="ghost">
            See the full journey
          </ButtonLink>
        </div>
      </Container>
    </section>
  );
}

function Features() {
  const features: Array<{ title: string; body: string; pro?: boolean }> = [
    {
      title: "All your warranties, one place",
      body: "Every device you own, every warranty you hold. Active, expiring, and expired — always visible in a single vault. No more drawers. No more portals.",
    },
    {
      title: "AI agent on WhatsApp",
      body: "Paxr messages you on WhatsApp before any warranty expires. Reply YES to renew. It handles the rest — no apps to open, no forms to fill, no portals to find.",
    },
    {
      title: "Scan to register in seconds",
      body: "No forms. No manufacturer portals. Scan the QR code in the box. Your warranty is registered in under 20 seconds, with all the terms already confirmed.",
    },
    {
      title: "Expiry alerts that actually land",
      body: "90, 30, 7, and 1 day warnings — delivered on WhatsApp, push notification, or SMS. You choose how you want to hear. You'll never be caught out again.",
    },
    {
      title: "Claim guidance, step by step",
      body: "Something broke? Message Paxr. It confirms whether you're still covered and walks you through the claim process for that specific manufacturer — no searching, no guessing.",
    },
    {
      title: "Receipt and document storage",
      body: "Upload your receipts and warranty documents once. They live in your vault permanently — accessible any time you need to make a claim or prove ownership.",
    },
    {
      title: "Ask your product manual anything",
      body: "Every product manual, fully searchable. Ask Paxr how to install it, set a programme, or troubleshoot a problem — and get the answer instantly, referenced back to the exact page.",
      pro: true,
    },
  ];
  return (
    <section className="bg-white py-28">
      <Container>
        <SectionHead
          eyebrow="What Paxr does"
          title={<>Everything in one vault.</>}
        />
        <div className="mt-14 grid gap-px overflow-hidden rounded-lg border border-paxr-line bg-paxr-line md:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => (
            <div key={f.title} className="relative bg-white p-7">
              {f.pro && (
                <span className="absolute right-5 top-5 rounded bg-paxr-jade/12 px-2 py-0.5 font-mono text-[10px] font-medium uppercase tracking-[0.16em] text-paxr-jade-dim">
                  Pro
                </span>
              )}
              <h3 className="mb-3 max-w-[260px] font-display text-[18px] font-semibold leading-snug -tracking-[0.01em] text-paxr-deep">
                {f.title}
              </h3>
              <p className="text-[14px] leading-relaxed text-paxr-ink-3">
                {f.body}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

function AgentSection() {
  const callouts = [
    {
      title: "Proactive, not reactive",
      body: "Paxr reaches out before expiry — you don't need to remember to ask.",
    },
    {
      title: "One reply. Done.",
      body: "Reply YES on WhatsApp. Paxr handles the renewal, confirms it, and emails your certificate.",
    },
    {
      title: "Always on",
      body: "Paxr monitors every warranty in your vault, every day. It never forgets. It never misses one.",
    },
  ];
  return (
    <section className="bg-paxr-deep py-28 text-paxr-stone">
      <Container>
        <div className="grid items-start gap-16 md:grid-cols-[1fr_1.05fr]">
          <div>
            <Eyebrow onDark>Your agent</Eyebrow>
            <h2 className="mt-6 font-display text-[clamp(36px,5vw,56px)] font-semibold leading-[1.05] -tracking-[0.02em] text-paxr-stone">
              Meet Paxr.
            </h2>
            <p className="mt-6 max-w-[520px] text-[17px] leading-relaxed text-paxr-stone/70">
              Paxr isn&apos;t a reminder app. It&apos;s an agent. It acts on
              your behalf — monitors every warranty, reaches out before they
              expire, and handles renewals while you get on with your day.
            </p>

            <div className="mt-12 font-display text-[42px] font-light italic leading-none -tracking-[0.01em] text-paxr-jade">
              &ldquo;Handled.&rdquo;
            </div>

            <div className="mt-12 grid gap-4 sm:grid-cols-3">
              {callouts.map((c) => (
                <div
                  key={c.title}
                  className="rounded-lg border border-white/10 bg-white/[0.04] p-5"
                >
                  <h4 className="mb-2 text-[13px] font-medium text-paxr-stone">
                    {c.title}
                  </h4>
                  <p className="text-[12px] leading-relaxed text-paxr-stone/55">
                    {c.body}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-10">
              <ButtonLink href="/signup">Start for free</ButtonLink>
            </div>
          </div>

          <div className="relative flex justify-center">
            <div className="w-full max-w-[440px] rounded-2xl bg-paxr-depth p-6">
              <div className="mb-5 flex items-center gap-3 border-b border-white/10 pb-4">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-paxr-jade font-display text-[14px] font-bold text-paxr-deep">
                  P
                </div>
                <div>
                  <div className="font-display text-[15px] font-semibold text-paxr-stone">
                    Paxr
                  </div>
                  <div className="text-[11px] text-paxr-jade">
                    ● Online · WhatsApp
                  </div>
                </div>
              </div>
              <ChatStack>
                <ChatBubble from="paxr">
                  Hi Marcus. Your Hoover washing machine warranty expires in{" "}
                  <Mono>23 days</Mono>. A 2-year extension costs{" "}
                  <Mono>£29</Mono>. Want me to handle the renewal?
                </ChatBubble>
                <ChatBubble from="user">Yes please</ChatBubble>
                <ChatBubble from="paxr">
                  Done. Your Hoover is covered until <Mono>November 2027</Mono>.
                  Certificate sent to your email.
                </ChatBubble>
              </ChatStack>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

function PricingPreview() {
  return (
    <section className="bg-paxr-stone py-28">
      <Container>
        <SectionHead
          eyebrow="Pricing"
          title={<>Free to start. £10 a year to never worry again.</>}
        />
        <div className="mt-14 grid gap-6 md:grid-cols-2">
          <PlanCard
            name="Paxr Free"
            price="£0"
            suffix="/ forever"
            description="Start protecting your most important devices. No credit card required."
            features={[
              "Up to 3 warranties",
              "QR code registration",
              "Manual entry",
              "Push notification alerts",
            ]}
            cta={{
              label: "Get started free",
              href: "/signup",
              variant: "ghost",
            }}
          />
          <PlanCard
            featured
            name="Paxr Pro"
            price="£10"
            suffix="/ year"
            badge="30-day free trial"
            description="The full agent experience. Every warranty handled. Every renewal automated. Every claim guided."
            features={[
              "Unlimited warranties",
              "WhatsApp AI agent",
              "Automatic renewal handling",
              "Claim guidance",
              "Ask your product manual anything",
              "Installation and setup guidance",
              "Receipt & document storage",
              "SMS fallback notifications",
              "Priority support",
              "Everything in Free",
            ]}
            cta={{
              label: "Start 30-day free trial",
              href: "/signup?plan=pro",
              variant: "primary",
            }}
          />
        </div>
        <p className="mt-8 text-[13px] text-paxr-mist">
          No credit card required for the trial · Cancel anytime · Less than 83p
          a month
        </p>
        <Link
          href="/pricing"
          className="mt-5 inline-flex text-[13px] font-medium text-paxr-jade-dim underline decoration-1 underline-offset-4"
        >
          See full plan comparison →
        </Link>
      </Container>
    </section>
  );
}

function PlanCard({
  name,
  price,
  suffix,
  description,
  features,
  cta,
  badge,
  featured = false,
}: {
  name: string;
  price: string;
  suffix: string;
  description: string;
  features: string[];
  cta: { label: string; href: string; variant: "primary" | "ghost" };
  badge?: string;
  featured?: boolean;
}) {
  return (
    <div
      className={`rounded-xl border p-8 ${
        featured
          ? "border-paxr-deep bg-white shadow-[0_20px_50px_-30px_rgba(14,27,41,0.3)]"
          : "border-paxr-line bg-white"
      }`}
    >
      {badge && (
        <span className="mb-4 inline-block rounded-full bg-paxr-deep/8 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.14em] text-paxr-deep">
          {badge}
        </span>
      )}
      <h3 className="font-display text-[22px] font-semibold text-paxr-deep">
        {name}
      </h3>
      <div className="mt-3 flex items-baseline gap-2">
        <span className="font-display text-[40px] font-semibold leading-none -tracking-[0.02em] text-paxr-deep">
          {price}
        </span>
        <span className="text-[14px] font-light text-paxr-mist">{suffix}</span>
      </div>
      <p className="mt-4 max-w-[360px] text-[14px] leading-relaxed text-paxr-ink-3">
        {description}
      </p>
      <ul className="mt-6 space-y-2.5">
        {features.map((f) => (
          <li key={f} className="flex gap-2.5 text-[14px] text-paxr-deep">
            <span
              aria-hidden
              className="mt-1 h-1.5 w-1.5 rounded-full bg-paxr-jade"
            />
            {f}
          </li>
        ))}
      </ul>
      <div className="mt-8">
        <ButtonLink href={cta.href} variant={cta.variant}>
          {cta.label}
        </ButtonLink>
      </div>
    </div>
  );
}

function BrandsTeaser() {
  return (
    <section className="bg-paxr-deep py-24 text-paxr-stone">
      <Container>
        <div className="grid items-end gap-12 md:grid-cols-[1.2fr_1fr]">
          <div>
            <Eyebrow onDark>For manufacturers &amp; retailers</Eyebrow>
            <h2 className="mt-6 font-display text-[clamp(34px,5vw,54px)] font-semibold leading-[1.05] -tracking-[0.02em] text-paxr-stone">
              Your partner in the{" "}
              <em className="font-light italic text-paxr-jade">
                product lifecycle
              </em>
              .
            </h2>
            <p className="mt-6 max-w-[560px] text-[17px] leading-relaxed text-paxr-stone/70">
              From first scan to next purchase — Paxr manages the entire
              customer ownership journey on your behalf. Registration data,
              renewal revenue, usage intelligence, and a built-in research
              panel of verified product owners ready for your next launch.
            </p>
          </div>
          <div>
            <ButtonLink href="/brands" size="lg">
              Learn about brand partnerships
              <ArrowRight />
            </ButtonLink>
          </div>
        </div>
      </Container>
    </section>
  );
}

function FinalCTA() {
  return (
    <section className="bg-paxr-deep py-32 text-center text-paxr-stone">
      <Container>
        <h2 className="mx-auto max-w-[780px] font-display text-[clamp(40px,6vw,72px)] font-semibold leading-[1.02] -tracking-[0.025em] text-paxr-stone">
          The next thing you buy — protect it with{" "}
          <em className="font-light italic text-paxr-jade">Paxr</em>.
        </h2>
        <p className="mx-auto mt-6 max-w-[480px] font-display text-[22px] font-light italic text-paxr-stone/70">
          Scan the QR code. 20 seconds. Done.
        </p>
        <div className="mt-10 flex justify-center">
          <ButtonLink href="/signup" size="lg">
            Get started free
            <ArrowRight />
          </ButtonLink>
        </div>
        <p className="mt-5 text-[12px] text-paxr-stone/50">
          30-day Pro trial · No credit card required · Cancel anytime
        </p>
      </Container>
    </section>
  );
}

function SectionHead({
  eyebrow,
  title,
  sub,
}: {
  eyebrow: string;
  title: React.ReactNode;
  sub?: string;
}) {
  return (
    <div className="grid items-end gap-10 md:grid-cols-[1.3fr_1fr]">
      <div>
        <Eyebrow>{eyebrow}</Eyebrow>
        <h2 className="mt-5 font-display text-[clamp(32px,4.5vw,52px)] font-semibold leading-[1.05] -tracking-[0.02em] text-paxr-deep">
          {title}
        </h2>
      </div>
      {sub && (
        <p className="max-w-[520px] text-[17px] leading-relaxed text-paxr-ink-3">
          {sub}
        </p>
      )}
    </div>
  );
}
