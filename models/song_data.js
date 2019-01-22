'use strict';
module.exports = (sequelize, DataTypes) => {
  const song_data = sequelize.define('song_data', {
    album_art: DataTypes.STRING,
    song_id: DataTypes.INTEGER,
    song_title: DataTypes.STRING,
    artist: DataTypes.STRING,
    album_name: DataTypes.STRING
  }, {});
  album_song.associate = function(models) {
    // associations can be defined here
  };
  return song_data;
};