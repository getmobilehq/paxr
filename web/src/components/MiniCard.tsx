import { cn } from "@/lib/cn";

type Tone = "jade" | "amber";

export function MiniCard({
  brand,
  product,
  days,
  tone = "jade",
  className,
}: {
  brand: string;
  product: string;
  days: number;
  tone?: Tone;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "relative w-[150px] min-w-[150px] shrink-0 overflow-hidden rounded-xl border border-paxr-line bg-white p-3",
        className,
      )}
    >
      <span
        aria-hidden
        className={cn(
          "absolute inset-x-0 top-0 h-0.5",
          tone === "amber" ? "bg-paxr-amber" : "bg-paxr-jade",
        )}
      />
      <div className="mb-1.5 text-[9px] font-medium uppercase tracking-[0.18em] text-paxr-mist">
        {brand}
      </div>
      <div className="mb-2.5 min-h-[30px] font-display text-[13px] font-semibold leading-snug text-paxr-deep">
        {product}
      </div>
      <div
        className={cn(
          "mb-0.5 font-mono text-[20px] font-medium leading-none",
          tone === "amber" ? "text-paxr-amber-ink" : "text-paxr-jade-dim",
        )}
      >
        {days}
      </div>
      <div className="text-[10px] text-paxr-mist">days left</div>
    </div>
  );
}
