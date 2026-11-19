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
          style={{ animationDelay: `${0.04 + i * 0.04}s` }}
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
    <div className="overflow-hidden border-y border-line/50 bg-white/50 backdrop-blur-sm py-3">
      <div className="marquee-track">
        {items.map((item, i) => (
          <span key={i} className="flex items-center gap-4 text-sm tracking-wide whitespace-nowrap text-muted">
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
      <section className="relative bg-gradient-to-b from-bone to-white overflow-hidden">
        <div className="orb orb-1" />
        <div className="orb orb-2" />
        <div className="mx-auto grid w-full max-w-6xl items-center gap-8 px-5 py-12 md:gap-12 md:px-8 md:py-16 lg:grid-cols-12 relative z-10">
          <div className="lg:col-span-7">
            <p className="text-[0.65rem] font-medium tracking-[0.22em] text-brass uppercase fade-up">
              Beyond My White Coat
            </p>
            <h1 className="hero-name mt-3 font-serif font-medium">
              <AnimatedName text="Rahul" className="block" />
              <AnimatedName text="Devnani" accent className="block italic" />
            </h1>
            <p className="mt-5 max-w-sm font-serif text-base leading-7 text-muted md:text-lg fade-up" style={{ animationDelay: "0.5s" }}>
              First-year MD student at Gulf Medical University, Ajman.
            </p>
            <div className="mt-6 flex flex-wrap gap-3 fade-up" style={{ animationDelay: "0.6s" }}>
              <Link
                to="/competencies"
                search={{ id: "" }}
                className="inline-flex h-10 items-center bg-gradient-to-r from-ink to-steel px-5 text-[0.65rem] font-medium tracking-widest text-bone uppercase rounded-lg shadow-lg shadow-ink/20 hover:shadow-xl transition-all"
              >
                Competencies
              </Link>
              <Link
                to="/about"
                className="inline-flex h-10 items-center border border-ink/30 bg-white/80 backdrop-blur-sm px-5 text-[0.65rem] font-medium tracking-widest text-ink uppercase rounded-lg hover:border-brass hover:text-brass transition-all"
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
                className="aspect-[4/5] w-full object-cover rounded-2xl shadow-xl"
              />
              <div className="floating-card absolute -bottom-3 left-2 right-2 p-3.5 md:left-4 md:right-auto md:bottom-4 md:w-52">
                <div className="flex items-start gap-2.5">
                  <span className="mt-1 size-2 shrink-0 rounded-full bg-gradient-to-r from-brass to-warm" />
                  <div>
                    <p className="text-xs font-medium text-ink">Year 1 · MD</p>
                    <p className="text-[0.65rem] text-muted">Entered 2026</p>
                    <p className="mt-0.5 text-[0.65rem] leading-4 text-steel">
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
        <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
          {standing.map((item) => (
            <div key={item.index} className="stat-card">
              <p className="text-[0.6rem] font-medium tracking-widest text-brass">{item.index}</p>
              <p className="mt-1 text-[0.55rem] font-medium tracking-widest text-muted uppercase">
                {item.label}
              </p>
              <p className="mt-0.5 text-sm font-medium text-ink">{item.value}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="about" className="mx-auto max-w-6xl px-5 py-12 md:px-8 md:py-16">
        <div className="text-center">
          <p className="text-[0.65rem] font-medium tracking-[0.2em] text-brass uppercase">About Me</p>
          <h2 className="mt-3 font-serif text-3xl leading-tight md:text-4xl">
            Building a <span className="gradient-text italic">foundation</span> for medicine
          </h2>
          <div className="mx-auto mt-3 h-0.5 w-12 bg-gradient-to-r from-brass to-warm rounded-full" />
        </div>
        <div className="mx-auto mt-6 max-w-xl space-y-3 text-center text-sm leading-6 text-muted">
          <p>
            I am a first-year MD student at Gulf Medical University in Ajman, entered in 2026. This portfolio documents my progress across the nine competency domains of the MD program.
          </p>
          <p>
            It is a living record of learning, reflection, and growth — aligned with the university’s e-portfolio framework.
          </p>
        </div>
        <div className="mt-6 text-center">
          <Link to="/about" className="text-sm font-medium text-brass hover:underline">
            Read more →
          </Link>
        </div>
      </section>

      <section className="border-t border-line/50">
        <div className="mx-auto max-w-6xl px-5 py-12 md:px-8 md:py-16">
          <div className="text-center">
            <p className="text-[0.65rem] font-medium tracking-[0.2em] text-brass uppercase">GMU Framework</p>
            <h2 className="mt-3 font-serif text-3xl md:text-4xl">
              The 9 Core Competencies
            </h2>
            <div className="mx-auto mt-3 h-0.5 w-12 bg-gradient-to-r from-brass to-warm rounded-full" />
          </div>
          <p className="mx-auto mt-5 max-w-lg text-center text-sm leading-6 text-muted">
            Click any competency to explore detailed reflections, evidence, and structured Gibbs Reflective Cycle documentation aligned with Gulf Medical University standards.
          </p>
          <div className="card-grid mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
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
                    <div className="grid size-10 place-items-center rounded-xl bg-gradient-to-br from-brass/15 to-warm/10 text-brass">
                      <CompetencyIcon id={item.id} />
                    </div>
                    {count > 0 && (
                      <span className="rounded-full bg-gradient-to-r from-brass/15 to-warm/15 px-2.5 py-0.5 text-[0.55rem] font-medium tracking-wide text-brass">
                        {count} {count === 1 ? "ENTRY" : "ENTRIES"}
                      </span>
                    )}
                  </div>
                  <p className="mt-3 text-[0.6rem] font-medium tracking-widest text-muted">{item.index}</p>
                  <h3 className="mt-0.5 font-serif text-lg leading-snug group-hover:text-brass transition-colors">{item.title}</h3>
                  <p className="mt-1.5 text-sm leading-6 text-muted">{item.plain}</p>
                  <p className="mt-3 text-xs font-medium text-brass">
                    View Details →
                  </p>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <section className="border-t border-line/50">
        <div className="mx-auto max-w-6xl px-5 py-12 md:px-8 md:py-16">
          <div className="text-center">
            <p className="text-[0.65rem] font-medium tracking-[0.2em] text-brass uppercase">Scholarly Work</p>
            <h2 className="mt-3 font-serif text-3xl md:text-4xl">Research & Publications</h2>
            <div className="mx-auto mt-3 h-0.5 w-12 bg-gradient-to-r from-brass to-warm rounded-full" />
          </div>
          <p className="mx-auto mt-5 max-w-md text-center text-sm leading-6 text-muted">
            A growing collection of research projects, publications, and scholarly contributions to medicine.
          </p>
          <div className="mx-auto mt-8 max-w-sm">
            <div className="glass-card p-6 text-center">
              <div className="mx-auto grid size-12 place-items-center rounded-xl bg-gradient-to-br from-brass/15 to-warm/10 text-brass">
                <svg className="size-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="mt-4 font-serif text-xl">Research Project</h3>
              <p className="mt-1 text-xs text-muted">Coming Soon</p>
              <div className="mt-4 rounded-xl border border-line/50 bg-bone/50 px-4 py-3 text-xs leading-5 text-muted">
                Research projects will be added here as they progress
              </div>
            </div>
          </div>
          <div className="mt-6 grid grid-cols-3 gap-4">
            {ledger.map((item) => (
              <div key={item.index} className="text-center">
                <p className="text-[0.6rem] font-medium tracking-widest text-brass">{item.index}</p>
                <p className="mt-1 font-serif text-sm">{item.kind}</p>
                <p className="mt-0.5 text-[0.6rem] uppercase tracking-wide text-muted">{item.status}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="purpose" className="scroll-mt-20 border-t border-line/50">
        <div className="mx-auto max-w-6xl px-5 py-12 md:px-8 md:py-16">
          <Kicker index="03">Purpose of This Portfolio</Kicker>
          <h2 className="mt-3 max-w-lg font-serif text-3xl md:text-4xl">
            Why this portfolio exists.
          </h2>
          <p className="mt-3 max-w-md text-sm leading-6 text-muted">
            A structured record of academic and clinical development reflecting progression across key medical competencies — aligned with the GMU e-portfolio framework.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {purposes.map((item) => (
              <article key={item.index} className="glass-card p-5">
                <p className="text-[0.6rem] font-medium tracking-widest text-brass">{item.index}</p>
                <h3 className="mt-1.5 font-serif text-lg">{item.title}</h3>
                <p className="mt-1.5 text-sm leading-6 text-muted">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-line/50">
        <div className="mx-auto max-w-6xl px-5 py-12 md:px-8 md:py-14">
          <p className="mx-auto max-w-2xl text-center font-serif text-xl leading-snug italic text-ink/75 md:text-2xl">
            “Every ward round is a masterclass. Every patient, a textbook.”
          </p>
        </div>
      </section>

      <section id="contact" className="scroll-mt-20 border-t border-line/50">
        <div className="mx-auto grid max-w-6xl gap-8 px-5 py-12 md:px-8 md:py-16 lg:grid-cols-2">
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
            <p className="mt-5 border-t border-line/50 pt-4 font-serif text-sm italic leading-6 text-muted">
              “Every ward round is a masterclass. Every patient, a textbook.”
            </p>
          </div>
        </div>
      </section>
    </SiteFrame>
  );
}
