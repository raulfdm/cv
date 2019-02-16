import React from 'react';
import styled from 'styled-components';

const InformationWrapper = styled.section`
  text-align: center;
  padding: 1.6rem 0;
`;

const Name = styled.h1`
  font-size: 3.5rem;
`;

const InfoList = styled.ul`
  display: inline-flex;
  flex-direction: column;
`;

const InfoItem = styled.li`
  :not(:last-child) {
    margin-bottom: 0.3rem;
  }
`;
const InfoLink = styled.a.attrs({
  target: '_blank',
  rel: 'noopener noreferrer',
})`
  font-size: 1.4rem;
  text-decoration: none;
  padding-bottom: 1px;
  border-bottom: 1px solid;
`;

const generateHref = (type, link) => {
  switch (type) {
    case 'email':
      return `mailto:${link}`;
    case 'phone':
      return `tel:${link}`;
    default:
      return link;
  }
};

const Information = ({ data, cvOf }) => {
  return (
    <InformationWrapper>
      <Name>{cvOf}</Name>
      <InfoList>
        {data.map(exp => {
          const { id, label, type, link } = exp;
          return (
            <InfoItem key={id}>
              <InfoLink href={generateHref(type, link)}>{label}</InfoLink>
            </InfoItem>
          );
        })}
      </InfoList>
    </InformationWrapper>
  );
};

export default Information;
