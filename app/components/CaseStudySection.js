import portfolioContent from '../data/portfolioContent.json';

export default function CaseStudySection() {
  const { caseStudyContent } = portfolioContent;

  return (
    <section id="case-study">
      <div className="wrap">
        <span className="kicker">{caseStudyContent.kicker}</span>
        <h2 style={{ marginBottom: '30px' }}>{caseStudyContent.heading}</h2>
        <div className="case">
          <p style={{ color: 'var(--text-muted)', fontSize: '15.5px', maxWidth: '680px' }}>
            {caseStudyContent.intro}
          </p>

          <div className="case-steps">
            {caseStudyContent.steps.map((step) => (
              <div key={step.title} className="step">
                <div className="k">{step.title}</div>
                <div className="v">{step.description}</div>
              </div>
            ))}
          </div>

          <blockquote>
            {caseStudyContent.quote}
            <cite>{caseStudyContent.quoteSource}</cite>
          </blockquote>
          <p style={{ marginTop: '18px', fontSize: '13.5px', color: 'var(--text-dim)' }}>
            {caseStudyContent.note}
          </p>
        </div>
      </div>
    </section>
  );
}
