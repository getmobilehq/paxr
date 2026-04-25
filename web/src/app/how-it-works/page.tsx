import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { Eyebrow } from "@/components/Eyebrow";
import { ButtonLink, ArrowRight } from "@/components/Button";
import { ChatBubble, ChatStack, Mono } from "@/components/ChatBubble";

export const metadata: Metadata = {
  title: "How Paxr Works — Warranty Management in 20 Seconds",
  description:
    "Scan a QR code. Paxr registers your warranty, answers product manual questions, monitors expiry, and handles renewals on WhatsApp. See how it works.",
};

export default function HowItWorksPage() {
  return (
    <>
      <Hero />
      <Register />
      <Vault />
      <ProductCompanion />
      <Agent />
      <Claims />
      <ClosingCTA />
    </>
  );
}

function ProductCompanion() {
  const cards = [
    {
      title: "Ask your manual — instantly",
      body: "Every product comes with a manual nobody reads. Paxr reads it for you. Ask any question — “how do I set the eco programme?” or “how often should I clean the filter?” — and get an immediate answer referenced back to the page.",
    },
    {
      title: "Installation help",
      body: "Just bought something that needs setting up? Message Paxr. It walks you through the installation or setup process step by step, in plain language, based on your exact product and model.",
    },
    {
      title: "Available on WhatsApp",
      body: "Every question goes through WhatsApp — no app to open. “How do I reset the child lock on my washing machine?” Three replies later, it's sorted.",
    },
    {
      title: "From day one to claim day",
      body: "Paxr is with you from the moment you scan the box — through setup, daily use, and if something ever goes wrong — all the way through to a warranty claim and renewal.",
    },
  ];
  return (
    <section className="bg-paxr-pale py-28">
      <Container>
        <Eyebrow>Your product companion</Eyebrow>
        <h2 className="mt-5 max-w-[820px] font-display text-[clamp(32px,4.5vw,52px)] font-semibold leading-[1.05] -tracking-[0.02em] text-paxr-deep">
          More than warranties. Your entire product, answered.
        </h2>
        <p className="mt-6 max-w-[640px] text-[17px] leading-relaxed text-paxr-ink-3">
          Paxr doesn&apos;t stop at warranty management. Once your product is in
          the vault, Paxr becomes your companion for everything that comes with
          owning it — from setting it up to troubleshooting problems years
          later.
        </p>
        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {cards.map((c) => (
            <article
              key={c.title}
              className="rounded-lg border border-paxr-line bg-white p-7"
            >
              <h3 className="mb-3 font-display text-[20px] font-semibold leading-snug -tracking-[0.01em] text-paxr-deep">
                {c.title}
              </h3>
              <p className="text-[14px] leading-relaxed text-paxr-ink-3">
                {c.body}
              </p>
            </article>
          ))}
        </div>
        <p className="mt-10 font-display text-[15px] font-light italic text-paxr-mist">
          Available on Paxr Pro.
        </p>
        <div className="mt-6 flex flex-wrap items-center gap-3">
          <ButtonLink href="/sign-up">Start for free</ButtonLink>
          <ButtonLink href="/pricing" variant="ghost">
            See pricing
          </ButtonLink>
        </div>
      </Container>
    </section>
  );
}

function Hero() {
  return (
    <section className="-mt-[64px] bg-paxr-deep py-28 pt-40 text-paxr-stone md:py-36">
      <Container>
        <Eyebrow onDark>How it works</Eyebrow>
        <h1 className="mt-6 max-w-[860px] font-display text-[clamp(44px,7vw,92px)] font-semibold leading-[1.02] -tracking-[0.03em] text-paxr-stone">
          Warranty management that does{" "}
          <em className="font-light italic text-paxr-jade">itself</em>.
        </h1>
        <p className="mt-8 max-w-[620px] text-[18px] leading-relaxed text-paxr-stone/70">
          Three ways to register. One agent that handles everything after.
          Here&apos;s exactly what happens.
        </p>
      </Container>
    </section>
  );
}

function Register() {
  const methods = [
    {
      tag: "Recommended",
      label: "QR scan",
      title: "Find the Paxr QR code in the box.",
      body: "Manufacturers who partner with Paxr include a QR code inside every product box — on the manual, a card, or the packaging itself. Open the Paxr app, tap \"Scan,\" and point your camera at the code. Paxr reads the product, confirms your warranty terms, and registers you in under 20 seconds. No forms. No portals. No email confirmation chains.",
    },
    {
      label: "Manual entry",
      title: "No QR code? Add it manually.",
      body: "Search for your product by brand and model name. Enter your purchase date. Paxr looks up the standard warranty terms from the manufacturer and fills in the rest. Takes about 60 seconds. Works for any device, any brand, any age.",
    },
    {
      label: "Photo OCR",
      title: "Photograph your receipt.",
      body: "Have a pile of receipts and warranties you've never registered? Photograph each receipt. Paxr's OCR reads the purchase date, retailer, and product name automatically — and pre-fills your warranty registration. One tap to confirm.",
    },
  ];
  return (
    <section className="bg-paxr-stone py-28">
      <Container>
        <Eyebrow>Step one</Eyebrow>
        <h2 className="mt-5 max-w-[760px] font-display text-[clamp(32px,4.5vw,52px)] font-semibold leading-[1.05] -tracking-[0.02em] text-paxr-deep">
          Register in under 20 seconds.
        </h2>
        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {methods.map((m, i) => (
            <article
              key={m.label}
              className="flex flex-col gap-4 rounded-lg border border-paxr-line bg-white p-7"
            >
              <div className="flex items-center gap-2.5">
                {m.tag && (
                  <span className="inline-block rounded bg-paxr-deep/8 px-2.5 py-1 text-[10px] font-medium uppercase tracking-[0.14em] text-paxr-deep">
                    {m.tag}
                  </span>
                )}
                <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-paxr-mist">
                  0{i + 1} · {m.label}
                </span>
              </div>
              <h3 className="font-display text-[20px] font-semibold leading-snug -tracking-[0.01em] text-paxr-deep">
                {m.title}
              </h3>
              <p className="text-[14px] leading-relaxed text-paxr-ink-3">
                {m.body}
              </p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}

function Vault() {
  const items = [
    {
      k: "Active",
      body: "Warranty valid. More than 90 days remaining. Green indicator.",
    },
    {
      k: "Expiring soon",
      body: "Less than 90 days remaining. Paxr will contact you. Amber indicator.",
    },
    {
      k: "Expired",
      body: "Past the expiry date. Claim window closed. Record kept for reference.",
    },
    {
      k: "Documents",
      body: "Upload your original receipt or warranty certificate. Access any time you need it.",
    },
  ];
  return (
    <section className="bg-white py-28">
      <Container>
        <Eyebrow>Step two</Eyebrow>
        <h2 className="mt-5 max-w-[760px] font-display text-[clamp(32px,4.5vw,52px)] font-semibold leading-[1.05] -tracking-[0.02em] text-paxr-deep">
          Your vault. Everything in one view.
        </h2>
        <p className="mt-6 max-w-[640px] text-[17px] leading-relaxed text-paxr-ink-3">
          Once a warranty is registered, it lives in your vault permanently.
          Your vault shows every device you&apos;ve registered, organised by
          status — Active, Expiring soon, or Expired. You see exactly how long
          each warranty has left, when you registered it, and any documents
          you&apos;ve stored against it.
        </p>
        <div className="mt-14 grid gap-px overflow-hidden rounded-lg border border-paxr-line bg-paxr-line md:grid-cols-2">
          {items.map((i) => (
            <div key={i.k} className="bg-white p-6">
              <h4 className="mb-2 font-display text-[17px] font-semibold text-paxr-deep">
                {i.k}
              </h4>
              <p className="text-[14px] leading-relaxed text-paxr-ink-3">
                {i.body}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

function Agent() {
  const timeline = [
    {
      t: "90 days before expiry",
      msg: "Your [product] warranty expires in 3 months. An extension is available for £X. No action needed yet.",
    },
    {
      t: "30 days before expiry",
      msg: "Your [product] warranty expires in 30 days. A 2-year extension is £X. Reply YES and I'll handle it.",
    },
    {
      t: "7 days before expiry",
      msg: "Final reminder — your [product] warranty expires in 7 days. Reply YES to renew for £X.",
    },
    {
      t: "Day of expiry",
      msg: "Your [product] warranty expired today. Contact me if you'd like to explore extended cover options.",
    },
  ];
  return (
    <section className="bg-paxr-deep py-28 text-paxr-stone">
      <Container>
        <div className="grid gap-16 md:grid-cols-[1fr_1fr]">
          <div>
            <Eyebrow onDark>Step three</Eyebrow>
            <h2 className="mt-5 max-w-[480px] font-display text-[clamp(32px,4.5vw,52px)] font-semibold leading-[1.05] -tracking-[0.02em] text-paxr-stone">
              Paxr watches. You do nothing.
            </h2>
            <p className="mt-6 max-w-[520px] text-[17px] leading-relaxed text-paxr-stone/70">
              After registration, Paxr monitors every warranty in your vault.
              You don&apos;t need to open the app, set reminders, or remember
              anything. Paxr comes to you — on WhatsApp — before any warranty
              expires.
            </p>
            <p className="mt-8 max-w-[520px] text-[13px] leading-relaxed text-paxr-stone/55">
              Paxr contacts you via WhatsApp by default (Pro plan). You can
              switch to push notifications or SMS in your preferences at any
              time.
            </p>
          </div>

          <ol className="flex flex-col gap-3">
            {timeline.map((row, i) => (
              <li
                key={row.t}
                className="rounded-lg border border-white/10 bg-white/[0.03] p-5"
              >
                <div className="flex items-center justify-between gap-4">
                  <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-paxr-jade">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-[12px] font-medium tracking-[0.08em] text-paxr-stone/70">
                    {row.t}
                  </span>
                </div>
                <ChatStack className="mt-4 max-w-none">
                  <ChatBubble from="paxr">{row.msg}</ChatBubble>
                </ChatStack>
              </li>
            ))}
          </ol>
        </div>
      </Container>
    </section>
  );
}

function Claims() {
  const steps = [
    "You message Paxr with what's broken.",
    "Paxr checks your vault and confirms your coverage status.",
    "Paxr gives you the manufacturer's claim process — contact details, what to reference, what to expect.",
    "You make the claim. Paxr marks it in your vault so you have a record.",
  ];
  return (
    <section className="bg-paxr-stone py-28">
      <Container>
        <div className="grid items-start gap-16 md:grid-cols-[1fr_1fr]">
          <div>
            <Eyebrow>When things break</Eyebrow>
            <h2 className="mt-5 font-display text-[clamp(32px,4.5vw,52px)] font-semibold leading-[1.05] -tracking-[0.02em] text-paxr-deep">
              Something broke. Ask Paxr.
            </h2>
            <p className="mt-6 max-w-[520px] text-[17px] leading-relaxed text-paxr-ink-3">
              Message Paxr on WhatsApp: &ldquo;My dishwasher stopped
              working.&rdquo; Paxr checks your vault, confirms whether
              you&apos;re still within warranty, and gives you the exact claim
              steps for that manufacturer — including the contact number,
              reference you&apos;ll need, and what to say.
            </p>
            <div className="mt-8 rounded-lg bg-white p-6 shadow-[0_10px_40px_-20px_rgba(14,27,41,0.12)]">
              <ChatStack className="max-w-none">
                <ChatBubble from="user">My dishwasher stopped working.</ChatBubble>
                <ChatBubble from="paxr">
                  That&apos;s your Bosch Series 6 — registered{" "}
                  <Mono>14 Nov 2024</Mono>. You&apos;re covered for another{" "}
                  <Mono>186 days</Mono>. Call Bosch UK on 0344 892 8979, quote
                  ref <Mono>BSH-4492-88</Mono>. They&apos;ll book an engineer.
                </ChatBubble>
              </ChatStack>
            </div>
          </div>

          <ol className="flex flex-col">
            {steps.map((s, i) => (
              <li
                key={s}
                className="grid grid-cols-[auto_1fr] gap-5 border-t border-paxr-line py-6 first:border-t-0 first:pt-0"
              >
                <span className="font-mono text-[11px] font-medium uppercase tracking-[0.2em] text-paxr-mist">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="text-[16px] leading-relaxed text-paxr-deep">
                  {s}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </Container>
    </section>
  );
}

function ClosingCTA() {
  return (
    <section className="bg-white py-24 text-center">
      <Container>
        <h2 className="mx-auto max-w-[620px] font-display text-[clamp(32px,4.5vw,52px)] font-semibold leading-[1.05] -tracking-[0.02em] text-paxr-deep">
          Ready to hand it over?
        </h2>
        <div className="mt-8 flex justify-center">
          <ButtonLink href="/signup" size="lg">
            Start for free
            <ArrowRight />
          </ButtonLink>
        </div>
      </Container>
    </section>
  );
}
