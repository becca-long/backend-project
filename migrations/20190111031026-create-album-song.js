'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('album_songs', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      album_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'albums',
          key: 'id'
      },
      },
      song_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'songs',
          key: 'id'
      },
      },
      createdAt: {
        allowNull: true,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: true,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('album_songs');
  }
};