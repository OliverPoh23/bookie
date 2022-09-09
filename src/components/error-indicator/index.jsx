import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
// UI
import Typography from 'components/typography';
import Button from 'components/button';
// Styles
import './styles.sass';
// Assets
import { ReactComponent as DangerIcon } from 'assets/images/icons/danger.svg';

const ErrorIndicator = ({ className, retry }) => {
  const classes = classNames({
    'error-indicator': true,
    [className]: className
  });

  return (
    <div className={classes}>
      <DangerIcon className="error-indicator__icon" />
      <Typography component="span" variant="h4" className="error-indicator__title">BOOM!</Typography>
      <Typography component="span" variant="p" className="error-indicator__text"> Something has gone terribly wrong</Typography>
      {retry && <Button className="error-indicator__button" variant="primary" size="md" onClick={retry}>Retry</Button>}
    </div>
  );
};

ErrorIndicator.propTypes = {
  className: PropTypes.string,
  retry: PropTypes.func,
};

export default ErrorIndicator;
