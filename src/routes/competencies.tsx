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
    <div className="mt-6 rounded-2xl border border-line bg-white p-5">
      <h4 className="text-xs font-semibold tracking-widest uppercase text-brass">Gibbs Reflective Cycle</h4>
      <div className="mt-4 grid gap-4 sm:grid-cols-2">
        {stages.map((stage) => (
          <div key={stage.key} className="rounded-xl border border-line/70 bg-paper/40 p-4">
            <p className="text-[0.65rem] font-semibold tracking-widest text-brass uppercase">
              {stage.step} · {stage.title}
            </p>
            <p className="mt-2 text-sm leading-6 text-ink whitespace-pre-line">
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
    const t = setTimeout(() => setShowTitle(false), 1400);
    return () => clearTimeout(t);
  }, [id]);

  const overlayTitle = selected ? selected.title.toUpperCase() : "COMPETENCIES";
  const overlaySub = selected ? `Beyond My White Coat · ${selected.index}` : "Beyond My White Coat";

  return (
    <SiteFrame>
      {showTitle && <TitleOverlay title={overlayTitle} subtitle={overlaySub} />}

      <div className="mx-auto max-w-6xl px-5 py-12 md:px-8 md:py-16">
        <p className="text-xs font-semibold tracking-[0.18em] text-brass uppercase">GMU Framework</p>
        <h1 className="mt-3 max-w-3xl font-serif text-4xl leading-tight md:text-5xl fade-in">
          The 9 Core <span className="gradient-text">Competencies</span>
        </h1>
        <div className="mt-3 h-0.5 w-14 rounded-full bg-gradient-to-r from-brass to-accent" />
        <p className="mt-5 max-w-2xl text-sm leading-6 text-muted">
          Click any competency to explore detailed reflections, evidence, and structured Gibbs Reflective Cycle documentation aligned with Gulf Medical University standards.
        </p>

        {!selected ? (
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
                    <div className="grid size-10 place-items-center rounded-xl bg-brass/10 text-brass">
                      <CompetencyIcon id={item.id} />
                    </div>
                    {count > 0 && (
                      <span className="rounded-full bg-accent/15 px-2.5 py-0.5 text-[0.6rem] font-semibold tracking-wide text-brass">
                        {count} {count === 1 ? "ENTRY" : "ENTRIES"}
                      </span>
                    )}
                  </div>
                  <p className="mt-3 text-[0.65rem] font-semibold tracking-widest text-muted">{item.index}</p>
                  <h2 className="mt-1 font-serif text-xl leading-snug">{item.title}</h2>
                  <p className="mt-2 text-xs leading-5 text-muted line-clamp-3">{item.plain}</p>
                  <p className="mt-4 text-xs font-semibold text-brass">
                    Explore →
                  </p>
                </Link>
              );
            })}
          </div>
        ) : (
          <div className="mt-8">
            <Link
              to="/competencies"
              search={{ id: "" }}
              className="text-xs font-semibold tracking-widest uppercase text-brass"
            >
              ← All competencies
            </Link>

            <div className="mt-5 glass-card p-6">
              <div className="flex items-center gap-4">
                <div className="grid size-12 place-items-center rounded-xl bg-brass/10 text-brass">
                  <CompetencyIcon id={selected.id} />
                </div>
                <div>
                  <p className="text-[0.65rem] font-semibold tracking-widest text-brass uppercase">
                    {selected.index} · Foundation
                  </p>
                  <h2 className="mt-1 font-serif text-3xl md:text-4xl">{selected.title}</h2>
                </div>
              </div>
              <p className="mt-4 text-base leading-7 text-muted">{selected.plain}</p>

              {evidences.length > 0 && (
                <div className="mt-8">
                  <h3 className="text-xs font-semibold tracking-widest uppercase">Evidence</h3>
                  <div className="mt-4 space-y-5">
                    {evidences.map((ev: any, i: number) => {
                      const isOpen = openEvidence === i;
                      return (
                        <div key={i}>
                          <button
                            type="button"
                            onClick={() => setOpenEvidence(isOpen ? null : i)}
                            className={"w-full overflow-hidden rounded-2xl border border-line bg-white text-left transition-all " + (isOpen ? "ring-2 ring-brass" : "")}
                          >
                            {ev.image && (
                              <img src={ev.image} alt={ev.title} className="w-full h-auto object-contain" />
                            )}
                            <div className="p-4">
                              {ev.date && (
                                <p className="text-[0.6rem] font-semibold tracking-widest text-brass uppercase">{ev.date}</p>
                              )}
                              <p className="mt-1 text-sm font-semibold">{ev.title}</p>
                              <p className="mt-1 text-xs leading-5 text-muted">{ev.description}</p>
                              {isOpen && ev.details && (
                                <p className="mt-3 border-t border-line pt-3 text-xs leading-5 text-ink">
                                  {ev.details}
                                </p>
                              )}
                              <p className="mt-3 text-xs font-semibold text-brass">
                                {isOpen ? "Collapse" : "Read reflection →"}
                              </p>
                            </div>
                          </button>
                          {isOpen && ev.reflection && <ReflectionBlock reflection={ev.reflection} />}
                          {isOpen && !ev.reflection && (
                            <div className="mt-4 rounded-2xl border border-line bg-white p-5">
                              <h4 className="text-xs font-semibold tracking-widest uppercase text-brass">Reflection</h4>
                              <p className="mt-2 text-sm leading-6 text-muted">
                                Reflections for this entry will be added here using the Gibbs cycle when they are ready.
                              </p>
                              <ol className="mt-4 grid gap-3 sm:grid-cols-2">
                                {gibbs.map((step) => (
                                  <li key={step.step} className="rounded-xl border border-line/70 p-3">
                                    <p className="text-[0.6rem] font-semibold text-brass">{step.step} · {step.title}</p>
                                    <p className="mt-1 text-xs text-muted">{step.text}</p>
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
