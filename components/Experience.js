import { experienceRoles } from "@/data/portfolioContent";

export default function Experience() {
  return (
    <section id="experience">
      <div className="wrap">
        <span className="kicker">Experience</span>
        <h2 style={{ marginBottom: "36px" }}>Where the work happened</h2>
        <div className="timeline">
          {experienceRoles.map((role) => (
            <div className="role" key={role.title + role.when}>
              <div className="role-when">{role.when}</div>
              <div>
                <h3>{role.title}</h3>
                <div className="co">{role.company}</div>
                <ul>
                  {role.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
                {role.tags.map((t) => (
                  <span className="tag" key={t}>
                    {t}
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
