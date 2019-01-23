'use strict'
module.exports = (sequelize, DataTypes) => {
  const artist = sequelize.define('artist', {
    name: DataTypes.STRING
  }, {})
  artist.associate = function (models) {
    // associations can be defined here
    artist.belongsToMany(models.song, { through: 'artist_song', foreignKey: 'artist_id' })
  };
  return artist
};
