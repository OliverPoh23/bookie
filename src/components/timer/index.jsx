import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
// Styles
import './styles.sass';

const Timer = ({ time, className }) => {
  const classes = classNames({
    'timer': true,
    [className]: className
  });

  return (
    <div className={classes}>
      {time}
    </div>
  );
};

Timer.propTypes = {
  time: PropTypes.string,
  className: PropTypes.string,
};

export default Timer;
