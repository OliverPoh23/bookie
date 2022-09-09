import React, { Component } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
// Components
import AccordionTab from './accordion-tab';
import AccordionContent from './accordion-content';
// Styles
import './styles.sass';

class Accordion extends Component {
  static Tab = AccordionTab;
  static Content = AccordionContent;

  state = {
    isExpanded: false
  };

  componentDidMount() {
    const { expanded } = this.props;
    if (expanded) {
      this.setState({ isExpanded: expanded });
    }
  }

  componentDidUpdate(prevProps) {
    if (prevProps.expanded !== this.props.expanded) {
      this.setState({ isExpanded: this.props.expanded });
    }
  }

  handleAccordion = () => {
    const { onChange } = this.props;
    if (onChange) {
      onChange();
    } else {
      this.setState(({ isExpanded }) => ({ isExpanded: !isExpanded }));
    }
  };

  render() {
    const { children, className } = this.props;
    const { isExpanded } = this.state;

    const classes = classNames({
      'accordion': true,
      'is-expanded': isExpanded,
      [className]: className,
    });

    return (
      <div className={classes}>
        {React.Children.map(children, child => (
          React.cloneElement(child, { handleAccordion: this.handleAccordion, isExpanded })
        ))}
      </div>
    );
  }
}

Accordion.propTypes = {
  children: PropTypes.node.isRequired,
  onChange: PropTypes.element,
  className: PropTypes.string,
  expanded: PropTypes.bool,
};

export default Accordion;
