import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
// Styles
import './styles.sass';

const ProgressBar = ({ fill, className }) => {
  const classes = classNames({
    'progress-bar': true,
    [className]: className
  });
  return (
    <div className={classes}>
      <div className="progress-bar__line" style={{ width: `${fill}%` }}></div>
    </div>
  );
};

ProgressBar.propTypes = {
  fill: PropTypes.number,
  className: PropTypes.string,
};

export default ProgressBar;
