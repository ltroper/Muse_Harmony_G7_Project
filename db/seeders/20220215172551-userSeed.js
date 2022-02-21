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
          hashPassword:"$2a$10$4I8LFMjdt6gQxN1ZRCYXJu7diSNa6AEUZD3YmhypAttkeM1QhWHRK",
          profilePicture: "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/895.jpg",
          biography: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          username: "DemoUser2",
          email: "demouser2@demouser.com",
          hashPassword: "$2a$10$jsDg3qghpz75kWRIgABBd.YizlXUSrR1Qkj1TnDuYZ1gkn7PZZLmW",
          profilePicture: "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/252.jpg",
          biography: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          username: "DemoUser3",
          email: "demouser3@demouser.com",
          hashPassword: "$2a$10$y3xkKcukwxg1rlWaPTk8t.D/WTweDuK8o/y6sibtVhIjbr7TUdAtu",
          profilePicture: "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1212.jpg",
          biography: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          username: "DemoUser4",
          email: "demouser4@demouser.com",
          hashPassword: "$2a$10$NUCo4rhzpnq3Pgg23OCPietu4nysCsjwJbaa8XD8YzrY9.IoB0wVy",
          profilePicture: "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/794.jpg",
          biography: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
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
