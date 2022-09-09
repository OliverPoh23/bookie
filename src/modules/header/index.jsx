import React, { Fragment } from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import { connect } from 'react-redux';
import { withBreakpoints } from 'react-breakpoints';
import { createStructuredSelector } from 'reselect';
import PropTypes from 'prop-types';
// Redux
import { selectUser } from 'redux/auth/selectors';
// Hooks
import useIsBreakpoint from 'hooks/use-is-breakpoint';
// Context
import { useTheme } from 'context/theme-context';
// UI
import Container from 'components/container';
import NavLink from 'components/nav-link';
import Button from 'components/button';
import Regions from 'modules/regions';
import UserDropdown from 'modules/user-dropdown';
import Burger from 'components/burger';
import Overlay from 'components/overlay';
import Close from 'components/close-button';
// Assets
import { ReactComponent as Logo } from 'assets/images/logo.svg';
import { ReactComponent as LogoLight } from 'assets/images/logo-light.svg';
// Utils
import { isMathcingPath } from 'utils/router';
// Styles
import './styles.sass';

const Header = ({ user: { userData }, currentBreakpoint }) => {
  const history = useHistory();
  const location = useLocation();
  const { dark } = useTheme();
  const isMobile = useIsBreakpoint(currentBreakpoint, 'xl');
  const [showMenu, setShowMenu] = React.useState(false);

  const toggleMenu = () => setShowMenu(showMenu => !showMenu);

  return (
    <header className="header">
      <div className="header__wrap">
        <Container className="header__container">
          <Link className="header__logo" to={userData ? '/events' : '/'}>
            {dark ?
              <LogoLight className="header__logo-icon" />
              :
              <Logo className="header__logo-icon" />
            }
          </Link>

          {isMobile && <Overlay isActive={showMenu} zIndex="999" onClick={toggleMenu} inlined />}
          <div className={`header__center ${showMenu ? 'is-active' : ''}`}>
            {isMobile && <Close className="header__center-close" onClick={toggleMenu} dark />}
            {!userData &&
              <div className="header__center-items">
                <div className="header__center-item">
                  <Button size="lg" variant="accent" onClick={() => { toggleMenu && toggleMenu(); history.push('/sign-up'); }}>Sign Up</Button>
                </div>
                <div className="header__center-item">
                  <Button size="lg" variant="primary" onClick={() => { toggleMenu && toggleMenu(); history.push('/sign-in'); }}>Sign In</Button>
                </div>
              </div>
            }
            {userData &&
              <Fragment>
                <div className="header__center-regions"><Regions /></div>
                <div className="header__center-items">
                  <div className="header__center-item" onClick={toggleMenu}>
                    <NavLink isActive={isMathcingPath(location, '/withdraw')} onClick={() => history.push('/withdraw')}>Withdraw</NavLink>
                  </div>
                  <div className="header__center-item">
                    <Button size="lg" variant="accent" onClick={() => { toggleMenu(); history.push('/deposit'); }}>Deposit</Button>
                  </div>
                </div>
              </Fragment>
            }
          </div>

          <div className="header__right">
            {userData &&
              <div className="header__user">
                <UserDropdown userData={userData} />
              </div>
            }
            {isMobile &&
              <div className="header__burger">
                <Burger onClick={toggleMenu} />
              </div>
            }
          </div>
        </Container>
      </div>
    </header>
  );
};

Header.propTypes = {
  user: PropTypes.object,
  currentBreakpoint: PropTypes.string,
};

const mapStateToProps = createStructuredSelector({
  user: selectUser
});

export default connect(mapStateToProps)(withBreakpoints(Header));
