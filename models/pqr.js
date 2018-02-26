const  Sequelize = require('sequelize');
'use strict';
module.exports = (sequelize, DataTypes) => {
  const pqr = sequelize.define('pqr', {
    registration: {
        type: DataTypes.DATE,
        defaultValue: Sequelize.NOW
    },
    description: DataTypes.STRING,
    state: DataTypes.STRING,
    response: DataTypes.STRING,
    priority: DataTypes.STRING
  }, {});
  pqr.associate = function(models) {
      pqr.belongsTo(models.client, {
          foreignKey: 'clientId',
          onDelete: 'CASCADE',
      });

      pqr.belongsTo(models.product, {
          foreignKey: 'productId',
          onDelete: 'CASCADE',
      });

      pqr.hasOne(models.refound, {
          foreignKey: 'pqrId',
          as: 'refound',
      });
  };
  return pqr;
};