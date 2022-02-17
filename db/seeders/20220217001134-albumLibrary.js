'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
   return queryInterface.bulkInsert('AlbumLibraries', [
    {
     userId: 1,
     albumId: 1,
     name: 'test library',
     createdAt: new Date(),
     updatedAt: new Date()
    },
     {
      userId: 3,
      albumId: 3,
      name: 'test library2',
      createdAt: new Date(),
      updatedAt: new Date()
     },
     {
      userId: 4,
      albumId: 4,
      name: 'test library3',
      createdAt: new Date(),
      updatedAt: new Date()
     },
     {
      userId: 4,
      albumId: 1,
      name: 'test library4',
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
   return queryInterface.bulkDelete('AlbumLibraries', null, {});
  }
};
