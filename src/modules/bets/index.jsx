import React from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
// Redux
import { removeAllBetSlips } from 'redux/bet-slips/actions';
// UI
import Button from 'components/button';
import BetSlips from 'modules/bet-slips';
import OpenBets from 'modules/open-bets';
import Typography from 'components/typography';
// Styles
import './styles.sass';

const Bets = ({ removeAllBetSlips }) => {

  const [selectedTab, setSelectedTab] = React.useState('betSlips');
  const tabActiveClass = name => selectedTab === name ? 'is-active' : '';
  const handleTab = bet => bet !== selectedTab && setSelectedTab(bet);

  return (
    <div className="bets">
      <div className="bets__wrap">
        <div className="bets__buttons">
          <Button
            className={`bets__button ${tabActiveClass('betSlips')}`}
            onClick={() => handleTab('betSlips')}
          >Bet Slips</Button>
          <Button
            className={`bets__button ${tabActiveClass('openBets')}`}
            onClick={() => handleTab('openBets')}
          >Open Bets</Button>
        </div>
        <div className="bets__balance">
          <Typography component="span" variant="h6" className="bets__balance-current">Balance: 100$</Typography>
          <Typography component="span" variant="p" className="text-medium text-gray-3 bets__balance-pending">Pending : $10.00</Typography>
        </div>
        <div className="bets__content">
          {selectedTab === 'betSlips' ?
            <BetSlips />
            :
            <OpenBets />
          }
        </div>
      </div>
      <div className="bets__footer">
        {selectedTab === 'betSlips' ?
          <Button variant="primary" size="xl" fluid onClick={removeAllBetSlips}>Place Bets</Button>
          :
          <Button variant="primary" size="xl" fluid>See all transactions</Button>
        }
      </div>
    </div>
  );
};

Bets.propTypes = {
  removeAllBetSlips: PropTypes.func,
};

const mapDispatchToProps = {
  removeAllBetSlips
};

export default connect(null, mapDispatchToProps)(Bets);
