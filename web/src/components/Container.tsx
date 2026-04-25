import { cn } from "@/lib/cn";

export function Container({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "mx-auto w-full max-w-[1100px] px-6 sm:px-10",
        className,
      )}
    >
      {children}
    </div>
  );
}

export function Section({
  children,
  className,
  tone = "stone",
  id,
}: {
  children: React.ReactNode;
  className?: string;
  tone?: "stone" | "pale" | "deep" | "white";
  id?: string;
}) {
  const bg = {
    stone: "bg-paxr-stone",
    pale: "bg-paxr-pale",
    deep: "bg-paxr-deep text-paxr-stone",
    white: "bg-white",
  }[tone];
  return (
    <section
      id={id}
      className={cn("w-full border-b border-paxr-line/60 py-24 md:py-28", tone === "deep" && "border-white/10", bg, className)}
    >
      {children}
    </section>
  );
}
