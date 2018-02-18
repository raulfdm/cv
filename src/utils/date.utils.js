import React, { Fragment } from 'react';
import styled from 'styled-components';
import moment from 'moment';

export const commonFormat = momentDate => {
  const month = momentDate.format('MMMM').substr(0, 3);
  const year = momentDate.format('YY');

  return `${month}'${year}`;
};

export const generateTimeRange = (timeInit, timeEnd) => {
  const actualTime = moment().format('YYYY-MM-DD');
  const isActual = actualTime === timeEnd.format('YYYY-MM-DD') ? 'Actual' : commonFormat(timeEnd);
  const Time = styled.time`
    font-weight: bold;
    font-size: 0.9rem;
  `;
  return (
    <Fragment>
      <Time dateTime={timeInit}>{commonFormat(timeInit)}</Time>
      {` - `}
      <Time dateTime={timeEnd}>{isActual}</Time>
    </Fragment>
  );
};

export default commonFormat;
