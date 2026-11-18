import { createFileRoute, Link } from "@tanstack/react-router";
import { Kicker, SiteFrame } from "@/components/site/chrome";
import { competencies, gibbs, evidenceItems } from "@/components/site/data";
import { useEffect, useState } from "react";

type Search = { id: string };

export const Route = createFileRoute("/competencies")({
  validateSearch: (search: Record<string, unknown>): Search => ({
    id: typeof search.id === "string" ? search.id : "",
  }),
  head: () => ({
    meta: [{ title: "Competencies — Rahul Devnani" }],
  }),
  component: CompetenciesPage,
});

function CompetenciesPage() {
  const { id } = Route.useSearch();
  const selected = competencies.find((item) => item.id === id);
  const evidences = selected ? ((evidenceItems as any)[selected.id] || []) : [];
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (id) {
      setLoading(true);
      const t = setTimeout(() => setLoading(false), 450);
      return () => clearTimeout(t);
    }
  }, [id]);

  return (
    <SiteFrame>
      <div className="mx-auto max-w-6xl px-5 py-14 md:px-8 md:py-20">
        <Kicker index="02">Competencies</Kicker>
        <h1 className="mt-4 max-w-3xl font-serif text-5xl leading-none md:text-6xl fade-in">
          Nine domains. Foundation year.
        </h1>
        <p className="mt-6 max-w-2xl text-base leading-7 text-muted">
          Click any competency to open its evidence and reflection.
        </p>

        {loading && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-white/70 backdrop-blur-sm">
            <div className="text-center">
              <div className="mx-auto size-10 animate-spin rounded-full border-2 border-brass border-t-transparent" />
              <p className="mt-4 text-sm font-medium text-brass">Opening…</p>
            </div>
          </div>
        )}

        {!selected ? (
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {competencies.map((item) => {
              const count = ((evidenceItems as any)[item.id] || []).length;
              return (
                <Link
                  key={item.id}
                  to="/competencies"
                  search={{ id: item.id }}
                  className="glass-card p-6 transition-all hover:scale-[1.02]"
                >
                  <p className="font-serif text-lg text-brass">{item.index}</p>
                  <h2 className="mt-2 text-xl font-medium">{item.title}</h2>
                  <p className="mt-2 text-sm leading-6 text-muted line-clamp-3">{item.plain}</p>
                  {count > 0 && (
                    <p className="mt-3 text-xs font-semibold tracking-wide text-brass">
                      {count} {count === 1 ? "entry" : "entries"}
                    </p>
                  )}
                </Link>
              );
            })}
          </div>
        ) : (
          <div className="mt-10">
            <Link
              to="/competencies"
              search={{ id: "" }}
              className="text-xs font-semibold tracking-widest uppercase text-brass"
            >
              ← All competencies
            </Link>

            <div className="mt-6 glass-card p-8">
              <p className="text-xs font-semibold tracking-widest text-brass uppercase">
                {selected.index} · Foundation
              </p>
              <h2 className="mt-3 font-serif text-4xl md:text-5xl">{selected.title}</h2>
              <p className="mt-4 font-serif text-xl leading-8 italic">{selected.plain}</p>

              {evidences.length > 0 && (
                <div className="mt-10">
                  <h3 className="text-xs font-semibold tracking-widest uppercase">Evidence</h3>
                  <div className="mt-4 grid gap-6 sm:grid-cols-2">
                    {evidences.map((ev: any, i: number) => (
                      <div key={i} className="overflow-hidden rounded-xl">
                        {ev.image && (
                          <img src={ev.image} alt={ev.title} className="w-full h-auto object-contain" />
                        )}
                        <div className="p-4">
                          <p className="text-sm font-semibold">{ev.title}</p>
                          <p className="mt-1 text-xs leading-5 text-muted">{ev.description}</p>
                          {ev.date && <p className="mt-2 text-xs tracking-wide text-brass">{ev.date}</p>}
                          {ev.details && (
                            <p className="mt-3 text-sm leading-6 text-ink">{ev.details}</p>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              <div className="mt-12 border-t border-line pt-8">
                <h3 className="text-xs font-semibold tracking-widest uppercase">Reflection</h3>
                <p className="mt-3 text-base leading-7 text-muted">
                  Reflections for this competency will be added here using the Gibbs cycle when they are ready.
                </p>
                <ol className="mt-6 grid gap-4 sm:grid-cols-2">
                  {gibbs.map((step) => (
                    <li key={step.step} className="border-l-2 border-brass pl-4">
                      <p className="text-xs font-semibold text-brass">{step.step} · {step.title}</p>
                      <p className="mt-1 text-sm text-muted">{step.text}</p>
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </div>
        )}
      </div>
    </SiteFrame>
  );
}
