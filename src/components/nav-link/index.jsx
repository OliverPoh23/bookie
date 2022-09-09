import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Typography from 'components/typography';
// Context
import { useTheme } from 'context/theme-context';
// Styles
import './styles.sass';

const NavLink = ({ children, className, isActive, accent, ...otherProps }) => {
  const { dark } = useTheme();

  const classes = classNames({
    'nav-link': true,
    'is-active': isActive,
    'nav-link--accent': accent,
    'nav-link--dark': dark,
    [className]: className
  });

  return (
    <Typography component="button" variant="h6" className={classes} {...otherProps}>
      {children}
    </Typography>
  );
};

NavLink.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  isActive: PropTypes.bool,
  accent: PropTypes.bool,
};

export default NavLink;
