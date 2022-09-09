import React from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { connect } from 'react-redux';
import { withBreakpoints } from 'react-breakpoints';
import PropTypes from 'prop-types';
// Hooks
import useIsBreakpoint from 'hooks/use-is-breakpoint';
// Redux
import { signOutRequest } from 'redux/auth/sign-out/actions';
// UI
import Dropdown from 'components/dropdown';
import UserDropdownItem from 'modules/user-dropdown-item';
import Typography from 'components/typography';
import ToggleTheme from 'modules/toggle-theme';
import Overlay from 'components/overlay';
import Scrollbar from 'components/scrollbar';
// Hooks
import useScrollBlock from 'hooks/use-scroll-block';
// Styles
import './styles.sass';
// Assets
import AvatarImage from 'assets/images/user/avatar.png';
import { ReactComponent as ArrowIcon } from 'assets/images/icons/arrow.svg';
import { ReactComponent as Transaction } from 'assets/images/user/transaction.svg';
import { ReactComponent as Transfer } from 'assets/images/user/transfer.svg';
import { ReactComponent as Rankings } from 'assets/images/user/rank.svg';
import { ReactComponent as Referal } from 'assets/images/user/referal.svg';
import { ReactComponent as Rewards } from 'assets/images/user/reward.svg';
import { ReactComponent as Settings } from 'assets/images/user/settings.svg';
import { ReactComponent as Support } from 'assets/images/user/support.svg';
import { ReactComponent as LogOut } from 'assets/images/user/logout.svg';

const items = [
  { title: 'Transactions', icon: Transaction, path: '/transactions' },
  { title: 'Player Transfer', icon: Transfer, path: '/player-transfer' },
  { title: 'Player Rankings', icon: Rankings, path: '/player-rankings' },
  { title: 'Refer a friend', icon: Referal, path: '/referrals' },
  { title: 'Rewards', icon: Rewards, path: '/rewards' },
  { title: 'Profile Settings', icon: Settings, path: '/settings' },
  { title: 'Help', icon: Support, path: '/help' },
];

const UserDropdown = ({ userData, signOutRequest, currentBreakpoint }) => {
  const history = useHistory();
  const location = useLocation();
  const [isActive, setIsActive] = React.useState(false);
  const [blockScroll, allowScroll] = useScrollBlock();
  const isMobile = useIsBreakpoint(currentBreakpoint, 'sm');

  const handleDropdown = () => {
    if (isMobile) {
      isActive ? allowScroll() : blockScroll();
    }
    setIsActive(isActive => !isActive);
  };

  return (
    <React.Fragment>
      <Overlay isActive={isActive} zIndex="100" />
      <Dropdown className="user-dropdown" isActive={isActive} onClickOutside={handleDropdown}>
        <Dropdown.Header className="user-dropdown__header" onClick={handleDropdown}>
          <div className="user-dropdown__avatar">
            <img src={AvatarImage} alt="avatar" />
          </div>
          {!isMobile && <UserData userData={userData} />}
          <ArrowIcon className={`user-dropdown__icon ${isActive ? 'is-active' : ''}`} />
        </Dropdown.Header>
        <Dropdown.Box className="user-dropdown__box">
          <Scrollbar className="user-dropdown__box-scroll">
            {isMobile && <UserData userData={userData} />}
            {items.map(({ title, icon, path }, idx) => (
              <UserDropdownItem
                key={idx}
                title={title}
                icon={icon}
                onClick={() => { handleDropdown(); history.push(path); }}
                className="user-dropdown__item"
                isActive={location.pathname === path}
              />
            ))}
            <div className="user-dropdown__item">
              <ToggleTheme />
            </div>
            <div className="user-dropdown__item" onClick={handleDropdown}>
              <UserDropdownItem title="Log Out" icon={LogOut} onClick={signOutRequest} />
            </div>
          </Scrollbar>
        </Dropdown.Box>
      </Dropdown>
    </React.Fragment>
  );
};

UserDropdown.propTypes = {
  userData: PropTypes.object,
  signOutRequest: PropTypes.func,
  currentBreakpoint: PropTypes.string,
};

const UserData = ({ userData }) => (
  <div className="user-dropdown__data">
    <div className="user-dropdown__data-top">
      <Typography component="span" variant="p" className="text-medium user-dropdown__name">{userData.name}</Typography>
    </div>
    <div className="user-dropdown__data-bottom">
      <Typography component="span" variant="p" className="text-semibold user-dropdown__balance">{userData.balance}$</Typography>
      <Typography component="span" variant="p" className="text-medium user-dropdown__pending">{userData.pending}$ Pending</Typography>
    </div>
  </div>
);
UserData.propTypes = {
  userData: PropTypes.object,
};

const mapDispatchToProps = {
  signOutRequest
};

export default connect(null, mapDispatchToProps)(withBreakpoints(UserDropdown));
