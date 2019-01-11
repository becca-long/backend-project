'use strict';
module.exports = (sequelize, DataTypes) => {
  const user = sequelize.define('user', {
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    firstname: DataTypes.STRING,
    lastname: DataTypes.STRING
  }, {});
  user.associate = function(models) {
    // associations can be defined here
    user.belongsToMany(models.playlist, { through: 'user_playlist', foreignKey: 'user_id'});
  };
  return user;
};