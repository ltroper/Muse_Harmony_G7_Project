'use strict';
module.exports = (sequelize, DataTypes) => {
  const AlbumLibrary = sequelize.define('AlbumLibrary', {
    name: DataTypes.STRING,
    userId: DataTypes.INTEGER,
    albumId: DataTypes.INTEGER
  }, {});
  AlbumLibrary.associate = function(models) {
    // associations can be defined here
  };
  return AlbumLibrary;
};