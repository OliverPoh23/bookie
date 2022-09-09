import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import PropTypes from 'prop-types';
// Redux
import { fetchOpenBetsRequest } from 'redux/open-bets/actions';
import { selectOpenBets } from 'redux/open-bets/selectors';
// UI
import OpenBet from 'modules/open-bet';
import BetsEmpty from 'modules/bets-empty';
import Typography from 'components/typography';
import Scrollbar from 'components/scrollbar';
import Spinner from 'components/spinner';
import ErrorIndicator from 'components/error-indicator';
// Styles
import './styles.sass';

const OpenBets = ({ fetchOpenBetsRequest, openBets: { loading, data, error } }) => {
  React.useLayoutEffect(() => {
    fetchOpenBetsRequest();
  }, [fetchOpenBetsRequest]);

  return (
    <div className="open-bets">
      <div className="open-bets__container">
        {error && <ErrorIndicator retry={fetchOpenBetsRequest} />}
        {loading && <Spinner boxed />}

        {data && data.length === 0 &&
          <BetsEmpty title="Open Bets" />
        }

        {data && data.length > 0 &&
          <div className="open-bets__content">
            <div className="open-bets__header">
              <Typography component="span" variant="p" className="text-gray-3">
                <Typography component="span" className="text-bold">Date</Typography><br />
                Time
              </Typography>
              <Typography component="span" variant="p" className="text-gray-3 text-right">
                <Typography component="span" className="text-bold">Bet Amount</Typography><br />
                Remaining Balance
              </Typography>
            </div>
            <Scrollbar className="open-bets__items" autoHide={false}>
              {data.map(({ id, date, time, betAmount, remainingBalance, placed, placedPrice, game, gamePrice, title }) => (
                <div key={id} className="open-bets__item">
                  <OpenBet
                    date={date}
                    time={time}
                    betAmount={betAmount}
                    remainingBalance={remainingBalance}
                    placed={placed}
                    placedPrice={placedPrice}
                    game={game}
                    gamePrice={gamePrice}
                    title={title}
                  />
                </div>
              ))}
            </Scrollbar>
          </div>
        }
      </div>
    </div>
  );
};

OpenBets.propTypes = {
  fetchOpenBetsRequest: PropTypes.func,
  openBets: PropTypes.object,
};

const mapStateToProps = createStructuredSelector({
  openBets: selectOpenBets
});

const mapDispatchToProps = {
  fetchOpenBetsRequest
};

export default connect(mapStateToProps, mapDispatchToProps)(OpenBets);
