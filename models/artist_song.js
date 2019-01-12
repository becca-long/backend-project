'use strict';
module.exports = (sequelize, DataTypes) => {
  const artist_song = sequelize.define('artist_song', {
    artist_id: DataTypes.INTEGER,
    song_id: DataTypes.INTEGER
  }, {});
  artist_song.associate = function(models) {
    // associations can be defined here
  };
  return artist_song;
};