import React from 'react';
import PropTypes from 'prop-types';

import Time from 'atoms/time';

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

RangeDate.propTypes = {
  init: PropTypes.string,
  end: PropTypes.string,
};

export default RangeDate;
