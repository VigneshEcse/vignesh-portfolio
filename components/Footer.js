import { footerContent } from "@/data/portfolioContent";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

export default function Footer() {
  return (
    <footer id="contact">
      <div className="wrap contact-inner">
        <span className="kicker">Contact</span>
        <h2>{footerContent.heading}</h2>
        <p className="sub" style={{ margin: "18px auto 0" }}>
          {footerContent.description}
        </p>
        <div className="contact-links">
          <a className="btn primary" href={footerContent.email}>
            Email me
          </a>
          <a className="btn" href={footerContent.linkedin} target="_blank" rel="noopener">
            LinkedIn
          </a>
          <a className="btn" href={`${basePath}/resume.pdf`}>
            Résumé (PDF)
          </a>
        </div>
        <div className="copyline">{footerContent.footerNote}</div>
      </div>
    </footer>
  );
}
