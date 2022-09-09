import React from 'react';
import PropTypes from 'prop-types';
import { Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
// Redux
import { sessionCheckStart } from 'redux/auth/session-check/actions';
// UI
import ScrollToTop from 'components/scroll-to-top';
import Header from 'modules/header';
// Routes
import { RouteWithSubRoutes } from 'utils/router';
import routes from './screens/routes';
// Context
import { ThemeProvider } from 'context/theme-context';
// Styles
import './app.sass';

const App = ({ sessionCheckStart }) => {
  React.useEffect(() => {
    sessionCheckStart();
  }, [sessionCheckStart]);

  return (
    <div className="app">
      <ThemeProvider>
        <Header />
        <div className="app__wrap">
          <ScrollToTop>
            <Switch>
              {routes.map((route, idx) => (
                <RouteWithSubRoutes key={idx} {...route} />
              ))}
              <Redirect to="/" />
            </Switch>
          </ScrollToTop>
        </div>
      </ThemeProvider>
    </div>
  );
};

App.propTypes = {
  sessionCheckStart: PropTypes.func,
};

const mapDispatchToProps = {
  sessionCheckStart
};

export default connect(null, mapDispatchToProps)(App);
