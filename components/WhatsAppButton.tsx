import { IconBrandWhatsapp } from "@tabler/icons-react";
import { WHATSAPP_LINK } from "@/lib/tracks";

export default function WhatsAppButton() {
  return (
    <div className="fixed bottom-5 right-5 z-50 group">
      <a
        href={WHATSAPP_LINK}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with us on WhatsApp"
        className="flex h-14 w-14 items-center justify-center rounded-full bg-primary text-white shadow-lg transition-transform hover:scale-105"
      >
        <IconBrandWhatsapp size={28} stroke={1.75} aria-hidden="true" />
      </a>
      <span
        role="tooltip"
        className="pointer-events-none absolute bottom-1/2 right-full mr-3 translate-y-1/2 whitespace-nowrap rounded-md bg-dark-text px-3 py-1.5 text-sm text-white opacity-0 transition-opacity duration-200 group-hover:opacity-100"
      >
        Chat with us on WhatsApp
      </span>
    </div>
  );
}
