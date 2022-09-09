import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
// Styles
import './styles.sass';

const ToggleSwitch = ({ onChange, checked, className }) => {
  const classes = classNames({
    switch: true,
    [className]: className
  });

  return (
    <div className={classes}>
      <input type="checkbox" className="switch__input" id="switch" onChange={onChange} checked={checked}/>
      <label htmlFor="switch" className="switch__label"></label>
    </div>
  );
};

ToggleSwitch.propTypes = {
  onChange: PropTypes.func,
  className: PropTypes.string,
  checked: PropTypes.bool,
};

export default ToggleSwitch;
