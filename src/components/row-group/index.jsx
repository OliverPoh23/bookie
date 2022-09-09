import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
// Styles
import './styles.sass';

const RowGroup = ({ children, nowrap, center, size }) => {
  const classes = classNames({
    'row-group': true,
    'row-group--nowrap': nowrap,
    'row-group--center': center,
    [`row-group--${size}`]: size
  });

  return (
    <div className={classes}>
      {children}
    </div>
  );
};

RowGroup.propTypes = {
  children: PropTypes.node,
  nowrap: PropTypes.bool,
  center: PropTypes.bool,
  size: PropTypes.string,
};

export default RowGroup;
