/**
 * user.js
 * Userモデル
 */
module.exports = function (sequelize, DataTypes) {
  return sequelize.define('users', {
    name: {
      type     : DataTypes.STRING,
      field    : 'name',
      allowNull: false,
      unique   : true,
      validate : {
        notEmpty: true,
        len     : [3,50]
      }
    },
    email: {
      type     : DataTypes.STRING,
      field    : 'email',
      allowNull: false,
      unique   : true,
      validate : {
        isEmail : true,
        notEmpty: true
      }
    },
    password: {
      type     : DataTypes.STRING,
      field    : 'password',
      allowNull: false,
      validate : {
        notEmpty: true
      }
    },
    token: {
      type : DataTypes.STRING,
      field: 'token'
    }
  },
  {
    timestamps     : true,
    underscored    : true,
    freezeTableName: true
  });
};
