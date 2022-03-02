import React from 'react';
import styled from 'styled-components';
import themeList from '../../data/themeList';

const ParagraphTextStyles = styled.p`
  font-size: 1.6rem;
  line-height: 1.4em;
  color: ${({ theme: { theme } }) =>
    theme === themeList.light ? 'var(--darkBlue_1)' : 'var(--lightBlue_2)'};
  @media only screen and (max-width: 768px) {
    font-size: 1.4rem;
  }
`;

function ParagraphText({ children, ...rest }) {
  return <ParagraphTextStyles {...rest}>{children}</ParagraphTextStyles>;
}

export default ParagraphText;
