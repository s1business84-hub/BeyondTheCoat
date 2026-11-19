import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteFrame } from "@/components/site/chrome";
import { CompetencyIcon } from "@/components/site/icons";
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

function TitleOverlay({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <div className="title-overlay">
      <h1>{title}</h1>
      <div className="title-line" />
      <p className="title-sub">{subtitle}</p>
    </div>
  );
}

function ReflectionBlock({ reflection }: { reflection: any }) {
  const stages = [
    { key: "description", title: "Description", step: "01" },
    { key: "feelings", title: "Feelings", step: "02" },
    { key: "evaluation", title: "Evaluation", step: "03" },
    { key: "analysis", title: "Analysis", step: "04" },
    { key: "conclusion", title: "Conclusion", step: "05" },
    { key: "action", title: "Action Plan", step: "06" },
  ];
  return (
    <div className="mt-6 rounded-2xl border border-line bg-paper/60 p-6">
      <h4 className="text-xs font-semibold tracking-widest uppercase text-brass">Reflection</h4>
      <div className="mt-5 space-y-6">
        {stages.map((stage) => (
          <div key={stage.key} className="border-l-2 border-brass pl-5">
            <p className="text-xs font-semibold text-brass">{stage.step} · {stage.title}</p>
            <p className="mt-2 text-base leading-7 text-ink whitespace-pre-line">
              {reflection[stage.key]}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

function CompetenciesPage() {
  const { id } = Route.useSearch();
  const selected = competencies.find((item) => item.id === id);
  const evidences = selected ? ((evidenceItems as any)[selected.id] || []) : [];
  const [showTitle, setShowTitle] = useState(true);
  const [openEvidence, setOpenEvidence] = useState<number | null>(null);

  useEffect(() => {
    setShowTitle(true);
    setOpenEvidence(null);
    const t = setTimeout(() => setShowTitle(false), 1600);
    return () => clearTimeout(t);
  }, [id]);

  const overlayTitle = selected ? selected.title.toUpperCase() : "COMPETENCIES";
  const overlaySub = selected ? `Beyond My White Coat · ${selected.index}` : "Beyond My White Coat";

  return (
    <SiteFrame>
      {showTitle && <TitleOverlay title={overlayTitle} subtitle={overlaySub} />}

      <div className="mx-auto max-w-6xl px-5 py-14 md:px-8 md:py-20">
        <p className="text-xs font-semibold tracking-[0.18em] text-brass uppercase">GMU Framework</p>
        <h1 className="mt-4 max-w-3xl font-serif text-5xl leading-none md:text-6xl fade-in">
          The 9 Core <span className="gradient-text">Competencies</span>
        </h1>
        <div className="mt-4 h-0.5 w-16 rounded-full bg-gradient-to-r from-brass to-accent" />
        <p className="mt-6 max-w-2xl text-base leading-7 text-muted">
          Click any competency to explore detailed reflections, evidence, and structured Gibbs Reflective Cycle documentation aligned with Gulf Medical University standards.
        </p>

        {!selected ? (
          <div className="mt-12 grid gap-6 sm:grid-cols-2">
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
                    <div className="grid size-12 place-items-center rounded-2xl bg-brass/12 text-brass">
                      <CompetencyIcon id={item.id} />
                    </div>
                    {count > 0 && (
                      <span className="rounded-full bg-accent/15 px-3 py-1 text-[0.65rem] font-semibold tracking-wide text-brass">
                        {count} {count === 1 ? "ENTRY" : "ENTRIES"}
                      </span>
                    )}
                  </div>
                  <p className="mt-4 text-xs font-semibold tracking-widest text-muted">{item.index}</p>
                  <h2 className="mt-1 font-serif text-2xl leading-tight md:text-3xl">{item.title}</h2>
                  <p className="mt-3 text-sm leading-6 text-muted line-clamp-4">{item.plain}</p>
                  <p className="mt-6 text-sm font-semibold tracking-wide text-ink group-hover:text-brass">
                    Explore →
                  </p>
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
              <div className="flex items-center gap-4">
                <div className="grid size-14 place-items-center rounded-2xl bg-brass/12 text-brass">
                  <CompetencyIcon id={selected.id} />
                </div>
                <div>
                  <p className="text-xs font-semibold tracking-widest text-brass uppercase">
                    {selected.index} · Foundation
                  </p>
                  <h2 className="mt-1 font-serif text-4xl md:text-5xl">{selected.title}</h2>
                </div>
              </div>
              <p className="mt-5 font-serif text-xl leading-8 italic text-muted">{selected.plain}</p>

              {evidences.length > 0 && (
                <div className="mt-10">
                  <h3 className="text-xs font-semibold tracking-widest uppercase">Evidence</h3>
                  <div className="mt-4 space-y-6">
                    {evidences.map((ev: any, i: number) => {
                      const isOpen = openEvidence === i;
                      return (
                        <div key={i}>
                          <button
                            type="button"
                            onClick={() => setOpenEvidence(isOpen ? null : i)}
                            className={"w-full overflow-hidden rounded-2xl border border-line bg-paper text-left transition-all " + (isOpen ? "ring-2 ring-brass" : "hover:scale-[1.005]")}
                          >
                            {ev.image && (
                              <img src={ev.image} alt={ev.title} className="w-full h-auto object-contain" />
                            )}
                            <div className="p-5">
                              {ev.date && (
                                <p className="text-[0.65rem] font-semibold tracking-widest text-brass uppercase">{ev.date}</p>
                              )}
                              <p className="mt-1 text-base font-semibold">{ev.title}</p>
                              <p className="mt-1 text-sm leading-6 text-muted">{ev.description}</p>
                              {isOpen && ev.details && (
                                <p className="mt-3 border-t border-line pt-3 text-sm leading-6 text-ink">
                                  {ev.details}
                                </p>
                              )}
                              <p className="mt-3 text-sm font-semibold text-ink">
                                {isOpen ? "Collapse" : "Read reflection →"}
                              </p>
                            </div>
                          </button>
                          {isOpen && ev.reflection && <ReflectionBlock reflection={ev.reflection} />}
                          {isOpen && !ev.reflection && (
                            <div className="mt-4 rounded-2xl border border-line bg-paper/60 p-6">
                              <h4 className="text-xs font-semibold tracking-widest uppercase text-brass">Reflection</h4>
                              <p className="mt-3 text-base leading-7 text-muted">
                                Reflections for this entry will be added here using the Gibbs cycle when they are ready.
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
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </SiteFrame>
  );
}
