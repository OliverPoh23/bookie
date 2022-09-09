import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
// Styles
import './styles.sass';

const AccordionContent = ({ children, className, isExpanded }) => {
  const contentRef = useRef(null);

  useEffect(() => {
    const content = contentRef.current;
    const clearMaxHeight = () => content.style.maxHeight = 'none';
    if (isExpanded) {
      content.style.maxHeight = content.scrollHeight + 'px';
      content.addEventListener('transitionend', clearMaxHeight);
    }
    return () => {
      if (isExpanded) {
        content.removeEventListener('transitionend', clearMaxHeight);
        content.style.maxHeight = content.scrollHeight + 'px';
        const timeout = setTimeout(() => {
          content.style.maxHeight = '0';
          clearTimeout(timeout);
        }, 0);
      }
    };
  }, [isExpanded]);

  const classes = classNames({
    'accordion-content__wrap': true,
    [className]: className,
  });

  return (
    <div ref={contentRef} className="accordion-content" >
      <div className={classes}>
        {children}
      </div>
    </div>
  );
};

AccordionContent.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  isExpanded: PropTypes.bool
};

export default AccordionContent;
