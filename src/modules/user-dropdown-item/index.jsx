import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
// UI
import Button from 'components/button';
import Typography from 'components/typography';
// Styles
import './styles.sass';

const UserDropdownItem = ({ title, icon: Icon, onClick, className, isActive }) => {
  const classes = classNames({
    'user-dropdown-item': true,
    'is-active': isActive,
    [className]: className
  });
  return (
    <Button className={classes} onClick={onClick}>
      <Icon className="user-dropdown-item__icon" />
      <Typography component="span" variant="h6" className="user-dropdown-item__title">{title}</Typography>
    </Button>
  );
};

UserDropdownItem.propTypes = {
  title: PropTypes.string,
  icon: PropTypes.object,
  onClick: PropTypes.func,
  className: PropTypes.string,
  isActive: PropTypes.bool,
};

export default UserDropdownItem;
