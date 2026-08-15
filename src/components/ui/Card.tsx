import { cn } from "@/lib/utils";

export function Card({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div
      className={cn(
        "rounded-2xl border border-border bg-surface overflow-hidden shadow-sm transition-shadow duration-150 hover:shadow-md",
        className
      )}
    >
      {children}
    </div>
  );
}
