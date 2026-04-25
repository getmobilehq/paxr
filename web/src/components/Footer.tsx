import Link from "next/link";
import { Container } from "@/components/Container";
import { ButtonLink } from "@/components/Button";
import { Eyebrow } from "@/components/Eyebrow";

const productLinks = [
  { href: "/how-it-works", label: "How it works" },
  { href: "/pricing", label: "Pricing" },
  { href: "/signup", label: "Download app" },
  { href: "/signin", label: "Sign in" },
];

const companyLinks = [
  { href: "/brands", label: "For brands" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
  { href: "https://getpaxr.com", label: "getpaxr.com" },
];

const legalLinks = [
  { href: "/privacy", label: "Privacy policy" },
  { href: "/terms", label: "Terms of service" },
  { href: "/cookies", label: "Cookie policy" },
];

export function Footer() {
  return (
    <footer className="bg-paxr-deep pb-14 pt-24 text-paxr-stone">
      <Container>
        <div className="mb-20 grid items-end gap-12 md:grid-cols-[1.3fr_1fr]">
          <div>
            <Eyebrow onDark>Principles</Eyebrow>
            <div className="mt-6 font-display text-[clamp(40px,6vw,76px)] font-semibold leading-[0.98] -tracking-[0.03em]">
              The app equivalent of{" "}
              <em className="font-light italic text-paxr-jade">
                locking your front door
              </em>
              .
            </div>
          </div>
          <div>
            <ButtonLink href="/signup" variant="primary" size="lg">
              Get started free
            </ButtonLink>
            <p className="mt-4 text-[13px] text-paxr-stone/60">
              The next thing you buy — protect it with Paxr.
            </p>
          </div>
        </div>

        <div className="mb-16 grid gap-12 md:grid-cols-4">
          <div>
            <div className="mb-3 font-display text-[18px] font-black tracking-[0.04em]">
              pax<span className="text-paxr-jade">r</span>
            </div>
            <p className="max-w-[220px] text-[12px] leading-relaxed text-paxr-stone/45">
              Peace, handled. Your AI warranty agent for every product you own.
            </p>
          </div>

          <FooterColumn title="Product" links={productLinks} />
          <FooterColumn title="Company" links={companyLinks} />
          <FooterColumn title="Legal" links={legalLinks} />
        </div>

        <div className="flex flex-col gap-3 border-t border-white/10 pt-6 font-mono text-[11px] uppercase tracking-[0.12em] text-paxr-stone/40 md:flex-row md:justify-between">
          <span>Paxr design system · v1.0 · © 2026 Paxr Ltd.</span>
          <span>Peace, handled.</span>
        </div>
      </Container>
    </footer>
  );
}

function FooterColumn({
  title,
  links,
}: {
  title: string;
  links: Array<{ href: string; label: string }>;
}) {
  return (
    <div>
      <h6 className="mb-3 font-mono text-[10px] font-medium uppercase tracking-[0.18em] text-paxr-mist-2">
        {title}
      </h6>
      <ul className="flex flex-col gap-1.5">
        {links.map((l) => {
          const external = l.href.startsWith("http");
          return (
            <li key={l.href}>
              {external ? (
                <a
                  href={l.href}
                  className="text-[12px] text-paxr-stone/55 transition-colors hover:text-paxr-stone"
                >
                  {l.label}
                </a>
              ) : (
                <Link
                  href={l.href as Parameters<typeof Link>[0]["href"]}
                  className="text-[12px] text-paxr-stone/55 transition-colors hover:text-paxr-stone"
                >
                  {l.label}
                </Link>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
