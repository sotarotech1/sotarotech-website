import WhatsAppIcon from './WhatsAppIcon.jsx';

function Contact({ contactEmail, whatsappNumber }) {
  return (
    <section className="mt-6 mb-6 flex items-center justify-between gap-6 rounded-[28px] border border-emerald-300/20 bg-slate-950/85 p-[clamp(28px,5vw,48px)] shadow-[0_24px_80px_rgba(2,6,23,0.55)] backdrop-blur-[18px] max-[860px]:grid max-[860px]:items-start max-sm:rounded-[22px] max-sm:p-6">
      <div>
        <span className="mb-4 inline-flex w-fit rounded-full border border-emerald-400/30 px-3.5 py-2 text-xs font-bold uppercase tracking-[0.12em] text-emerald-300">
          Disponible para proyectos
        </span>
        <h2 className="mb-5 text-[clamp(2rem,4vw,3.3rem)] font-black leading-none tracking-[-0.05em]">
          ¿Trabajamos juntos?
        </h2>
        <p className="max-w-[680px] text-lg leading-8 text-emerald-50/75">
          Si buscas un desarrollador web con conocimientos full stack, puedes contactarme para conversar sobre tu idea o proyecto.
        </p>
      </div>
      <div className="flex flex-wrap gap-3 max-sm:w-full">
        <a
          href={`mailto:${contactEmail}`}
          className="inline-flex min-h-12 items-center justify-center rounded-full bg-gradient-to-br from-emerald-400 to-green-600 px-5.5 font-extrabold text-white transition hover:-translate-y-0.5 max-sm:w-full"
        >
          Enviar mensaje
        </a>
        <a
          href={`https://wa.me/${whatsappNumber}`}
          target="_blank"
          rel="noreferrer"
          className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-emerald-400/30 px-5.5 font-extrabold text-emerald-50 transition hover:-translate-y-0.5 hover:border-emerald-400/60 max-sm:w-full"
        >
          <WhatsAppIcon className="h-5 w-5" />
          WhatsApp
        </a>
      </div>
    </section>
  );
}

export default Contact;
