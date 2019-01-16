'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('playlists', [
      {title: 'Demo Playlist 1', createdAt: 'NOW()', updatedAt: 'NOW()'},
      {title: 'Demo Playlist 2', createdAt: 'NOW()', updatedAt: 'NOW()'},
      {title: 'Demo Playlist 3', createdAt: 'NOW()', updatedAt: 'NOW()'},
      {title: 'Demo Playlist 4', createdAt: 'NOW()', updatedAt: 'NOW()'},
      {title: 'Demo Playlist 5', createdAt: 'NOW()', updatedAt: 'NOW()'},
    ], {});

    const playlists = await queryInterface.sequelize.query(
      `SELECT id from PLAYLISTS;`
    );

    const playlistIds = playlists[0];

    const users = await queryInterface.sequelize.query(
      `SELECT id from USERS;`
    );

    const userIds = users[0];

    const songs = await queryInterface.sequelize.query(
      `SELECT id from SONGS;`
    );

    const songIds = songs[0];

    await queryInterface.bulkInsert('user_playlists', [
      {user_id: userIds[0].id, playlist_id: playlistIds[0].id, createdAt: 'NOW()', updatedAt: 'NOW()'},
      {user_id: userIds[0].id, playlist_id: playlistIds[1].id, createdAt: 'NOW()', updatedAt: 'NOW()'},
      {user_id: userIds[1].id, playlist_id: playlistIds[2].id, createdAt: 'NOW()', updatedAt: 'NOW()'},
      {user_id: userIds[2].id, playlist_id: playlistIds[3].id, createdAt: 'NOW()', updatedAt: 'NOW()'},
      {user_id: userIds[2].id, playlist_id: playlistIds[4].id, createdAt: 'NOW()', updatedAt: 'NOW()'}
    ], {});

    return await queryInterface.bulkInsert('playlist_songs', [
      {playlist_id: playlistIds[0].id, song_id: songIds[0].id, song_order: 1, createdAt: 'NOW()', updatedAt: 'NOW()'},
      {playlist_id: playlistIds[0].id, song_id: songIds[44].id, song_order: 2, createdAt: 'NOW()', updatedAt: 'NOW()'},
      {playlist_id: playlistIds[0].id, song_id: songIds[3].id, song_order: 3, createdAt: 'NOW()', updatedAt: 'NOW()'},
      {playlist_id: playlistIds[0].id, song_id: songIds[12].id, song_order: 4, createdAt: 'NOW()', updatedAt: 'NOW()'},
      {playlist_id: playlistIds[0].id, song_id: songIds[18].id, song_order: 5, createdAt: 'NOW()', updatedAt: 'NOW()'},
      {playlist_id: playlistIds[0].id, song_id: songIds[22].id, song_order: 6, createdAt: 'NOW()', updatedAt: 'NOW()'},
      {playlist_id: playlistIds[0].id, song_id: songIds[50].id, song_order: 7, createdAt: 'NOW()', updatedAt: 'NOW()'},
      {playlist_id: playlistIds[0].id, song_id: songIds[4].id, song_order: 8, createdAt: 'NOW()', updatedAt: 'NOW()'},
      {playlist_id: playlistIds[0].id, song_id: songIds[17].id, song_order: 9, createdAt: 'NOW()', updatedAt: 'NOW()'},
      {playlist_id: playlistIds[0].id, song_id: songIds[9].id, song_order: 10, createdAt: 'NOW()', updatedAt: 'NOW()'},
      {playlist_id: playlistIds[1].id, song_id: songIds[24].id, song_order: 1, createdAt: 'NOW()', updatedAt: 'NOW()'},
      {playlist_id: playlistIds[1].id, song_id: songIds[28].id, song_order: 2, createdAt: 'NOW()', updatedAt: 'NOW()'},
      {playlist_id: playlistIds[1].id, song_id: songIds[11].id, song_order: 3, createdAt: 'NOW()', updatedAt: 'NOW()'},
      {playlist_id: playlistIds[1].id, song_id: songIds[44].id, song_order: 4, createdAt: 'NOW()', updatedAt: 'NOW()'},
      {playlist_id: playlistIds[1].id, song_id: songIds[7].id, song_order: 5, createdAt: 'NOW()', updatedAt: 'NOW()'},
      {playlist_id: playlistIds[2].id, song_id: songIds[1].id, song_order: 1, createdAt: 'NOW()', updatedAt: 'NOW()'},
      {playlist_id: playlistIds[2].id, song_id: songIds[20].id, song_order: 2, createdAt: 'NOW()', updatedAt: 'NOW()'},
      {playlist_id: playlistIds[2].id, song_id: songIds[13].id, song_order: 3, createdAt: 'NOW()', updatedAt: 'NOW()'},
      {playlist_id: playlistIds[2].id, song_id: songIds[7].id, song_order: 4, createdAt: 'NOW()', updatedAt: 'NOW()'},
      {playlist_id: playlistIds[2].id, song_id: songIds[26].id, song_order: 5, createdAt: 'NOW()', updatedAt: 'NOW()'},
      {playlist_id: playlistIds[2].id, song_id: songIds[33].id, song_order: 6, createdAt: 'NOW()', updatedAt: 'NOW()'},
      {playlist_id: playlistIds[2].id, song_id: songIds[38].id, song_order: 7, createdAt: 'NOW()', updatedAt: 'NOW()'},
      {playlist_id: playlistIds[3].id, song_id: songIds[11].id, song_order: 1, createdAt: 'NOW()', updatedAt: 'NOW()'},
      {playlist_id: playlistIds[3].id, song_id: songIds[34].id, song_order: 2, createdAt: 'NOW()', updatedAt: 'NOW()'},
      {playlist_id: playlistIds[3].id, song_id: songIds[27].id, song_order: 3, createdAt: 'NOW()', updatedAt: 'NOW()'},
      {playlist_id: playlistIds[3].id, song_id: songIds[16].id, song_order: 4, createdAt: 'NOW()', updatedAt: 'NOW()'},
      {playlist_id: playlistIds[3].id, song_id: songIds[5].id, song_order: 5, createdAt: 'NOW()', updatedAt: 'NOW()'},
      {playlist_id: playlistIds[3].id, song_id: songIds[38].id, song_order: 6, createdAt: 'NOW()', updatedAt: 'NOW()'},
      {playlist_id: playlistIds[3].id, song_id: songIds[2].id, song_order: 7, createdAt: 'NOW()', updatedAt: 'NOW()'},
      {playlist_id: playlistIds[3].id, song_id: songIds[13].id, song_order: 8, createdAt: 'NOW()', updatedAt: 'NOW()'},
      {playlist_id: playlistIds[3].id, song_id: songIds[3].id, song_order: 9, createdAt: 'NOW()', updatedAt: 'NOW()'},
      {playlist_id: playlistIds[3].id, song_id: songIds[49].id, song_order: 10, createdAt: 'NOW()', updatedAt: 'NOW()'},
      {playlist_id: playlistIds[4].id, song_id: songIds[10].id, song_order: 1, createdAt: 'NOW()', updatedAt: 'NOW()'},
      {playlist_id: playlistIds[4].id, song_id: songIds[20].id, song_order: 2, createdAt: 'NOW()', updatedAt: 'NOW()'},
      {playlist_id: playlistIds[4].id, song_id: songIds[30].id, song_order: 3, createdAt: 'NOW()', updatedAt: 'NOW()'},
      {playlist_id: playlistIds[4].id, song_id: songIds[40].id, song_order: 4, createdAt: 'NOW()', updatedAt: 'NOW()'},
      {playlist_id: playlistIds[4].id, song_id: songIds[50].id, song_order: 5, createdAt: 'NOW()', updatedAt: 'NOW()'},
      {playlist_id: playlistIds[4].id, song_id: songIds[0].id, song_order: 6, createdAt: 'NOW()', updatedAt: 'NOW()'},
      {playlist_id: playlistIds[4].id, song_id: songIds[22].id, song_order: 7, createdAt: 'NOW()', updatedAt: 'NOW()'},
      {playlist_id: playlistIds[4].id, song_id: songIds[33].id, song_order: 8, createdAt: 'NOW()', updatedAt: 'NOW()'},
      {playlist_id: playlistIds[4].id, song_id: songIds[11].id, song_order: 9, createdAt: 'NOW()', updatedAt: 'NOW()'},
      {playlist_id: playlistIds[4].id, song_id: songIds[44].id, song_order: 10, createdAt: 'NOW()', updatedAt: 'NOW()'},
      {playlist_id: playlistIds[4].id, song_id: songIds[17].id, song_order: 11, createdAt: 'NOW()', updatedAt: 'NOW()'},
      {playlist_id: playlistIds[4].id, song_id: songIds[39].id, song_order: 12, createdAt: 'NOW()', updatedAt: 'NOW()'},
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('user_playlists', null, {});
    await queryInterface.bulkDelete('playlist_songs', null, {});
    await queryInterface.bulkDelete('playlists', null, {});
  }
};