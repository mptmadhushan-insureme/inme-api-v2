'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('RenewalEntities', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        unique: true,
        primaryKey: true,
      },
      title: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      sub_title: {
        type: Sequelize.STRING,
      },

      date: {
        type: Sequelize.BOOLEAN,
      },
      documents: {
        type: Sequelize.STRING,
      },
      repeat: {
        type: Sequelize.STRING,
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable('RenewalEntities');
  },
};
