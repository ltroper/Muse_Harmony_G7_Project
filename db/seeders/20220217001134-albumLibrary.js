"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
    return queryInterface.bulkInsert(
      "AlbumLibraries",
      [
        {
          userId: 1,
          albumId: 1,
          name: "test-library",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 3,
          albumId: 3,
          name: "test-library2",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 4,
          albumId: 3,
          name: "Leo's-smooth-Jazz",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 4,
          albumId: 9,
          name: "Leo's-smooth-Jazz",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 4,
          albumId: 2,
          name: "Leo's-smooth-Jazz",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 4,
          albumId: 10,
          name: "Leo's-smooth-Jazz",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 4,
          albumId: 8,
          name: "Leo's-smooth-Jazz",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 4,
          albumId: 1,
          name: "Favorites",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 4,
          albumId: 2,
          name: "Favorites",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 4,
          albumId: 9,
          name: "Favorites",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 4,
          albumId: 8,
          name: "Favorites",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 4,
          albumId: 5,
          name: "Favorites",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 4,
          albumId: 3,
          name: "Favorites",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 4,
          albumId: 3,
          name: "Bangers",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 4,
          albumId: 5,
          name: "Bangers",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 4,
          albumId: 6,
          name: "Bangers",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 4,
          albumId: 7,
          name: "Bangers",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 4,
          albumId: 7,
          name: "My-Go-To",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 4,
          albumId: 1,
          name: "My-Go-To",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 4,
          albumId: 2,
          name: "My-Go-To",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 4,
          albumId: 4,
          name: "My-Go-To",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
    return queryInterface.bulkDelete("AlbumLibraries", null, {});
  },
};
