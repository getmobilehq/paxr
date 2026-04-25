import { cn } from "@/lib/cn";

type Speaker = "paxr" | "user";

export function ChatBubble({
  from,
  children,
  className,
}: {
  from: Speaker;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "max-w-[86%] px-[18px] py-3.5 text-[14px] leading-snug",
        from === "paxr"
          ? "self-start rounded-[4px_14px_14px_14px] bg-paxr-deep text-paxr-stone"
          : "self-end rounded-[14px_4px_14px_14px] bg-paxr-jade text-paxr-deep",
        className,
      )}
    >
      {children}
    </div>
  );
}

export function ChatStack({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("flex max-w-[440px] flex-col gap-2.5", className)}>
      {children}
    </div>
  );
}

export function Mono({ children }: { children: React.ReactNode }) {
  return <span className="font-mono text-[13px]">{children}</span>;
}
