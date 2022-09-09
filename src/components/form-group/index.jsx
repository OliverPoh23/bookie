import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
// UI
import Typography from 'components/typography';
// Styles
import './styles.sass';

const FormGroup = ({ children, label, errorMsg, last, className }) => {
  const classes = classNames({
    'form-group': true,
    'form-group--last': last,
    [className]: className
  });

  return (
    <div className={classes}>
      {label &&
        <Typography component="label" variant="h6" className="form-group__label">{label}</Typography>
      }
      {children}
      {errorMsg && <Typography component="span" variant="p" className="text-danger form-group__error">{errorMsg}</Typography>}
    </div>
  );
};

FormGroup.propTypes = {
  children: PropTypes.node,
  label: PropTypes.string,
  errorMsg: PropTypes.string,
  last: PropTypes.bool,
  className: PropTypes.string,
};

export default FormGroup;
