import Link from "next/link";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonStyles = cva(
  "inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-offset-2 disabled:opacity-50 disabled:pointer-events-none",
  {
    variants: {
      variant: {
        primary:
          "bg-brand-primary text-brand-primary-foreground hover:bg-brand-primary-hover",
        accent:
          "bg-brand-accent text-brand-accent-foreground hover:bg-brand-accent-hover",
        outline:
          "border-2 border-current text-foreground hover:bg-surface-muted",
        ghost: "text-foreground hover:bg-surface-muted",
      },
      size: {
        sm: "px-4 py-2 text-sm",
        md: "px-6 py-3 text-base",
        lg: "px-8 py-4 text-lg",
      },
    },
    defaultVariants: { variant: "primary", size: "md" },
  }
);

type ButtonOwnProps = VariantProps<typeof buttonStyles> & { className?: string };

export function Button({
  className,
  variant,
  size,
  ...props
}: ButtonOwnProps & React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button className={cn(buttonStyles({ variant, size }), className)} {...props} />
  );
}

export function LinkButton({
  className,
  variant,
  size,
  href,
  ...props
}: ButtonOwnProps &
  React.AnchorHTMLAttributes<HTMLAnchorElement> & { href: string }) {
  const isExternal = href.startsWith("http") || href.startsWith("mailto:") || href.startsWith("tel:");
  if (isExternal) {
    return (
      <a
        href={href}
        className={cn(buttonStyles({ variant, size }), className)}
        {...props}
      />
    );
  }
  return (
    <Link href={href} className={cn(buttonStyles({ variant, size }), className)} {...props} />
  );
}
