'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('users', {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      username: Sequelize.STRING,
      password: Sequelize.STRING,
      token: Sequelize.STRING,
      tokenExpiry: Sequelize.DATE,
      createdAt: Sequelize.DATE,
      updatedAt: Sequelize.DATE
    });

    await queryInterface.bulkInsert('users', [{
      "username": "user1",
      "password": "user1",
      "token": null,
      "tokenExpiry": new Date(),
      "createdAt": new Date(),
      "updatedAt": new Date()
    }]);

    await queryInterface.bulkInsert('users', [{
      "username": "user2",
      "password": "user2",
      "token": null,
      "tokenExpiry": new Date(),
      "createdAt": new Date(),
      "updatedAt": new Date()
    }]);

    return;
  },

  async down (queryInterface, Sequelize) {
  }
};
