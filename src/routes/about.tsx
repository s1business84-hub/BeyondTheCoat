import { createFileRoute, Link } from "@tanstack/react-router";
import { Kicker, Monogram, SiteFrame } from "@/components/site/chrome";
import { yearMap } from "@/components/site/data";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [{ title: "About — Rahul Devnani" }],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <SiteFrame>
      <article className="mx-auto max-w-6xl px-5 py-14 md:px-8 md:py-20">
        <div className="fade-up">
          <Kicker index="01">The record</Kicker>
        </div>

        <div className="mt-8 grid items-end gap-10 lg:grid-cols-12">
          <h1 className="font-serif text-5xl leading-none md:text-6xl lg:col-span-8 fade-up" style={{ animationDelay: "0.1s" }}>
            About <span className="italic">me</span>
          </h1>
          <div className="lg:col-span-4 fade-up" style={{ animationDelay: "0.2s" }}>
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
            <p className="font-serif text-2xl leading-9 text-ink fade-up" style={{ animationDelay: "0.25s" }}>
              I am a first-year Doctor of Medicine (MD) student at Gulf Medical University, beginning my journey in the field of medicine with a strong interest in understanding the complexities of human health and disease.
            </p>
            <p className="fade-up" style={{ animationDelay: "0.35s" }}>
              As I embark on my medical education, I aim to develop a strong foundation in medical sciences while continuously strengthening my critical thinking, communication and problem-solving skills. I believe that becoming a competent healthcare professional requires not only academic knowledge but also empathy, integrity, adaptability and a commitment to lifelong learning.
            </p>
            <p className="fade-up" style={{ animationDelay: "0.45s" }}>
              I look forward to gaining new perspectives through academic learning, collaborative experiences and clinical exposure. My goal is to progressively develop the knowledge, practical skills and professional values necessary to contribute meaningfully to patient care and the healthcare community.
            </p>
          </div>
          <aside className="lg:col-span-5">
            <p className="editorial-label fade-up" style={{ animationDelay: "0.3s" }}>
              How to read year one
            </p>
            <ol className="mt-4 space-y-4">
              {yearMap.map((item, i) => (
                <li key={item.when} className="border-t border-line pt-4 fade-up" style={{ animationDelay: `${0.4 + i * 0.08}s` }}>
                  <p className="text-[0.55rem] font-medium tracking-[0.2em] text-brass uppercase">
                    {item.when}
                  </p>
                  <p className="mt-1.5 text-sm leading-6 text-ink/80">{item.what}</p>
                </li>
              ))}
            </ol>
          </aside>
        </div>

        <div className="mt-14 border-t border-line pt-10 fade-up" style={{ animationDelay: "0.7s" }}>
          <Link
            to="/competencies"
            search={{ id: "" }}
            className="inline-flex h-11 items-center bg-ink px-6 text-[0.6rem] font-medium tracking-[0.2em] text-bone uppercase"
          >
            View competencies
          </Link>
        </div>
      </article>
    </SiteFrame>
  );
}
