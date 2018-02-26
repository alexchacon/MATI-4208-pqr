'use strict';
module.exports = (sequelize, DataTypes) => {
  const rate = sequelize.define('rate', {
    rate: DataTypes.INTEGER,
    description: DataTypes.STRING
  }, {});
  rate.associate = function(models) {
      rate.belongsTo(models.client, {
          foreignKey: 'clientId',
          onDelete: 'CASCADE',
      });

      rate.belongsTo(models.product, {
          foreignKey: 'productId',
          onDelete: 'CASCADE',
      });
  };
  return rate;
};