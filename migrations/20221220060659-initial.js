'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('tasks', {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      title: Sequelize.STRING,
      description: Sequelize.STRING,
      userId: Sequelize.INTEGER,
      createdAt: Sequelize.DATE,
      updatedAt: Sequelize.DATE
    });
    /*
    return queryInterface.bulkInsert('tasks', [{
      "title": "title 1",
      "description": "description 1",
      "userId": "pabcubus",
      "createdAt": new Date(),
      "updatedAt": new Date()
    }]);
    */
  },

  async down (queryInterface, Sequelize) {
  }
};
