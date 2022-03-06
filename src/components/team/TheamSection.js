import React from 'react';
import styled from 'styled-components';

import ParagraphText from '../paragraphTexts/ParagraphText';
import SectionTitle from '../titles/SectionTitle';
import TeamMemberItem from './TeamMemberItem';

import teamMember1 from '../../assets/images/frank.png';
import teamMember2 from '../../assets/images/andre.png';
import teamMember3 from '../../assets/images/roh.png';

const TeamStyles = styled.div`
  padding: 10rem 0;
  .team__wrapper {
    display: flex;
    gap: 1rem;
  }
  .team__info {
    max-width: 250px;
  }
  .team__subtitle {
    margin-bottom: 1rem;
    font-weight: 600;
    color: var(--mediumSlateBlue);
    text-transform: capitalize;
  }
  .team__members {
    width: 100%;
    display: grid;
    gap: 5rem;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  }
  @media screen and (max-width: 768px) {
    .team__wrapper {
      flex-direction: column;
      text-align: center;
      gap: 3rem;
    }
    .team__info {
      margin: 0 auto;
    }
    .team__members {
      gap: 2rem;
    }
  }
`;

function TeamSection() {
  return (
    <TeamStyles>
      <div className="container">
        <div className="team__wrapper">
          <div className="team__info">
            <ParagraphText className="team__subtitle">
              Team Members
            </ParagraphText>
            <SectionTitle className="team__title">
              The best team for you project
            </SectionTitle>
          </div>
          <div className="team__members">
            <TeamMemberItem img={teamMember1} name="Franklin" title="DevOps" />
            <TeamMemberItem
              img={teamMember2}
              name="André"
              title="UX/UI Designer"
            />
            <TeamMemberItem
              img={teamMember3}
              name="Ronald"
              title="Front-End Dev"
            />
          </div>
        </div>
      </div>
    </TeamStyles>
  );
}

export default TeamSection;
