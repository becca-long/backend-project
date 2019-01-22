/*This file contains a collection of queries in basic SQL (as opposed to sequelize) */
/* They are to be used as a template for the sequelize code and for testing the database */

/* SEARCH for Artist, Song, Album                                    */
/* Use the VIEW song_data just like a table                          */
SELECT album_art, song_title, artist, album_name
FROM song_data
WHERE artist LIKE '<search_string>'
-WHERE album_name LIKE '<search_string>'
-WHERE song_title LIKE '<search_string>'

/* SEARCH the User Playlist by User_id */



/* Query to retrieve all Joined Songs, Artists and Albums  */
/* This is used to create the view song_data               */
/* Columns: album_art, song_title, artist, album_name      */
SELECT
    albums.album_art, songs.title, artists.name, albums.title
FROM
    artists
INNER JOIN
    artist_songs ON artists.id = artist_songs.artist_id
INNER JOIN
    songs ON songs.id = artist_songs.song_id
INNER JOIN
    album_songs ON album_songs.song_id = songs.id
INNER JOIN
    albums ON albums.id = album_songs.album_id


/* CREATE VIEW song_data                       */

CREATE VIEW song_data (album_art, song_title, artist, album_name)
AS SELECT
    albums.album_art, songs.title, artists.name, albums.title
FROM
    artists
INNER JOIN
    artist_songs ON artists.id = artist_songs.artist_id
INNER JOIN
    songs ON songs.id = artist_songs.song_id
INNER JOIN
    album_songs ON album_songs.song_id = songs.id
INNER JOIN
    albums ON albums.id = album_songs.album_id

/* CREATE VIEW playlist_data  */
CREATE VIEW playlist_data (user_id, playlist_title, song_order, song_title, artist, album_name)
AS
SELECT user_playlists.user_id, playlists.title AS playlist_title, playlist_songs.song_order, song_data.song_title, song_data.artist, song_data.album_name
FROM user_playlists
INNER JOIN
	playlists ON playlists.id = user_playlists.playlist_id
INNER JOIN
	playlist_songs ON playlist_songs.playlist_id = playlists.id
INNER JOIN
	song_data ON song_data.song_id = playlist_songs.song_id
