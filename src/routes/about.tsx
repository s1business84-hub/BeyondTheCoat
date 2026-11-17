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
            About me
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
              I am a first-year Doctor of Medicine (MD) student at Gulf Medical University, beginning my journey in the field of medicine with a strong interest in understanding the complexities of human health and disease.
            </p>
            <p>
              As I embark on my medical education, I aim to develop a strong foundation in medical sciences while continuously strengthening my critical thinking, communication and problem-solving skills. I believe that becoming a competent healthcare professional requires not only academic knowledge but also empathy, integrity, adaptability and a commitment to lifelong learning.
            </p>
            <p>
              I look forward to gaining new perspectives through academic learning, collaborative experiences and clinical exposure. My goal is to progressively develop the knowledge, practical skills and professional values necessary to contribute meaningfully to patient care and the healthcare community.
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
