import { cn } from "@/lib/cn";

type Size = "sm" | "md" | "lg" | "xl";
const sizeClass: Record<Size, string> = {
  sm: "text-[22px]",
  md: "text-[34px]",
  lg: "text-[54px]",
  xl: "text-[86px]",
};

export function Wordmark({
  size = "sm",
  tone = "deep",
  className,
}: {
  size?: Size;
  tone?: "deep" | "stone";
  className?: string;
}) {
  return (
    <span
      className={cn(
        "font-display font-black leading-none tracking-[0.04em]",
        tone === "stone" ? "text-paxr-stone" : "text-paxr-deep",
        sizeClass[size],
        className,
      )}
      aria-label="paxr"
    >
      pax<span className="text-paxr-jade">r</span>
    </span>
  );
}

export function Mark({
  size = 64,
  tone = "deep",
  className,
}: {
  size?: number;
  tone?: "deep" | "stone";
  className?: string;
}) {
  const stroke = tone === "stone" ? "#F6F5F1" : "#0E1B29";
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      <path
        d="M 50 8 A 42 42 0 1 0 78 18"
        stroke={stroke}
        strokeWidth={2.5}
        fill="none"
        strokeLinecap="round"
      />
      <circle cx={78} cy={18} r={5.5} fill="#3EC99A" />
    </svg>
  );
}
