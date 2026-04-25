import { cn } from "@/lib/cn";

export function Eyebrow({
  children,
  onDark = false,
  className,
}: {
  children: React.ReactNode;
  onDark?: boolean;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "inline-flex items-center gap-3 text-[10.5px] font-medium uppercase tracking-[0.24em]",
        onDark ? "text-paxr-mist-2" : "text-paxr-mist",
        className,
      )}
    >
      <span
        aria-hidden
        className={cn(
          "h-px w-5",
          onDark ? "bg-paxr-mist-2" : "bg-paxr-mist",
        )}
      />
      {children}
    </div>
  );
}
