import { createFileRoute, Link } from "@tanstack/react-router";
import { Kicker, SiteFrame } from "@/components/site/chrome";
import { competencies, gibbs } from "@/components/site/data";

type Search = { id: string };

export const Route = createFileRoute("/competencies")({
  validateSearch: (search: Record<string, unknown>): Search => ({
    id: typeof search.id === "string" ? search.id : "medical-expert",
  }),
  head: () => ({
    meta: [{ title: "Competencies — Rahul Devnani" }],
  }),
  component: CompetenciesPage,
});

function CompetenciesPage() {
  const { id } = Route.useSearch();
  const active = competencies.find((item) => item.id === id) ?? competencies[0];

  return (
    <SiteFrame>
      <div className="mx-auto max-w-6xl px-5 py-14 md:px-8 md:py-20">
        <Kicker index="02">Competencies</Kicker>
        <h1 className="mt-4 max-w-3xl font-serif text-5xl leading-none md:text-6xl">
          Nine domains. Foundation year.
        </h1>
        <p className="mt-6 max-w-2xl text-base leading-7 text-muted">
          Aligned with the Gulf Medical University framework. Click a domain. The note on
          the right is the year-one aim — not a completed assessment, and not a patient
          story written to sound like one.
        </p>

        <ol className="mt-12 grid gap-px bg-line sm:grid-cols-2 lg:grid-cols-3">
          {gibbs.map((step) => (
            <li key={step.step} className="bg-paper p-5">
              <p className="font-serif text-lg text-brass">{step.step}</p>
              <p className="mt-2 text-sm font-semibold">{step.title}</p>
              <p className="mt-1 text-sm text-muted">{step.text}</p>
            </li>
          ))}
        </ol>
        <p className="mt-4 text-sm text-muted">
          Reflections, when they exist, follow Gibbs. The cycle is the method. It is not
          filled with invented ward rounds.
        </p>

        <div className="mt-12 grid gap-8 lg:grid-cols-12">
          <nav className="lg:col-span-4" aria-label="Competency index">
            <ul className="border-t border-line lg:sticky lg:top-24">
              {competencies.map((item) => {
                const on = item.id === active.id;
                return (
                  <li key={item.id} className="border-b border-line">
                    <Link
                      to="/competencies"
                      search={{ id: item.id }}
                      className={
                        "flex min-h-12 items-center gap-4 py-3 pr-2 " +
                        (on ? "border-l-2 border-brass pl-3" : "pl-3.5 text-muted hover:text-ink")
                      }
                      aria-current={on ? "true" : undefined}
                    >
                      <span className="font-serif text-brass">{item.index}</span>
                      <span className="text-sm font-medium">{item.title}</span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          <article className="lg:col-span-8 lg:border-l lg:border-line lg:pl-10">
            <p className="text-xs font-semibold tracking-widest text-brass uppercase">
              {active.index} · Foundation
            </p>
            <h2 className="mt-3 font-serif text-4xl md:text-5xl">{active.title}</h2>
            <p className="mt-4 font-serif text-xl leading-8 italic">{active.plain}</p>
            <h3 className="mt-10 text-xs font-semibold tracking-widest uppercase">Year I aim</h3>
            <p className="mt-3 max-w-xl text-base leading-7 text-muted">{active.yearOne}</p>
            <h3 className="mt-8 text-xs font-semibold tracking-widest uppercase">
              What will count as evidence
            </h3>
            <p className="mt-3 max-w-xl text-base leading-7 text-muted">{active.evidence}</p>
          </article>
        </div>
      </div>
    </SiteFrame>
  );
}
