import React from 'react';
import PropTypes from 'prop-types';
// UI
import Typography from 'components/typography';
// Styles
import './styles.sass';

const BetsEmpty = ({ title }) => {
  return (
    <div className="bets-empty">
      <Typography component="span" variant="h4" className="bets-empty__title">{title} is Empty</Typography>
      <Typography component="p" className="text-gray-3 bets-empty__message">
        Learn how to place bets <a href="http://example.com" className="bets-empty__link">here</a>
      </Typography>
    </div>
  );
};

BetsEmpty.propTypes = {
  title: PropTypes.string,
};

export default BetsEmpty;
