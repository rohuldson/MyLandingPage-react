import React from 'react';
import styled from 'styled-components';
import ParagraphText from './paragraphTexts/ParagraphText';
import SectionTitle from './titles/SectionTitle';
// import themeList from '../../data/themeList';

const NewsletterSectionStyled = styled.div`
  padding: 10rem 0;

  .newsletter__wrapper {
    padding: 5rem 3rem;
    background-color: var(--mediumSlateBlue);
    max-width: 500px;
    margin: 0 auto;
    border-radius: 12px;
    text-align: center;
  }
  .newsletter__title {
    margin-bottom: 0.2rem;
    color: var(--lightBlue_1);
  }
  .newsletter__subtitle {
    margin-bottom: 2rem;
    color: var(--lightBlue_1);
  }
  .newsletter__form {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    input {
      width: 100%;
      max-width: 300px;
      height: 4rem;
      background-color: var(--lightBlue_1);
      border: none;
      font-size: 1.6rem;
      padding-left: 1rem;
      border-radius: 4px;
    }
    .newsletter__button {
      height: 4rem;
      font-size: 1.6rem;
      cursor: pointer;
      padding: 0 1.5rem;
      text-transform: capitalize;
      background-color: var(--lightBlue_1);
      color: var(--darkBlue_1);
      border: none;
      border-radius: 4px;
    }
  }
  @media only screen and (max-width: 768px) {
    .newsletter__wrapper {
      padding: 4rem 2rem;
    }
    .newsletter__form {
      flex-direction: column;
      input {
        font-size: 1.4rem;
      }
      .newsletter__button {
        font-size: 1.4rem;
        width: 100%;
        max-width: 300px;
        background-color: var(--darkBlue_2);
        color: var(--lightBlue_1);
      }
    }
  }
`;

function NewsletterSection() {
  return (
    <NewsletterSectionStyled>
      <div className="container">
        <div className="newsletter__wrapper">
          <SectionTitle className="newsletter__title">
            Join our Newsletter
          </SectionTitle>
          <ParagraphText className="newsletter__subtitle">
            Get Regular updates every week
          </ParagraphText>
          <form className="newsletter__form">
            <input type="email" placeholder="Your best email here" />
            <button type="submit" className="newsletter__button">
              Join
            </button>
          </form>
        </div>
      </div>
    </NewsletterSectionStyled>
  );
}

export default NewsletterSection;
