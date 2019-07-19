var login = require('./sign/sign');
var task = require('./task/task');

module.exports = function (server) {
  login(server);
  task(server);
};