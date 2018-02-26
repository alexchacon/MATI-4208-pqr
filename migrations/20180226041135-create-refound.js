'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('refounds', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      refoundDate: {
        type: Sequelize.DATE
      },
      cause: {
        type: Sequelize.STRING
      },
      replacement: {
        type: Sequelize.BOOLEAN
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
        pqrId: {
            type: Sequelize.INTEGER,
            onDelete: 'CASCADE',
            references: {
                model: 'pqrs',
                key: 'id',
                as: 'pqrId',
            },
        }
    });
  },
  down: (queryInterface/*, Sequelize*/) => {
    return queryInterface.dropTable('refounds');
  }
};