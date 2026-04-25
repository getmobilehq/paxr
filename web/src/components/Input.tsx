import { cn } from "@/lib/cn";

type FieldProps = {
  label: string;
  hint?: string;
  error?: boolean;
  className?: string;
  children: React.ReactNode;
};

export function Field({ label, hint, error, className, children }: FieldProps) {
  return (
    <div className={cn("flex min-w-[260px] flex-col gap-2", className)}>
      <label className="text-[11px] font-medium uppercase tracking-[0.14em] text-paxr-mist">
        {label}
      </label>
      {children}
      {hint && (
        <span
          className={cn(
            "text-[12px]",
            error ? "text-paxr-error" : "text-paxr-mist",
          )}
        >
          {hint}
        </span>
      )}
    </div>
  );
}

export function Input({
  className,
  error,
  ...rest
}: React.InputHTMLAttributes<HTMLInputElement> & { error?: boolean }) {
  return (
    <input
      className={cn(
        "rounded-md border bg-white px-4 py-3.5 font-sans text-[15px] text-paxr-deep transition-colors duration-150 outline-none focus:border-paxr-deep",
        error ? "border-paxr-error" : "border-paxr-line",
        className,
      )}
      {...rest}
    />
  );
}

export function Textarea({
  className,
  ...rest
}: React.TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return (
    <textarea
      className={cn(
        "min-h-[96px] rounded-md border border-paxr-line bg-white px-4 py-3.5 font-sans text-[15px] text-paxr-deep transition-colors duration-150 outline-none focus:border-paxr-deep",
        className,
      )}
      {...rest}
    />
  );
}
