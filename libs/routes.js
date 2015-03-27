/**
 * routes.js
 */

(function (global) {
  "use strict";

  var
    configRoutes,
    StaticPagesController = require('./controllers/static_pages_controller'),
    UsersController       = require('./controllers/users_controller');

  configRoutes = function (app, passport, sequelize) {
    var
      staticPagesController = new StaticPagesController(),
      usersController       = new UsersController(sequelize);

    // static pages
    app.get('/', staticPagesController.index);

    // users
    app.post('/signup', usersController.create);
    app.get('/login', usersController.login);
    app.post('/login', usersController.signin);
    app.get('/mypage', usersController.show);

    // 404
    app.use(function (req, res, next) {
      res.status(404).send('Not Found');
    });

    // 500
    app.use(function (err, req, res, next) {
      // ログ出力
        console.error('uncaught exception:', err.message);
        console.error(err.stack);
        next(err);
    });
    app.use(function (err, req, res, next) {
      // ajaxの場合には処理する
      if (req.xhr) {
        res.send(500, { error: 'Something blew up!' });
      } else {
        next(err);
      }
    });
    app.use(function (err, req, res, next) {
      // 上記以外、全部対応する
      res.status(500);
      res.send('error');
    });
  };

  if (global.hasOwnProperty('process')) {
    module.exports = {
      configRoutes: configRoutes
    };
  }

}((this || 0).self || global));

