import React from 'react';
import styled from 'styled-components';
import sortBy from 'lodash.sortby';

import { MainContext } from 'src/contexts/main';

const InformationWrapper = styled.section`
  text-align: center;
  padding: 1.6rem 0;

  @media print {
    padding: 0;
  }
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
    @media print {
      margin-bottom: 0;
    }
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

  @media screen and (min-width: ${props => props.theme.sizes.tablet}) {
    font-size: 1.6rem;
  }

  @media print {
    border: none;
  }
`;

const Information = () => {
  const { headers, general_info, ...all } = React.useContext(MainContext);

  if (!headers) {
    return null;
  }

  return (
    <InformationWrapper>
      <Name>{headers.name}</Name>
      <InfoList>
        {sortBy(Object.entries(general_info), ([_, data]) => data.position).map(
          ([infoId, infoData]) => {
            return (
              <InfoItem key={infoId}>
                <InfoLink href={infoData.href}>{infoData.label}</InfoLink>
              </InfoItem>
            );
          },
        )}
      </InfoList>
    </InformationWrapper>
  );
};

export default Information;
