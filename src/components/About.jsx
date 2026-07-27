function About({ highlights }) {
  return (
    <section className="mt-6 rounded-[28px] border border-emerald-300/20 bg-slate-950/85 p-[clamp(28px,5vw,48px)] shadow-[0_24px_80px_rgba(2,6,23,0.55)] backdrop-blur-[18px] max-sm:rounded-[22px] max-sm:p-6">
      <div>
        <span className="mb-4 inline-flex w-fit rounded-full border border-emerald-400/30 px-3.5 py-2 text-xs font-bold uppercase tracking-[0.12em] text-emerald-300">
          Sobre mí
        </span>
        <h2 className="mb-5 text-[clamp(2rem,4vw,3.3rem)] font-black leading-none tracking-[-0.05em]">
          Perfil profesional
        </h2>
      </div>
      <div className="grid grid-cols-3 gap-4.5 max-[860px]:grid-cols-1">
        {highlights.map((item) => (
          <article className="rounded-[22px] border border-emerald-300/20 bg-slate-900/60 p-6" key={item}>
            <span className="grid h-8.5 w-8.5 place-items-center rounded-full bg-emerald-400/15 font-black text-emerald-400">
              ✓
            </span>
            <p className="mt-3 leading-7 text-emerald-50/75">{item}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export default About;
