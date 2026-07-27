import WhatsAppIcon from './WhatsAppIcon.jsx';

function FloatingWhatsAppButton({ whatsappNumber }) {
  return (
    <a
      href={`https://wa.me/${whatsappNumber}`}
      target="_blank"
      rel="noreferrer"
      aria-label="Contactar por WhatsApp"
      className="fixed right-5 bottom-5 z-50 grid h-15 w-15 place-items-center rounded-full bg-gradient-to-br from-emerald-400 to-green-600 text-white shadow-[0_18px_50px_rgba(22,163,74,0.45)] transition hover:-translate-y-1 hover:scale-105"
    >
      <WhatsAppIcon className="h-8 w-8" />
    </a>
  );
}

export default FloatingWhatsAppButton;
