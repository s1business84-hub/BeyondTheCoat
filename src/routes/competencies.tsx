import { createFileRoute, Link } from "@tanstack/react-router";
import { Kicker, SiteFrame } from "@/components/site/chrome";
import { competencies, gibbs, evidenceItems } from "@/components/site/data";
import { useEffect, useState } from "react";

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
  const [transitioning, setTransitioning] = useState(false);
  const [displayId, setDisplayId] = useState(id);
  const [expanded, setExpanded] = useState<number | null>(null);

  useEffect(() => {
    if (id !== displayId) {
      setTransitioning(true);
      setExpanded(null);
      const timer = setTimeout(() => {
        setDisplayId(id);
        setTransitioning(false);
      }, 550);
      return () => clearTimeout(timer);
    }
  }, [id, displayId]);

  const displayActive = competencies.find((item) => item.id === displayId) ?? competencies[0];
  const evidences = (evidenceItems as any)[displayActive.id] || [];

  return (
    <SiteFrame>
      <div className="mx-auto max-w-6xl px-5 py-14 md:px-8 md:py-20">
        <Kicker index="02">Competencies</Kicker>
        <h1 className="mt-4 max-w-3xl font-serif text-5xl leading-none md:text-6xl fade-in">
          Nine domains. Foundation year.
        </h1>
        <p className="mt-6 max-w-2xl text-base leading-7 text-muted">
          Aligned with the Gulf Medical University and EmiratesMEDs framework. Each domain holds its own evidence and reflections.
        </p>

        <div className="mt-12 grid gap-8 lg:grid-cols-12">
          <nav className="lg:col-span-4" aria-label="Competency index">
            <ul className="glass-card border-0 lg:sticky lg:top-24 overflow-hidden">
              {competencies.map((item) => {
                const on = item.id === active.id;
                return (
                  <li key={item.id} className="border-b border-white/20 last:border-b-0">
                    <Link
                      to="/competencies"
                      search={{ id: item.id }}
                      className={
                        "flex min-h-12 items-center gap-4 py-3 pr-2 transition-all duration-300 " +
                        (on ? "border-l-2 border-brass bg-white/35 pl-3" : "pl-3.5 text-muted hover:bg-white/25 hover:text-ink")
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

          <article className="relative lg:col-span-8 lg:pl-10 min-h-[520px]">
            {transitioning && (
              <div className="absolute inset-0 z-10 flex items-center justify-center glass rounded-2xl fade-in">
                <div className="text-center">
                  <div className="mx-auto size-8 animate-spin rounded-full border-2 border-brass border-t-transparent" />
                  <p className="mt-3 text-sm font-medium text-brass">Loading competency…</p>
                </div>
              </div>
            )}
            <div className={"glass-card p-8 transition-all duration-300 " + (transitioning ? "opacity-30 scale-[0.98]" : "opacity-100 scale-100 slide-up")}>
              <p className="text-xs font-semibold tracking-widest text-brass uppercase">
                {displayActive.index} · Foundation
              </p>
              <h2 className="mt-3 font-serif text-4xl md:text-5xl">{displayActive.title}</h2>
              <p className="mt-4 font-serif text-xl leading-8 italic">{displayActive.plain}</p>
              <h3 className="mt-10 text-xs font-semibold tracking-widest uppercase">Year I aim</h3>
              <p className="mt-3 max-w-xl text-base leading-7 text-muted">{displayActive.yearOne}</p>
              <h3 className="mt-8 text-xs font-semibold tracking-widest uppercase">
                What will count as evidence
              </h3>
              <p className="mt-3 max-w-xl text-base leading-7 text-muted">{displayActive.evidence}</p>

              {evidences.length > 0 && (
                <div className="mt-10">
                  <h3 className="text-xs font-semibold tracking-widest uppercase">Evidence</h3>
                  <div className="mt-4 grid gap-4 sm:grid-cols-2">
                    {evidences.map((ev: any, i: number) => {
                      const isOpen = expanded === i;
                      return (
                        <button
                          key={i}
                          type="button"
                          onClick={() => setExpanded(isOpen ? null : i)}
                          className={"glass overflow-hidden rounded-xl text-left transition-all duration-300 " + (isOpen ? "ring-2 ring-brass sm:col-span-2" : "hover:scale-[1.02]")}
                        >
                          {ev.image ? (
                            <img src={ev.image} alt={ev.title} className="h-40 w-full object-cover" />
                          ) : (
                            <div className="flex h-40 items-center justify-center bg-steel/10 text-xs tracking-widest text-muted uppercase">
                              Certificate
                            </div>
                          )}
                          <div className="p-4">
                            <p className="text-sm font-semibold">{ev.title}</p>
                            <p className="mt-1 text-xs leading-5 text-muted">{ev.description}</p>
                            {ev.date && <p className="mt-2 text-xs tracking-wide text-brass">{ev.date}</p>}
                            {isOpen && ev.details && (
                              <p className="mt-3 border-t border-white/30 pt-3 text-sm leading-6 text-ink">
                                {ev.details}
                              </p>
                            )}
                            <p className="mt-2 text-xs text-muted">{isOpen ? "Tap to collapse" : "Tap for details"}</p>
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>
          </article>
        </div>
      </div>
    </SiteFrame>
  );
}
