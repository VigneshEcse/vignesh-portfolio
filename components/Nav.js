import { navLinks } from "@/data/portfolioContent";

export default function Nav() {
  return (
    <header>
      <nav className="wrap">
        <a href="#top" className="brand">
          <span className="dot"></span>Vignesh E
        </a>
        <div className="navlinks">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </div>
        <a href="#contact" className="btn primary">
          Get in touch
        </a>
      </nav>
    </header>
  );
}
