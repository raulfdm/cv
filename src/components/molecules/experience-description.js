import React from 'react';
import styled from 'styled-components';

export const DescriptionList = styled.ul`
  display: flex;
  flex-direction: column;
`;

export const DescriptionItem = styled.li`
  &:not(:last-child) {
    margin-bottom: .3rem;
  }
`;

const ExperienceDescription = ({ description }) => {
  return (
    <DescriptionList>
      {description.map((text, index) => (
        <DescriptionItem key={index}>{text}</DescriptionItem>
      ))}
    </DescriptionList>
  );
};

export default ExperienceDescription;
