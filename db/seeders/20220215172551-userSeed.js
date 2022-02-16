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
          username: "DemoUser",
          email: "demouser@demouser.com",
          hashPassword:
            "1695d11d1e957bc5d63a202c03532190c278c1fd7772ca286e8665aea448fa02",
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
