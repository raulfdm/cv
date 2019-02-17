import React from 'react';

import Time from 'src/components/atoms/Time';

import { formatExperienceDate } from 'utils/date.utils';

const RangeDate = ({ init, end }) => {
  return (
    <React.Fragment>
      <Time time={formatExperienceDate(init)} />
      {' - '}
      <Time time={formatExperienceDate(end) || 'Present'} />
    </React.Fragment>
  );
};

export default RangeDate;
