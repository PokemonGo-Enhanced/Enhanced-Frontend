import React from 'react';
import ReactDOM from 'react-dom';
import { createHistory } from 'history';
import { useRouterHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import injectTapEventPlugin from 'react-tap-event-plugin';
import io from 'socket.io-client';
import createStore from './store/createStore';
import Application from './containers/Application';

// Needed for onTouchTap
// Check this repo:
// https://github.com/zilverline/react-tap-event-plugin
injectTapEventPlugin();

// ========================================================
// Browser History Setup
// ========================================================
const browserHistory = useRouterHistory(createHistory)({
  basename: __BASENAME__
});

// ========================================================
// Store and History Instantiation
// ========================================================
// Create redux store and sync with react-router-redux. We have installed the
// react-router-redux reducer under the routerKey "router" in src/routes/index.js,
// so we need to provide a custom `selectLocationState` to inform
// react-router-redux of its location.
const initialState = window.___INITIAL_STATE__;
const socket = io();
socket.on('news', data => console.log('Backend msg', data));
const store = createStore(initialState, browserHistory);
const history = syncHistoryWithStore(browserHistory, store, {
  selectLocationState: (state) => state.router
});

// ========================================================
// Developer Tools Setup
// ========================================================
if (__DEBUG__) {
  if (window.devToolsExtension) {
    window.devToolsExtension.open();
  }
}

// ========================================================
// Render Setup
// ========================================================
const MOUNT_NODE = document.getElementById('root');

let render = () => {
  const routes = require('./routes/index').default(store);

  ReactDOM.render(
    <Application
      store={store}
      history={history}
      routes={routes}
    />,
    MOUNT_NODE
  );
};

// Enable HMR and catch runtime errors in RedBox
// This code is excluded from production bundle
if (__DEV__ && module.hot) {
  const renderApp = render;
  const renderError = (error) => {
    const RedBox = require('redbox-react').default;

    ReactDOM.render(<RedBox error={error} />, MOUNT_NODE);
  };

  // Wrap render in try/catch
  render = () => {
    try {
      renderApp();
    } catch (error) {
      renderError(error);
    }
  };

  // Setup hot module replacement
  module.hot.accept('./routes/index', () => {
    setTimeout(() => {
      ReactDOM.unmountComponentAtNode(MOUNT_NODE);
      render();
    });
  });
}

// ========================================================
// Go!
// ========================================================
render();
