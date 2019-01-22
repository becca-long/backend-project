'use strict';
module.exports = (sequelize, DataTypes) => {
  const playlist_data = sequelize.define('playlist_data', {
    user_id: DataTypes.INTEGER,
    playlist_title: DataTypes.STRING,
    song_order: DataTypes.INTEGER,
    song_title: DataTypes.STRING,
    artist: DataTypes.STRING,
    album_name: DataTypes.STRING
  }, {});
  album_song.associate = function(models) {
    // associations can be defined here
  };
  return playlist_data;
};