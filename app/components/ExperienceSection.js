import portfolioContent from '../data/portfolioContent.json';

export default function ExperienceSection() {
  const { experienceItems } = portfolioContent;

  return (
    <section id="experience">
      <div className="wrap">
        <span className="kicker">Experience</span>
        <h2 style={{ marginBottom: '36px' }}>Where the work happened</h2>
        <div className="timeline">
          {experienceItems.map((item) => (
            <div key={item.period} className="role">
              <div className="role-when">{item.period}</div>
              <div>
                <h3>{item.title}</h3>
                <div className="co">{item.company}</div>
                <ul>
                  {item.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
                {item.tags.map((tag) => (
                  <span key={tag} className="tag">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
