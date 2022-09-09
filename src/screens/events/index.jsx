import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { withBreakpoints } from 'react-breakpoints';
import PropTypes from 'prop-types';
// Hooks
import useIsBreakpoint from 'hooks/use-is-breakpoint';
// Redux
import { fetchEventsRequest } from 'redux/events/actions';
import { selectEvents } from 'redux/events/selectors';
import { selectBetSlips, selectTotalBetSlips } from 'redux/bet-slips/selectors';
import { toggleBetSlip } from 'redux/bet-slips/actions';
import { setSelectedRegion } from 'redux/selected-region/actions';
import { selectSelectedRegion } from 'redux/selected-region/selectors';
// UI
import ScreenLayout from 'components/screen-layout';
import EventsFilters from 'modules/events-filters';
import Bets from 'modules/bets';
import Accordion from 'components/accordion';
import List from 'components/list';
import ErrorIndicator from 'components/error-indicator';
import Spinner from 'components/spinner';
import FixedButton from 'components/fixed-button';
import CloseButton from 'components/close-button';
// Hooks
import useScrollBlock from 'hooks/use-scroll-block';
// Styles
import './styles.sass';
// Assets
import { ReactComponent as BettingsIcon } from 'assets/images/icons/betting.svg';

const EventsScreen = props => {
  const {
    fetchEventsRequest,
    events: { loading, data, error },
    betSlips,
    toggleBetSlip,
    currentBreakpoint,
    selectedRegion,
    setSelectedRegion,
    totalBetSlips
  } = props;

  const [showBets, setShowBets] = React.useState(false);
  const isMobile = useIsBreakpoint(currentBreakpoint, 'lg');
  const [blockScroll, allowScroll] = useScrollBlock();

  React.useLayoutEffect(() => {
    fetchEventsRequest(selectedRegion);
  }, [fetchEventsRequest, selectedRegion]);


  const handleSelectBet = (eventIdx, betId) => toggleBetSlip({ eventIdx, betId });
  const toggleShowBets = () => {
    showBets ? allowScroll() : blockScroll();
    setShowBets(showBets => !showBets);
  };

  if (!isMobile && showBets) {
    toggleShowBets();
  }

  return (
    <ScreenLayout>
      <div className="events-screen">
        <div className="events-screen__filters">
          <EventsFilters selectedRegion={selectedRegion} setSelectedRegion={setSelectedRegion} />
        </div>
        <div className="events-screen__preview">
          <div className="events-screen__list">
            {error && <ErrorIndicator retry={fetchEventsRequest} />}
            {(!error && loading) && <Spinner boxed />}
            {(!error && !loading && data) &&
              <Fragment>
                {data.map(({ id, title, date, time, games }, eventIdx) => (
                  <Accordion expanded={eventIdx === 0} className="events-screen__list-item" key={id}>
                    <Accordion.Tab title={title} date={date} time={time} />
                    <Accordion.Content>
                      <List
                        header="Winner"
                        items={games}
                        handleSelect={betId => handleSelectBet(eventIdx, betId)}
                        selected={betSlips}
                        alt={selectedRegion === 'live'}
                        blocked={selectedRegion === 'live' && eventIdx === 1}
                      />
                    </Accordion.Content>
                  </Accordion>
                ))}
              </Fragment>
            }
          </div>
          <div className={`events-screen__bets ${showBets ? 'is-active' : ''}`}>
            {isMobile && <CloseButton className="events-screen__bets-close" onClick={toggleShowBets} dark />}
            <Bets />
          </div>
        </div>
      </div>
      {isMobile && <FixedButton icon={BettingsIcon} text={totalBetSlips} onClick={toggleShowBets} zIndex={showBets ? 500 : 100} />}
    </ScreenLayout>
  );
};

EventsScreen.propTypes = {
  fetchEventsRequest: PropTypes.func,
  events: PropTypes.object,
  betSlips: PropTypes.array,
  toggleBetSlip: PropTypes.func,
  currentBreakpoint: PropTypes.string,
  selectedRegion: PropTypes.string,
  setSelectedRegion: PropTypes.func,
  totalBetSlips: PropTypes.number,
};

const mapStateToProps = createStructuredSelector({
  events: selectEvents,
  betSlips: selectBetSlips,
  selectedRegion: selectSelectedRegion,
  totalBetSlips: selectTotalBetSlips,
});

const mapDispatchToProps = {
  fetchEventsRequest,
  toggleBetSlip,
  setSelectedRegion
};

export default connect(mapStateToProps, mapDispatchToProps)(withBreakpoints(EventsScreen));
