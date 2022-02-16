"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
    return queryInterface.bulkInsert(
      "Albums",
      [
        {
          name: "FTP payment generate",
          artistId: 1,
          releaseDate: 2002,
          albumArt: "http://placeimg.com/640/480/abstract",
          genre: "Metal",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "sexy calculate Rustic",
          artistId: 2,
          releaseDate: 1981,
          albumArt: "http://placeimg.com/640/480/abstract",
          genre: "Classical",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Table adapter Metal",
          artistId: 3,
          releaseDate: 1994,
          albumArt: "http://placeimg.com/640/480/abstract",
          genre: "Hip Hop",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "olive Money value-added",
          artistId: 4,
          releaseDate: 1992,
          albumArt: "http://placeimg.com/640/480/abstract",
          genre: "Country",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Switchable Camp index",
          artistId: 5,
          releaseDate: 1970,
          albumArt: "http://placeimg.com/640/480/abstract",
          genre: "Blues",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Generic",
          artistId: 6,
          releaseDate: 2001,
          albumArt: "http://placeimg.com/640/480/abstract",
          genre: "Non Music",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Buckinghamshire virtual",
          artistId: 7,
          releaseDate: 1988,
          albumArt: "http://placeimg.com/640/480/abstract",
          genre: "Blues",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "transmitter Senior",
          artistId: 8,
          releaseDate: 1967,
          albumArt: "http://placeimg.com/640/480/abstract",
          genre: "Pop",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "withdrawal",
          artistId: 9,
          releaseDate: 1978,
          albumArt: "http://placeimg.com/640/480/abstract",
          genre: "Folk",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "interface multi-byte",
          artistId: 10,
          releaseDate: 2006,
          albumArt: "http://placeimg.com/640/480/abstract",
          genre: "Jazz",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Bedfordshire hacking Corporate",
          artistId: 11,
          releaseDate: 1967,
          albumArt: "http://placeimg.com/640/480/abstract",
          genre: "Blues",
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
    return queryInterface.bulkDelete("Albums", null, {});
  },
};
