'use strict'
module.exports = (sequelize, DataTypes) => {
  const playlist = sequelize.define('playlist', {
    title: DataTypes.STRING
  }, {})
  playlist.associate = function (models) {
    // associations can be defined here
    playlist.belongsToMany(models.user, { through: 'user_playlist', foreignKey: 'playlist_id' })
    playlist.belongsToMany(models.song, { through: 'playlist_song', foreignKey: 'playlist_id' })
  };
  return playlist
};
