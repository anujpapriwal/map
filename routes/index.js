const home = require('./home');
const map = require('./map');
const newMap = require('./newMap');
const users = require('./users');

module.exports = setRoutes = (app) => {
  app.use('/', home);
  app.use('/map', map);
  app.use('/newMap', newMap);
  app.use('/users', users);
};
