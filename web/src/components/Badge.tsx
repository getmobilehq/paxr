import { cn } from "@/lib/cn";

type State = "active" | "expiring" | "expired" | "claimed";

const styles: Record<State, { wrap: string; dot: string }> = {
  active: { wrap: "bg-paxr-jade/12 text-paxr-jade-dim", dot: "bg-paxr-jade" },
  expiring: {
    wrap: "bg-paxr-amber/12 text-paxr-amber-ink",
    dot: "bg-paxr-amber",
  },
  expired: { wrap: "bg-paxr-error/10 text-paxr-error", dot: "bg-paxr-error" },
  claimed: { wrap: "bg-paxr-deep/8 text-paxr-deep", dot: "bg-paxr-deep" },
};

const labels: Record<State, string> = {
  active: "Active",
  expiring: "Expiring soon",
  expired: "Expired",
  claimed: "Claimed",
};

export function Badge({
  state,
  children,
  className,
}: {
  state: State;
  children?: React.ReactNode;
  className?: string;
}) {
  const { wrap, dot } = styles[state];
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 font-sans text-[10.5px] font-medium uppercase tracking-[0.14em]",
        wrap,
        className,
      )}
    >
      <span aria-hidden className={cn("h-1.5 w-1.5 rounded-full", dot)} />
      {children ?? labels[state]}
    </span>
  );
}
