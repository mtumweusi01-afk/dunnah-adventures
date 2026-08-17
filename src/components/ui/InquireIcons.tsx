import { CONTACT, whatsappLink } from "@/lib/site";
import { cn } from "@/lib/utils";

const ICON_SIZES = {
  sm: "h-9 w-9",
  md: "h-11 w-11",
} as const;

export function InquireIcons({
  context,
  size = "md",
  className,
}: {
  context?: string;
  size?: keyof typeof ICON_SIZES;
  className?: string;
}) {
  const message = context
    ? `Hi Dunnah Adventures, I'd like to know more about the ${context} tour.`
    : "Hi Dunnah Adventures, I'd like to know more about a Kenya safari.";
  const subject = context ? `Inquiry: ${context}` : "Safari inquiry";
  const mailHref = `mailto:${CONTACT.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(message)}`;

  const sizeClass = ICON_SIZES[size];

  return (
    <div className={cn("flex items-center gap-2.5", className)}>
      <a
        href={whatsappLink(message)}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp"
        className={cn(
          sizeClass,
          "flex items-center justify-center rounded-full bg-[#25D366] text-white transition-transform hover:scale-105"
        )}
      >
        <svg width="55%" height="55%" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.28-1.38a9.9 9.9 0 0 0 4.76 1.21h.01c5.46 0 9.91-4.45 9.91-9.91C21.96 6.45 17.5 2 12.04 2Zm0 18.13h-.01a8.2 8.2 0 0 1-4.19-1.15l-.3-.18-3.13.82.84-3.05-.2-.31a8.19 8.19 0 0 1-1.26-4.35c0-4.53 3.69-8.22 8.22-8.22 2.2 0 4.26.86 5.81 2.41a8.16 8.16 0 0 1 2.41 5.81c0 4.53-3.69 8.22-8.19 8.22Zm4.51-6.16c-.25-.12-1.46-.72-1.69-.8-.23-.08-.39-.12-.56.12-.16.25-.64.8-.78.96-.14.16-.29.18-.54.06-.25-.12-1.04-.38-1.98-1.22-.73-.65-1.23-1.46-1.37-1.7-.14-.25-.02-.38.11-.5.11-.11.25-.29.37-.43.12-.14.16-.25.25-.41.08-.16.04-.31-.02-.43-.06-.12-.56-1.35-.77-1.85-.2-.48-.41-.42-.56-.43-.14-.01-.31-.01-.48-.01-.16 0-.43.06-.66.31-.23.25-.86.85-.86 2.06 0 1.22.89 2.4 1.01 2.56.12.16 1.75 2.67 4.24 3.74.59.26 1.06.41 1.42.52.6.19 1.14.16 1.57.1.48-.07 1.46-.6 1.67-1.17.21-.58.21-1.07.14-1.17-.06-.11-.23-.17-.48-.29Z" />
        </svg>
      </a>

      <a
        href={CONTACT.instagram}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Instagram"
        className={cn(
          sizeClass,
          "flex items-center justify-center rounded-full bg-gradient-to-br from-[#feda75] via-[#d62976] to-[#4f5bd5] text-white transition-transform hover:scale-105"
        )}
      >
        <svg width="55%" height="55%" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <rect x="2.5" y="2.5" width="19" height="19" rx="5" stroke="currentColor" strokeWidth="1.8" />
          <circle cx="12" cy="12" r="4.3" stroke="currentColor" strokeWidth="1.8" />
          <circle cx="17.3" cy="6.7" r="1.15" fill="currentColor" />
        </svg>
      </a>

      <a
        href={CONTACT.facebook}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Facebook"
        className={cn(
          sizeClass,
          "flex items-center justify-center rounded-full bg-[#1877F2] text-white transition-transform hover:scale-105"
        )}
      >
        <svg width="55%" height="55%" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M22 12a10 10 0 1 0-11.56 9.88v-6.99H7.9V12h2.54V9.8c0-2.5 1.49-3.89 3.77-3.89 1.1 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.78l-.44 2.89h-2.34v6.99A10 10 0 0 0 22 12Z" />
        </svg>
      </a>

      <a
        href={mailHref}
        aria-label="Email"
        className={cn(
          sizeClass,
          "flex items-center justify-center rounded-full bg-brand-primary text-brand-primary-foreground transition-transform hover:scale-105"
        )}
      >
        <svg width="55%" height="55%" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <rect x="2.5" y="5" width="19" height="14" rx="2.2" stroke="currentColor" strokeWidth="1.8" />
          <path d="M3.5 6.8 12 12.8l8.5-6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </a>
    </div>
  );
}
