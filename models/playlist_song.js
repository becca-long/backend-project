'use strict';
module.exports = (sequelize, DataTypes) => {
  const playlist_song = sequelize.define('playlist_song', {
    playlist_id: DataTypes.INTEGER,
    song_id: DataTypes.INTEGER,
    song_order: DataTypes.INTEGER
  }, {});
  playlist_song.associate = function(models) {
    // associations can be defined here
  };
  return playlist_song;
};