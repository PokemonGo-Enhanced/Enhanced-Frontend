const http = require('http');
const httpProxy = require('http-proxy');
const url = require('url');
const config = require('../config');
const server = require('../server/main');
const _debug = require('debug');

const debug = _debug('app:bin:server');
const port = config.server_port;
const host = config.server_host;

const proxy = config.proxy && config.proxy.enabled ? httpProxy.createProxyServer() : null;
const serverInstance = http.createServer((req, res) => {
  if (proxy && config.proxy.match.test(url.parse(req.url).pathname)) {
    return proxy.web(req, res, config.proxy.options);
  }
  server.callback()(req, res);
}).listen(port, host, () => {
  debug(`Server is now running at http://${host}:${port}.`);
});

if (proxy) {
  serverInstance.on('upgrade', (req, socket, head) => {
    proxy.ws(req, socket, head, config.proxy.options_ws);
  });
}
