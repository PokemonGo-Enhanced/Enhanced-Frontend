// Here is where you can define configuration overrides based on the execution environment.
// Supply a key to the default export matching the NODE_ENV that you wish to target, and
// the base configuration will apply your overrides before exporting itself.
module.exports = {
  // ======================================================
  // Overrides when NODE_ENV === 'development'
  // ======================================================
  // NOTE: In development, we use an explicit public path when the assets
  // are served webpack by to fix this issue:
  // http://stackoverflow.com/questions/34133808/webpack-ots-parsing-error-loading-fonts/34133809#34133809
  development: (config) => ({
    compiler_public_path: `http://${config.server_host}:${config.server_port}/`,
    compiler_devtool: 'cheap-module-eval-source-map',
    proxy: {
      enabled: true,
      match: /^\/(api|socket\.io)\/.*/,
      options: {
        target: 'http://localhost:8000'
      },
      options_ws: {
        target: 'ws://localhost:8000',
        ws: true
      }
    }
  }),

  // ======================================================
  // Overrides when NODE_ENV === 'production'
  // ======================================================
  production: (config) => ({
    compiler_public_path: '/',
    compiler_fail_on_warning: false,
    compiler_hash_type: 'chunkhash',
    compiler_devtool: null,
    compiler_stats: {
      chunks: true,
      chunkModules: true,
      colors: true
    },
    proxy: {
      enabled: true,
      options: {
        host: 'http://localhost:8000',
        match: /^\/api\/.*/
      }
    }
  })
};
