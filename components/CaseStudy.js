import { caseStudyContent } from "@/data/portfolioContent";

export default function CaseStudy() {
  return (
    <section id="case-study">
      <div className="wrap">
        <span className="kicker">Case Study</span>
        <h2 style={{ marginBottom: "30px" }}>{caseStudyContent.title}</h2>
        <div className="case">
          <p style={{ color: "var(--text-muted)", fontSize: "15.5px", maxWidth: "680px" }}>
            {caseStudyContent.intro}
          </p>

          <div className="case-steps">
            {caseStudyContent.steps.map((s) => (
              <div className="step" key={s.k}>
                <div className="k">{s.k}</div>
                <div className="v">{s.v}</div>
              </div>
            ))}
          </div>

          <blockquote>
            {caseStudyContent.quote}
            <cite>{caseStudyContent.quoteSource}</cite>
          </blockquote>
          <p style={{ marginTop: "18px", fontSize: "13.5px", color: "var(--text-dim)" }}>
            {caseStudyContent.note}
          </p>
        </div>
      </div>
    </section>
  );
}
