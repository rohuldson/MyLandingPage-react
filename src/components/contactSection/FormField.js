import React from 'react';
import styled from 'styled-components';
import themeList from '../../data/themeList';

const FieldStyles = styled.div`
  label {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    font-size: 1.6rem;
    text-transform: capitalize;
    color: ${({ theme: { theme } }) =>
      theme === themeList.light ? 'var(--darkBlue_2)' : 'var(--lightBlue_2)'};
  }
  input,
  textarea {
    margin-top: 1rem;
    width: 100%;
    height: 4rem;
    padding: 1rem;
    border: none;
    border-radius: 4px;
    font-size: 1.6rem;
    background-color: var(--lightBlue_2);
  }
  textarea {
    height: auto;
    resize: vertical;
  }
  @media screen and (max-width: 768px) {
    input {
      font-size: 1.4rem;
    }
  }
`;

function FormField({ label, id, rows = 1, className, ...rest }) {
  return (
    <FieldStyles className={className}>
      <label htmlFor={id}>
        {label}
        {rows <= 1 ? (
          <input type="text" id={id} {...rest} />
        ) : (
          <textarea rows={rows} id={id} {...rest} />
        )}
      </label>
    </FieldStyles>
  );
}

export default FormField;
