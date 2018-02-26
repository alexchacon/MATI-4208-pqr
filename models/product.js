'use strict';
module.exports = (sequelize, DataTypes) => {
  const product = sequelize.define('product', {
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    weight: DataTypes.FLOAT,
    width: DataTypes.FLOAT,
    height: DataTypes.FLOAT,
    depth: DataTypes.FLOAT,
    information: DataTypes.STRING
  }, {});
  product.associate = function(models) {
      product.hasMany(models.rate, {
          foreignKey: 'productId',
          as: 'rates',
      });
      product.hasMany(models.pqr, {
          foreignKey: 'productId',
          as: 'pqrs',
      });
  };
  return product;
};