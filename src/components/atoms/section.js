import styled from 'styled-components';
import theme from 'styles/theme';

export const Section = styled.section`
  &:not(:last-child) {
    margin-bottom: 2.4rem;
  }
`;

export const SectionBody = styled.div`
  font-size: 1.4rem;

  @media screen and (min-width: ${theme.sizes.tablet}) {
    font-size: 1.8rem;
  }
`;

export const SectionTitle = styled.h2`
  font-size: 2rem;
  border-bottom: 1px solid ${theme.color.grey};

  @media screen and (min-width: ${theme.sizes.tablet}) {
    font-size: 2.8rem;
  }
`;
