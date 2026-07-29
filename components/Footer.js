import styled from "styled-components";
import { footerContent } from "@/data/portfolioContent";
import { Button, Kicker, PrimaryButton, Section, Wrap } from "@/components/styled";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

const FooterWrap = styled.div`
  text-align: center;
`;

const FooterActions = styled.div`
  display: flex;
  justify-content: center;
  gap: 12px;
  flex-wrap: wrap;
  margin-top: 24px;
`;

const FooterNote = styled.div`
  margin-top: 24px;
  font-size: 13px;
  color: var(--text-dim);
`;

export default function Footer() {
  return (
    <Section id="contact">
      <Wrap>
        <FooterWrap>
          <Kicker>Contact</Kicker>
          <h2>{footerContent.heading}</h2>
          <p style={{ margin: "18px auto 0", fontSize: "17px", color: "var(--text-muted)", maxWidth: "560px" }}>
            {footerContent.description}
          </p>
          <FooterActions>
            <PrimaryButton href={footerContent.email}>Email me</PrimaryButton>
            <Button href={footerContent.phone}>Call me</Button>
            <Button href={footerContent.linkedin} target="_blank" rel="noopener">
              LinkedIn
            </Button>
            <Button href={`${basePath}/resume.pdf`}>Resume (PDF)</Button>
          </FooterActions>
          <FooterNote>{footerContent.footerNote}</FooterNote>
        </FooterWrap>
      </Wrap>
    </Section>
  );
}
