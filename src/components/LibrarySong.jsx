import React from 'react';

export default function LibrarySong({
  song,
  setCurrentSong,
  isPlaying,
  audioRef,
  songs,
  setSong,
}) {
  const songSelect = async () => {
    await setCurrentSong(song);
    const newSongs = await songs.map((s) => {
      if (s.id === song.id) {
        return {
          ...s,
          active: true,
        };
      } else {
        return {
          ...s,
          active: false,
        };
      }
    });
    await setSong(newSongs);
    if (isPlaying) {
      await audioRef.current.play();
    }
  };

  return (
    <div
      onClick={songSelect}
      className={`library-song ${song.active ? 'selected' : ''}`}
    >
      <img src={song.cover} alt={song.name} />
      <div className="song-description">
        <h3>{song.name}</h3>
        <h4>{song.artist}</h4>
      </div>
    </div>
  );
}
