/**
 * crypto_helper.js
 */
(function (global) {
  "use strict";

  var
    crypto = require('crypto'),
    encrypt,
    decrypt,
    // TODO: 設定ファイルから読み込む
    secretKey = "secret_key";

  /**
   * 暗号化
   */
  encrypt = function (text) {
    var
      cipher;

    cipher = crypto.createCipher('aes192', secretKey);
    cipher.update(text, 'utf8', 'hex');
    return cipher.final('hex');
  };

  /**
   * 複合化
   */
  decrypt = function (text) {
    var
      decipher;

    decipher = crypto.createCipher('aes192', secretKey);
    decipher.update(text, 'hex', 'utf8');
    return decipher.final('utf8');
  };

  if (global.hasOwnProperty('process')) {
    module.exports = {
      encrypt: encrypt,
      decrypt: decrypt
    };
  }

}((this || 0).self || global));
