import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
// UI
import Box from 'components/box';
// Helpers
import { handleAccessibilityKeyPress } from 'utils/helpers';
// Styles
import './styles.sass';

const CoinPreview = ({ icon: Icon, isActive, onClick, className }) => {
  const classes = classNames({
    'coin-preview': true,
    'is-active': isActive,
    [className]: className
  });

  const handleKeyPress = e => handleAccessibilityKeyPress(e, onClick);

  return (
    <Box className={classes} onClick={onClick} tabindex="0" onKeyPress={handleKeyPress}>
      <Icon className="coin-preview__icon" />
    </Box>
  );
};

CoinPreview.propTypes = {
  icon: PropTypes.object,
  isActive: PropTypes.bool,
  onClick: PropTypes.func,
  className: PropTypes.string,
};

export default CoinPreview;
