import React, { PropTypes, Component } from 'react';
import { Router, applyRouterMiddleware } from 'react-router';
import { Provider } from 'react-redux';
import useScroll from 'react-router-scroll';
import CoreStyles from 'styles/core';
import { Style } from 'radium';
import normalize from 'radium-normalize';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Theme from 'styles/theme';

class Application extends Component {
  static propTypes = {
    history: PropTypes.object.isRequired,
    routes: PropTypes.oneOfType([
      PropTypes.object,
      PropTypes.array
    ]).isRequired,
    store: PropTypes.object.isRequired
  }

  render() {
    const { history, routes, store } = this.props;

    return (
      <Provider store={store}>
        <MuiThemeProvider muiTheme={getMuiTheme(Theme)}>
          <div style={{ height: '100%' }}>
            <Style rules={normalize} />
            <CoreStyles />
            <Router
              history={history}
              children={routes}
              render={applyRouterMiddleware(useScroll())}
            />
          </div>
        </MuiThemeProvider>
      </Provider>
    );
  }
}

export default Application;
