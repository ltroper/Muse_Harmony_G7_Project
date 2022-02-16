"use strict";
module.exports = (sequelize, DataTypes) => {
  const Album = sequelize.define(
    "Album",
    {
      name: DataTypes.STRING,
      artistId: DataTypes.INTEGER,
      releaseDate: DataTypes.STRING,
      albumArt: DataTypes.TEXT,
    },
    {}
  );
  Album.associate = function (models) {
    // associations can be defined here
    // Album.belongsTo(models.Artist, {
    //   foreignKey: "artistId",
    // });

    // Album.hasMany(models.Song, {
    //   foreignKey: "albumId",
    // });

    // Album.hasMany(models.Review, {
    //   foreignKey: "albumId",
    // });

    // Album.hasMany(models.Review, {
    //   foreignKey: "albumId",
    // });

    Album.belongsToMany(models.User, {
      through: "LikedAlbum",
      foreignKey: "albumId",
      otherKey: "userId",
    });

    // Album.belongsToMany(models.User, {
    //   through: "albumLibrary",
    //   foreignKey: "albumId",
    //   otherKey: "userId",
    // });

    Album.belongsToMany(models.User, {
      through: "Review",
      foreignKey: "albumId",
      otherKey: "userId",
    })

  };
  return Album;
};
