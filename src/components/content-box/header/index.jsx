import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
// Styles
import './styles.sass';

const Header = ({ children, className }) => {
  const classes = classNames({
    'content-box__header': true,
    [className]: className
  });

  return (
    <div className={classes}>
      {children}
    </div>
  );
};

Header.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

export default Header;
