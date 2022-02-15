'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Albums', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        allowNull: false,
        type: Sequelize.STRING(50)
      },
      artistId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'Artists'
        }
      },
      releaseDate: {
        allowNull: false,
        type: Sequelize.DATE
      },
      albumArt: {
        allowNull: false,
        type: Sequelize.BLOB
      },
      genre: {
        allowNull: false,
        type: Sequelize.STRING(50)
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Albums');
  }
};
