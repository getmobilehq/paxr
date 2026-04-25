import { cn } from "@/lib/cn";

export function PhoneFrame({
  children,
  dark = false,
  className,
}: {
  children: React.ReactNode;
  dark?: boolean;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "mx-auto w-full max-w-[300px] rounded-[40px] bg-paxr-deep p-2.5 shadow-[0_40px_80px_-30px_rgba(14,27,41,0.35)] aspect-[393/852]",
        className,
      )}
      style={{ aspectRatio: "393 / 852" }}
    >
      <div
        className={cn(
          "relative flex h-full flex-col overflow-hidden rounded-[32px]",
          dark ? "bg-paxr-deep text-paxr-stone" : "bg-paxr-stone",
        )}
      >
        <span
          aria-hidden
          className={cn(
            "absolute left-1/2 top-2 z-10 h-[26px] w-[90px] -translate-x-1/2 rounded-[14px]",
            dark ? "bg-black" : "bg-paxr-deep",
          )}
        />
        {children}
      </div>
    </div>
  );
}

export function StatusBar({ dark = false }: { dark?: boolean }) {
  return (
    <div
      className={cn(
        "flex shrink-0 items-center justify-between px-6 pb-1.5 pt-3 font-sans text-[11px] font-semibold",
        dark ? "text-paxr-stone" : "text-paxr-deep",
      )}
    >
      <span className="font-mono">9:41</span>
      <div className="flex items-center gap-[3px]">
        <span className="h-[3px] w-[3px] rounded-full bg-current opacity-70" />
        <span className="h-[3px] w-[3px] rounded-full bg-current opacity-70" />
        <span className="h-[7px] w-[18px] rounded-sm bg-current" />
      </div>
    </div>
  );
}
