"use strict";
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("Users", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      username: {
        allowNull: false,
        unique: true,
        type: Sequelize.STRING(50),
      },
      email: {
        allowNull: false,
        unique: true,
        type: Sequelize.STRING(50),
      },
      hashPassword: {
        allowNull: false,
        type: Sequelize.STRING.BINARY,
      },
      profilePicture: {
        type: Sequelize.TEXT,
      },
      biography: {
        type: Sequelize.TEXT,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("Users");
  },
};
