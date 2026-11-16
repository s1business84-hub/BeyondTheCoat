import { createFileRoute, Link } from "@tanstack/react-router";
import { Kicker, Monogram, SiteFrame } from "@/components/site/chrome";
import { yearMap } from "@/components/site/data";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [{ title: "The Record — Rahul Devnani" }],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <SiteFrame>
      <article className="mx-auto max-w-6xl px-5 py-14 md:px-8 md:py-20">
        <Kicker index="01">The record</Kicker>
        <div className="mt-8 grid items-end gap-10 lg:grid-cols-12">
          <h1 className="font-serif text-5xl leading-none md:text-7xl lg:col-span-8">
            The coat is a uniform. The record is the work.
          </h1>
          <div className="lg:col-span-4">
            <Monogram />
            <p className="mt-4 text-sm leading-6 text-muted">
              Rahul Devnani
              <br />
              GMD · Year I
              <br />
              Gulf Medical University
            </p>
          </div>
        </div>

        <div className="mt-14 grid gap-12 border-t border-line pt-12 lg:grid-cols-12">
          <div className="space-y-5 text-base leading-7 text-muted lg:col-span-7">
            <p className="font-serif text-2xl leading-9 text-ink">
              I am in the first year of the GMD program at Gulf Medical University, Ajman —
              Doctor of Medicine training, entered 2026.
            </p>
            <p>
              The year is foundational science, early clinical skills, and the habits of a
              person who can be left in a teaching hospital without becoming a problem.
              Specialty talk can wait. Anatomy cannot.
            </p>
            <p>
              Clinical education at GMU runs through the Thumbay Academic Health System.
              I treat that as a place to learn the map — how a ward, a lab, and a clinic
              hand work to each other — not as a list of departments to claim.
            </p>
            <p>
              I have not published, and I will not decorate this page with observerships
              that are not mine to tell. If a line appears later, it will have a date and
              a name that can be checked.
            </p>
            <p>
              The standard I am writing toward is short. Be precise. Be useful to a team.
              Do not claim a competency you have not practiced.
            </p>
          </div>
          <aside className="lg:col-span-5">
            <p className="text-xs font-semibold tracking-widest text-muted uppercase">
              How to read year one
            </p>
            <ol className="mt-4 border-t border-line">
              {yearMap.map((item) => (
                <li key={item.when} className="border-b border-line py-5">
                  <p className="text-xs font-semibold tracking-widest text-brass uppercase">
                    {item.when}
                  </p>
                  <p className="mt-2 text-sm leading-6">{item.what}</p>
                </li>
              ))}
            </ol>
          </aside>
        </div>

        <div className="mt-14 flex flex-wrap gap-3 border-t border-line pt-10">
          <Link
            to="/competencies"
            search={{ id: "medical-expert" }}
            className="inline-flex h-12 items-center bg-ink px-5 text-xs font-semibold tracking-widest text-bone uppercase"
          >
            Nine competencies
          </Link>
          <Link
            to="/work"
            className="inline-flex h-12 items-center border border-ink px-5 text-xs font-semibold tracking-widest uppercase"
          >
            The ledger
          </Link>
        </div>
      </article>
    </SiteFrame>
  );
}
