import React from 'react';
import styled from 'styled-components';

const Time = styled.time`
  font-weight: bold;
  font-size: 0.9rem;
`;

const TimeStyled = ({ time }) => {
  return <Time datetime={time}>{time}</Time>;
};

export default TimeStyled;
