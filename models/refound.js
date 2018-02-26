'use strict';
module.exports = (sequelize, DataTypes) => {
  const refound = sequelize.define('refound', {
    refoundDate: DataTypes.DATE,
    cause: DataTypes.STRING,
    replacement: DataTypes.BOOLEAN
  }, {});
  refound.associate = function(models) {
      refound.belongsTo(models.pqr, {
          foreignKey: 'pqrId',
          onDelete: 'CASCADE',
      });
  };
  return refound;
};