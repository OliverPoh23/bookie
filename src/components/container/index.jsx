import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
// Styles
import './styles.sass';

const Container = ({ children, className }) => {
  const classes = classNames({
    'container': true,
    [className]: className
  });

  return (
    <div className={classes}>
      {children}
    </div>
  );
};

Container.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

export default Container;
