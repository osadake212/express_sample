"use strict";

module.exports = {
  up: function(migration, DataTypes, done) {
    // add altering commands here, calling 'done' when finished
    migration.createTable(
      'users',
      {
        id: {
          type         : DataTypes.INTEGER,
          primaryKey   : true,
          autoIncrement: true
        },
        name: {
          type        : DataTypes.STRING,
          field       : 'name',
          defaultValue: false,
          allowNull   : false,
          unique      : true
        },
        email: {
          type        : DataTypes.STRING,
          field       : 'email',
          defaultValue: false,
          allowNull   : false,
          unique      : true
        },
        password: {
          type        : DataTypes.STRING,
          field       : 'password',
          defaultValue: false,
          allowNull   : false
        },
        token: {
          type : DataTypes.STRING,
          field: 'token'
        },
        created_at: {
          type: DataTypes.DATE
        },
        updated_at: {
          type: DataTypes.DATE
        }
      },
      {
        charset: 'utf-8'
      }
    );
    done();
  },

  down: function(migration, DataTypes, done) {
    // add reverting commands here, calling 'done' when finished
    migration.dropTable('users');
    done();
  }
};
