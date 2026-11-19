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
    <div className="overflow-hidden border-y border-line/30 bg-white/50 py-3">
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
      <section className="mx-auto max-w-6xl px-5 py-10 md:px-8 md:py-16">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div className="fade-up">
            <p className="text-[0.65rem] font-medium tracking-[0.22em] text-brass uppercase">
              Beyond My White Coat
            </p>
            <h1 className="hero-name mt-3 font-serif font-medium">
              <AnimatedName text="Rahul" accent className="block" />
              <AnimatedName text="Devnani" accent className="block italic" />
            </h1>
            <p className="mt-4 max-w-sm font-serif text-base leading-7 text-ink md:text-lg">
              First-year MD student at Gulf Medical University, Ajman.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                to="/competencies"
                search={{ id: "" }}
                className="btn-gradient inline-flex h-11 items-center px-6 text-[0.65rem] font-medium tracking-widest uppercase rounded-full shadow-md"
              >
                View Competencies
              </Link>
              <Link
                to="/about"
                className="inline-flex h-11 items-center border border-ink/20 bg-white px-6 text-[0.65rem] font-medium tracking-widest text-ink uppercase rounded-full hover:border-brass hover:text-brass transition-all"
              >
                About
              </Link>
            </div>
          </div>
          <div className="relative fade-up" style={{ animationDelay: "0.2s" }}>
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <img
                src="/rahul.jpeg"
                alt="Rahul Devnani"
                className="w-full"
              />
            </div>
            <div className="floating-card absolute -bottom-4 left-4 right-4 p-4 md:left-6 md:right-6">
              <div className="flex items-start gap-3">
                <span className="mt-1.5 size-2.5 shrink-0 rounded-full bg-gradient-to-r from-brass to-warm" />
                <div>
                  <p className="text-sm font-medium text-ink">Year 1 · MD</p>
                  <p className="text-xs text-brass">Gulf Medical University</p>
                  <p className="text-xs text-muted">Ajman, UAE</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CompetencyMarquee />

      <section className="mx-auto max-w-6xl px-5 py-8 md:px-8" aria-label="Standing">
        <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
          {standing.map((item) => (
            <div key={item.index} className="stat-card">
              <p className="text-xs font-medium tracking-widest text-brass">{item.index}</p>
              <p className="mt-0.5 text-[0.55rem] font-medium tracking-widest text-muted uppercase">
                {item.label}
              </p>
              <p className="mt-0.5 text-sm font-medium text-ink">{item.value}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="about" className="mx-auto max-w-6xl px-5 py-12 md:px-8 md:py-16">
        <div className="text-center max-w-xl mx-auto">
          <p className="text-[0.65rem] font-medium tracking-[0.2em] text-brass uppercase">About Me</p>
          <h2 className="mt-2 font-serif text-3xl leading-tight md:text-4xl">
            Building a <span className="gradient-text italic">foundation</span> for medicine
          </h2>
          <div className="mx-auto mt-3 h-0.5 w-14 bg-gradient-to-r from-brass to-warm rounded-full" />
        </div>
        <div className="mx-auto mt-6 max-w-lg space-y-3 text-center text-sm leading-6 text-muted">
          <p>
            I am a first-year MD student at Gulf Medical University in Ajman, entered in 2026. This portfolio documents my progress across the nine competency domains of the MD program.
          </p>
          <p>
            It is a living record of learning, reflection, and growth — aligned with the university’s e-portfolio framework.
          </p>
        </div>
        <div className="mt-5 text-center">
          <Link to="/about" className="text-sm font-medium text-brass hover:underline">
            Read more →
          </Link>
        </div>
      </section>

      <section className="border-t border-line/30">
        <div className="mx-auto max-w-6xl px-5 py-12 md:px-8 md:py-16">
          <div className="text-center">
            <p className="text-[0.6rem] font-medium tracking-[0.2em] text-brass uppercase">GMU Framework</p>
            <h2 className="mt-2 font-serif text-3xl md:text-4xl">
              The 9 Core <span className="gradient-text">Competencies</span>
            </h2>
            <div className="mx-auto mt-3 h-0.5 w-12 bg-gradient-to-r from-brass to-warm rounded-full" />
          </div>
          <p className="mx-auto mt-4 max-w-lg text-center text-sm leading-6 text-muted">
            Click any competency to explore detailed reflections, evidence, and structured Gibbs Reflective Cycle documentation aligned with Gulf Medical University standards.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
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
                    <div className="grid size-10 place-items-center rounded-xl bg-gradient-to-br from-brass/20 to-warm/10 text-brass">
                      <CompetencyIcon id={item.id} />
                    </div>
                    {count > 0 && (
                      <span className="rounded-full bg-brass/10 px-2 py-0.5 text-[0.5rem] font-medium tracking-wide text-brass">
                        {count} {count === 1 ? "ENTRY" : "ENTRIES"}
                      </span>
                    )}
                  </div>
                  <h3 className="mt-3 font-serif text-lg leading-snug group-hover:text-brass transition-colors">{item.title}</h3>
                  <p className="mt-1 text-sm leading-5 text-muted">{item.plain}</p>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <section id="purpose" className="scroll-mt-20 border-t border-line/30">
        <div className="mx-auto max-w-6xl px-5 py-12 md:px-8 md:py-16">
          <div className="text-center">
            <h2 className="font-serif text-3xl md:text-4xl">Purpose of This Portfolio</h2>
            <div className="mx-auto mt-3 h-0.5 w-12 bg-gradient-to-r from-brass to-warm rounded-full" />
            <p className="mx-auto mt-4 max-w-lg text-sm leading-6 text-muted">
              A structured record of academic and clinical development reflecting progression across key medical competencies — aligned with the GMU e-portfolio framework.
            </p>
          </div>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {purposes.map((item) => (
              <article key={item.index} className="glass-card p-5">
                <div className="grid size-10 place-items-center rounded-xl bg-gradient-to-br from-brass/20 to-warm/10 text-brass">
                  <svg className="size-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <h3 className="mt-4 font-serif text-lg leading-snug">{item.title}</h3>
                <p className="mt-2 text-sm leading-5 text-muted">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-line/30">
        <div className="mx-auto max-w-6xl px-5 py-12 md:px-8 md:py-16">
          <div className="text-center">
            <p className="text-[0.6rem] font-medium tracking-[0.2em] text-brass uppercase">Scholarly Work</p>
            <h2 className="mt-2 font-serif text-3xl md:text-4xl">Research & Publications</h2>
            <div className="mx-auto mt-3 h-0.5 w-12 bg-gradient-to-r from-brass to-warm rounded-full" />
          </div>
          <p className="mx-auto mt-4 max-w-md text-center text-sm leading-6 text-muted">
            A growing collection of research projects, publications, and scholarly contributions to medicine.
          </p>
          <div className="mx-auto mt-6 max-w-sm">
            <div className="glass-card p-5 text-center">
              <div className="mx-auto grid size-10 place-items-center rounded-xl bg-gradient-to-br from-brass/20 to-warm/10 text-brass">
                <svg className="size-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="mt-3 font-serif text-lg">Research Project</h3>
              <p className="mt-0.5 text-xs text-muted">Coming Soon</p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-line/30">
        <div className="mx-auto max-w-6xl px-5 py-12 md:px-8 md:py-14">
          <p className="mx-auto max-w-2xl text-center font-serif text-lg leading-snug italic text-ink/75 md:text-xl">
            “Every ward round is a masterclass. Every patient, a textbook.”
          </p>
        </div>
      </section>

      <section id="contact" className="scroll-mt-20 border-t border-line/30">
        <div className="mx-auto grid max-w-6xl gap-6 px-5 py-12 md:px-8 md:py-16 lg:grid-cols-2">
          <div>
            <Kicker index="04">Contact</Kicker>
            <h2 className="mt-2 font-serif text-3xl md:text-4xl">Get in touch.</h2>
            <p className="mt-2 max-w-xs text-sm leading-6 text-muted">
              For academic enquiries, Gulf Medical University in Ajman is the institution of record.
            </p>
          </div>
          <div className="glass-card p-5">
            <Monogram />
            <h3 className="mt-3 font-serif text-xl">Rahul Devnani</h3>
            <p className="mt-1 text-xs leading-5 text-muted">
              First-year MD student<br />Gulf Medical University, Ajman
            </p>
            <p className="mt-2 text-sm">
              <a href="mailto:2026md90@mygmu.ac.ae" className="font-medium text-brass hover:underline">
                2026md90@mygmu.ac.ae
              </a>
            </p>
            <p className="mt-0.5 text-sm">
              <a href="tel:+971527249865" className="font-medium text-brass hover:underline">
                +971 52 724 9865
              </a>
            </p>
            <p className="mt-4 border-t border-line/50 pt-3 font-serif text-sm italic leading-6 text-muted">
              “Every ward round is a masterclass. Every patient, a textbook.”
            </p>
          </div>
        </div>
      </section>
    </SiteFrame>
  );
}
