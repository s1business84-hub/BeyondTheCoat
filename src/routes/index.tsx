import { createFileRoute, Link } from "@tanstack/react-router";
import { Kicker, Monogram, SiteFrame } from "@/components/site/chrome";
import { competencies, purposes, standing, evidenceItems } from "@/components/site/data";

export const Route = createFileRoute("/")({ component: Home });

function AnimatedName({ text, className }: { text: string; className?: string }) {
  return (
    <span className={className}>
      {text.split("").map((char, i) => (
        <span
          key={i}
          className="name-letter inline-block"
          style={{ animationDelay: `${0.15 + i * 0.07}s` }}
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
    <div className="overflow-hidden bg-steel py-4 text-bone">
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
      <section className="hero-gradient relative overflow-hidden">
        <div className="mx-auto grid max-w-6xl gap-16 px-5 py-20 md:px-8 md:py-28 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-7">
            <p className="text-xs font-semibold tracking-widest text-muted uppercase">
              Year I · Ajman
            </p>
            <h1 className="mt-6 font-serif text-6xl font-medium leading-none lg:text-8xl">
              <AnimatedName text="Rahul" className="block" />
              <AnimatedName text="Devnani" className="block italic gradient-text" />
            </h1>
            <p className="mt-8 max-w-lg font-serif text-xl leading-8 text-ink md:text-2xl">
              First-year MD student at Gulf Medical University.
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
                className="inline-flex h-12 items-center border border-ink px-6 text-xs font-semibold tracking-widest uppercase transition-colors hover:bg-ink hover:text-bone"
              >
                About
              </a>
            </div>
          </div>
          <div className="relative lg:col-span-5">
            <img
              src="/rahul.jpeg"
              alt="Rahul Devnani"
              className="w-full rounded-2xl object-cover shadow-lg"
            />
            <div className="floating-card absolute bottom-6 left-4 right-4 p-5 md:left-6 md:right-auto md:w-64">
              <div className="flex items-start gap-3">
                <span className="mt-1 size-2.5 shrink-0 rounded-full bg-brass" />
                <div>
                  <p className="font-semibold text-ink">White Coat Ceremony</p>
                  <p className="mt-0.5 text-sm text-muted">2026</p>
                  <p className="mt-1 text-sm text-brass">
                    Gulf Medical University ·<br />Ajman, UAE
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CompetencyMarquee />

      <section className="bg-steel text-bone" aria-label="Standing">
        <div className="mx-auto grid max-w-6xl sm:grid-cols-2 lg:grid-cols-4">
          {standing.map((item) => (
            <div key={item.index} className="border-b border-bone/15 px-5 py-10 md:px-8 lg:border-r lg:border-b-0">
              <p className="font-serif text-2xl">{item.index}</p>
              <p className="mt-4 text-xs font-semibold tracking-widest text-bone/50 uppercase">
                {item.label}
              </p>
              <p className="mt-1 text-base">{item.value}</p>
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
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <Kicker index="02">Competencies</Kicker>
              <h2 className="mt-4 font-serif text-4xl md:text-5xl">
                The 9 Core <span className="gradient-text">Competencies</span>
              </h2>
            </div>
            <Link
              to="/competencies"
              search={{ id: "" }}
              className="text-xs font-semibold tracking-widest uppercase"
            >
              View all →
            </Link>
          </div>
          <p className="mt-4 max-w-2xl text-base leading-7 text-muted">
            Click any competency to explore detailed reflections, evidence, and structured Gibbs Reflective Cycle documentation aligned with Gulf Medical University standards.
          </p>
          <div className="card-grid mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {competencies.map((item) => {
              const count = ((evidenceItems as any)[item.id] || []).length;
              return (
                <Link
                  key={item.id}
                  to="/competencies"
                  search={{ id: item.id }}
                  className="glass-card group block p-6 transition-all hover:scale-[1.02]"
                >
                  <div className="flex items-start justify-between">
                    <p className="font-serif text-2xl text-brass">{item.index}</p>
                    {count > 0 && (
                      <span className="rounded-full bg-brass/10 px-2.5 py-1 text-xs font-semibold text-brass">
                        {count}
                      </span>
                    )}
                  </div>
                  <h3 className="mt-3 text-lg font-medium group-hover:text-brass transition-colors">{item.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-muted line-clamp-3">{item.plain}</p>
                </Link>
              );
            })}
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
