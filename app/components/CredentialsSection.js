import portfolioContent from '../data/portfolioContent.json';

export default function CredentialsSection() {
  const { credentialsContent } = portfolioContent;

  return (
    <section id="credentials">
      <div className="wrap cred-grid">
        <div>
          <span className="kicker">Certifications</span>
          {credentialsContent.certifications.map((item) => (
            <div key={item.title} className="cred-item" style={{ marginTop: '14px' }}>
              <div className="t">{item.title}</div>
              <div className="d">{item.detail}</div>
            </div>
          ))}
        </div>
        <div>
          <span className="kicker">Education</span>
          {credentialsContent.education.map((item) => (
            <div key={item.title} className="cred-item" style={{ marginTop: '14px' }}>
              <div className="t">{item.title}</div>
              <div className="d">{item.detail}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
