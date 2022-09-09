import React from 'react';
import { useHistory, useLocation } from 'react-router';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import PropTypes from 'prop-types';
// Redux
import { setSelectedRegion } from 'redux/selected-region/actions';
import { selectSelectedRegion } from 'redux/selected-region/selectors';
// UI
import NavLink from 'components/nav-link';
// Styles
import './styles.sass';

const regions = [
  { id: 1, name: 'NAE', value: 'nae', path: '/events' },
  { id: 2, name: 'NAW', value: 'naw', path: '/events' },
  { id: 3, name: 'EU', value: 'eu', path: '/events' },
  { id: 4, name: 'BR', value: 'br', path: '/events' },
  { id: 5, name: 'OCE', value: 'oce', path: '/events' },
  { id: 6, name: '• LIVE', value: 'live', path: '/events', accent: true }
];

const Regions = ({ selectedRegion, setSelectedRegion, onItemClick }) => {
  const history = useHistory();
  const location = useLocation();

  const handleNavLinkClick = (path, value) => {
    if (location.pathname !== path) {
      history.push(path);
    }
    setSelectedRegion(value);
  };

  return (
    <ul className="regions">
      {regions.map(({ id, name, value, path, accent }) => (
        <li key={id} className="regions__item" onClick={onItemClick}>
          <NavLink
            isActive={location.pathname === path && selectedRegion === value}
            onClick={() => handleNavLinkClick(path, value)}
            accent={accent}
          >
            {name}
          </NavLink>
        </li>
      ))}
    </ul>
  );
};

Regions.propTypes = {
  selectedRegion: PropTypes.string,
  setSelectedRegion: PropTypes.func,
  onItemClick: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  selectedRegion: selectSelectedRegion
});

const mapDispatchToProps = {
  setSelectedRegion
};

export default connect(mapStateToProps, mapDispatchToProps)(Regions);
