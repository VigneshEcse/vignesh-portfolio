import portfolioContent from '../data/portfolioContent.json';

export default function HeroSection() {
  const { heroContent } = portfolioContent;

  return (
    <section className="hero">
      <div className="wrap">
        <div className="eyebrow">{heroContent.eyebrow}</div>
        <h1 className="headline">
          {heroContent.headline}{' '}
          <span className="accent">{heroContent.accentText}</span>
        </h1>
        <p className="sub">{heroContent.description}</p>
        <div className="hero-ctas">
          <a href={heroContent.primaryCta.href} className="btn primary">
            {heroContent.primaryCta.label}
          </a>
          <a href={heroContent.secondaryCta.href} className="btn">
            {heroContent.secondaryCta.label}
          </a>
        </div>

        <div className="diagram">
          <span className="diagram-label">// current stack — telecom platform</span>
          <div className="nodes">
            {heroContent.nodes.map((node, index) => (
              <div
                key={node.title}
                className={`node${node.isCustomer ? ' customer' : ''}`}
                style={{ animationDelay: `${0.05 + index * 0.1}s` }}
              >
                <div className="k">{node.title}</div>
                <div className="v">{node.value}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
