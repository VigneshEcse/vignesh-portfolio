import portfolioContent from '../data/portfolioContent.json';

export default function AboutSection() {
  const { aboutContent } = portfolioContent;

  return (
    <section id="about">
      <div className="wrap about-grid">
        <div>
          <span className="kicker">{aboutContent.kicker}</span>
          <h2>{aboutContent.heading}</h2>
          {aboutContent.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
        <div className="facts">
          {aboutContent.facts.map((fact) => (
            <div key={fact.description} className="fact">
              <div className="n">{fact.value}</div>
              <div className="d">{fact.description}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
