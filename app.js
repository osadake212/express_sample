/**
 * Module dependencies
 */

/*global */

'use strict';

var
  express    = require('express'),
  session    = require('express-session'),
  bodyParser = require('body-parser'),
  app        = express(),
  Sequelize  = require('sequelize'),
  // TODO: 設定ファイルから読み込む
  sequelize  = new Sequelize('express_sample', 'express', 'express', {
    host   : 'localhost',
    port   : 5432,
    dialect: 'postgres',
    pool   : {
      max : 5,
      min : 0,
      idle: 10000
    }
  }),
  passport   = require('passport'),
  LocalStrategy = require('passport-local'),
  flash      = require('connect-flash'),
  morgan     = require('morgan'),
  stylus     = require('stylus'),
  nib        = require('nib'),
  routes     = require('./libs/routes');

// ----- サーバー構成 -----

// セッション
app.use(session({
  secret           : 'secret',
  resave           : false,
  saveUninitialized: true
}));

// ログ
app.use(morgan('dev', { immediate: true }));
app.use(bodyParser.urlencoded({ extended: false }));

// ドキュメントルート
app.use(express.static(__dirname + '/public'));

// routing
routes.configRoutes(app, passport, sequelize);

// jade設定
app.set('view engine', 'jade');
app.set('views', __dirname + '/libs/views');

// stylus設定
function compile (str, path) {
  return stylus(str).set('filename', path).use(nib());
}
app.use(stylus.middleware({ src: __dirname + '/public', compile: compile }));

// サーバー開始
app.listen(3000);

console.log('start server on port: 3000');
