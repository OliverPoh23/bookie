import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
// UI
import Button from 'components/button';
// Styles
import './styles.sass';

const DropdownHeader = ({ children, className, isActive, onClick }) => {
  const classnames = classNames({
    'dropdown-header': true,
    'is-active': isActive,
    [className]: className,
  });

  return (
    <Button className={classnames} onClick={onClick}>
      {children}
    </Button>
  );
};

DropdownHeader.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  isActive: PropTypes.bool,
  onClick: PropTypes.func,
};

export default DropdownHeader;
