import { createFileRoute, Link } from "@tanstack/react-router";
import { Kicker, Monogram, SiteFrame } from "@/components/site/chrome";
import { CompetencyIcon } from "@/components/site/icons";
import { competencies, purposes, standing, evidenceItems, ledger } from "@/components/site/data";

export const Route = createFileRoute("/")({ component: Home });

function AnimatedName({ text, accent = false, className }: { text: string; accent?: boolean; className?: string }) {
  return (
    <span className={className}>
      {text.split("").map((char, i) => (
        <span
          key={i}
          className={accent ? "name-letter-accent" : "name-letter"}
          style={{ animationDelay: `${0.06 + i * 0.05}s` }}
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
    <div className="overflow-hidden border-y border-line/60 bg-white/70 py-3 backdrop-blur-sm">
      <div className="marquee-track">
        {items.map((item, i) => (
          <span key={i} className="flex items-center gap-4 text-sm tracking-wide whitespace-nowrap text-ink/60">
            {item.title}
            <span className="text-brass/70">•</span>
          </span>
        ))}
      </div>
    </div>
  );
}

function Home() {
  return (
    <SiteFrame>
      <section className="hero-gradient relative overflow-hidden">
        <div className="mx-auto grid w-full max-w-6xl items-center gap-8 px-5 py-10 md:gap-12 md:px-8 md:py-16 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <p className="text-[0.65rem] font-semibold tracking-[0.22em] text-brass uppercase">
              Beyond My White Coat
            </p>
            <h1 className="hero-name mt-3 font-serif font-medium">
              <AnimatedName text="Rahul" className="block" />
              <AnimatedName text="Devnani" accent className="block italic" />
            </h1>
            <p className="mt-5 max-w-sm font-serif text-base leading-7 text-ink/70 md:text-lg">
              First-year MD student at Gulf Medical University, Ajman.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                to="/competencies"
                search={{ id: "" }}
                className="inline-flex h-10 items-center rounded-full bg-brass px-5 text-[0.65rem] font-semibold tracking-widest text-white uppercase transition-transform hover:scale-[1.03]"
              >
                Competencies
              </Link>
              <Link
                to="/about"
                className="inline-flex h-10 items-center rounded-full border border-brass/35 px-5 text-[0.65rem] font-semibold tracking-widest text-brass uppercase transition-colors hover:bg-brass hover:text-white"
              >
                About
              </Link>
            </div>
          </div>
          <div className="relative lg:col-span-5">
            <div className="relative mx-auto max-w-[16rem] lg:max-w-none">
              <img
                src="/rahul.jpeg"
                alt="Rahul Devnani"
                className="aspect-[4/5] w-full rounded-2xl object-cover shadow-xl ring-2 ring-white"
              />
              <div className="floating-card absolute -bottom-2 left-2 right-2 p-3.5 md:left-4 md:right-auto md:bottom-4 md:w-52">
                <div className="flex items-start gap-2.5">
                  <span className="mt-1 size-2 shrink-0 rounded-full bg-brass" />
                  <div>
                    <p className="text-xs font-semibold text-ink">White Coat Ceremony</p>
                    <p className="text-[0.65rem] text-muted">2026</p>
                    <p className="mt-0.5 text-[0.65rem] leading-4 text-brass">
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

      <section className="mx-auto max-w-6xl px-5 py-6 md:px-8" aria-label="Standing">
        <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
          {standing.map((item) => (
            <div key={item.index} className="stat-card">
              <p className="text-[0.6rem] font-semibold tracking-widest text-brass">{item.index}</p>
              <p className="mt-1 text-[0.55rem] font-medium tracking-widest text-muted uppercase">
                {item.label}
              </p>
              <p className="mt-0.5 text-sm font-medium text-ink">{item.value}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="about" className="mx-auto max-w-6xl px-5 py-12 md:px-8 md:py-20">
        <div className="text-center">
          <p className="text-[0.65rem] font-semibold tracking-[0.2em] text-brass uppercase">About Me</p>
          <h2 className="mt-3 font-serif text-3xl leading-tight md:text-4xl">
            Building a <span className="gradient-text">foundation</span> for medicine
          </h2>
          <div className="mx-auto mt-3 h-0.5 w-12 rounded-full bg-gradient-to-r from-brass to-accent" />
        </div>
        <div className="mx-auto mt-6 max-w-xl space-y-3 text-center text-sm leading-6 text-muted md:text-base md:leading-7">
          <p>
            I am a first-year MD student at Gulf Medical University in Ajman, entered in 2026. This portfolio documents my progress across the nine competency domains of the MD program.
          </p>
          <p>
            It is a living record of learning, reflection, and growth — aligned with the university’s e-portfolio framework.
          </p>
        </div>
        <div className="mt-6 text-center">
          <Link to="/about" className="text-sm font-semibold text-brass hover:underline">
            Read more →
          </Link>
        </div>
      </section>

      <section className="border-t border-line/60 bg-white/40">
        <div className="mx-auto max-w-6xl px-5 py-12 md:px-8 md:py-20">
          <div className="text-center">
            <p className="text-[0.65rem] font-semibold tracking-[0.2em] text-brass uppercase">GMU Framework</p>
            <h2 className="mt-3 font-serif text-3xl md:text-4xl">
              The 9 Core <span className="gradient-text">Competencies</span>
            </h2>
            <div className="mx-auto mt-3 h-0.5 w-12 rounded-full bg-gradient-to-r from-brass to-accent" />
          </div>
          <p className="mx-auto mt-5 max-w-lg text-center text-sm leading-6 text-muted">
            Click any competency to explore reflections, evidence, and Gibbs Reflective Cycle documentation.
          </p>
          <div className="card-grid mt-8 grid gap-4 sm:grid-cols-2">
            {competencies.map((item) => {
              const count = ((evidenceItems as any)[item.id] || []).length;
              return (
                <Link
                  key={item.id}
                  to="/competencies"
                  search={{ id: item.id }}
                  className="glass-card group block p-5"
                >
                  <div className="flex items-start justify-between">
                    <div className="grid size-10 place-items-center rounded-xl bg-brass/8 text-brass">
                      <CompetencyIcon id={item.id} />
                    </div>
                    {count > 0 && (
                      <span className="rounded-full bg-accent/12 px-2 py-0.5 text-[0.55rem] font-semibold tracking-wide text-brass">
                        {count} {count === 1 ? "ENTRY" : "ENTRIES"}
                      </span>
                    )}
                  </div>
                  <p className="mt-3 text-[0.6rem] font-semibold tracking-widest text-muted">{item.index}</p>
                  <h3 className="mt-0.5 font-serif text-lg leading-snug group-hover:text-brass transition-colors">{item.title}</h3>
                  <p className="mt-1.5 text-xs leading-5 text-muted line-clamp-2">{item.plain}</p>
                  <p className="mt-3 text-xs font-semibold text-brass">
                    View Details →
                  </p>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <section className="border-t border-line/60">
        <div className="mx-auto max-w-6xl px-5 py-12 md:px-8 md:py-20">
          <div className="text-center">
            <p className="text-[0.65rem] font-semibold tracking-[0.2em] text-brass uppercase">Scholarly Work</p>
            <h2 className="mt-3 font-serif text-3xl md:text-4xl">Research & Publications</h2>
            <div className="mx-auto mt-3 h-0.5 w-12 rounded-full bg-gradient-to-r from-brass to-accent" />
          </div>
          <p className="mx-auto mt-5 max-w-md text-center text-sm leading-6 text-muted">
            A growing collection of research projects and scholarly contributions.
          </p>
          <div className="mx-auto mt-8 max-w-sm">
            <div className="glass-card p-6 text-center">
              <div className="mx-auto grid size-12 place-items-center rounded-xl bg-brass/10 text-brass">
                <svg className="size-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="mt-4 font-serif text-xl">Research Project</h3>
              <p className="mt-1 text-xs text-muted">Coming Soon</p>
              <div className="mt-4 rounded-xl bg-brass/6 px-4 py-3 text-xs leading-5 text-muted">
                Research projects will be added here as they progress
              </div>
            </div>
          </div>
          <div className="mt-6 grid grid-cols-3 gap-4">
            {ledger.map((item) => (
              <div key={item.index} className="text-center">
                <p className="text-[0.6rem] font-semibold tracking-widest text-brass">{item.index}</p>
                <p className="mt-1 font-serif text-sm">{item.kind}</p>
                <p className="mt-0.5 text-[0.6rem] uppercase tracking-wide text-muted">{item.status}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="purpose" className="scroll-mt-20 border-t border-line/60 bg-white/30">
        <div className="mx-auto max-w-6xl px-5 py-12 md:px-8 md:py-20">
          <Kicker index="03">Purpose</Kicker>
          <h2 className="mt-3 max-w-lg font-serif text-3xl md:text-4xl">
            Why this portfolio exists.
          </h2>
          <p className="mt-3 max-w-md text-sm leading-6 text-muted">
            A structured record of year one, aligned with the GMU e-portfolio framework.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {purposes.map((item) => (
              <article key={item.index} className="glass-card p-5">
                <p className="text-[0.6rem] font-semibold tracking-widest text-brass">{item.index}</p>
                <h3 className="mt-1.5 font-serif text-lg">{item.title}</h3>
                <p className="mt-1.5 text-xs leading-5 text-muted">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-line/60">
        <div className="mx-auto max-w-6xl px-5 py-12 md:px-8 md:py-16">
          <p className="mx-auto max-w-2xl text-center font-serif text-xl leading-snug italic text-ink/75 md:text-3xl">
            “Every lesson learned today is a step towards making a difference tomorrow.”
          </p>
        </div>
      </section>

      <section id="contact" className="scroll-mt-20 border-t border-line/60">
        <div className="mx-auto grid max-w-6xl gap-8 px-5 py-12 md:px-8 md:py-20 lg:grid-cols-2">
          <div>
            <Kicker index="04">Contact</Kicker>
            <h2 className="mt-3 font-serif text-3xl md:text-4xl">Get in touch.</h2>
            <p className="mt-3 max-w-xs text-sm leading-6 text-muted">
              For academic enquiries, Gulf Medical University in Ajman is the institution of record.
            </p>
          </div>
          <div className="glass-card p-6">
            <Monogram />
            <h3 className="mt-4 font-serif text-2xl">Rahul Devnani</h3>
            <p className="mt-1 text-xs leading-5 text-muted">
              First-year MD student<br />Gulf Medical University, Ajman
            </p>
            <p className="mt-3 text-sm">
              <a href="mailto:2026md90@mygmu.ac.ae" className="font-medium text-brass hover:underline">
                2026md90@mygmu.ac.ae
              </a>
            </p>
            <p className="mt-1 text-sm">
              <a href="tel:+971527249865" className="font-medium text-brass hover:underline">
                +971 52 724 9865
              </a>
            </p>
            <p className="mt-5 border-t border-line pt-4 font-serif text-sm italic leading-6">
              “Every lesson learned today is a step towards making a difference tomorrow.”
            </p>
          </div>
        </div>
      </section>
    </SiteFrame>
  );
}
