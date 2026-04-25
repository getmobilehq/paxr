import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { Eyebrow } from "@/components/Eyebrow";
import { ButtonLink } from "@/components/Button";

export const metadata: Metadata = {
  title: "Paxr Pricing — Free Warranty Tracker · Pro from £10/year",
  description:
    "Free for up to 3 warranties. Paxr Pro is £10 a year — unlimited warranties, WhatsApp agent, automatic renewals, and claim guidance. Start your 30-day free trial.",
};

export default function PricingPage() {
  return (
    <>
      <Hero />
      <Plans />
      <ComparisonTable />
      <FAQ />
    </>
  );
}

function Hero() {
  return (
    <section className="-mt-[64px] bg-paxr-deep py-28 pt-40 text-paxr-stone md:py-36">
      <Container>
        <Eyebrow onDark>Pricing</Eyebrow>
        <h1 className="mt-6 max-w-[820px] font-display text-[clamp(44px,7vw,92px)] font-semibold leading-[1.02] -tracking-[0.03em] text-paxr-stone">
          One price.{" "}
          <em className="font-light italic text-paxr-jade">
            Everything handled.
          </em>
        </h1>
        <p className="mt-8 max-w-[620px] text-[18px] leading-relaxed text-paxr-stone/70">
          Free to start. £10 a year for the full agent experience — less than
          83p a month.
        </p>
        <p className="mt-6 max-w-[620px] text-[14px] leading-relaxed text-paxr-stone/55">
          The average UK household loses £380 a year in repairs that should
          have been covered under warranty. Paxr Pro costs £10. The maths is
          straightforward.
        </p>
      </Container>
    </section>
  );
}

function Plans() {
  return (
    <section className="bg-paxr-stone py-28">
      <Container>
        <div className="grid gap-6 md:grid-cols-2">
          <article className="flex flex-col rounded-xl border border-paxr-line bg-white p-10">
            <h2 className="font-display text-[28px] font-semibold text-paxr-deep">
              Free
            </h2>
            <div className="mt-4 flex items-baseline gap-2">
              <span className="font-display text-[56px] font-semibold leading-none -tracking-[0.02em] text-paxr-deep">
                £0
              </span>
              <span className="text-[14px] text-paxr-mist">forever</span>
            </div>
            <p className="mt-5 text-[15px] leading-relaxed text-paxr-ink-3">
              Start protecting your most important devices. No credit card, no
              time limit.
            </p>
            <div className="mt-8">
              <ButtonLink href="/signup" variant="ghost" size="lg">
                Get started free
              </ButtonLink>
            </div>
          </article>

          <article className="relative flex flex-col overflow-hidden rounded-xl border-2 border-paxr-deep bg-white p-10 shadow-[0_30px_60px_-30px_rgba(14,27,41,0.3)]">
            <span className="mb-4 inline-block self-start rounded-full bg-paxr-jade/15 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.14em] text-paxr-jade-dim">
              30-day free trial included
            </span>
            <h2 className="font-display text-[28px] font-semibold text-paxr-deep">
              Pro
            </h2>
            <div className="mt-4 flex items-baseline gap-2">
              <span className="font-display text-[56px] font-semibold leading-none -tracking-[0.02em] text-paxr-deep">
                £10
              </span>
              <span className="text-[15px] font-light text-paxr-mist">
                / year
              </span>
            </div>
            <p className="mt-5 text-[15px] leading-relaxed text-paxr-ink-3">
              The full Paxr experience. Unlimited warranties, WhatsApp agent,
              renewals handled, claims guided. Everything.
            </p>
            <div className="mt-8">
              <ButtonLink href="/signup?plan=pro" size="lg">
                Start 30-day free trial
              </ButtonLink>
            </div>
          </article>
        </div>
        <p className="mt-8 text-[13px] text-paxr-mist">
          No credit card required for the trial · Cancel anytime
        </p>
      </Container>
    </section>
  );
}

type Row = {
  label: string;
  free: string | boolean;
  pro: string | boolean;
};

const rows: Row[] = [
  { label: "Warranties stored", free: "3", pro: "Unlimited" },
  { label: "QR code registration", free: true, pro: true },
  { label: "Manual entry", free: true, pro: true },
  { label: "Receipt OCR", free: true, pro: true },
  { label: "Push notification alerts", free: true, pro: true },
  { label: "WhatsApp AI agent", free: false, pro: true },
  { label: "Automatic renewal handling", free: false, pro: true },
  { label: "Claim guidance", free: false, pro: true },
  { label: "Ask your product manual anything", free: false, pro: true },
  { label: "Installation and setup guidance", free: false, pro: true },
  { label: "Receipt & document storage", free: false, pro: true },
  { label: "SMS fallback notifications", free: false, pro: true },
  { label: "Priority support", free: false, pro: true },
];

function Cell({ v }: { v: string | boolean }) {
  if (v === true)
    return (
      <span className="font-mono text-[16px] text-paxr-jade-dim">✓</span>
    );
  if (v === false) return <span className="font-mono text-[16px] text-paxr-mist">—</span>;
  return <span className="text-[14px] text-paxr-deep">{v}</span>;
}

function ComparisonTable() {
  return (
    <section className="bg-white py-28">
      <Container>
        <h2 className="mb-12 font-display text-[32px] font-semibold -tracking-[0.02em] text-paxr-deep">
          What&apos;s in each plan.
        </h2>
        <div className="overflow-hidden rounded-lg border border-paxr-line">
          <table className="w-full text-left">
            <thead className="bg-paxr-stone">
              <tr>
                <th className="px-6 py-4 font-mono text-[11px] font-medium uppercase tracking-[0.18em] text-paxr-mist">
                  Feature
                </th>
                <th className="px-6 py-4 font-mono text-[11px] font-medium uppercase tracking-[0.18em] text-paxr-mist">
                  Free
                </th>
                <th className="px-6 py-4 font-mono text-[11px] font-medium uppercase tracking-[0.18em] text-paxr-mist">
                  Pro
                </th>
              </tr>
            </thead>
            <tbody>
              {rows.map((r) => (
                <tr
                  key={r.label}
                  className="border-t border-paxr-line bg-white"
                >
                  <td className="px-6 py-4 text-[14px] text-paxr-deep">
                    {r.label}
                  </td>
                  <td className="px-6 py-4">
                    <Cell v={r.free} />
                  </td>
                  <td className="px-6 py-4">
                    <Cell v={r.pro} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Container>
    </section>
  );
}

const faqs = [
  {
    q: "Do I need a credit card to start?",
    a: "No. The Free plan requires no credit card, ever. The Pro 30-day trial also starts without a card — you'll be asked for payment details at the end of the trial if you choose to continue.",
  },
  {
    q: "What happens to my warranties if I cancel Pro?",
    a: "Your vault data is never deleted. If you cancel Pro, you keep access to your first 3 warranties on the Free plan. All others are stored but paused — they become active again if you re-subscribe.",
  },
  {
    q: "How does the WhatsApp agent work?",
    a: "When you upgrade to Pro and link your WhatsApp number, Paxr's agent can contact you directly in WhatsApp. It sends expiry alerts, renewal prompts, and responds to your questions about any warranty in your vault. You can reply naturally — \"renew it,\" \"not now,\" \"what are the claim steps?\" — and it handles the rest.",
  },
  {
    q: "Does Paxr work for warranties that are already registered with the manufacturer?",
    a: "Yes. You can add any warranty to Paxr manually — even ones you've already registered with the brand. Paxr then takes over the monitoring and renewal management from that point. Think of it as a single control layer over all your existing warranties.",
  },
  {
    q: "Is my data safe?",
    a: "Yes. Paxr uses bank-grade encryption for all data at rest and in transit. Your warranty data is yours — we never sell it to third parties. Your data is stored in accordance with UK GDPR. You can export or delete your data at any time from your account settings.",
  },
  {
    q: "What if the manufacturer doesn't have a Paxr QR code?",
    a: "Most products won't have Paxr QR codes at launch — that's the brand partnership programme we're building out. For now, add the warranty manually or photograph your receipt. It takes 60 seconds and Paxr monitors it exactly the same way from that point forward.",
  },
  {
    q: "What is the digital manual feature?",
    a: "On Paxr Pro, every product in your vault comes with its manual available to query. Ask Paxr any question about your product — how to install it, how to set a programme, how to troubleshoot a problem — and Paxr gives you an instant answer from the exact page of your product manual. Available on WhatsApp or in the Paxr app.",
  },
];

function FAQ() {
  return (
    <section className="bg-paxr-stone py-28">
      <Container>
        <Eyebrow>Frequently asked</Eyebrow>
        <h2 className="mt-5 max-w-[640px] font-display text-[clamp(32px,4.5vw,52px)] font-semibold leading-[1.05] -tracking-[0.02em] text-paxr-deep">
          Questions, handled.
        </h2>
        <div className="mt-14 divide-y divide-paxr-line rounded-lg border border-paxr-line bg-white">
          {faqs.map((f) => (
            <details key={f.q} className="group px-6 py-6">
              <summary className="flex cursor-pointer list-none items-start justify-between gap-6 font-display text-[17px] font-semibold leading-snug text-paxr-deep">
                <span>{f.q}</span>
                <span
                  aria-hidden
                  className="mt-1 shrink-0 font-mono text-[18px] font-light text-paxr-mist transition-transform duration-200 group-open:rotate-45"
                >
                  +
                </span>
              </summary>
              <p className="mt-4 max-w-[720px] text-[15px] leading-relaxed text-paxr-ink-3">
                {f.a}
              </p>
            </details>
          ))}
        </div>
      </Container>
    </section>
  );
}
