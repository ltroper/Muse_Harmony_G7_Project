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
          profilePicture: "http://placeimg.com/640/480/abstract",
          biography: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          username: "DemoUser2",
          email: "demouser2@demouser.com",
          hashPassword: "$2a$10$jsDg3qghpz75kWRIgABBd.YizlXUSrR1Qkj1TnDuYZ1gkn7PZZLmW",
          profilePicture: "http://placeimg.com/640/480/abstract",
          biography: "",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          username: "DemoUser3",
          email: "demouser3@demouser.com",
          hashPassword: "$2a$10$y3xkKcukwxg1rlWaPTk8t.D/WTweDuK8o/y6sibtVhIjbr7TUdAtu",
          profilePicture: "http://placeimg.com/640/480/abstract",
          biography: "",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          username: "DemoUser4",
          email: "demouser4@demouser.com",
          hashPassword: "$2a$10$NUCo4rhzpnq3Pgg23OCPietu4nysCsjwJbaa8XD8YzrY9.IoB0wVy",
          profilePicture: "http://placeimg.com/640/480/abstract",
          biography: "",
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
