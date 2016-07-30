const Koa = require('koa');
const convert = require('koa-convert');
const historyApiFallback = require('koa-connect-history-api-fallback');
const serve = require('koa-static');
const compress = require('koa-compress');
const config = require('../config');
const debug = require('debug')('app:server');

const paths = config.utils_paths;
const app = new Koa();

// use gzip
app.use(compress());

// This rewrites all routes requests to the root /index.html file
// (ignoring file requests). If you want to implement isomorphic
// rendering, you'll want to remove this middleware.
app.use(convert(historyApiFallback({
  verbose: false
})));

// ------------------------------------
// Apply Webpack HMR Middleware
// ------------------------------------
if (config.env === 'development') {
  const webpack = require('webpack');
  const webpackConfig = require('../build/webpack.config').default;
  const webpackDevMiddleware = require('./middleware/webpack-dev').default;
  const webpackHMRMiddleware = require('./middleware/webpack-hmr').default;
  const compiler = webpack(webpackConfig);

  // Enable webpack-dev and webpack-hot middleware
  const { publicPath } = webpackConfig.output;

  app.use(webpackDevMiddleware(compiler, publicPath));
  app.use(webpackHMRMiddleware(compiler));

  // Serve static assets from ~/src/static since Webpack is unaware of
  // these files. This middleware doesn't need to be enabled outside
  // of development since this directory will be copied into ~/dist
  // when the application is compiled.
  app.use(convert(serve(paths.client('static'))));
} else {
  // Serving ~/dist by default. Ideally these files should be served by
  // the web server and not the app server, but this helps to demo the
  // server in production.
  app.use(convert(serve(paths.dist(), {
    maxage: 31536000000
  })));
}

app.use(convert(serve(paths.assets(), {
  maxage: 31536000000
})));

module.exports = app;
