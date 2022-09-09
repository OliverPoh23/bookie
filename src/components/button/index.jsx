import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
// Styles
import './styles.sass';

const Button = ({ children, href, className, variant, size, disabled, onClick, fluid, noShadow, type, style, loading }) => {
  const classes = classNames({
    'button': variant && !disabled,
    'button--no-shadow': noShadow,
    'button--fluid': fluid,
    'button--loading': loading,
    [`button--${variant}`]: variant,
    [`button--${size}`]: size,
    [className]: className
  });

  const Tag = href ? 'a' : 'button';

  return (
    <Tag href={href} className={classes} disabled={!href && (disabled || loading)} onClick={onClick} style={style} type={type}>
      {loading ?
        <>Loading...</>
        :
        <>{children}</>
      }
    </Tag>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  href: PropTypes.string,
  className: PropTypes.string,
  variant: PropTypes.string,
  size: PropTypes.string,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
  fluid: PropTypes.bool,
  noShadow: PropTypes.bool,
  type: PropTypes.string,
  style: PropTypes.object,
  loading: PropTypes.bool,
};

export default Button;
