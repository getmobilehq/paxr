import type { Metadata } from "next";
import { Container } from "@/components/Container";

export const metadata: Metadata = {
  title: "Privacy policy",
  description: "How Paxr collects, uses, and protects your data.",
};

const sections = [
  { id: "data-collected", n: "1", label: "What data we collect" },
  { id: "how-we-use", n: "2", label: "How we use your data" },
  { id: "sharing", n: "3", label: "Who we share it with" },
  { id: "storage", n: "4", label: "How we store and protect it" },
  { id: "rights", n: "5", label: "Your rights under UK GDPR" },
  { id: "cookies", n: "6", label: "Cookies" },
  { id: "contact", n: "7", label: "Contact us" },
];

export default function PrivacyPage() {
  return (
    <article className="bg-paxr-stone pt-40 pb-32">
      <Container>
        <div className="mx-auto max-w-[680px]">
          <p className="mb-4 font-mono text-[11px] uppercase tracking-[0.2em] text-paxr-mist">
            Last updated · 22 April 2026
          </p>
          <h1 className="font-display text-[clamp(40px,6vw,72px)] font-semibold leading-[1.02] -tracking-[0.025em] text-paxr-deep">
            Privacy policy.
          </h1>
          <p className="mt-8 text-[17px] leading-relaxed text-paxr-ink-3">
            Paxr Ltd (&ldquo;Paxr&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;)
            takes your privacy seriously. This policy explains what data we
            collect, why we collect it, and what we do with it. Plain language,
            no small print.
          </p>

          <nav className="mt-12 border-y border-paxr-line py-6">
            <p className="mb-4 font-mono text-[11px] uppercase tracking-[0.18em] text-paxr-mist">
              Contents
            </p>
            <ol className="flex flex-col gap-2">
              {sections.map((s) => (
                <li key={s.id} className="flex gap-3 text-[14px] text-paxr-deep">
                  <span className="font-mono text-paxr-mist">{s.n}.</span>
                  <a
                    href={`#${s.id}`}
                    className="underline decoration-1 underline-offset-4 hover:text-paxr-jade-dim"
                  >
                    {s.label}
                  </a>
                </li>
              ))}
            </ol>
          </nav>

          <section className="mt-12 space-y-10 text-[15px] leading-[1.75] text-paxr-ink-3">
            {sections.map((s) => (
              <div key={s.id} id={s.id} className="scroll-mt-28">
                <h2 className="mb-3 font-display text-[24px] font-semibold -tracking-[0.01em] text-paxr-deep">
                  {s.n}. {s.label}
                </h2>
                <p className="italic text-paxr-mist">
                  Full legal text is being prepared by our solicitors and will
                  appear here before launch. The section will cover the Paxr
                  promise: we never sell your personal data; we never share
                  warranty data with brands without your consent; you can
                  export or delete your data at any time from account settings.
                </p>
              </div>
            ))}
          </section>
        </div>
      </Container>
    </article>
  );
}
