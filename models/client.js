'use strict';
module.exports = (sequelize, DataTypes) => {
  const client = sequelize.define('client', {
    name: DataTypes.STRING,
    identification: DataTypes.STRING,
    email: DataTypes.STRING,
    city: DataTypes.STRING,
    address: DataTypes.STRING,
    mobile: DataTypes.STRING
  }, {});
  client.associate = function(models) {
      client.hasMany(models.pqr, {
          foreignKey: 'clientId',
          as: 'pqrs',
      });

      client.hasMany(models.rate, {
          foreignKey: 'clientId',
          as: 'rates',
      });
  };
  return client;
};