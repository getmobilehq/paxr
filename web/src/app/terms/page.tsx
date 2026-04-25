import type { Metadata } from "next";
import { Container } from "@/components/Container";

export const metadata: Metadata = {
  title: "Terms of service",
  description: "The terms that govern your use of Paxr.",
};

const sections = [
  { id: "who-we-are", n: "1", label: "Who we are" },
  { id: "your-account", n: "2", label: "Your account" },
  { id: "the-service", n: "3", label: "The service" },
  { id: "billing", n: "4", label: "Subscriptions and billing" },
  { id: "acceptable-use", n: "5", label: "Acceptable use" },
  { id: "liability", n: "6", label: "Liability" },
  { id: "termination", n: "7", label: "Termination" },
  { id: "governing-law", n: "8", label: "Governing law (England & Wales)" },
];

export default function TermsPage() {
  return (
    <article className="bg-paxr-stone pt-40 pb-32">
      <Container>
        <div className="mx-auto max-w-[680px]">
          <p className="mb-4 font-mono text-[11px] uppercase tracking-[0.2em] text-paxr-mist">
            Last updated · 22 April 2026
          </p>
          <h1 className="font-display text-[clamp(40px,6vw,72px)] font-semibold leading-[1.02] -tracking-[0.025em] text-paxr-deep">
            Terms of service.
          </h1>
          <p className="mt-8 text-[17px] leading-relaxed text-paxr-ink-3">
            These terms govern your use of Paxr and our services. By creating
            an account, you agree to these terms. If anything is unclear,
            contact us.
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
                  Full legal text is being prepared by our UK solicitors and
                  will appear here before launch. This section is a structural
                  placeholder only.
                </p>
              </div>
            ))}
          </section>
        </div>
      </Container>
    </article>
  );
}
