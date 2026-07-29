import styled from "styled-components";
import { experienceRoles } from "@/data/portfolioContent";
import { Section, Wrap } from "@/components/styled";

const Timeline = styled.div`
  display: flex;
  flex-direction: column;
`;

const Role = styled.div`
  display: grid;
  grid-template-columns: 160px 1fr;
  gap: 28px;
  padding: 30px 0;
  border-top: 1px solid var(--line);

  &:first-child {
    border-top: none;
  }

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
    gap: 8px;
  }
`;

const RoleWhen = styled.div`
  font-family: var(--font-mono), monospace;
  font-size: 12.5px;
  color: var(--text-dim);
  padding-top: 3px;
`;

const RoleCompany = styled.div`
  color: var(--teal);
  font-size: 14px;
  font-weight: 500;
  margin-top: 2px;
`;

const Tag = styled.span`
  display: inline-flex;
  align-items: center;
  margin: 8px 8px 0 0;
  padding: 6px 10px;
  border-radius: 999px;
  background: rgba(55, 214, 196, 0.12);
  color: var(--teal);
  font-size: 12px;
  font-family: var(--font-mono), monospace;
`;

const SectionLabel = styled.span`
  font-family: var(--font-mono), monospace;
  font-size: 12.5px;
  color: var(--teal);
  letter-spacing: 0.1em;
  text-transform: uppercase;
  margin-bottom: 14px;
  display: block;
`;

export default function Experience() {
  return (
    <Section id="experience">
      <Wrap>
        <SectionLabel>Experience</SectionLabel>
        <h2 style={{ marginBottom: "36px" }}>Where the work happened</h2>
        <Timeline>
          {experienceRoles.map((role) => (
            <Role key={role.title + role.when}>
              <RoleWhen>{role.when}</RoleWhen>
              <div>
                <h3>{role.title}</h3>
                <RoleCompany>{role.company}</RoleCompany>
                <ul>
                  {role.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
                {role.tags.map((t) => (
                  <Tag key={t}>{t}</Tag>
                ))}
              </div>
            </Role>
          ))}
        </Timeline>
      </Wrap>
    </Section>
  );
}
