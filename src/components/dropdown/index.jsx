import React, { Component, createRef } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
// UI
import DropdownHeader from './dropdown-header';
import DropdownBox from './dropdown-box';
// Styles
import './styles.sass';

class Dropdown extends Component {
  dropdownRef = createRef(null);

  static Header = DropdownHeader;
  static Box = DropdownBox;

  componentDidMount() {
    document.addEventListener('click', this.clickOutside);
  }
  componentWillUnmount() {
    document.removeEventListener('click', this.clickOutside);
  }

  clickOutside = ({ target }) => {
    const { isActive, onClickOutside } = this.props;
    if (isActive) {
      if (!this.dropdownRef.current || this.dropdownRef.current.contains(target)) {
        return;
      }
      onClickOutside();
    }
  };

  render() {
    const { children, className, isActive } = this.props;
    const classnames = classNames({
      'dropdown': true,
      [className]: className,
    });

    return (
      <div className={classnames} ref={this.dropdownRef} >
        {React.Children.map(children, child => (
          React.cloneElement(child, { isActive })
        ))}
      </div>
    );
  }
}

Dropdown.propTypes = {
  isActive: PropTypes.bool,
  onClickOutside: PropTypes.func,
  children: PropTypes.node,
  className: PropTypes.string,
};

export default Dropdown;
