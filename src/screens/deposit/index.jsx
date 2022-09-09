import React from 'react';
import PropTypes from 'prop-types';
import { Switch, Redirect } from 'react-router-dom';
// UI
import ScreenLayout from 'components/screen-layout';
// Utils
import { RouteWithSubRoutes } from 'utils/router';

const DepositScreen = ({ routes }) => {
  return (
    <ScreenLayout>
      <Switch>
        {routes.map((route, idx) => (
          <RouteWithSubRoutes key={idx} {...route} />
        ))}
        <Redirect to="/deposit" />
      </Switch>
    </ScreenLayout>
  );
};

DepositScreen.propTypes = {
  routes: PropTypes.array,
};

export default DepositScreen;
