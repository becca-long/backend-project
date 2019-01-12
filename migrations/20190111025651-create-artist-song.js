'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('artist_songs', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      artist_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'artists',
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
    return queryInterface.dropTable('artist_songs');
  }
};