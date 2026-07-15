import portfolioContent from '../data/portfolioContent.json';

export default function Header() {
  const { navLinks } = portfolioContent;

  return (
    <header>
      <nav className="wrap">
        <a href="#top" className="brand">
          <span className="dot"></span>
          Vignesh E
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
