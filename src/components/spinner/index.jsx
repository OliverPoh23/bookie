import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
// Context
import { useTheme } from 'context/theme-context';
// Styles
import './styles.sass';

const Spinner = ({ boxed }) => {
  const { dark } = useTheme();

  const classes = classNames({
    'spinner': true,
    'spinner--light': dark,
  });

  const spinner = (
    <div className={classes}>
      <div className="spinner__inner">
        <div></div>
        <div></div>
      </div>
    </div>
  );

  return boxed ? <div className="spinner-box">{spinner}</div> : spinner;
};

Spinner.propTypes = {
  boxed: PropTypes.bool,
};

export default Spinner;
