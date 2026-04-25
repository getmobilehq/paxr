import Link from "next/link";
import { cn } from "@/lib/cn";

type Variant = "primary" | "secondary" | "ghost" | "text";
type Size = "sm" | "md" | "lg";

const base =
  "inline-flex items-center gap-2.5 rounded-md font-sans font-medium leading-none transition-all duration-150 ease-paxr disabled:cursor-not-allowed disabled:opacity-40";

const variantClass: Record<Variant, string> = {
  primary:
    "bg-paxr-jade text-paxr-deep hover:-translate-y-px hover:bg-[#35b789]",
  secondary:
    "bg-paxr-deep text-paxr-stone hover:-translate-y-px hover:bg-[#1a2e43]",
  ghost:
    "border-[1.5px] border-paxr-deep bg-transparent text-paxr-deep hover:bg-paxr-deep hover:text-paxr-stone",
  text: "bg-transparent px-0 py-3 text-paxr-jade-dim underline decoration-1 underline-offset-4",
};

const ghostOnDark =
  "border-paxr-stone text-paxr-stone hover:bg-paxr-stone hover:text-paxr-deep";
const textOnDark = "text-paxr-jade";

const sizeClass: Record<Size, string> = {
  sm: "px-4 py-2.5 text-[13px]",
  md: "px-[22px] py-[14px] text-[14px]",
  lg: "px-7 py-[18px] text-[15px]",
};

type Common = {
  variant?: Variant;
  size?: Size;
  onDark?: boolean;
  className?: string;
  children: React.ReactNode;
};

export function Button({
  variant = "primary",
  size = "md",
  onDark = false,
  className,
  children,
  type = "button",
  disabled,
  ...rest
}: Common &
  React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      type={type}
      disabled={disabled}
      className={cn(
        base,
        variant === "text" ? "" : sizeClass[size],
        variantClass[variant],
        onDark && variant === "ghost" && ghostOnDark,
        onDark && variant === "text" && textOnDark,
        className,
      )}
      {...rest}
    >
      {children}
    </button>
  );
}

export function ButtonLink({
  href,
  variant = "primary",
  size = "md",
  onDark = false,
  className,
  children,
  external = false,
  ...rest
}: Common & {
  href: string;
  external?: boolean;
} & Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, "href">) {
  const classes = cn(
    base,
    variant === "text" ? "" : sizeClass[size],
    variantClass[variant],
    onDark && variant === "ghost" && ghostOnDark,
    onDark && variant === "text" && textOnDark,
    className,
  );

  if (external) {
    return (
      <a href={href} className={classes} {...rest}>
        {children}
      </a>
    );
  }
  return (
    <Link
      href={href as Parameters<typeof Link>[0]["href"]}
      className={classes}
      {...rest}
    >
      {children}
    </Link>
  );
}

export function ArrowRight({ className }: { className?: string }) {
  return (
    <span
      aria-hidden
      className={cn("inline-block transition-transform duration-150", className)}
    >
      →
    </span>
  );
}
