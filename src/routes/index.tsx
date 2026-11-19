import { createFileRoute, Link } from "@tanstack/react-router";
import { Kicker, Monogram, SiteFrame } from "@/components/site/chrome";
import { competencies, purposes, standing, evidenceItems, ledger } from "@/components/site/data";

export const Route = createFileRoute("/")({ component: Home });

function AnimatedName({ text, accent = false, className }: { text: string; accent?: boolean; className?: string }) {
  return (
    <span className={className}>
      {text.split("").map((char, i) => (
        <span
          key={i}
          className={accent ? "name-letter-accent" : "name-letter"}
          style={{ animationDelay: `${0.08 + i * 0.06}s` }}
        >
          {char === " " ? "\u00A0" : char}
        </span>
      ))}
    </span>
  );
}

function CompetencyMarquee() {
  const items = [...competencies, ...competencies];
  return (
    <div className="overflow-hidden bg-steel py-3.5 text-bone">
      <div className="marquee-track">
        {items.map((item, i) => (
          <span key={i} className="flex items-center gap-6 text-sm tracking-wide whitespace-nowrap">
            {item.title}
            <span className="text-brass">•</span>
          </span>
        ))}
      </div>
    </div>
  );
}

function Home() {
  return (
    <SiteFrame>
      <section className="hero-gradient relative flex items-center overflow-hidden">
        <div className="mx-auto grid w-full max-w-6xl items-center gap-12 px-5 py-16 md:gap-16 md:px-8 md:py-24 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <p className="text-xs font-semibold tracking-[0.2em] text-brass uppercase">
              Beyond My White Coat
            </p>
            <h1 className="hero-name mt-5 font-serif font-medium">
              <AnimatedName text="Rahul" className="block" />
              <AnimatedName text="Devnani" accent className="block italic" />
            </h1>
            <p className="mt-8 max-w-md font-serif text-xl leading-8 text-ink/80 md:text-2xl">
              First-year MD student at Gulf Medical University, Ajman.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                to="/competencies"
                search={{ id: "" }}
                className="inline-flex h-12 items-center bg-ink px-6 text-xs font-semibold tracking-widest text-bone uppercase transition-transform hover:scale-[1.02]"
              >
                View competencies
              </Link>
              <a
                href="#about"
                className="inline-flex h-12 items-center border border-ink/30 px-6 text-xs font-semibold tracking-widest uppercase transition-colors hover:bg-ink hover:text-bone"
              >
                About
              </a>
            </div>
          </div>
          <div className="relative lg:col-span-5">
            <div className="relative mx-auto max-w-sm lg:max-w-none">
              <img
                src="/rahul.jpeg"
                alt="Rahul Devnani"
                className="aspect-[4/5] w-full rounded-3xl object-cover shadow-2xl"
              />
              <div className="floating-card absolute -bottom-4 left-4 right-4 p-5 md:left-6 md:right-auto md:bottom-6 md:w-60">
                <div className="flex items-start gap-3">
                  <span className="mt-1.5 size-2.5 shrink-0 rounded-full bg-brass shadow-sm" />
                  <div>
                    <p className="font-semibold text-ink">White Coat Ceremony</p>
                    <p className="mt-0.5 text-sm text-muted">2026</p>
                    <p className="mt-1 text-sm leading-5 text-brass">
                      Gulf Medical University<br />Ajman, UAE
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CompetencyMarquee />

      <section className="bg-ink text-bone" aria-label="Standing">
        <div className="mx-auto grid max-w-6xl sm:grid-cols-2 lg:grid-cols-4">
          {standing.map((item) => (
            <div key={item.index} className="border-b border-bone/10 px-5 py-8 md:px-8 lg:border-r lg:border-b-0">
              <p className="font-serif text-xl text-brass">{item.index}</p>
              <p className="mt-3 text-[0.65rem] font-semibold tracking-widest text-bone/40 uppercase">
                {item.label}
              </p>
              <p className="mt-1 text-sm">{item.value}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="about" className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28">
        <Kicker index="01">About</Kicker>
        <div className="mt-8 grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <h2 className="font-serif text-4xl leading-tight md:text-5xl">
              Building the foundation.
            </h2>
            <div className="mt-6 max-w-xl space-y-4 text-base leading-7 text-muted">
              <p>
                I am a first-year MD student at Gulf Medical University in Ajman, entered in 2026. This portfolio documents my progress across the nine competency domains of the MD program.
              </p>
              <p>
                It is a living record of learning, reflection, and growth — aligned with the university’s e-portfolio framework.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-line bg-paper">
        <div className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28">
          <div className="text-center">
            <p className="text-xs font-semibold tracking-[0.18em] text-brass uppercase">GMU Framework</p>
            <h2 className="mt-4 font-serif text-4xl md:text-5xl">
              The 9 Core <span className="gradient-text">Competencies</span>
            </h2>
            <div className="mx-auto mt-4 h-0.5 w-16 rounded-full bg-gradient-to-r from-brass to-accent" />
          </div>
          <p className="mx-auto mt-6 max-w-2xl text-center text-base leading-7 text-muted">
            Click any competency to explore detailed reflections, evidence, and structured Gibbs Reflective Cycle documentation aligned with Gulf Medical University standards.
          </p>
          <div className="card-grid mt-12 grid gap-6 sm:grid-cols-2">
            {competencies.map((item) => {
              const count = ((evidenceItems as any)[item.id] || []).length;
              return (
                <Link
                  key={item.id}
                  to="/competencies"
                  search={{ id: item.id }}
                  className="glass-card group block p-7 transition-all hover:scale-[1.015]"
                >
                  <div className="flex items-start justify-between">
                    <p className="text-xs font-semibold tracking-widest text-muted">{item.index}</p>
                    {count > 0 && (
                      <span className="rounded-full bg-accent/15 px-3 py-1 text-[0.65rem] font-semibold tracking-wide text-brass">
                        {count} {count === 1 ? "ENTRY" : "ENTRIES"}
                      </span>
                    )}
                  </div>
                  <h3 className="mt-4 font-serif text-2xl leading-tight group-hover:text-brass transition-colors">{item.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-muted line-clamp-3">{item.plain}</p>
                  <p className="mt-6 text-sm font-semibold tracking-wide text-ink group-hover:text-brass">
                    View Details →
                  </p>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <section className="border-t border-line">
        <div className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28">
          <div className="text-center">
            <p className="text-xs font-semibold tracking-[0.18em] text-brass uppercase">Scholarly Work</p>
            <h2 className="mt-4 font-serif text-4xl md:text-5xl">Research & Publications</h2>
            <div className="mx-auto mt-4 h-0.5 w-16 rounded-full bg-gradient-to-r from-brass to-accent" />
          </div>
          <p className="mx-auto mt-6 max-w-xl text-center text-base leading-7 text-muted">
            A growing collection of research projects, publications, and scholarly contributions to medicine.
          </p>
          <div className="mx-auto mt-12 max-w-lg">
            <div className="glass-card p-8 text-center">
              <div className="mx-auto grid size-14 place-items-center rounded-2xl bg-brass/15 text-brass">
                <svg className="size-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="mt-5 font-serif text-2xl">Research Project</h3>
              <p className="mt-1 text-sm text-muted">Coming Soon</p>
              <div className="mt-5 rounded-2xl bg-brass/10 px-5 py-4 text-sm leading-6 text-muted">
                Research projects will be added here as they progress
              </div>
            </div>
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            {ledger.map((item) => (
              <div key={item.index} className="text-center">
                <p className="text-xs font-semibold tracking-widest text-brass">{item.index}</p>
                <p className="mt-2 font-serif text-lg">{item.kind}</p>
                <p className="mt-1 text-xs uppercase tracking-wide text-muted">{item.status}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="purpose" className="scroll-mt-20 border-t border-line">
        <div className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28">
          <Kicker index="03">Purpose</Kicker>
          <h2 className="mt-4 max-w-2xl font-serif text-4xl md:text-5xl">
            Why this portfolio exists.
          </h2>
          <p className="mt-4 max-w-xl text-base leading-7 text-muted">
            A structured record of year one, aligned with the GMU e-portfolio framework.
          </p>
          <div className="mt-12 grid gap-10 md:grid-cols-2">
            {purposes.map((item) => (
              <article key={item.index}>
                <p className="text-xs font-semibold tracking-widest text-brass">{item.index}</p>
                <h3 className="mt-2 font-serif text-2xl">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-muted">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-ink text-bone">
        <div className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-24">
          <p className="max-w-3xl font-serif text-3xl leading-tight italic md:text-5xl">
            Every lesson learned today is a step towards making a difference tomorrow.
          </p>
        </div>
      </section>

      <section id="contact" className="scroll-mt-20">
        <div className="mx-auto grid max-w-6xl gap-12 px-5 py-20 md:px-8 md:py-28 lg:grid-cols-2">
          <div>
            <Kicker index="04">Contact</Kicker>
            <h2 className="mt-4 font-serif text-4xl md:text-5xl">Get in touch.</h2>
            <p className="mt-4 max-w-md text-base leading-7 text-muted">
              For academic enquiries, Gulf Medical University in Ajman is the institution of record.
            </p>
          </div>
          <div className="glass-card p-8">
            <Monogram />
            <h3 className="mt-6 font-serif text-3xl">Rahul Devnani</h3>
            <p className="mt-2 text-sm leading-6 text-muted">
              First-year MD student
              <br />
              Gulf Medical University, Ajman
            </p>
            <p className="mt-4 text-sm">
              <a href="tel:+971527249865" className="font-medium text-brass hover:underline">
                +971 52 724 9865
              </a>
            </p>
            <p className="mt-6 border-t border-line pt-6 font-serif text-lg italic leading-7">
              “Every lesson learned today is a step towards making a difference tomorrow.”
            </p>
          </div>
        </div>
      </section>
    </SiteFrame>
  );
}
