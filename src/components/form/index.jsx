import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
// Styles
import './styles.sass';

const Form = ({ children, className, ...otherProps }) => {
  const classes = classNames({
    'form': true,
    [className]: className
  });

  return (
    <form className={classes} {...otherProps}>
      {children}
    </form>
  );
};

Form.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

export default Form;
