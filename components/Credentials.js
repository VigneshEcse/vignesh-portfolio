import styled from "styled-components";
import { credentialsContent } from "@/data/portfolioContent";
import { Kicker, Section, Wrap } from "@/components/styled";

const CredentialsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 40px;

  @media (max-width: 760px) {
    grid-template-columns: 1fr;
  }
`;

const CredentialItem = styled.div`
  padding: 14px 0;
  border-bottom: 1px solid var(--line);
`;

const CredentialTitle = styled.div`
  font-size: 16px;
  font-weight: 600;
`;

const CredentialDetail = styled.div`
  margin-top: 4px;
  color: var(--text-dim);
  font-size: 13px;
`;

export default function Credentials() {
  return (
    <Section id="credentials">
      <Wrap>
        <CredentialsGrid>
          <div>
            <Kicker>Certifications</Kicker>
            {credentialsContent.certifications.map((c) => (
              <CredentialItem style={{ marginTop: "14px" }} key={c.t}>
                <CredentialTitle>{c.t}</CredentialTitle>
                <CredentialDetail>{c.d}</CredentialDetail>
              </CredentialItem>
            ))}
          </div>
          <div>
            <Kicker>Education</Kicker>
            <CredentialItem style={{ marginTop: "14px" }}>
              <CredentialTitle>{credentialsContent.education.t}</CredentialTitle>
              <CredentialDetail>{credentialsContent.education.d}</CredentialDetail>
            </CredentialItem>
          </div>
        </CredentialsGrid>
      </Wrap>
    </Section>
  );
}
