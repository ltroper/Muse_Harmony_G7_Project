'use strict';
module.exports = (sequelize, DataTypes) => {
  const LikedAlbum = sequelize.define('LikedAlbum', {
    userId: DataTypes.INTEGER,
    albumId: DataTypes.INTEGER
  }, {});
  LikedAlbum.associate = function(models) {
    // associations can be defined here
    // LikedAlbum.hasMany(models.User, {
    //   foreignKey: "userId",
    // });
    // LikedAlbum.hasMany(models.Album, {
    //   foreignKey: "albumId",
    // });

  };
  return LikedAlbum;
};
