"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Artists",
      [
        {
          name: "The Beatles",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Coldplay",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "N.W.A.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Taylor Swift",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Drake",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "John Williams",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Slayer",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Metallica",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Bad Bunny",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Lady Gaga",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "The Weeknd",
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
    return queryInterface.bulkDelete("Artists", null, {});
  },
};
