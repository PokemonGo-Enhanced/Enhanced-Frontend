const config = require('../config');
const server = require('../server/main');
const _debug = require('debug');

const debug = _debug('app:bin:server');
const port = config.server_port;
const host = config.server_host;

server.listen(port, host, () => {
  debug(`Server is now running at http://${host}:${port}.`);
});
