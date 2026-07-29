import { navLinks } from "@/data/portfolioContent";
import { Brand, BrandDot, Button, Header, NavLinks, NavWrap, PrimaryButton } from "@/components/styled";

export default function Nav() {
  return (
    <Header>
      <NavWrap>
        <Brand href="#top">
          <BrandDot />Vignesh E
        </Brand>
        <NavLinks>
          {navLinks.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </NavLinks>
        <PrimaryButton href="#contact">Get in touch</PrimaryButton>
      </NavWrap>
    </Header>
  );
}
