"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
    return queryInterface.bulkInsert(
      "Reviews",
      [
        {
          content: "test2",
          rating: 5,
          albumId: 2,
          userId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          content: "test3",
          rating: 3,
          albumId: 3,
          userId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          content: "test4",
          rating: 1,
          albumId: 4,
          userId: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          content: "I love this album!!!",
          rating: 1,
          albumId: 1,
          userId: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          content: "Leo is a beast backend dev",
          rating: 1,
          albumId: 1,
          userId: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          content: "Ian used to be a finance bro but not he makes cool apps",
          rating: 1,
          albumId: 1,
          userId: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          content: "Braxton has a loud cat",
          rating: 1,
          albumId: 1,
          userId: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          content: "Nik secretly plays guitar",
          rating: 1,
          albumId: 1,
          userId: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          content: "Rock on",
          rating: 1,
          albumId: 1,
          userId: 4,
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
    return queryInterface.bulkDelete("Reviews", null, {});
  },
};
