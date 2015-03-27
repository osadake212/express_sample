/**
 * users_controller.js
 */
(function (global) {
  "use strict";
  var
    UsersController,
    cryptoHelper = require('../helpers/crypto_helper');

  UsersController = function (sequelize) {
    var self = this;
    this.User = sequelize.import(__dirname + "/../models/user");

    // ユーザー作成
    this.create = function (req, res) {
      var
        rawPass,
        cipherPass;

      console.log('UsersController#create');

      rawPass = req.body.pass;

      // パスワードのバリデーション
      if (!rawPass || rawPass.length < 6) {
        console.log("too short password");
        // TODO: エラー内容通知
        res.redirect('/?err=');
        return;
      }

      // 暗号化
      cipherPass = cryptoHelper.encrypt(rawPass);

      self.User.create({
        name    : req.body.name,
        email   : req.body.email,
        password: cipherPass
      })
      .then(function (user) {
        console.log(user);
        res.send('created');
      })
      .catch(function (err) {
        console.log(err);
        // TODO: エラー内容通知
        res.redirect('/?err=');
      });
    };

    // ログインページ
    this.login = function (req, res, next) {
      console.log('UsersController#login');
      next();
    };

    // ログイン処理
    this.signin = function (req, res, next) {
      console.log('UsersController#signin');
      next();
    };

    // ログアウト処理
    this.signout = function (req, res, next) {
      console.log('UsersController#signout');
      next();
    };

    // プロフィールページ
    this.show = function (req, res, next) {
      console.log('UsersController#show');
      next();
    };

  };

  if (global.hasOwnProperty('process')) {
      module.exports = UsersController;
  }

}((this || 0).self || global));
