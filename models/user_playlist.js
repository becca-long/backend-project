'use strict';
module.exports = (sequelize, DataTypes) => {
  const user_playlist = sequelize.define('user_playlist', {
    user_id: DataTypes.INTEGER,
    playlist_id: DataTypes.INTEGER
  }, {});
  user_playlist.associate = function(models) {
    // associations can be defined here
  };
  return user_playlist;
};