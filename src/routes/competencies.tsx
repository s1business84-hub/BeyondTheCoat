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
    <div className="mt-6 border border-line bg-bone p-5">
      <h4 className="text-[0.6rem] font-medium tracking-[0.2em] uppercase text-brass">Gibbs Reflective Cycle</h4>
      <div className="mt-4 grid gap-4 sm:grid-cols-2">
        {stages.map((stage) => (
          <div key={stage.key} className="border border-line bg-paper p-4">
            <p className="text-[0.55rem] font-medium tracking-[0.2em] text-brass uppercase">
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
    const t = setTimeout(() => setShowTitle(false), 1100);
    return () => clearTimeout(t);
  }, [id]);

  const overlayTitle = selected ? selected.title.toUpperCase() : "COMPETENCIES";
  const overlaySub = selected ? `Beyond My White Coat · ${selected.index}` : "Beyond My White Coat";

  return (
    <SiteFrame>
      {showTitle && <TitleOverlay title={overlayTitle} subtitle={overlaySub} />}

      <div className="mx-auto max-w-6xl px-5 py-12 md:px-8 md:py-16">
        <p className="editorial-label">GMU Framework</p>
        <h1 className="mt-3 max-w-3xl font-serif text-4xl leading-tight md:text-5xl">
          The 9 Core Competencies
        </h1>
        <div className="mt-3 h-px w-12 bg-brass" />
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
                  <h2 className="mt-1 font-serif text-xl leading-snug group-hover:italic">{item.title}</h2>
                  <p className="mt-2 text-xs leading-5 text-muted">{item.plain}</p>
                  <p className="mt-4 text-xs font-medium tracking-wide text-ink">
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
              className="text-xs font-medium tracking-widest uppercase text-brass"
            >
              ← All competencies
            </Link>

            <div className="mt-5 border border-line bg-paper p-6">
              <div className="flex items-center gap-4">
                <div className="grid size-11 place-items-center border border-line text-ink">
                  <CompetencyIcon id={selected.id} />
                </div>
                <div>
                  <p className="text-[0.55rem] font-medium tracking-[0.2em] text-brass uppercase">
                    {selected.index} · Foundation
                  </p>
                  <h2 className="mt-1 font-serif text-3xl md:text-4xl">{selected.title}</h2>
                </div>
              </div>
              <p className="mt-4 text-base leading-7 text-muted">{selected.plain}</p>

              {evidences.length > 0 && (
                <div className="mt-8">
                  <h3 className="text-[0.6rem] font-medium tracking-[0.2em] uppercase">Evidence</h3>
                  <div className="mt-4 space-y-5">
                    {evidences.map((ev: any, i: number) => {
                      const isOpen = openEvidence === i;
                      return (
                        <div key={i}>
                          <button
                            type="button"
                            onClick={() => setOpenEvidence(isOpen ? null : i)}
                            className={"w-full overflow-hidden border border-line bg-paper text-left " + (isOpen ? "border-brass" : "")}
                          >
                            {ev.image && (
                              <img src={ev.image} alt={ev.title} className="w-full h-auto object-contain" />
                            )}
                            <div className="p-4">
                              {ev.date && (
                                <p className="text-[0.55rem] font-medium tracking-[0.2em] text-brass uppercase">{ev.date}</p>
                              )}
                              <p className="mt-1 text-sm font-medium">{ev.title}</p>
                              <p className="mt-1 text-xs leading-5 text-muted">{ev.description}</p>
                              {isOpen && ev.details && (
                                <p className="mt-3 border-t border-line pt-3 text-xs leading-5 text-ink">
                                  {ev.details}
                                </p>
                              )}
                              <p className="mt-3 text-xs font-medium text-brass">
                                {isOpen ? "Collapse" : "Read reflection →"}
                              </p>
                            </div>
                          </button>
                          {isOpen && ev.reflection && <ReflectionBlock reflection={ev.reflection} />}
                          {isOpen && !ev.reflection && (
                            <div className="mt-4 border border-line bg-bone p-5">
                              <h4 className="text-[0.6rem] font-medium tracking-[0.2em] uppercase text-brass">Reflection</h4>
                              <p className="mt-2 text-sm leading-6 text-muted">
                                Reflections for this entry will be added here using the Gibbs cycle when they are ready.
                              </p>
                              <ol className="mt-4 grid gap-3 sm:grid-cols-2">
                                {gibbs.map((step) => (
                                  <li key={step.step} className="border border-line bg-paper p-3">
                                    <p className="text-[0.55rem] font-medium text-brass">{step.step} · {step.title}</p>
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
