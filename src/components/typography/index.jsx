import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
// Styles
import './styles.sass';

const Typography = ({ children, component, variant, className, ...otherProps }) => {
  const classes = classNames({
    [variant]: variant,
    [className]: className
  });

  const Tag = component;
  return (
    <Tag className={classes || null} {...otherProps}>{children}</Tag>
  );

};

Typography.defaultProps = {
  component: 'p'
};

Typography.propTypes = {
  children: PropTypes.node,
  component: PropTypes.string,
  variant: PropTypes.string,
  className: PropTypes.string,
};

export default Typography;
