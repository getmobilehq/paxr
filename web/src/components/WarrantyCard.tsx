import { cn } from "@/lib/cn";
import { Badge } from "@/components/Badge";

type State = "active" | "expiring" | "expired";

const topBar: Record<State, string> = {
  active: "bg-paxr-jade",
  expiring: "bg-paxr-amber",
  expired: "bg-paxr-error",
};

const countColor: Record<State, string> = {
  active: "text-paxr-jade-dim",
  expiring: "text-paxr-amber-ink",
  expired: "text-paxr-error",
};

export function WarrantyCard({
  brand,
  product,
  days,
  state,
  date,
  className,
}: {
  brand: string;
  product: string;
  days: number;
  state: State;
  date: string;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "relative w-[260px] overflow-hidden rounded-lg border border-paxr-line bg-white px-[22px] pt-5 pb-[22px]",
        className,
      )}
    >
      <span
        aria-hidden
        className={cn("absolute inset-x-0 top-0 h-[3px]", topBar[state])}
      />
      <div className="mb-2 text-[10px] font-medium uppercase tracking-[0.2em] text-paxr-mist">
        {brand}
      </div>
      <div className="mb-[22px] min-h-[44px] font-display text-[18px] font-semibold leading-snug -tracking-[0.01em] text-paxr-deep">
        {product}
      </div>
      <div className="mb-4 flex items-baseline gap-1.5">
        <span
          className={cn(
            "font-mono text-[32px] font-medium leading-none",
            countColor[state],
          )}
        >
          {state === "expired" ? 0 : days}
        </span>
        <span className="text-[12px] tracking-[0.04em] text-paxr-mist">
          {state === "expired" ? "expired" : "days left"}
        </span>
      </div>
      <div className="flex items-center justify-between border-t border-paxr-line pt-3.5">
        <Badge state={state} />
        <span className="font-mono text-[11px] text-paxr-mist">{date}</span>
      </div>
    </div>
  );
}
