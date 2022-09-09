import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
// Styles
import './styles.sass';

const Burger = ({ className, ...otherProps }) => {
  const classnames = classNames({
    'burger': true,
    [className]: className
  });

  return (
    <div className={classnames} {...otherProps}>
      <span></span>
    </div>
  );
};

Burger.propTypes = {
  className: PropTypes.string,
};

export default Burger;
