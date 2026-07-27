function Skills({ skillGroups }) {
  return (
    <section
      className="mt-6 rounded-[28px] border border-emerald-300/20 bg-slate-950/85 p-[clamp(28px,5vw,48px)] shadow-[0_24px_80px_rgba(2,6,23,0.55)] backdrop-blur-[18px] max-sm:rounded-[22px] max-sm:p-6"
      id="skills"
    >
      <div className="max-w-[720px]">
        <span className="mb-4 inline-flex w-fit rounded-full border border-emerald-400/30 px-3.5 py-2 text-xs font-bold uppercase tracking-[0.12em] text-emerald-300">
          Stack técnico
        </span>
        <h2 className="mb-5 text-[clamp(2rem,4vw,3.3rem)] font-black leading-none tracking-[-0.05em]">
          Lenguajes, frameworks, herramientas y bases de datos
        </h2>
      </div>

      <div className="grid grid-cols-3 gap-4.5 max-[1024px]:grid-cols-2 max-[860px]:grid-cols-1">
        {skillGroups.map((group) => (
          <article className="rounded-[22px] border border-emerald-300/20 bg-slate-900/60 p-6" key={group.title}>
            <h3 className="mb-4.5 text-[1.35rem] font-bold">{group.title}</h3>
            <ul className="grid gap-3">
              {group.skills.map((skill) => (
                <li className="rounded-[14px] bg-emerald-300/10 px-3.5 py-3 text-emerald-50/75" key={skill}>
                  {skill}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Skills;
