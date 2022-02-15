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
    },
    {}
  );
  User.associate = function (models) {
    // associations can be defined here
    User.hasMany(models.Review, {
      foreignKey: 'userId'
    })

    User.belongsToMany(models.Album, {
      through: 'likedAlbum',
      foreignKey: 'userId',
      otherKey: 'albumId'
    })

    User.belongsToMany(models.Album, {
      through: 'albumLibrary',
      foreignKey: 'userId',
      otherKey: 'albumId'
    })
  };
  return User;
};
