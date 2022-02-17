const { faker } = require("@faker-js/faker");

const manyHashes = () => {
  const hashedPassword = bcrypt.hashSync(faker.internet.password()),
}

const functionMultiplier = () => {
  let artists = [];
  let albums = [];
  let songs = [];

  for (let i = 1; i < 12; i++) {
    const generateArtists = {
      name: faker.name.findName(),
      createdAt: "new Date()",
      updatedAt: "new Date()",
    };
    artists.push(generateArtists);

    const generateAlbums = {
      name: faker.random.words(),
      artistId: i,
      releaseDate: faker.date.between(1950, 2010),
      albumArt: faker.image.abstract(),
      genre: faker.music.genre(),
      createdAt: "new Date()",
      updatedAt: "new Date()",
    };
    artists.push(generateArtists);
    albums.push(generateAlbums);

    for (let j = 1; j < 8; j++) {
      const generateSongs = {
        name: faker.random.words(),
        albumId: i,
        createdAt: "new Date()",
        updatedAt: "new Date()",
      };
      songs.push(generateSongs);
    }
  }
  //   return artists;
  // return songs;
  return albums;
};

console.log(functionMultiplier());
