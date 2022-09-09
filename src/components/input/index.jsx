import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
// Styles
import './styles.sass';

const Input = forwardRef(({ className, standard, size, invalid, variant, disabled, center, ...otherProps }, ref) => {
  const classes = classNames({
    'input': standard !== false,
    'input--invalid': invalid,
    'input--center': center,
    'input--disabled': disabled,
    [`input--${variant}`]: variant,
    [`input--${size}`]: size,
    [className]: className
  });

  return (
    <input className={classes} {...otherProps} ref={ref} disabled={disabled} />
  );
});

Input.propTypes = {
  className: PropTypes.string,
  standard: PropTypes.bool,
  size: PropTypes.string,
  variant: PropTypes.string,
  invalid: PropTypes.bool,
  disabled: PropTypes.bool,
  center: PropTypes.bool,
};

export default Input;
