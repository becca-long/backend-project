'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('albums', [
      {title: 'Classics', album_art: '/images/Ratatat_Classics.png', createdAt: 'NOW()', updatedAt: 'NOW()'},
      {title: 'No Strings Attached', album_art: '/images/Nsync_No_Strings_Attached.png', createdAt: 'NOW()', updatedAt: 'NOW()'},
      {title: 'The Foundation', album_art: '/images/Zac_Brown_Band_The_Foundation.png', createdAt: 'NOW()', updatedAt: 'NOW()'},
      {title: 'Abbey Road', album_art: '/images/Beatles_Abbey_Road.png', createdAt: 'NOW()', updatedAt: 'NOW()'},
    ], {});
    
    const albums = await queryInterface.sequelize.query(
      `SELECT id from ALBUMS;`
    );

    const albumIds = albums[0];

    await queryInterface.bulkInsert('songs', [
      {title: 'Montanita', youtube_id: null, createdAt: 'NOW()', updatedAt: 'NOW()'},
      {title: 'Lex', youtube_id: null, createdAt: 'NOW()', updatedAt: 'NOW()'},
      {title: 'Gettysburg', youtube_id: null, createdAt: 'NOW()', updatedAt: 'NOW()'},
      {title: 'Wildcat', youtube_id: null, createdAt: 'NOW()', updatedAt: 'NOW()'},
      {title: 'Tropicana', youtube_id: null, createdAt: 'NOW()', updatedAt: 'NOW()'},
      {title: 'Loud Pipes', youtube_id: null, createdAt: 'NOW()', updatedAt: 'NOW()'},
      {title: 'Kennedy', youtube_id: null, createdAt: 'NOW()', updatedAt: 'NOW()'},
      {title: 'Swisha', youtube_id: null, createdAt: 'NOW()', updatedAt: 'NOW()'},
      {title: 'Nostrand', youtube_id: null, createdAt: 'NOW()', updatedAt: 'NOW()'},
      {title: 'Tacobel Cannon', youtube_id: null, createdAt: 'NOW()', updatedAt: 'NOW()'},
      {title: 'Truman', youtube_id: null, createdAt: 'NOW()', updatedAt: 'NOW()'},
      {title: 'Bye Bye Bye', youtube_id: null, createdAt: 'NOW()', updatedAt: 'NOW()'},
      {title: 'Its Gonna Be Me', youtube_id: null, createdAt: 'NOW()', updatedAt: 'NOW()'},
      {title: 'Space Cowboy (Yippie-Yi-Yay)', youtube_id: null, createdAt: 'NOW()', updatedAt: 'NOW()'},
      {title: 'Just Got Paid', youtube_id: null, createdAt: 'NOW()', updatedAt: 'NOW()'},
      {title: 'It Makes Me Ill', youtube_id: null, createdAt: 'NOW()', updatedAt: 'NOW()'},
      {title: 'This I Promise You', youtube_id: null, createdAt: 'NOW()', updatedAt: 'NOW()'},
      {title: 'No Strings Attached', youtube_id: null, createdAt: 'NOW()', updatedAt: 'NOW()'},
      {title: 'Digital Get Down', youtube_id: null, createdAt: 'NOW()', updatedAt: 'NOW()'},
      {title: 'Bringin da Noise', youtube_id: null, createdAt: 'NOW()', updatedAt: 'NOW()'},
      {title: 'Thats When Ill Stop Loving You', youtube_id: null, createdAt: 'NOW()', updatedAt: 'NOW()'},
      {title: 'Ill Be Good for You', youtube_id: null, createdAt: 'NOW()', updatedAt: 'NOW()'},
      {title: 'I Thought She Knew', youtube_id: null, createdAt: 'NOW()', updatedAt: 'NOW()'},
      {title: 'Toes', youtube_id: null, createdAt: 'NOW()', updatedAt: 'NOW()'},
      {title: 'Whatever It Is', youtube_id: null, createdAt: 'NOW()', updatedAt: 'NOW()'},
      {title: 'Where the Boat Leaves From', youtube_id: null, createdAt: 'NOW()', updatedAt: 'NOW()'},
      {title: 'Free', youtube_id: null, createdAt: 'NOW()', updatedAt: 'NOW()'},
      {title: 'Chicken Fried', youtube_id: null, createdAt: 'NOW()', updatedAt: 'NOW()'},
      {title: 'Mary', youtube_id: null, createdAt: 'NOW()', updatedAt: 'NOW()'},
      {title: 'Different Kind of Fine', youtube_id: null, createdAt: 'NOW()', updatedAt: 'NOW()'},
      {title: 'Highway 20 Ride', youtube_id: null, createdAt: 'NOW()', updatedAt: 'NOW()'},
      {title: 'Its Not OK', youtube_id: null, createdAt: 'NOW()', updatedAt: 'NOW()'},
      {title: 'Jolene', youtube_id: null, createdAt: 'NOW()', updatedAt: 'NOW()'},
      {title: 'Sic em on a Chicken', youtube_id: null, createdAt: 'NOW()', updatedAt: 'NOW()'},
      {title: 'Come Together', youtube_id: null, createdAt: 'NOW()', updatedAt: 'NOW()'},
      {title: 'Something', youtube_id: null, createdAt: 'NOW()', updatedAt: 'NOW()'},
      {title: 'Maxwells Silver Hammer', youtube_id: null, createdAt: 'NOW()', updatedAt: 'NOW()'},
      {title: 'Oh! Darling', youtube_id: null, createdAt: 'NOW()', updatedAt: 'NOW()'},
      {title: 'Octopuss Garden', youtube_id: null, createdAt: 'NOW()', updatedAt: 'NOW()'},
      {title: 'I Want you (Shes so Heavy)', youtube_id: null, createdAt: 'NOW()', updatedAt: 'NOW()'},
      {title: 'Here Comes the Sun', youtube_id: null, createdAt: 'NOW()', updatedAt: 'NOW()'},
      {title: 'Because', youtube_id: null, createdAt: 'NOW()', updatedAt: 'NOW()'},
      {title: 'You Never Give Me Your Money', youtube_id: null, createdAt: 'NOW()', updatedAt: 'NOW()'},
      {title: 'Sun King', youtube_id: null, createdAt: 'NOW()', updatedAt: 'NOW()'},
      {title: 'Mean Mr. Mustard', youtube_id: null, createdAt: 'NOW()', updatedAt: 'NOW()'},
      {title: 'Polythene Pam', youtube_id: null, createdAt: 'NOW()', updatedAt: 'NOW()'},
      {title: 'She Came In Through the Bathroom', youtube_id: null, createdAt: 'NOW()', updatedAt: 'NOW()'},
      {title: 'Golden Slumbers', youtube_id: null, createdAt: 'NOW()', updatedAt: 'NOW()'},
      {title: 'Carry That Weight', youtube_id: null, createdAt: 'NOW()', updatedAt: 'NOW()'},
      {title: 'The End', youtube_id: null, createdAt: 'NOW()', updatedAt: 'NOW()'},
      {title: 'Her Majesty', youtube_id: null, createdAt: 'NOW()', updatedAt: 'NOW()'},
    ], {});

    const songs = await queryInterface.sequelize.query(
      `SELECT id from SONGS;`
    );
    
    const songIds = songs[0];

    await queryInterface.bulkInsert('album_songs', [
      {album_id: albumIds[0].id, song_id: songIds[0].id, createdAt: 'NOW()', updatedAt: 'NOW()'},
      {album_id: albumIds[0].id, song_id: songIds[1].id, createdAt: 'NOW()', updatedAt: 'NOW()'},
      {album_id: albumIds[0].id, song_id: songIds[2].id, createdAt: 'NOW()', updatedAt: 'NOW()'},
      {album_id: albumIds[0].id, song_id: songIds[3].id, createdAt: 'NOW()', updatedAt: 'NOW()'},
      {album_id: albumIds[0].id, song_id: songIds[4].id, createdAt: 'NOW()', updatedAt: 'NOW()'},
      {album_id: albumIds[0].id, song_id: songIds[5].id, createdAt: 'NOW()', updatedAt: 'NOW()'},
      {album_id: albumIds[0].id, song_id: songIds[6].id, createdAt: 'NOW()', updatedAt: 'NOW()'},
      {album_id: albumIds[0].id, song_id: songIds[7].id, createdAt: 'NOW()', updatedAt: 'NOW()'},
      {album_id: albumIds[0].id, song_id: songIds[8].id, createdAt: 'NOW()', updatedAt: 'NOW()'},
      {album_id: albumIds[0].id, song_id: songIds[9].id, createdAt: 'NOW()', updatedAt: 'NOW()'},
      {album_id: albumIds[0].id, song_id: songIds[10].id, createdAt: 'NOW()', updatedAt: 'NOW()'},
      {album_id: albumIds[1].id, song_id: songIds[11].id, createdAt: 'NOW()', updatedAt: 'NOW()'},
      {album_id: albumIds[1].id, song_id: songIds[12].id, createdAt: 'NOW()', updatedAt: 'NOW()'},
      {album_id: albumIds[1].id, song_id: songIds[13].id, createdAt: 'NOW()', updatedAt: 'NOW()'},
      {album_id: albumIds[1].id, song_id: songIds[14].id, createdAt: 'NOW()', updatedAt: 'NOW()'},
      {album_id: albumIds[1].id, song_id: songIds[15].id, createdAt: 'NOW()', updatedAt: 'NOW()'},
      {album_id: albumIds[1].id, song_id: songIds[16].id, createdAt: 'NOW()', updatedAt: 'NOW()'},
      {album_id: albumIds[1].id, song_id: songIds[17].id, createdAt: 'NOW()', updatedAt: 'NOW()'},
      {album_id: albumIds[1].id, song_id: songIds[18].id, createdAt: 'NOW()', updatedAt: 'NOW()'},
      {album_id: albumIds[1].id, song_id: songIds[19].id, createdAt: 'NOW()', updatedAt: 'NOW()'},
      {album_id: albumIds[1].id, song_id: songIds[20].id, createdAt: 'NOW()', updatedAt: 'NOW()'},
      {album_id: albumIds[1].id, song_id: songIds[21].id, createdAt: 'NOW()', updatedAt: 'NOW()'},
      {album_id: albumIds[1].id, song_id: songIds[22].id, createdAt: 'NOW()', updatedAt: 'NOW()'},
      {album_id: albumIds[2].id, song_id: songIds[23].id, createdAt: 'NOW()', updatedAt: 'NOW()'},
      {album_id: albumIds[2].id, song_id: songIds[24].id, createdAt: 'NOW()', updatedAt: 'NOW()'},
      {album_id: albumIds[2].id, song_id: songIds[25].id, createdAt: 'NOW()', updatedAt: 'NOW()'},
      {album_id: albumIds[2].id, song_id: songIds[26].id, createdAt: 'NOW()', updatedAt: 'NOW()'},
      {album_id: albumIds[2].id, song_id: songIds[27].id, createdAt: 'NOW()', updatedAt: 'NOW()'},
      {album_id: albumIds[2].id, song_id: songIds[28].id, createdAt: 'NOW()', updatedAt: 'NOW()'},
      {album_id: albumIds[2].id, song_id: songIds[29].id, createdAt: 'NOW()', updatedAt: 'NOW()'},
      {album_id: albumIds[2].id, song_id: songIds[30].id, createdAt: 'NOW()', updatedAt: 'NOW()'},
      {album_id: albumIds[2].id, song_id: songIds[31].id, createdAt: 'NOW()', updatedAt: 'NOW()'},
      {album_id: albumIds[2].id, song_id: songIds[32].id, createdAt: 'NOW()', updatedAt: 'NOW()'},
      {album_id: albumIds[2].id, song_id: songIds[33].id, createdAt: 'NOW()', updatedAt: 'NOW()'},
      {album_id: albumIds[3].id, song_id: songIds[34].id, createdAt: 'NOW()', updatedAt: 'NOW()'},
      {album_id: albumIds[3].id, song_id: songIds[35].id, createdAt: 'NOW()', updatedAt: 'NOW()'},
      {album_id: albumIds[3].id, song_id: songIds[36].id, createdAt: 'NOW()', updatedAt: 'NOW()'},
      {album_id: albumIds[3].id, song_id: songIds[37].id, createdAt: 'NOW()', updatedAt: 'NOW()'},
      {album_id: albumIds[3].id, song_id: songIds[38].id, createdAt: 'NOW()', updatedAt: 'NOW()'},
      {album_id: albumIds[3].id, song_id: songIds[39].id, createdAt: 'NOW()', updatedAt: 'NOW()'},
      {album_id: albumIds[3].id, song_id: songIds[40].id, createdAt: 'NOW()', updatedAt: 'NOW()'},
      {album_id: albumIds[3].id, song_id: songIds[41].id, createdAt: 'NOW()', updatedAt: 'NOW()'},
      {album_id: albumIds[3].id, song_id: songIds[42].id, createdAt: 'NOW()', updatedAt: 'NOW()'},
      {album_id: albumIds[3].id, song_id: songIds[43].id, createdAt: 'NOW()', updatedAt: 'NOW()'},
      {album_id: albumIds[3].id, song_id: songIds[44].id, createdAt: 'NOW()', updatedAt: 'NOW()'},
      {album_id: albumIds[3].id, song_id: songIds[45].id, createdAt: 'NOW()', updatedAt: 'NOW()'},
      {album_id: albumIds[3].id, song_id: songIds[46].id, createdAt: 'NOW()', updatedAt: 'NOW()'},
      {album_id: albumIds[3].id, song_id: songIds[47].id, createdAt: 'NOW()', updatedAt: 'NOW()'},
      {album_id: albumIds[3].id, song_id: songIds[48].id, createdAt: 'NOW()', updatedAt: 'NOW()'},
      {album_id: albumIds[3].id, song_id: songIds[49].id, createdAt: 'NOW()', updatedAt: 'NOW()'},
      {album_id: albumIds[3].id, song_id: songIds[50].id, createdAt: 'NOW()', updatedAt: 'NOW()'}
    ], {});

    await queryInterface.bulkInsert('artists', [
      {name: 'Ratatat', createdAt: 'NOW()', updatedAt: 'NOW()'},
      {name: 'NSYNC', createdAt: 'NOW()', updatedAt: 'NOW()'},
      {name: 'Zac Brown Band', createdAt: 'NOW()', updatedAt: 'NOW()'},
      {name: 'The Beatles', createdAt: 'NOW()', updatedAt: 'NOW()'},
    ], {});

    const artists = await queryInterface.sequelize.query(
      `SELECT id from ARTISTS;`
    );

    const artistIds = artists[0];

    return await queryInterface.bulkInsert('artist_songs', [
      {artist_id: artistIds[0].id, song_id: songIds[0].id, createdAt: 'NOW()', updatedAt: 'NOW()'},
      {artist_id: artistIds[0].id, song_id: songIds[1].id, createdAt: 'NOW()', updatedAt: 'NOW()'},
      {artist_id: artistIds[0].id, song_id: songIds[2].id, createdAt: 'NOW()', updatedAt: 'NOW()'},
      {artist_id: artistIds[0].id, song_id: songIds[3].id, createdAt: 'NOW()', updatedAt: 'NOW()'},
      {artist_id: artistIds[0].id, song_id: songIds[4].id, createdAt: 'NOW()', updatedAt: 'NOW()'},
      {artist_id: artistIds[0].id, song_id: songIds[5].id, createdAt: 'NOW()', updatedAt: 'NOW()'},
      {artist_id: artistIds[0].id, song_id: songIds[6].id, createdAt: 'NOW()', updatedAt: 'NOW()'},
      {artist_id: artistIds[0].id, song_id: songIds[7].id, createdAt: 'NOW()', updatedAt: 'NOW()'},
      {artist_id: artistIds[0].id, song_id: songIds[8].id, createdAt: 'NOW()', updatedAt: 'NOW()'},
      {artist_id: artistIds[0].id, song_id: songIds[9].id, createdAt: 'NOW()', updatedAt: 'NOW()'},
      {artist_id: artistIds[0].id, song_id: songIds[10].id, createdAt: 'NOW()', updatedAt: 'NOW()'},
      {artist_id: artistIds[1].id, song_id: songIds[11].id, createdAt: 'NOW()', updatedAt: 'NOW()'},
      {artist_id: artistIds[1].id, song_id: songIds[12].id, createdAt: 'NOW()', updatedAt: 'NOW()'},
      {artist_id: artistIds[1].id, song_id: songIds[13].id, createdAt: 'NOW()', updatedAt: 'NOW()'},
      {artist_id: artistIds[1].id, song_id: songIds[14].id, createdAt: 'NOW()', updatedAt: 'NOW()'},
      {artist_id: artistIds[1].id, song_id: songIds[15].id, createdAt: 'NOW()', updatedAt: 'NOW()'},
      {artist_id: artistIds[1].id, song_id: songIds[16].id, createdAt: 'NOW()', updatedAt: 'NOW()'},
      {artist_id: artistIds[1].id, song_id: songIds[17].id, createdAt: 'NOW()', updatedAt: 'NOW()'},
      {artist_id: artistIds[1].id, song_id: songIds[18].id, createdAt: 'NOW()', updatedAt: 'NOW()'},
      {artist_id: artistIds[1].id, song_id: songIds[19].id, createdAt: 'NOW()', updatedAt: 'NOW()'},
      {artist_id: artistIds[1].id, song_id: songIds[20].id, createdAt: 'NOW()', updatedAt: 'NOW()'},
      {artist_id: artistIds[1].id, song_id: songIds[21].id, createdAt: 'NOW()', updatedAt: 'NOW()'},
      {artist_id: artistIds[1].id, song_id: songIds[22].id, createdAt: 'NOW()', updatedAt: 'NOW()'},
      {artist_id: artistIds[2].id, song_id: songIds[23].id, createdAt: 'NOW()', updatedAt: 'NOW()'},
      {artist_id: artistIds[2].id, song_id: songIds[24].id, createdAt: 'NOW()', updatedAt: 'NOW()'},
      {artist_id: artistIds[2].id, song_id: songIds[25].id, createdAt: 'NOW()', updatedAt: 'NOW()'},
      {artist_id: artistIds[2].id, song_id: songIds[26].id, createdAt: 'NOW()', updatedAt: 'NOW()'},
      {artist_id: artistIds[2].id, song_id: songIds[27].id, createdAt: 'NOW()', updatedAt: 'NOW()'},
      {artist_id: artistIds[2].id, song_id: songIds[28].id, createdAt: 'NOW()', updatedAt: 'NOW()'},
      {artist_id: artistIds[2].id, song_id: songIds[29].id, createdAt: 'NOW()', updatedAt: 'NOW()'},
      {artist_id: artistIds[2].id, song_id: songIds[30].id, createdAt: 'NOW()', updatedAt: 'NOW()'},
      {artist_id: artistIds[2].id, song_id: songIds[31].id, createdAt: 'NOW()', updatedAt: 'NOW()'},
      {artist_id: artistIds[2].id, song_id: songIds[32].id, createdAt: 'NOW()', updatedAt: 'NOW()'},
      {artist_id: artistIds[2].id, song_id: songIds[33].id, createdAt: 'NOW()', updatedAt: 'NOW()'},
      {artist_id: artistIds[3].id, song_id: songIds[34].id, createdAt: 'NOW()', updatedAt: 'NOW()'},
      {artist_id: artistIds[3].id, song_id: songIds[35].id, createdAt: 'NOW()', updatedAt: 'NOW()'},
      {artist_id: artistIds[3].id, song_id: songIds[36].id, createdAt: 'NOW()', updatedAt: 'NOW()'},
      {artist_id: artistIds[3].id, song_id: songIds[37].id, createdAt: 'NOW()', updatedAt: 'NOW()'},
      {artist_id: artistIds[3].id, song_id: songIds[38].id, createdAt: 'NOW()', updatedAt: 'NOW()'},
      {artist_id: artistIds[3].id, song_id: songIds[39].id, createdAt: 'NOW()', updatedAt: 'NOW()'},
      {artist_id: artistIds[3].id, song_id: songIds[40].id, createdAt: 'NOW()', updatedAt: 'NOW()'},
      {artist_id: artistIds[3].id, song_id: songIds[41].id, createdAt: 'NOW()', updatedAt: 'NOW()'},
      {artist_id: artistIds[3].id, song_id: songIds[42].id, createdAt: 'NOW()', updatedAt: 'NOW()'},
      {artist_id: artistIds[3].id, song_id: songIds[43].id, createdAt: 'NOW()', updatedAt: 'NOW()'},
      {artist_id: artistIds[3].id, song_id: songIds[44].id, createdAt: 'NOW()', updatedAt: 'NOW()'},
      {artist_id: artistIds[3].id, song_id: songIds[45].id, createdAt: 'NOW()', updatedAt: 'NOW()'},
      {artist_id: artistIds[3].id, song_id: songIds[46].id, createdAt: 'NOW()', updatedAt: 'NOW()'},
      {artist_id: artistIds[3].id, song_id: songIds[47].id, createdAt: 'NOW()', updatedAt: 'NOW()'},
      {artist_id: artistIds[3].id, song_id: songIds[48].id, createdAt: 'NOW()', updatedAt: 'NOW()'},
      {artist_id: artistIds[3].id, song_id: songIds[49].id, createdAt: 'NOW()', updatedAt: 'NOW()'},
      {artist_id: artistIds[3].id, song_id: songIds[50].id, createdAt: 'NOW()', updatedAt: 'NOW()'}
    ], {});
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('album_songs', null, {});
    await queryInterface.bulkDelete('artist_songs', null, {});
    await queryInterface.bulkDelete('albums', null, {});
    await queryInterface.bulkDelete('songs', null, {});
    await queryInterface.bulkDelete('artists', null, {});
  }
}