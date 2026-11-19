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
    { key: "description", title: "Description of the Activity", subtitle: "What happened — the factual account", letter: "A" },
    { key: "feelings", title: "Feelings", subtitle: "What you noticed in yourself", letter: "B" },
    { key: "evaluation", title: "Evaluation", subtitle: "What worked and what did not", letter: "C" },
    { key: "analysis", title: "Analysis", subtitle: "Why, against the science and standard", letter: "D" },
    { key: "conclusion", title: "Conclusion", subtitle: "What you would do differently", letter: "E" },
    { key: "action", title: "Action Plan", subtitle: "The next concrete step", letter: "F" },
  ];
  return (
    <div className="mt-8 space-y-8">
      {stages.map((stage) => (
        <div key={stage.key} className="border-t border-line/50 pt-6">
          <div className="flex items-start gap-4">
            <div className="grid size-10 shrink-0 place-items-center rounded-full bg-ink text-white text-sm font-medium">
              {stage.letter}
            </div>
            <div>
              <h4 className="font-serif text-2xl">{stage.title}</h4>
              <p className="mt-1 text-sm italic text-muted">{stage.subtitle}</p>
            </div>
          </div>
          <p className="mt-4 text-base leading-7 text-ink whitespace-pre-line">
            {reflection[stage.key]}
          </p>
        </div>
      ))}
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

      <div className="mx-auto max-w-4xl px-5 py-10 md:px-8 md:py-14">
        {!selected ? (
          <>
            <p className="text-[0.6rem] font-medium tracking-[0.2em] text-brass uppercase">GMU Framework</p>
            <h1 className="mt-3 font-serif text-4xl md:text-5xl">
              The 9 Core <span className="gradient-text">Competencies</span>
            </h1>
            <div className="mt-3 h-0.5 w-14 bg-gradient-to-r from-brass to-warm rounded-full" />
            <p className="mt-5 max-w-xl text-sm leading-6 text-muted">
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
                    <h2 className="mt-3 font-serif text-lg leading-snug group-hover:text-brass transition-colors">{item.title}</h2>
                    <p className="mt-1 text-sm leading-5 text-muted">{item.plain}</p>
                  </Link>
                );
              })}
            </div>
          </>
        ) : (
          <>
            <Link
              to="/competencies"
              search={{ id: "" }}
              className="text-sm text-muted hover:text-brass"
            >
              ← All Competencies
            </Link>

            <p className="mt-6 text-[0.6rem] font-medium tracking-[0.2em] text-brass uppercase">
              Reflection · {selected.title}
            </p>
            <h1 className="mt-3 font-serif text-4xl md:text-5xl leading-tight">
              {selected.title}
            </h1>
            <div className="mt-4 h-px w-full bg-line/50" />
            <p className="mt-4 text-sm text-muted">
              {selected.index} · Foundation
            </p>
            <p className="mt-2 text-base leading-7 text-ink/80">
              {selected.plain}
            </p>

            {evidences.length > 0 && (
              <div className="mt-10">
                <h2 className="font-serif text-2xl">Evidence</h2>
                <div className="mt-6 space-y-8">
                  {evidences.map((ev: any, i: number) => {
                    const isOpen = openEvidence === i;
                    return (
                      <div key={i} className="border-t border-line/50 pt-6">
                        {ev.image && (
                          <div className="relative mb-4 overflow-hidden rounded-2xl">
                            <img src={ev.image} alt={ev.title} className="w-full" />
                            {ev.type && (
                              <span className="absolute bottom-3 left-3 rounded bg-ink/80 px-2 py-1 text-[0.55rem] font-medium tracking-wide text-white uppercase">
                                {ev.type}
                              </span>
                            )}
                          </div>
                        )}
                        <button
                          type="button"
                          onClick={() => setOpenEvidence(isOpen ? null : i)}
                          className="w-full text-left"
                        >
                          {ev.date && (
                            <p className="text-sm text-muted">{ev.date}</p>
                          )}
                          <h3 className="mt-1 font-serif text-xl">{ev.title}</h3>
                          <p className="mt-2 text-sm leading-6 text-muted">{ev.description}</p>
                          <p className="mt-3 text-sm font-medium text-brass">
                            {isOpen ? "Collapse" : "Read reflection →"}
                          </p>
                        </button>
                        {isOpen && ev.details && (
                          <p className="mt-4 text-sm leading-6 text-ink">
                            {ev.details}
                          </p>
                        )}
                        {isOpen && ev.reflection && <ReflectionBlock reflection={ev.reflection} />}
                        {isOpen && !ev.reflection && (
                          <div className="mt-6 rounded-xl border border-line bg-bone p-5">
                            <h4 className="text-[0.6rem] font-medium tracking-[0.2em] uppercase text-brass">Reflection</h4>
                            <p className="mt-2 text-sm leading-6 text-muted">
                              Reflections for this entry will be added here using the Gibbs cycle when they are ready.
                            </p>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
          </>
        )}
      </div>
    </SiteFrame>
  );
}
