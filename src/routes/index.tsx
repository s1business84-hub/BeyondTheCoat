import { createFileRoute, Link } from "@tanstack/react-router";
import { Kicker, Monogram, SiteFrame } from "@/components/site/chrome";
import { competencies, purposes, standing, evidenceItems } from "@/components/site/data";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  return (
    <SiteFrame>
      <section className="border-b border-line">
        <div className="mx-auto grid max-w-6xl gap-12 px-5 py-14 md:px-8 md:py-20 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7 fade-in">
            <p className="text-xs font-semibold tracking-widest text-muted uppercase">
              Vol. I · Year I · Ajman
            </p>
            <h1 className="mt-6 font-serif text-mast font-medium lg:text-8xl">
              <span className="block">Rahul</span>
              <span className="block italic text-steel">Devnani</span>
            </h1>
            <p className="mt-8 max-w-xl font-serif text-xl leading-8 text-ink md:text-2xl">
              First-year GMD at Gulf Medical University. A living record of the training — precise, dated, and open to change.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/about"
                className="inline-flex h-12 items-center bg-ink px-5 text-xs font-semibold tracking-widest text-bone uppercase transition-transform hover:scale-[1.02]"
              >
                Read the record
              </Link>
              <Link
                to="/competencies"
                search={{ id: "medical-expert" }}
                className="inline-flex h-12 items-center border border-ink px-5 text-xs font-semibold tracking-widest uppercase transition-colors hover:bg-ink hover:text-bone"
              >
                Nine competencies
              </Link>
            </div>
          </div>
          <aside className="glass-card p-6 lg:col-span-5 slide-up">
            <p className="text-xs font-semibold tracking-widest text-muted uppercase">
              In this number
            </p>
            <ol className="mt-4 divide-y divide-white/20">
              <li>
                <Link to="/about" className="flex items-baseline gap-4 py-4">
                  <span className="font-serif text-lg text-brass">01</span>
                  <span>
                    <span className="block text-sm font-semibold tracking-wide">The record</span>
                    <span className="block text-sm text-muted">Who, where, year one</span>
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  to="/competencies"
                  search={{ id: "medical-expert" }}
                  className="flex items-baseline gap-4 py-4"
                >
                  <span className="font-serif text-lg text-brass">02</span>
                  <span>
                    <span className="block text-sm font-semibold tracking-wide">Competencies</span>
                    <span className="block text-sm text-muted">Nine domains, none decorated</span>
                  </span>
                </Link>
              </li>
              <li>
                <a href="#purpose" className="flex items-baseline gap-4 py-4">
                  <span className="font-serif text-lg text-brass">03</span>
                  <span>
                    <span className="block text-sm font-semibold tracking-wide">Purpose</span>
                    <span className="block text-sm text-muted">Why the journal is public</span>
                  </span>
                </a>
              </li>
            </ol>
          </aside>
        </div>
      </section>

      <section className="bg-steel text-bone" aria-label="Standing">
        <div className="mx-auto grid max-w-6xl sm:grid-cols-2 lg:grid-cols-4">
          {standing.map((item) => (
            <div key={item.index} className="border-b border-bone/15 px-5 py-8 md:px-8 lg:border-r lg:border-b-0">
              <p className="font-serif text-2xl">{item.index}</p>
              <p className="mt-4 text-xs font-semibold tracking-widest text-bone/50 uppercase">
                {item.label}
              </p>
              <p className="mt-1 text-base">{item.value}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
        <Kicker index="01">The record</Kicker>
        <div className="mt-6 grid gap-10 lg:grid-cols-12 items-start">
          <div className="lg:col-span-7">
            <h2 className="font-serif text-4xl leading-tight md:text-5xl">
              A first year, written down before it can be polished.
            </h2>
            <div className="mt-6 max-w-xl space-y-4 text-base leading-7 text-muted">
              <p>
                I am a first-year GMD student at Gulf Medical University in Ajman. The
                program is the university's Doctor of Medicine training. I entered in
                2026.
              </p>
              <p>
                This site is not a résumé with better type. Year one has no publications
                to inflate and no ward stories to borrow. It has a structure: who I am
                and the nine domains I am being measured on.
              </p>
            </div>
            <Link
              to="/about"
              className="mt-8 inline-flex h-12 items-center text-xs font-semibold tracking-widest uppercase"
            >
              Full record →
            </Link>
          </div>
          <div className="lg:col-span-5">
            <img
              src="/lab-photo.jpg"
              alt="Rahul Devnani working in the lab"
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </section>

      <section className="border-t border-line bg-paper">
        <div className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <Kicker index="02">Competencies</Kicker>
              <h2 className="mt-4 font-serif text-4xl md:text-5xl">The nine. Nothing decorative.</h2>
            </div>
            <Link
              to="/competencies"
              search={{ id: "medical-expert" }}
              className="text-xs font-semibold tracking-widest uppercase"
            >
              Open the index →
            </Link>
          </div>
          <ol className="mt-10 border-t border-line">
            {competencies.map((item) => {
              const count = ((evidenceItems as any)[item.id] || []).length;
              return (
                <li key={item.id} className="border-b border-line">
                  <Link
                    to="/competencies"
                    search={{ id: item.id }}
                    className="grid grid-cols-12 items-baseline gap-3 py-4 hover:bg-bone md:py-5 transition-colors"
                  >
                    <span className="col-span-2 font-serif text-lg text-brass md:col-span-1">
                      {item.index}
                    </span>
                    <span className="col-span-7 text-base font-medium md:col-span-3">{item.title}</span>
                    <span className="col-span-3 text-right text-xs font-semibold tracking-wide text-brass md:col-span-1">
                      {count > 0 ? `${count} ${count === 1 ? "ENTRY" : "ENTRIES"}` : "—"}
                    </span>
                    <span className="col-span-9 text-sm text-muted md:col-span-5">{item.plain}</span>
                    <span className="col-span-3 text-right text-xs tracking-widest text-muted uppercase md:col-span-2">
                      Foundation
                    </span>
                  </Link>
                </li>
              );
            })}
          </ol>
        </div>
      </section>

      <section id="purpose" className="scroll-mt-20 border-t border-line bg-paper">
        <div className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
          <Kicker index="03">Purpose</Kicker>
          <h2 className="mt-4 max-w-2xl font-serif text-4xl md:text-5xl">
            Why this portfolio exists.
          </h2>
          <p className="mt-4 max-w-xl text-base leading-7 text-muted">
            A structured record of year one, aligned with the GMU e-portfolio idea:
            progression you can check, not a mood.
          </p>
          <div className="mt-10 grid gap-8 md:grid-cols-2">
            {purposes.map((item) => (
              <article key={item.index} className="border-t border-brass pt-4">
                <p className="text-xs font-semibold tracking-widest text-brass">{item.index}</p>
                <h3 className="mt-2 font-serif text-2xl">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-muted">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-ink text-bone">
        <div className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-20">
          <p className="max-w-3xl font-serif text-3xl leading-tight italic md:text-5xl">
            Every ward round is a masterclass. A first-year earns the right to say that
            by paying attention before speaking.
          </p>
        </div>
      </section>

      <section id="contact" className="scroll-mt-20">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 py-16 md:px-8 md:py-24 lg:grid-cols-2">
          <div>
            <Kicker index="04">Contact</Kicker>
            <h2 className="mt-4 font-serif text-4xl md:text-5xl">Write with a reason.</h2>
            <p className="mt-4 max-w-md text-base leading-7 text-muted">
              I read notes that are specific — a question about the program, a word from
              faculty, a collaboration that respects that this record is just beginning.
            </p>
          </div>
          <div className="glass-card p-8">
            <Monogram />
            <h3 className="mt-6 font-serif text-3xl">Rahul Devnani</h3>
            <p className="mt-2 text-sm leading-6 text-muted">
              First-year GMD student
              <br />
              Gulf Medical University, Ajman
            </p>
            <p className="mt-6 border-t border-line pt-6 font-serif text-lg italic leading-7">
              “A direct email will be listed when it is ready to be public. Until then,
              the university is the address of record.”
            </p>
          </div>
        </div>
      </section>
    </SiteFrame>
  );
}
