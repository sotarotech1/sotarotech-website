function Projects({ projects }) {
  return (
    <section
      className="mt-6 rounded-[28px] border border-emerald-300/20 bg-slate-950/85 p-[clamp(28px,5vw,48px)] shadow-[0_24px_80px_rgba(2,6,23,0.55)] backdrop-blur-[18px] max-sm:rounded-[22px] max-sm:p-6"
      id="projects"
    >
      <div className="max-w-[780px]">
        <span className="mb-4 inline-flex w-fit rounded-full border border-emerald-400/30 px-3.5 py-2 text-xs font-bold uppercase tracking-[0.12em] text-emerald-300">
          Proyectos realizados
        </span>
        <h2 className="mb-5 text-[clamp(2rem,4vw,3.3rem)] font-black leading-none tracking-[-0.05em]">
          Trabajos y soluciones desarrolladas
        </h2>
        <p className="mb-8 max-w-[680px] text-lg leading-8 text-emerald-50/75">
          Algunos proyectos donde aplico desarrollo web, e-commerce, frontend, backend y gestión de datos.
        </p>
      </div>

      <div className="grid grid-cols-3 gap-4.5 max-[1024px]:grid-cols-2 max-[860px]:grid-cols-1">
        {projects.map((project) => (
          <article
            className="flex min-h-full flex-col rounded-[22px] border border-emerald-300/20 bg-slate-900/60 p-6 transition hover:-translate-y-1 hover:border-emerald-400/45"
            key={project.title}
          >
            <div className="mb-5 h-2 w-16 rounded-full bg-gradient-to-r from-emerald-400 to-green-600" />

            {project.image && (
              <div className="mb-5 overflow-hidden rounded-xl border border-emerald-300/10">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-48 w-full object-cover transition-transform duration-500 hover:scale-105"
                  onError={(e) => {
                    e.target.src = 'https://via.placeholder.com/400x200?text=Vista+Previa';
                  }}
                />
              </div>
            )}

            <h3 className="mb-3 text-[1.35rem] font-bold">{project.title}</h3>
            <p className="mb-5 flex-1 leading-7 text-emerald-50/75">{project.description}</p>

            <div className="mb-6 flex flex-wrap gap-2">
              {project.technologies.map((technology) => (
                <span
                  className="rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1 text-sm font-semibold text-emerald-200"
                  key={technology}
                >
                  {technology}
                </span>
              ))}
            </div>

            {project.url && project.url !== '#' && (
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-center gap-2 rounded-xl bg-emerald-400 px-4 py-3 text-sm font-bold text-slate-950 transition-colors hover:bg-emerald-300"
              >
                Visitar Sitio Web
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </a>
            )}
          </article>
        ))}
      </div>
    </section>
  );
}

export default Projects;
