/**
 * layout.js
 */

/*global alert, $, document */

(function(global) {

  "use strict";

  var
    init,
    onClickSignIn,
    onClickSignOut,
    stateMap = {
      $headerNavButton: undefined
    };

  onClickSignIn = function () {
    stateMap.$headerNavButton.text('Sign Out');
    stateMap.$headerNavButton.click(onClickSignOut);
  };

  onClickSignOut = function () {
    stateMap.$headerNavButton.text('Sign In');
    stateMap.$headerNavButton.click(onClickSignIn);
  };

  // ----- 初期化 -----
  init = function () {
    // View参照保持
    stateMap.$headerNavButton = $('.header-nav-button');

    if (stateMap.$headerNavButton.text === 'Sign Out') {
      stateMap.$headerNavButton.text('Sign Out');
      stateMap.$headerNavButton.click(onClickSignOut);
    } else {
      stateMap.$headerNavButton.text('Sign In');
      stateMap.$headerNavButton.click(onClickSignIn);
    }

  };

  $(document).ready(function () {
    init();
  });

}((this || 0).self || global));
