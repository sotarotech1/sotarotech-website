function Hero({ contactEmail }) {
  return (
    <section className="grid min-h-[calc(100vh-80px)] grid-cols-[minmax(0,1fr)_320px] items-center gap-8 rounded-[28px] border border-emerald-300/20 bg-slate-950/85 p-[clamp(32px,7vw,72px)] shadow-[0_24px_80px_rgba(2,6,23,0.55)] backdrop-blur-[18px] max-[860px]:min-h-auto max-[860px]:grid-cols-1 max-sm:rounded-[22px] max-sm:p-6">
      <div>
        <span className="mb-4 inline-flex w-fit rounded-full border border-emerald-400/30 px-3.5 py-2 text-xs font-bold uppercase tracking-[0.12em] text-emerald-300">
          Portfolio personal
        </span>
        <h1 className="mb-3 max-w-[760px] text-[clamp(3rem,9vw,6.6rem)] font-black leading-[0.9] tracking-[-0.08em] max-sm:text-[3.4rem]">
          Leonardo Soto
        </h1>
        <p className="mb-6 text-[clamp(1.45rem,3vw,2.2rem)] font-extrabold text-emerald-400">
          Desarrollador Web
        </p>
        <p className="max-w-[680px] text-lg leading-8 text-emerald-50/75">
          Creo aplicaciones web combinando tecnologías backend, frontend y bases de datos para entregar soluciones limpias, útiles y enfocadas en la experiencia del usuario.
        </p>
        <div className="mt-8 flex flex-wrap gap-3.5 max-sm:w-full">
          <a
            href={`mailto:${contactEmail}`}
            className="inline-flex min-h-12 items-center justify-center rounded-full bg-gradient-to-br from-emerald-400 to-green-600 px-5.5 font-extrabold text-white transition hover:-translate-y-0.5 max-sm:w-full"
          >
            Contactar
          </a>
          <a
            href="#projects"
            className="inline-flex min-h-12 items-center justify-center rounded-full border border-emerald-300/20 px-5.5 font-extrabold text-emerald-50 transition hover:-translate-y-0.5 max-sm:w-full"
          >
            Ver proyectos
          </a>
        </div>
      </div>

      <div
        className="relative overflow-hidden rounded-[32px] border border-emerald-400/25 bg-gradient-to-br from-slate-900/95 to-slate-950/80 p-8 before:absolute before:-top-20 before:-right-24 before:h-48 before:w-48 before:rounded-full before:bg-emerald-400/25 before:blur-lg before:content-[''] max-[860px]:max-w-[420px]"
        aria-label="Resumen profesional"
      >
        <div className="mb-7 grid h-[150px] w-[150px] place-items-center rounded-[42px] bg-gradient-to-br from-emerald-400 via-green-600 to-green-950 text-5xl font-black shadow-[inset_0_0_32px_rgba(255,255,255,0.18)]">
          LS
        </div>
        <p className="mb-2 text-emerald-50/70">Web Developer</p>
        <strong className="text-xl">Backend · Frontend · DB</strong>
      </div>
    </section>
  );
}

export default Hero;
