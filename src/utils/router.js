import React from 'react';
import { Route, matchPath } from 'react-router-dom';

export const RouteWithSubRoutes = route => {
  return (
    <Route
      path={route.path}
      render={props => (
        <route.component {...props} routes={route.routes} />
      )}
    />
  );
};

export const isMathcingPath = (location, path, exact = false) => {
  const match = matchPath(location.pathname, {
    path,
    exact
  });
  return match;
};
