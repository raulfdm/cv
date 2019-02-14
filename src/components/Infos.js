import React from 'react';
import styled from 'styled-components';

const Infos = styled.section`
  text-align: center;
  padding: 0.67em 0;
`;

const Name = styled.h1`
  font-size: 2.5rem;
  margin: 0;
  @media (max-width: 600px) {
    font-size: 2.2rem;
  }
`;

const Info = styled.a`
  margin: 0.1rem 0;
  display: inline-block;
  align-self: center;
  @media print {
    color: black;
    font-style: none;
    text-decoration: none;
  }
`;

const InfoContainer = styled.div`
  display: inline-flex;
  flex-direction: column;
`;

const getProperHref = (type, link) => {
  if (type === 'email') {
    return `mailto:${link}`;
  } else if (type === 'phone') {
    return `tel:${link}`;
  } else {
    return link;
  }
};

const InfoWrapper = ({ data }) => {
  return (
    <Infos>
      <Name>Raul de Melo</Name>
      <InfoContainer>
        {data.map(({ id, label, type, link }) => {
          return (
            <Info key={id} href={getProperHref(type, link)} target="_blank">
              {label}
            </Info>
          );
        })}
      </InfoContainer>
    </Infos>
  );
};

export default InfoWrapper;
