import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
// Styles
import './styles.sass';

const Box = ({ children, className, ...otherProps }) => {
  const classes = classNames({
    'box': true,
    [className]: className
  });

  return (
    <div className={classes} {...otherProps}>
      {children}
    </div>
  );
};

Box.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

export default Box;
