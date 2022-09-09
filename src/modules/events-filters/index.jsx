import React from 'react';
import { withBreakpoints } from 'react-breakpoints';
import PropTypes from 'prop-types';
// Hooks
import useIsBreakpoint from 'hooks/use-is-breakpoint';
import useScrollBlock from 'hooks/use-scroll-block';
// UI
import Select from 'components/select';
import Typography from 'components/typography';
import Button from 'components/button';
import Overlay from 'components/overlay';
import Close from 'components/close-button';
// Styles
import './styles.sass';

const regions = [
  { value: 'all', label: 'All' },
  { value: 'nae', label: 'NAE' },
  { value: 'naw', label: 'NAW' },
  { value: 'eu', label: 'EU' },
  { value: 'br', label: 'BR' },
  { value: 'oce', label: 'OCE' },
  { value: 'live', label: 'LIVE' },
];

const EventsFilters = ({ selectedRegion, setSelectedRegion, currentBreakpoint }) => {
  const handleRegionChange = ({ value }) => setSelectedRegion(value);
  const [isActive, setisActive] = React.useState(false);
  const isMobile = useIsBreakpoint(currentBreakpoint, 'lg');
  const [blockScroll, allowScroll] = useScrollBlock();

  const toggleIsActive = () => {
    if (isMobile) {
      isActive ? allowScroll() : blockScroll();
    }
    setisActive(isActive => !isActive);
  };

  return (
    <div className="event-filters">
      {isMobile && <Button variant="primary" size="lg" onClick={toggleIsActive}>Filters</Button>}
      <Overlay isActive={isMobile && isActive} zIndex="1000" onClick={toggleIsActive} />
      <div className={`event-filters__wrap ${isMobile && isActive ? 'is-active' : ''}`}>
        {isMobile &&
          <div className="event-filters__close">
            <Close onClick={toggleIsActive} dark />
          </div>
        }
        <div className="event-filters__row">
          <div className="event-filters__item">
            <Typography component="span" variant="h6" className="event-filters__item-title">Region</Typography>
            <div className="event-filters__item-select">
              <Select
                defaultValue={regions[0]}
                options={regions}
                value={regions.find(({ value }) => value === selectedRegion)}
                onChange={handleRegionChange}
              />
            </div>
          </div>
          <div className="event-filters__item">
            <Typography component="span" variant="h6" className="event-filters__item-title">Event</Typography>
            <div className="event-filters__item-select">
              <Select
                options={[
                  { value: 'All', label: 'All' },
                  { value: 'event 1', label: 'Event 1' },
                  { value: 'event 2', label: 'Event 2' },
                  { value: 'event 3', label: 'Event 3' },
                  { value: 'event 4', label: 'Event 4' },
                  { value: 'event 5', label: 'Event 5' },
                ]}
              />
            </div>
          </div>
          <div className="event-filters__item">
            <Typography component="span" variant="h6" className="event-filters__item-title">Bet type</Typography>
            <div className="event-filters__item-select">
              <Select
                defaultValue={{ label: 'All', value: 'All' }}
                options={[
                  { value: 'All', label: 'All' },
                  { value: 'type 1', label: 'Type 1' },
                  { value: 'type 2', label: 'Type 2' },
                  { value: 'type 3', label: 'Type 3' },
                  { value: 'type 4', label: 'Type 4' },
                  { value: 'type 5', label: 'Type 5' },
                ]}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

EventsFilters.propTypes = {
  selectedRegion: PropTypes.string,
  setSelectedRegion: PropTypes.func,
  currentBreakpoint: PropTypes.string,
};

export default withBreakpoints(EventsFilters);
