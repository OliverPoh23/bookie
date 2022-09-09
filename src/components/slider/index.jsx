import React from 'react';
import PropTypes from 'prop-types';
import ReactSlider from 'react-slider';
// Styles
import './styles.sass';

const Slider = ({ min, max, value, step, onChange }) => {
  return (
    <ReactSlider
      min={min}
      max={max}
      value={value}
      step={step}
      onChange={onChange}
      className="slider"
      thumbClassName="slider__thumb"
      trackClassName="slider__track"
      renderThumb={props => <span {...props}></span>}
    />
  );
};

Slider.propTypes = {
  min: PropTypes.number,
  max: PropTypes.number,
  value: PropTypes.number,
  step: PropTypes.number,
  onChange: PropTypes.func,
};

export default Slider;
