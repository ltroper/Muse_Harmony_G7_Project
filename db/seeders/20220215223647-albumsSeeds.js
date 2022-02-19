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
          name: "Sgt. Pepper's Lonely Hearts Club Band",
          artistId: 1,
          releaseDate: 1967,
          albumArt: "https://ia902803.us.archive.org/11/items/mbid-44b7cab1-0ce1-404e-9089-b458eb3fa530/mbid-44b7cab1-0ce1-404e-9089-b458eb3fa530-1229779722_thumb500.jpg",
          genre: "Rock",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "A Rush of Blood to the Head",
          artistId: 2,
          releaseDate: 2002,
          albumArt: "https://ia800300.us.archive.org/20/items/mbid-14518b26-55fe-387b-94c6-a3843a1af487/mbid-14518b26-55fe-387b-94c6-a3843a1af487-1680563891_thumb500.jpg",
          genre: "Rock",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Straight Outta Compton",
          artistId: 3,
          releaseDate: 1988,
          albumArt: "https://ia800907.us.archive.org/2/items/mbid-d930166c-e5b6-420d-8177-e62f351f6859/mbid-d930166c-e5b6-420d-8177-e62f351f6859-5658377319_thumb500.jpg",
          genre: "Hip Hop",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Speak Now",
          artistId: 4,
          releaseDate: 2010,
          albumArt: "https://ia601303.us.archive.org/24/items/mbid-615b4312-4c75-4083-bd6c-5ec79b4b2950/mbid-615b4312-4c75-4083-bd6c-5ec79b4b2950-11972533656_thumb500.jpg",
          genre: "Country",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Nothing Was the Same",
          artistId: 5,
          releaseDate: 2013,
          albumArt: "https://ia601007.us.archive.org/30/items/mbid-accf1347-fb12-4a2f-98e9-5c7bf6b12209/mbid-accf1347-fb12-4a2f-98e9-5c7bf6b12209-19923908625_thumb500.jpg",
          genre: "Hip Hop",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Spotlight on John Williams",
          artistId: 6,
          releaseDate: 2021,
          albumArt: "https://ia904604.us.archive.org/5/items/mbid-4a1b57de-8cf7-4320-bf01-ec37a9fd8cc0/mbid-4a1b57de-8cf7-4320-bf01-ec37a9fd8cc0-31474978811_thumb500.jpg",
          genre: "Classic",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Seasons in the Abyss",
          artistId: 7,
          releaseDate: 1990,
          albumArt: "https://ia800901.us.archive.org/34/items/mbid-9dca4aec-6e5c-40c6-a750-b36cf3f4af68/mbid-9dca4aec-6e5c-40c6-a750-b36cf3f4af68-5254225795_thumb500.jpg",
          genre: "Metal",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Metallica",
          artistId: 8,
          releaseDate: 1991,
          albumArt: "https://ia902202.us.archive.org/32/items/mbid-6d4cecbb-d460-48e5-b0dc-0d385486757f/mbid-6d4cecbb-d460-48e5-b0dc-0d385486757f-31479169406_thumb500.jpg",
          genre: "Metal",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "YHLQMDLG",
          artistId: 9,
          releaseDate: 2020,
          albumArt: "https://ia902804.us.archive.org/34/items/mbid-c7827a8b-46c2-4fa3-8fab-d1c1a04bc1ad/mbid-c7827a8b-46c2-4fa3-8fab-d1c1a04bc1ad-25587774786_thumb500.jpg",
          genre: "Latin",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Chromatica",
          artistId: 10,
          releaseDate: 2020,
          albumArt: "https://ia803206.us.archive.org/25/items/mbid-607c79df-23ee-4628-8c99-0f0c6795f446/mbid-607c79df-23ee-4628-8c99-0f0c6795f446-26323361021_thumb500.jpg",
          genre: "Pop",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "After Hours",
          artistId: 11,
          releaseDate: 2020,
          albumArt: "https://ia802906.us.archive.org/2/items/mbid-fd7ebee8-8c64-4127-a9be-8e31ed6364e3/mbid-fd7ebee8-8c64-4127-a9be-8e31ed6364e3-25807105705_thumb500.jpg",
          genre: "Pop",
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
