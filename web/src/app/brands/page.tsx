import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { Eyebrow } from "@/components/Eyebrow";
import { ButtonLink } from "@/components/Button";
import { Field, Input, Textarea } from "@/components/Input";

export const metadata: Metadata = {
  title:
    "Paxr for Brands — Built-In Warranty Registration for Manufacturers",
  description:
    "Paxr is your partner in the product lifecycle — from first scan to next launch. Registration data, renewal revenue, usage intelligence, and a built-in research panel of verified owners ready for your next product.",
};

export default function BrandsPage() {
  return (
    <>
      <Hero />
      <Problem />
      <HowItWorks />
      <Value />
      <Lifecycle />
      <CTA />
    </>
  );
}

function Lifecycle() {
  const steps = [
    {
      title: "Customer scans your QR code",
      body: "Their warranty is registered in under 20 seconds. No portal. No friction. You see the registration in your partner dashboard instantly.",
    },
    {
      title: "Paxr becomes their product companion",
      body: "They ask questions. Paxr answers from your manual. They set it up correctly. They use it longer. They trust your brand more.",
    },
    {
      title: "Warranty expires — renewal handled on your behalf",
      body: "Paxr sends a renewal prompt via WhatsApp. Customer replies YES. Renewal completed. Revenue to you. All automated.",
    },
    {
      title: "You want to launch something new",
      body: "Access a verified panel of your most engaged customers — people who own your products, opted in to give you feedback. Test a new product. Get 1,000 real responses. Ship something better.",
    },
  ];
  return (
    <section className="bg-paxr-pale py-28">
      <Container>
        <Eyebrow>The full picture</Eyebrow>
        <h2 className="mt-5 max-w-[760px] font-display text-[clamp(32px,4.5vw,52px)] font-semibold leading-[1.05] -tracking-[0.02em] text-paxr-deep">
          From first scan to next purchase.
        </h2>
        <p className="mt-6 max-w-[640px] text-[17px] leading-relaxed text-paxr-ink-3">
          The warranty is how Paxr enters the relationship. What happens after
          is where the real value is.
        </p>
        <ol className="mt-12 flex flex-col gap-3">
          {steps.map((s, i) => (
            <li
              key={s.title}
              className="grid grid-cols-[auto_1fr] gap-6 rounded-lg border border-paxr-line bg-white p-7"
            >
              <span className="font-mono text-[13px] font-medium uppercase tracking-[0.2em] text-paxr-mist">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div>
                <h3 className="font-display text-[20px] font-semibold leading-snug -tracking-[0.01em] text-paxr-deep">
                  {s.title}
                </h3>
                <p className="mt-2 max-w-[680px] text-[14px] leading-relaxed text-paxr-ink-3">
                  {s.body}
                </p>
              </div>
            </li>
          ))}
        </ol>
        <blockquote className="mt-10 max-w-[760px] rounded-lg bg-white p-8 font-display text-[20px] font-light italic leading-snug text-paxr-deep">
          “We are your effective partner in product lifecycle management. We
          know who owns your product. We can connect them to you.”
        </blockquote>
      </Container>
    </section>
  );
}

function Hero() {
  return (
    <section className="-mt-[64px] bg-paxr-deep py-28 pt-40 text-paxr-stone md:py-36">
      <Container>
        <Eyebrow onDark>For manufacturers &amp; retailers</Eyebrow>
        <h1 className="mt-6 max-w-[920px] font-display text-[clamp(42px,6.5vw,88px)] font-semibold leading-[1.02] -tracking-[0.03em] text-paxr-stone">
          Your partner in the{" "}
          <em className="font-light italic text-paxr-jade">
            product lifecycle
          </em>
          .
        </h1>
        <p className="mt-8 max-w-[640px] text-[18px] leading-relaxed text-paxr-stone/70">
          Less than 12% of UK consumers complete warranty registration after
          purchase. Paxr makes it so effortless that they actually do it — and
          the data belongs to you.
        </p>
        <div className="mt-10 flex flex-wrap items-center gap-3">
          <ButtonLink href="#contact" size="lg">
            Talk to our partnerships team
          </ButtonLink>
          <ButtonLink href="#how" variant="ghost" size="lg" onDark>
            See how it works for brands
          </ButtonLink>
        </div>
      </Container>
    </section>
  );
}

function Problem() {
  const stats = [
    {
      k: "<12%",
      body: "average warranty registration rate for UK consumer products",
    },
    {
      k: "£4B+",
      body: "UK extended warranty market. Most of it currently uncaptured.",
    },
    {
      k: "88%",
      body: "of sold products invisible to you post-sale — no ownership data, no lifecycle intelligence, no renewal relationship.",
    },
  ];
  return (
    <section className="bg-paxr-stone py-28">
      <Container>
        <Eyebrow>The problem</Eyebrow>
        <h2 className="mt-5 max-w-[700px] font-display text-[clamp(32px,4.5vw,52px)] font-semibold leading-[1.05] -tracking-[0.02em] text-paxr-deep">
          Low registration rates are expensive.
        </h2>
        <p className="mt-6 max-w-[640px] text-[17px] leading-relaxed text-paxr-ink-3">
          The standard warranty registration journey — a URL on a card, a web
          form, an email confirmation — converts at under 12%. That means 88%
          of your sold products are invisible to you after the sale. You
          don&apos;t know who owns them, how they&apos;re using them, or when
          their warranty expires. You lose the renewal revenue, the
          post-purchase relationship, and the product lifecycle data.
        </p>
        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {stats.map((s) => (
            <div
              key={s.k}
              className="rounded-lg border border-paxr-line bg-white p-7"
            >
              <div className="font-display text-[44px] font-semibold leading-none -tracking-[0.02em] text-paxr-deep">
                {s.k}
              </div>
              <p className="mt-4 text-[14px] leading-relaxed text-paxr-ink-3">
                {s.body}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

function HowItWorks() {
  const steps = [
    {
      t: "Join as a Paxr partner.",
      body: "We set up your brand in the Paxr partner portal. Add your products, define your warranty terms, connect your renewal pricing.",
    },
    {
      t: "We generate your QR codes.",
      body: "One unique QR code per product SKU. Downloaded from your partner dashboard. Ready to send to your packaging supplier.",
    },
    {
      t: "Include QR codes in packaging.",
      body: "In the box, on the manual, or on a card. Your choice. Most partners include a small card: \"Register your warranty with Paxr — scan to protect.\"",
    },
    {
      t: "Customers scan. Registration is instant.",
      body: "A customer scans the QR code. Paxr reads your product data, confirms the warranty terms, and registers them in under 20 seconds. No form. No portal.",
    },
    {
      t: "You get the data. And the renewal revenue.",
      body: "Every registration flows into your partner dashboard. You see registration rates, active warranties, and expiry forecasts. When Paxr handles a renewal on a customer's behalf, you receive the revenue.",
    },
  ];
  return (
    <section id="how" className="bg-white py-28">
      <Container>
        <Eyebrow>How it works</Eyebrow>
        <h2 className="mt-5 max-w-[640px] font-display text-[clamp(32px,4.5vw,52px)] font-semibold leading-[1.05] -tracking-[0.02em] text-paxr-deep">
          One QR code. Registration solved.
        </h2>
        <ol className="mt-14 flex flex-col gap-px overflow-hidden rounded-lg border border-paxr-line bg-paxr-line">
          {steps.map((s, i) => (
            <li
              key={s.t}
              className="grid gap-6 bg-white p-8 md:grid-cols-[120px_1fr] md:items-start md:gap-10"
            >
              <span className="font-mono text-[13px] font-medium uppercase tracking-[0.2em] text-paxr-mist">
                Step {String(i + 1).padStart(2, "0")}
              </span>
              <div>
                <h3 className="font-display text-[22px] font-semibold leading-snug -tracking-[0.01em] text-paxr-deep">
                  {s.t}
                </h3>
                <p className="mt-3 max-w-[720px] text-[15px] leading-relaxed text-paxr-ink-3">
                  {s.body}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}

function Value() {
  const values = [
    {
      title: "Registration rate uplift",
      body: "Partners using Paxr QR codes see registration rates above 40% — versus the industry average of under 12%. Zero-friction registration converts. Friction doesn't.",
    },
    {
      title: "Extended warranty revenue",
      body: "When Paxr handles a renewal for a customer on your product, you receive the renewal revenue directly. Paxr takes a small commission. You get income you'd otherwise never see.",
    },
    {
      title: "Sustainability reporting",
      body: "Paxr helps customers repair rather than replace — reducing returns, reducing e-waste, and giving you data on product lifespan that supports your sustainability commitments.",
    },
    {
      title: "Product lifecycle intelligence",
      body: "Know who owns your products, how long they've had them, and what stage of the ownership lifecycle they're in. See usage patterns by product, region, and ownership duration — in aggregate and in real time.",
    },
    {
      title: "A research panel, ready for your next launch",
      body: "Your registered Paxr customers are opt-in, verified product owners. When you need feedback on a new product or want to test a feature before launch, Paxr gives you instant access to your most engaged customers — already trained, already engaged.",
    },
  ];
  return (
    <section className="bg-paxr-stone py-28">
      <Container>
        <Eyebrow>What you get</Eyebrow>
        <h2 className="mt-5 max-w-[820px] font-display text-[clamp(32px,4.5vw,52px)] font-semibold leading-[1.05] -tracking-[0.02em] text-paxr-deep">
          Registration data. Renewal revenue. Customer relationships.
        </h2>
        <div className="mt-14 grid gap-5 md:grid-cols-2">
          {values.map((v) => (
            <article
              key={v.title}
              className="rounded-lg border border-paxr-line bg-white p-8"
            >
              <h3 className="mb-3 font-display text-[22px] font-semibold -tracking-[0.01em] text-paxr-deep">
                {v.title}
              </h3>
              <p className="text-[14px] leading-relaxed text-paxr-ink-3">
                {v.body}
              </p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}

function CTA() {
  return (
    <section id="contact" className="bg-paxr-deep py-32 text-paxr-stone">
      <Container>
        <div className="grid gap-16 md:grid-cols-[1fr_1.1fr]">
          <div>
            <Eyebrow onDark>Partnerships</Eyebrow>
            <h2 className="mt-5 font-display text-[clamp(32px,4.5vw,52px)] font-semibold leading-[1.05] -tracking-[0.02em] text-paxr-stone">
              Partner with Paxr.
            </h2>
            <p className="mt-6 max-w-[480px] text-[17px] leading-relaxed text-paxr-stone/70">
              We&apos;re working with a small number of launch partners to get
              QR codes into packaging before our public launch. If you&apos;re
              a UK manufacturer or retailer, we&apos;d like to talk.
            </p>
            <p className="mt-6 text-[13px] text-paxr-stone/55">
              We respond to all partnership enquiries within 2 working days.
            </p>
          </div>

          <form
            className="flex flex-col gap-5 rounded-xl bg-white p-8 text-paxr-deep"
            action="/api/brands-enquiry"
            method="post"
          >
            <Field label="Your name">
              <Input name="name" type="text" required autoComplete="name" />
            </Field>
            <Field label="Company name">
              <Input
                name="company"
                type="text"
                required
                autoComplete="organization"
              />
            </Field>
            <div className="grid gap-5 sm:grid-cols-2">
              <Field label="Work email">
                <Input
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                />
              </Field>
              <Field label="Your role">
                <Input name="role" type="text" required />
              </Field>
            </div>
            <Field label="Tell us about your product range (optional)">
              <Textarea name="message" rows={4} />
            </Field>
            <div className="mt-2">
              <button
                type="submit"
                className="inline-flex items-center gap-2.5 rounded-md bg-paxr-jade px-[22px] py-[14px] font-sans text-[14px] font-medium leading-none text-paxr-deep transition-all duration-150 ease-paxr hover:-translate-y-px hover:bg-[#35b789]"
              >
                Request a partnership conversation
              </button>
            </div>
          </form>
        </div>
      </Container>
    </section>
  );
}
