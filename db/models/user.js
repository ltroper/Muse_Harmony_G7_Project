"use strict";
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    "User",
    {
      username: {
        allowNull: false,
        unique: true,
        type: DataTypes.STRING(50),
      },
      email: {
        allowNull: false,
        unique: true,
        type: DataTypes.STRING(50),
      },
      hashPassword: {
        allowNull: false,
        type: DataTypes.STRING.BINARY,
      },
      profilePicture: {
        type: DataTypes.TEXT,
      },
      biography: {
        type: DataTypes.TEXT,
      },
    },
    {}
  );
  User.associate = function (models) {
    // associations can be defined here
    // User.hasMany(models.Review, {
    //   foreignKey: 'userId'
    // })

    User.belongsToMany(models.Album, {
      through: 'LikedAlbum',
      foreignKey: 'userId',
      otherKey: 'albumId',
      as: 'LikedAlbums'
    })

    User.belongsToMany(models.Album, {
      through: 'AlbumLibrary',
      foreignKey: 'userId',
      otherKey: 'albumId',
      as: 'AlbumLibraries'
    })

    User.belongsToMany(models.Album, {
      through: 'Review',
      foreignKey: 'userId',
      otherKey: 'albumId',
      as: 'Reviews'
    })
  };
  return User;
};
