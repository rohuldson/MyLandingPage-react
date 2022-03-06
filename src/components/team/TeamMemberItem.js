import React from 'react';
import styled from 'styled-components';
import themeList from '../../data/themeList';
import ParagraphText from '../paragraphTexts/ParagraphText';

const TeamMemberStyles = styled.div`
  .teamMember__img {
    margin-bottom: 2rem;
  }
  img {
    border-radius: 19px;
  }
  .teamMember__name {
    font-weight: 500;
    font-size: 1.8rem;
    color: ${({ theme: { theme } }) =>
      theme === themeList.light ? 'var(--darkBlue_2)' : 'var(--lightBlue_1)'};
  }
  @media only screen and (max-width: 768px) {
    .teamMember__img {
      margin-bottom: 1rem;
    }
    img {
      max-width: 250px;
    }
  }
`;

function TeamMemberItem({ img, name, title }) {
  return (
    <TeamMemberStyles>
      <div className="teamMember__img">
        <img src={img} alt={name} />
      </div>
      <ParagraphText className="teamMember__name">{name} </ParagraphText>
      <ParagraphText className="teamMember__subtitle">{title} </ParagraphText>
    </TeamMemberStyles>
  );
}

export default TeamMemberItem;
