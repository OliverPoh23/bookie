import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import ReactBreakpoints from 'react-breakpoints';
// History
import history from './history';
// App
import App from './app';
// Store
import { store } from 'redux/store';
// Styles
import './index.sass';
import 'simplebar/dist/simplebar.min.css';

export const breakpoints = {
  xs: 461,
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1171,
  xxl: 1300,
};

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router history={history}>
        <ReactBreakpoints breakpoints={breakpoints} debounceResize={true} debounceDelay={50}>
          <App />
        </ReactBreakpoints>
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
