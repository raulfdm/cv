import React from 'react';

const Time = ({ time, ...rest }) => {
  return (
    <time dateTime={time} {...rest}>
      {time}
    </time>
  );
};

export default Time;
