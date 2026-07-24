import { aboutFacts } from "@/data/portfolioContent";

export default function About() {
  return (
    <section id="about">
      <div className="wrap about-grid">
        <div>
          <span className="kicker">About</span>
          <h2>Four years in, still the one who asks &quot;what breaks if this is wrong?&quot;</h2>
          <p>
            I&apos;m a developer working across React.js, Next.js, and the Appian low-code platform — which in
            practice means I spend most of my time at the seams: where a frontend meets an API, where a
            design-system component gets reused in a repo it wasn&apos;t built for, where a new feature needs a
            way to fail safely in production. I&apos;m Appian Certified and I&apos;ve built plugins from scratch,
            but the part I actually enjoy is the integration work — making unrelated systems behave like one
            product.
          </p>
          <p>
            Currently an Associate Consultant at Infosys on a telecom account, after three-plus years at
            WNS-Vuram building custom Appian plugins and REST integrations for enterprise clients.
          </p>
        </div>
        <div className="facts">
          {aboutFacts.map((f) => (
            <div className="fact" key={f.n}>
              <div className="n">{f.n}</div>
              <div className="d">{f.d}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
