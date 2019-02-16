import styled from 'styled-components';

export const Experience = styled.div`
  &:not(:last-child) {
    margin-bottom: 1.6rem;
  }
`;

export const ExperienceTitle = styled.h3`
  font-size: 1.6rem;
  font-weight: bold;
`;

export const ExperienceInfo = styled.div`
  margin-bottom: 0.8rem;
  @media (min-width: ${props => props.theme.sizes.tablet}) {
    justify-content: flex-start;
    flex-direction: row;
  }
`;

export const ExperienceName = styled.h4`
  flex: 1;
  font-weight: 400;
`;

export const ExperiencePeriod = styled.p`
  font-size: 1.4rem;
  opacity: 0.6;
`;
