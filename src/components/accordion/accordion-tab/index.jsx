import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
// UI
import Typography from 'components/typography';
// Styles
import './styles.sass';
// Helpers
import { handleAccessibilityKeyPress } from 'utils/helpers';

const AccordionTab = ({ title, date, time, handleAccordion, isExpanded }) => {

  const classes = classNames({
    'accordion-tab': true,
  });

  const handleKeyPress = e => handleAccessibilityKeyPress(e, handleAccordion);

  return (
    <div className={classes} onClick={handleAccordion} onKeyPress={handleKeyPress} tabIndex="0">
      <div className="accordion-tab__title">
        <Typography component="h4">{title}</Typography>
      </div>
      <div className="accordion-tab__meta">
        <Typography component="span" variant="p" className="text-medium accordion-tab__meta-item">{date}</Typography>
        <Typography component="span" variant="p" className="text-medium accordion-tab__meta-item">{time}</Typography>
      </div>
      <div className="accordion-tab__icon">
        <div className="accordion-tab__icon-circle">
          <div className={`accordion-tab__icon-line ${isExpanded ? 'is-expanded' : ''}`}></div>
        </div>
      </div>
    </div>
  );
};

AccordionTab.propTypes = {
  title: PropTypes.string,
  date: PropTypes.string,
  time: PropTypes.string,
  handleAccordion: PropTypes.func,
  isExpanded: PropTypes.bool
};

export default AccordionTab;
