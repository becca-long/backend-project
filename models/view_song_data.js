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

