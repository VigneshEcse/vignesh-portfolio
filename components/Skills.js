import styled from "styled-components";
import { skillGroups } from "@/data/portfolioContent";
import { Kicker, Section, Wrap } from "@/components/styled";

const GroupsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 18px;

  @media (max-width: 760px) {
    grid-template-columns: 1fr;
  }
`;

const GroupTitle = styled.div`
  font-family: var(--font-mono), monospace;
  font-size: 12px;
  color: var(--teal);
  text-transform: uppercase;
  letter-spacing: 0.08em;
  margin-bottom: 10px;
`;

const GroupList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;

const GroupItem = styled.span`
  padding: 8px 12px;
  border-radius: 999px;
  border: 1px solid var(--line);
  background: rgba(255, 255, 255, 0.03);
  font-size: 13px;
  color: var(--text-muted);
`;

export default function Skills() {
  return (
    <Section id="skills">
      <Wrap>
        <Kicker>Skills</Kicker>
        <h2 style={{ marginBottom: "36px" }}>The toolkit</h2>
        <GroupsGrid>
          {skillGroups.map((group) => (
            <div key={group.title}>
              <GroupTitle>{group.title}</GroupTitle>
              <GroupList>
                {group.items.map((item) => (
                  <GroupItem key={item}>{item}</GroupItem>
                ))}
              </GroupList>
            </div>
          ))}
        </GroupsGrid>
      </Wrap>
    </Section>
  );
}
