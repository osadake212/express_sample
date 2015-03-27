/**
 * static_pages_controller.js
 */
(function (global) {
  "use strict";

  var StaticPagesController;

  StaticPagesController = function () {

    // ルート
    this.index = function (req, res) {
      res.render('index', {title: 'HOME'});
    };
  };


  if (global.hasOwnProperty('process')) {
    module.exports = StaticPagesController;
  }

}((this || 0).self || global));
