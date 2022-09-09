import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
// UI
import SimpleBar from 'simplebar-react';
// Styles
import './styles.sass';

const Scrollbar = ({ children, className, maxHeight, ...otherProps }) => {
  const classes = classNames({
    'custom-scroll': true,
    [className]: className
  });

  return (
    <SimpleBar className={classes} style={{ maxHeight }} {...otherProps}>
      {children}
    </SimpleBar>
  );
};

Scrollbar.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  maxHeight: PropTypes.string,
};

export default Scrollbar;
