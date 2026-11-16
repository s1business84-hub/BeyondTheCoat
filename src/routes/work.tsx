import { createFileRoute, Link } from "@tanstack/react-router";
import { Kicker, SiteFrame } from "@/components/site/chrome";
import { ledger } from "@/components/site/data";

export const Route = createFileRoute("/work")({
  head: () => ({
    meta: [{ title: "The Ledger — Rahul Devnani" }],
  }),
  component: WorkPage,
});

function WorkPage() {
  return (
    <SiteFrame>
      <article className="mx-auto max-w-6xl px-5 py-14 md:px-8 md:py-20">
        <Kicker index="03">Scholarly work</Kicker>
        <h1 className="mt-4 max-w-3xl font-serif text-5xl leading-none md:text-6xl">
          The ledger stays blank until the work is real.
        </h1>
        <p className="mt-6 max-w-2xl text-base leading-7 text-muted">
          Research projects, publications, and conference papers will be entered here as
          they exist. Year one of the GMD program is for method: how to ask a question,
          how to read a paper, how not to announce a result you do not have.
        </p>

        <div className="mt-12 border-t border-line">
          {ledger.map((item) => (
            <section
              key={item.index}
              className="grid gap-4 border-b border-line py-8 md:grid-cols-12 md:items-baseline"
            >
              <p className="font-serif text-3xl text-brass md:col-span-2">{item.index}</p>
              <div className="md:col-span-4">
                <h2 className="font-serif text-3xl">{item.kind}</h2>
                <p className="mt-2 text-xs font-semibold tracking-widest text-brass uppercase">
                  Status · {item.status}
                </p>
              </div>
              <p className="text-base leading-7 text-muted md:col-span-6">{item.text}</p>
            </section>
          ))}
        </div>

        <aside className="mt-12 border border-line bg-paper p-6 md:p-8">
          <p className="text-xs font-semibold tracking-widest text-muted uppercase">
            Rule of entry
          </p>
          <p className="mt-3 max-w-2xl font-serif text-2xl leading-9">
            A line is added when three things are true: there is a title, there is a
            method, and there is a result someone else could check.
          </p>
        </aside>

        <div className="mt-10">
          <Link
            to="/competencies"
            search={{ id: "evidence-based" }}
            className="inline-flex h-12 items-center text-xs font-semibold tracking-widest uppercase"
          >
            Evidence-based practice →
          </Link>
        </div>
      </article>
    </SiteFrame>
  );
}
