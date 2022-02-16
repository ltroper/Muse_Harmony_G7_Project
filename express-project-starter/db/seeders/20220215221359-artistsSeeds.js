"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Artists",
      [
        {
          name: "Ronald Kozey III",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Sarah Jacobson",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Roger Altenwerth",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Pablo Langworth IV",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Tyrone O'Keefe DDS",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Jeffrey Beier",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Mrs. Richard Christiansen",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Domingo Purdy",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Cora Stiedemann",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Cary Hegmann",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "James Lebsack",
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
