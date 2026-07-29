import styled from "styled-components";
import { problemToProductContent } from "@/data/portfolioContent";
import { Kicker, Section, Wrap } from "@/components/styled";

const CaseIntro = styled.p`
  color: var(--text-muted);
  font-size: 15.5px;
  max-width: 680px;
`;

const StepsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 16px;

  @media (max-width: 760px) {
    grid-template-columns: 1fr;
  }
`;

const Step = styled.div`
  padding: 18px;
  border: 1px solid var(--line);
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.02);
`;

const StepKicker = styled.div`
  font-family: var(--font-mono), monospace;
  font-size: 12px;
  color: var(--teal);
  margin-bottom: 6px;
`;

const StepValue = styled.div`
  color: var(--text-muted);
  font-size: 14px;
`;

const Quote = styled.blockquote`
  border-left: 2px solid var(--teal);
  margin: 0;
  padding-left: 18px;
  padding-top:24px;
  color: var(--text);
  font-size: 18px;
  line-height: 1.7;
`;

const QuoteSource = styled.cite`
  display: block;
  margin-top: 10px;
  color: var(--text-dim);
  font-size: 13px;
  font-style: normal;
`;

const Note = styled.p`
  margin-top: 18px;
  font-size: 13.5px;
  color: var(--text-dim);
`;

export default function ProblemToProduct() {
  return (
    <Section id="problem-product">
      <Wrap>
        <Kicker>Problem to Product</Kicker>
        <h2 style={{ marginBottom: "30px" }}>{problemToProductContent.title}</h2>
        <div>
          <CaseIntro>{problemToProductContent.intro}</CaseIntro>

          <StepsGrid>
            {problemToProductContent.steps.map((s) => (
              <Step key={s.k}>
                <StepKicker>{s.k}</StepKicker>
                <StepValue>{s.v}</StepValue>
              </Step>
            ))}
          </StepsGrid>

          <Quote>
            {problemToProductContent.quote}
            <QuoteSource>{problemToProductContent.quoteSource}</QuoteSource>
          </Quote>
          <Note>{problemToProductContent.note}</Note>
        </div>
      </Wrap>
    </Section>
  );
}
