"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      //run faker function here

      Example:*/
    return queryInterface.bulkInsert(
      "Users",
      [
        {
          username: "DemoUser1",
          email: "demouser1@demouser.com",
          hashPassword:
            "",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          username: "DemoUser2",
          email: "demouser2@demouser.com",
          hashPassword:
            "",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          username: "DemoUser3",
          email: "demouser3@demouser.com",
          hashPassword:
            "",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          username: "DemoUser4",
          email: "demouser4@demouser.com",
          hashPassword:
            "",
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

      Example:*/
    return queryInterface.bulkDelete("Users", null, {});
  },
};
