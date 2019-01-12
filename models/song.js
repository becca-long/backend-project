'use strict';
module.exports = (sequelize, DataTypes) => {
  const song = sequelize.define('song', {
    title: DataTypes.STRING,
    youtube_id: DataTypes.STRING
  }, {});
  song.associate = function(models) {
    // associations can be defined here
    song.belongsToMany(models.artist, { through: 'artist_song', foreignKey: 'song_id'});
    song.belongsToMany(models.album, { through: 'album_song', foreignKey: 'song_id'});
    song.belongsToMany(models.playlist, { through: 'playlist_song', foreignKey: 'song_id'});
  };
  return song;
};