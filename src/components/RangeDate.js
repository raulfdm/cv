import React from 'react';

import Time from './Time';

import { formatExperienceDate } from '../utils/date.utils';

const RangeDate = ({ init, end }) => {
  return (
    <React.Fragment>
      <Time time={formatExperienceDate(init)} />
      {' - '}
      <Time time={formatExperienceDate(end) || 'Actual'} />
    </React.Fragment>
  );
};

export default RangeDate;
