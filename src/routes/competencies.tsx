import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteFrame } from "@/components/site/chrome";
import { CompetencyIcon } from "@/components/site/icons";
import { competencies, gibbs, evidenceItems } from "@/components/site/data";
import { useEffect, useState } from "react";

type Search = { id: string; entry?: string };

export const Route = createFileRoute("/competencies")({
  validateSearch: (search: Record<string, unknown>): Search => ({
    id: typeof search.id === "string" ? search.id : "",
    entry: typeof search.entry === "string" ? search.entry : undefined,
  }),
  head: () => ({
    meta: [{ title: "Competencies — Rahul Devnani" }],
  }),
  component: CompetenciesPage,
});

const iconColors: Record<string, string> = {
  "medical-expert": "bg-gradient-to-br from-blue-500 to-blue-700",
  "communicator": "bg-gradient-to-br from-sky-500 to-blue-600",
  "collaborator": "bg-gradient-to-br from-cyan-500 to-blue-600",
  "professionalism": "bg-gradient-to-br from-blue-600 to-indigo-700",
  "patient-care": "bg-gradient-to-br from-teal-500 to-cyan-600",
  "evidence-based": "bg-gradient-to-br from-blue-500 to-cyan-600",
  "social-accountability": "bg-gradient-to-br from-indigo-500 to-blue-700",
  "health-systems": "bg-gradient-to-br from-sky-600 to-blue-700",
  "lifelong-learner": "bg-gradient-to-br from-cyan-600 to-blue-700",
};

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
    <div className="mt-10 space-y-10">
      <h2 className="font-serif text-3xl">Personal Reflection</h2>
      <div className="h-px w-full bg-line/50" />
      {stages.map((stage) => (
        <div key={stage.key} className="border-t border-line/50 pt-8">
          <div className="flex items-start gap-4">
            <div className="grid size-12 shrink-0 place-items-center rounded-full bg-gradient-to-br from-brass to-warm text-white text-lg font-medium shadow-lg">
              {stage.letter}
            </div>
            <div>
              <h3 className="font-serif text-2xl md:text-3xl">{stage.title}</h3>
              <p className="mt-1 text-sm italic text-muted">{stage.subtitle}</p>
            </div>
          </div>
          <p className="mt-6 text-base leading-8 text-ink whitespace-pre-line">
            {reflection[stage.key]}
          </p>
        </div>
      ))}
    </div>
  );
}

function CompetenciesPage() {
  const { id, entry } = Route.useSearch();
  const selected = competencies.find((item) => item.id === id);
  const evidences = selected ? ((evidenceItems as any)[selected.id] || []) : [];
  const entryIndex = entry ? parseInt(entry, 10) : null;
  const currentEntry = entryIndex !== null && evidences[entryIndex] ? evidences[entryIndex] : null;
  const nextEntry = entryIndex !== null && evidences[entryIndex + 1] ? evidences[entryIndex + 1] : null;
  const [showTitle, setShowTitle] = useState(true);

  useEffect(() => {
    setShowTitle(true);
    const t = setTimeout(() => setShowTitle(false), 1100);
    return () => clearTimeout(t);
  }, [id, entry]);

  const overlayTitle = currentEntry ? currentEntry.title.toUpperCase() : selected ? selected.title.toUpperCase() : "COMPETENCIES";
  const overlaySub = selected ? `Beyond My White Coat · ${selected.index}` : "Beyond My White Coat";

  return (
    <SiteFrame>
      {showTitle && <TitleOverlay title={overlayTitle} subtitle={overlaySub} />}

      <div className="mx-auto max-w-5xl px-5 py-10 md:px-8 md:py-14">
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
            <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {competencies.map((item) => {
                const count = ((evidenceItems as any)[item.id] || []).length;
                const colorClass = iconColors[item.id] || "bg-gradient-to-br from-brass to-warm";
                return (
                  <Link
                    key={item.id}
                    to="/competencies"
                    search={{ id: item.id }}
                    className="glass-card group block p-5"
                  >
                    <div className="flex items-start justify-between">
                      <div className={`grid size-12 place-items-center rounded-2xl text-white shadow-lg ${colorClass}`}>
                        <CompetencyIcon id={item.id} />
                      </div>
                      {count > 0 && (
                        <span className="rounded-full bg-gradient-to-r from-brass/15 to-warm/15 px-3 py-1 text-[0.55rem] font-semibold tracking-wide text-brass">
                          {count} {count === 1 ? "ENTRY" : "ENTRIES"}
                        </span>
                      )}
                    </div>
                    <h2 className="mt-4 font-serif text-xl leading-snug group-hover:text-brass transition-colors">{item.title}</h2>
                    <p className="mt-2 text-sm leading-6 text-muted line-clamp-3">{item.plain}</p>
                    <span className="mt-4 inline-flex items-center text-sm font-semibold text-brass group-hover:gap-2 transition-all">
                      View Details <span className="ml-1">→</span>
                    </span>
                  </Link>
                );
              })}
            </div>
          </>
        ) : currentEntry ? (
          <>
            <Link
              to="/competencies"
              search={{ id: selected.id }}
              className="text-sm text-muted hover:text-brass"
            >
              ← Back to {selected.title}
            </Link>

            <p className="mt-8 text-[0.6rem] font-medium tracking-[0.2em] text-brass uppercase">
              Reflection · {selected.title}
            </p>
            <h1 className="mt-3 font-serif text-4xl md:text-5xl leading-tight">
              {currentEntry.title}
            </h1>
            <div className="mt-6 h-px w-full bg-line/50" />
            {currentEntry.date && (
              <p className="mt-6 text-sm text-muted">{currentEntry.date}</p>
            )}
            <p className="mt-2 text-base text-muted">
              {currentEntry.description}
            </p>

            {currentEntry.image && (
              <div className="relative mt-8 overflow-hidden rounded-2xl shadow-xl">
                <img src={currentEntry.image} alt={currentEntry.title} className="w-full" />
                {currentEntry.type && (
                  <span className="absolute bottom-4 left-4 rounded-lg bg-gradient-to-r from-brass to-warm px-3 py-1.5 text-[0.55rem] font-semibold tracking-wide text-white uppercase shadow-lg">
                    {currentEntry.type}
                  </span>
                )}
              </div>
            )}

            {currentEntry.details && (
              <p className="mt-8 text-base leading-7 text-ink">
                {currentEntry.details}
              </p>
            )}

            {currentEntry.reflection && <ReflectionBlock reflection={currentEntry.reflection} />}

            {nextEntry && (
              <Link
                to="/competencies"
                search={{ id: selected.id, entry: String(entryIndex! + 1) }}
                className="mt-12 block rounded-2xl border-2 border-line p-6 hover:border-brass hover:shadow-lg transition-all"
              >
                <p className="text-[0.6rem] font-semibold tracking-[0.2em] text-brass uppercase">Next Entry →</p>
                <p className="mt-2 font-serif text-xl">{nextEntry.title}</p>
              </Link>
            )}
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

            <div className="mt-8 flex items-center gap-4">
              <div className={`grid size-14 place-items-center rounded-2xl text-white shadow-lg ${iconColors[selected.id] || "bg-gradient-to-br from-brass to-warm"}`}>
                <CompetencyIcon id={selected.id} />
              </div>
              <div>
                <p className="text-[0.6rem] font-medium tracking-[0.2em] text-brass uppercase">
                  {selected.index} · Foundation
                </p>
                <h1 className="mt-1 font-serif text-3xl md:text-4xl">
                  {selected.title}
                </h1>
              </div>
            </div>
            <div className="mt-6 h-px w-full bg-line/50" />
            <p className="mt-6 text-base leading-7 text-ink/80">
              {selected.plain}
            </p>

            {evidences.length > 0 && (
              <div className="mt-10">
                <h2 className="font-serif text-2xl">Evidence</h2>
                <div className="mt-6 space-y-4">
                  {evidences.map((ev: any, i: number) => (
                    <Link
                      key={i}
                      to="/competencies"
                      search={{ id: selected.id, entry: String(i) }}
                      className="block glass-card p-5 hover:border-brass"
                    >
                      <div className="flex items-start gap-4">
                        {ev.image && (
                          <img src={ev.image} alt={ev.title} className="size-20 rounded-xl object-cover shadow-md" />
                        )}
                        <div className="flex-1">
                          {ev.date && (
                            <p className="text-[0.55rem] font-semibold tracking-widest text-brass uppercase">{ev.date}</p>
                          )}
                          <h3 className="mt-1 font-serif text-lg">{ev.title}</h3>
                          <p className="mt-1 text-sm text-muted line-clamp-2">{ev.description}</p>
                          <span className="mt-3 inline-flex items-center text-sm font-semibold text-brass">
                            Read Reflection →
                          </span>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </>
        )}
      </div>
    </SiteFrame>
  );
}
