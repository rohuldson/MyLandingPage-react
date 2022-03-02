import React from 'react';
import styled from 'styled-components';
import themeList from '../../data/themeList';

const ButtonStyles = styled.a`
  display: inline-block;
  background-color: var(--mediumSlateBlue);
  padding: 1.5rem 2rem;
  font-size: 1.6rem;
  text-transform: capitalize;
  border-radius: 8px;
  color: ${({ theme: { theme } }) =>
    theme === themeList.light ? 'var(--lightBlue_1)' : 'var(--lightBlue_1)'};
  font-weight: 600;
  border: none;

  @media only screen and (max-width: 768px) {
    font-size: 1.4rem;
    padding: 1.2rem 1.5rem;
  }
`;

function PrimaryButton({ children, ...rest }) {
  return <ButtonStyles {...rest}>{children}</ButtonStyles>;
}

export default PrimaryButton;
