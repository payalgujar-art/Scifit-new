import Icon from "@/components/ui/Icon";
import { buildWhatsAppUrl } from "@/lib/whatsapp";

/** Fixed WhatsApp click-to-chat button, visible on every page while scrolling (like the reference site). */
export default function FloatingCTA() {
  return (
    <a
      href={buildWhatsAppUrl()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with SciFit on WhatsApp to book a trial session"
      className="group fixed bottom-5 right-5 z-[1000] flex items-center gap-3"
    >
      <span className="hidden rounded-full bg-ink px-4 py-2 text-xs font-semibold uppercase tracking-wider text-bone shadow-lg shadow-black/30 sm:block">
        Book a trial session
      </span>
      <span className="grid h-14 w-14 place-items-center rounded-full bg-[#25d366] text-white shadow-xl shadow-black/30 transition-transform group-hover:scale-110">
        <Icon name="whatsapp" width={30} height={30} strokeWidth={1.8} />
      </span>
    </a>
  );
}
