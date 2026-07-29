import styled from "styled-components";
import { aboutFacts } from "@/data/portfolioContent";
import { Section, Wrap } from "@/components/styled";

const AboutGrid = styled.div`
  display: grid;
  grid-template-columns: 1.3fr 1fr;
  gap: 60px;

  @media (max-width: 760px) {
    grid-template-columns: 1fr;
    gap: 36px;
  }
`;

const Kicker = styled.span`
  font-family: var(--font-mono), monospace;
  font-size: 12.5px;
  color: var(--teal);
  letter-spacing: 0.1em;
  text-transform: uppercase;
  margin-bottom: 14px;
  display: block;
`;

const Facts = styled.div`
  display: flex;
  flex-direction: column;
  gap: 18px;
`;

const Fact = styled.div`
  border-left: 2px solid var(--line-strong);
  padding-left: 16px;
`;

const FactNumber = styled.div`
  font-family: var(--font-mono), monospace;
  font-size: 22px;
  color: var(--text);
`;

const FactDetail = styled.div`
  font-size: 13px;
  color: var(--text-dim);
  margin-top: 2px;
`;

const AboutText = styled.p`
  color: var(--text-muted);
  font-size: 15.5px;
`;

const SectionHeading = styled.h2`
  font-size: clamp(24px, 3vw, 32px);
  font-weight: 600;
  margin-bottom: 20px;
`;

export default function About() {
  return (
    <Section id="about">
      <Wrap>
        <AboutGrid>
          <div>
            <Kicker>About</Kicker>
            <SectionHeading>Building scalable web applications with React, Next.js, Java, and a systems mindset.</SectionHeading>
            <AboutText>
              I&apos;m a Frontend Developer with 4+ years of experience building scalable web applications using
              React.js, Next.js, JavaScript, and Java. I enjoy creating reusable UI components, integrating REST
              APIs, and delivering responsive, high-performance user experiences that hold up in production.
            </AboutText>
            <AboutText>
              Currently an Senior Associate Consultant at Infosys, I work on a telecom platform where I build and maintain
              React.js and Next.js applications — developing new features, optimizing performance, integrating
              backend services, and collaborating with cross-functional teams to deliver production-ready solutions.
            </AboutText>
            <AboutText>
              Before that, I spent 3+ years at WNS-Vuram developing custom Appian plugins, REST API integrations,
              and enterprise solutions in Java. That experience sharpened my skills in system integration and solving complex business problems.
            </AboutText>
          </div>
          <Facts>
            {aboutFacts.map((f) => (
              <Fact key={f.id}>
                <FactNumber>{f.n}</FactNumber>
                <FactDetail>{f.d}</FactDetail>
              </Fact>
            ))}
          </Facts>
        </AboutGrid>
      </Wrap>
    </Section>
  );
}
