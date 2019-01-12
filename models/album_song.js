'use strict';
module.exports = (sequelize, DataTypes) => {
  const album_song = sequelize.define('album_song', {
    album_id: DataTypes.INTEGER,
    song_id: DataTypes.INTEGER
  }, {});
  album_song.associate = function(models) {
    // associations can be defined here
  };
  return album_song;
};