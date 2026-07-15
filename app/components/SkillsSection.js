import portfolioContent from '../data/portfolioContent.json';

export default function SkillsSection() {
  const { skillsGroups } = portfolioContent;

  return (
    <section id="skills">
      <div className="wrap">
        <span className="kicker">Skills</span>
        <h2 style={{ marginBottom: '36px' }}>The toolkit</h2>
        <div className="skill-groups">
          {skillsGroups.map((group) => (
            <div key={group.title}>
              <div className="sg-title">{group.title}</div>
              <div className="sg-list">
                {group.items.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
