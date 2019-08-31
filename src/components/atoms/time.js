import React from 'react';
import PropTypes from 'prop-types';

const Time = ({ time, ...rest }) => {
  return (
    <time dateTime={time} {...rest}>
      {time}
    </time>
  );
};

Time.propTypes = {
  time: PropTypes.string,
};

export default Time;
