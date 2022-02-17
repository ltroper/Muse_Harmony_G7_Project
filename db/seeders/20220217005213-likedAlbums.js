'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
   return queryInterface.bulkInsert('LikedAlbums', [
    {
     userId: 1,
     albumId: 1,
     createdAt: new Date(),
     updatedAt: new Date()
    },
    {
      userId: 2,
      albumId: 2,
      createdAt: new Date(),
      updatedAt: new Date()
     },
     {
      userId: 3,
      albumId: 3,
      createdAt: new Date(),
      updatedAt: new Date()
     },
     {
      userId: 4,
      albumId: 4,
      createdAt: new Date(),
      updatedAt: new Date()
     }
  ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
   return queryInterface.bulkDelete('LikedAlbums', null, {});
  }
};
