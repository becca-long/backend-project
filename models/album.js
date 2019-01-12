'use strict';
module.exports = (sequelize, DataTypes) => {
  const album = sequelize.define('album', {
    title: DataTypes.STRING,
    album_art: DataTypes.STRING
  }, {});
  album.associate = function(models) {
    // associations can be defined here
    album.belongsToMany(models.song, { through: 'album_song', foreignKey: 'album_id'});

  };
  return album;
};