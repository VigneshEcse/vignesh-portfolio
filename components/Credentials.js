import { credentialsContent } from "@/data/portfolioContent";

export default function Credentials() {
  return (
    <section id="credentials">
      <div className="wrap cred-grid">
        <div>
          <span className="kicker">Certifications</span>
          {credentialsContent.certifications.map((c) => (
            <div className="cred-item" style={{ marginTop: "14px" }} key={c.t}>
              <div className="t">{c.t}</div>
              <div className="d">{c.d}</div>
            </div>
          ))}
        </div>
        <div>
          <span className="kicker">Education</span>
          <div className="cred-item" style={{ marginTop: "14px" }}>
            <div className="t">{credentialsContent.education.t}</div>
            <div className="d">{credentialsContent.education.d}</div>
          </div>
        </div>
      </div>
    </section>
  );
}
