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

function Home() {
  return (
    <SiteFrame>
      <section className="bg-bone">
        <div className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
          <p className="editorial-label fade-up">Beyond My White Coat</p>
          <h1 className="hero-name mt-4 font-serif">
            <AnimatedName text="Rahul" className="block" />
            <AnimatedName text="Devnani" accent className="block" />
          </h1>
          <p className="mt-6 max-w-md font-serif text-xl italic leading-8 text-muted md:text-2xl fade-up" style={{ animationDelay: "0.5s" }}>
            A journey of medicine, discovery and purpose.
          </p>
          <p className="mt-4 editorial-label fade-up" style={{ animationDelay: "0.65s" }}>
            Gulf Medical University · Est. 2026
          </p>
          <div className="mt-8 flex flex-wrap gap-3 fade-up" style={{ animationDelay: "0.8s" }}>
            <Link
              to="/competencies"
              search={{ id: "" }}
              className="inline-flex h-11 items-center bg-ink px-6 text-[0.6rem] font-medium tracking-[0.2em] text-bone uppercase"
            >
              Competencies
            </Link>
            <Link
              to="/about"
              className="inline-flex h-11 items-center border border-ink px-6 text-[0.6rem] font-medium tracking-[0.2em] text-ink uppercase"
            >
              About
            </Link>
          </div>
        </div>
      </section>

      <section className="border-t border-line bg-bone">
        <div className="mx-auto max-w-6xl px-5 py-12 md:px-8 md:py-16">
          <p className="editorial-label">01 — The Journey</p>
          <div className="mt-8 grid gap-0 sm:grid-cols-2 lg:grid-cols-4">
            {standing.map((item) => (
              <div key={item.index} className="border-b border-line py-5 sm:border-b-0 sm:border-r sm:px-5 sm:first:pl-0 sm:last:border-r-0 sm:last:pr-0">
                <p className="text-[0.6rem] font-medium tracking-[0.2em] text-brass">{item.index}</p>
                <p className="mt-2 text-[0.6rem] font-medium tracking-[0.15em] text-muted uppercase">
                  {item.label}
                </p>
                <p className="mt-1 font-serif text-lg text-ink">{item.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-ink text-bone">
        <div className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-20">
          <p className="text-[0.6rem] font-medium tracking-[0.25em] text-bone/50 uppercase">About Me</p>
          <h2 className="mt-4 max-w-xl font-serif text-3xl leading-tight md:text-4xl">
            Building a <span className="italic">foundation</span> for medicine
          </h2>
          <div className="mt-6 max-w-lg space-y-4 text-sm leading-7 text-bone/70">
            <p>
              I am a first-year MD student at Gulf Medical University in Ajman, entered in 2026. This portfolio documents my progress across the nine competency domains of the MD program.
            </p>
            <p>
              It is a living record of learning, reflection, and growth — aligned with the university’s e-portfolio framework.
            </p>
          </div>
          <div className="mt-6">
            <Link to="/about" className="text-sm font-medium text-brass hover:underline">
              Read more →
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-bone">
        <div className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-20">
          <p className="editorial-label">GMU Framework</p>
          <h2 className="mt-4 font-serif text-3xl md:text-4xl">
            The 9 Core Competencies
          </h2>
          <div className="mt-3 h-px w-12 bg-brass" />
          <p className="mt-5 max-w-lg text-sm leading-6 text-muted">
            Click any competency to explore reflections, evidence, and Gibbs Reflective Cycle documentation.
          </p>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
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
                    <div className="grid size-9 place-items-center border border-line text-ink">
                      <CompetencyIcon id={item.id} />
                    </div>
                    {count > 0 && (
                      <span className="text-[0.55rem] font-medium tracking-widest text-brass uppercase">
                        {count} {count === 1 ? "Entry" : "Entries"}
                      </span>
                    )}
                  </div>
                  <p className="mt-4 text-[0.55rem] font-medium tracking-[0.2em] text-muted">{item.index}</p>
                  <h3 className="mt-1 font-serif text-xl leading-snug group-hover:italic transition-all">{item.title}</h3>
                  <p className="mt-2 text-xs leading-5 text-muted">{item.plain}</p>
                  <p className="mt-4 text-xs font-medium tracking-wide text-ink">
                    Explore →
                  </p>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <section className="border-t border-line bg-bone">
        <div className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-20">
          <p className="editorial-label">Scholarly Work</p>
          <h2 className="mt-4 font-serif text-3xl md:text-4xl">Research & Publications</h2>
          <div className="mt-3 h-px w-12 bg-brass" />
          <p className="mt-5 max-w-md text-sm leading-6 text-muted">
            A growing collection of research projects and scholarly contributions.
          </p>
          <div className="mx-auto mt-10 max-w-sm">
            <div className="glass-card p-6 text-center">
              <div className="mx-auto grid size-12 place-items-center border border-line text-ink">
                <svg className="size-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="mt-4 font-serif text-xl">Research Project</h3>
              <p className="mt-1 text-xs text-muted">Coming Soon</p>
              <div className="mt-4 border border-line px-4 py-3 text-xs leading-5 text-muted">
                Research projects will be added here as they progress
              </div>
            </div>
          </div>
          <div className="mt-8 grid grid-cols-3 gap-6">
            {ledger.map((item) => (
              <div key={item.index} className="text-center">
                <p className="text-[0.55rem] font-medium tracking-[0.2em] text-brass">{item.index}</p>
                <p className="mt-1 font-serif text-sm">{item.kind}</p>
                <p className="mt-0.5 text-[0.55rem] uppercase tracking-widest text-muted">{item.status}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="purpose" className="scroll-mt-20 border-t border-line bg-ink text-bone">
        <div className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-20">
          <Kicker index="03">Purpose</Kicker>
          <h2 className="mt-4 max-w-lg font-serif text-3xl md:text-4xl">
            Why this portfolio exists.
          </h2>
          <p className="mt-4 max-w-md text-sm leading-6 text-bone/60">
            A structured record of year one, aligned with the GMU e-portfolio framework.
          </p>
          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {purposes.map((item) => (
              <article key={item.index} className="border-t border-bone/15 pt-5">
                <p className="text-[0.55rem] font-medium tracking-[0.2em] text-brass">{item.index}</p>
                <h3 className="mt-2 font-serif text-lg">{item.title}</h3>
                <p className="mt-2 text-xs leading-5 text-bone/60">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-line bg-bone">
        <div className="mx-auto max-w-6xl px-5 py-14 md:px-8 md:py-16">
          <p className="mx-auto max-w-2xl text-center font-serif text-2xl leading-snug italic text-ink/80 md:text-3xl">
            “Every lesson learned today is a step towards making a difference tomorrow.”
          </p>
        </div>
      </section>

      <section id="contact" className="scroll-mt-20 border-t border-line bg-bone">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 py-16 md:px-8 md:py-20 lg:grid-cols-2">
          <div>
            <Kicker index="04">Contact</Kicker>
            <h2 className="mt-4 font-serif text-3xl md:text-4xl">Get in touch.</h2>
            <p className="mt-4 max-w-xs text-sm leading-6 text-muted">
              For academic enquiries, Gulf Medical University in Ajman is the institution of record.
            </p>
          </div>
          <div className="border border-line p-6">
            <Monogram />
            <h3 className="mt-4 font-serif text-2xl">Rahul Devnani</h3>
            <p className="mt-1 text-xs leading-5 text-muted">
              First-year MD student<br />Gulf Medical University, Ajman
            </p>
            <p className="mt-4 text-sm">
              <a href="mailto:2026md90@mygmu.ac.ae" className="font-medium text-ink hover:underline">
                2026md90@mygmu.ac.ae
              </a>
            </p>
            <p className="mt-1 text-sm">
              <a href="tel:+971527249865" className="font-medium text-ink hover:underline">
                +971 52 724 9865
              </a>
            </p>
            <p className="mt-5 border-t border-line pt-4 font-serif text-sm italic leading-6 text-muted">
              “Every lesson learned today is a step towards making a difference tomorrow.”
            </p>
          </div>
        </div>
      </section>
    </SiteFrame>
  );
}
