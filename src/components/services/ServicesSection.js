import React from 'react';

import { DiJavascript1, DiReact, DiCode } from 'react-icons/di';
import styled from 'styled-components';
import SectionTitle from '../titles/SectionTitle';
import ServicesItem from './ServiceItem';

const ServicesSectionStyles = styled.div`
  padding: 10rem 0;
  text-align: center;
  .service__title {
    margin-bottom: 3rem;
  }
  .services__items {
    display: flex;
    gap: 2rem;
  }
  @media only screen and (max-width: 768px) {
    .services__items {
      flex-direction: column;
      max-width: 300px;
      margin: 0 auto;
    }
  }
`;

function ServicesSection() {
  return (
    <ServicesSectionStyles>
      <div className="container">
        <SectionTitle className="service__title">Services for you</SectionTitle>
        <div className="services__items">
          <ServicesItem
            icon={<DiReact />}
            title="React Js "
            description="We do professional photo editing. 
            Let us help you to take your photos to the next level"
          />
          <ServicesItem
            icon={<DiCode />}
            title="Front-end Development"
            description="We do professional photo editing. 
            Let us help you to take your photos to the next level"
          />
          <ServicesItem
            icon={<DiJavascript1 />}
            title="Modern Javascript"
            description="We do professional photo editing. 
            Let us help you to take your photos to the next level"
          />
        </div>
      </div>
    </ServicesSectionStyles>
  );
}

export default ServicesSection;
