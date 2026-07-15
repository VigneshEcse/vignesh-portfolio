import { skillGroups } from "@/data/portfolioContent";

export default function Skills() {
  return (
    <section id="skills">
      <div className="wrap">
        <span className="kicker">Skills</span>
        <h2 style={{ marginBottom: "36px" }}>The toolkit</h2>
        <div className="skill-groups">
          {skillGroups.map((group) => (
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
