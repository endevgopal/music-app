import React, { useRef, useState } from 'react';
import Song from './components/Song';
import Player from './components/Player';
import data from './util';
import Library from './components/Library';
import Nav from './components/Nav';

const App = () => {
  const audioRef = useRef(null);

  const [Menu, setMenu] = useState(false);
  const [song, setSong] = useState(data());
  const [currentSong, setCurrentSong] = useState(song[0]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [songInfo, setSongInfo] = useState({
    currentTime: 0,
    duration: 0,
  });

  const onTimeHandler = (e) => {
    const currentTime = e.target.currentTime;
    const duration = e.target.duration;
    setSongInfo({
      ...songInfo,
      currentTime: currentTime,
      duration: duration,
    });
  };

  const news = async () => {
    const currentIndex = song.findIndex((e) => e.id === currentSong.id);
    await setCurrentSong(song[(currentIndex + 1) % song.length]);
    if (isPlaying) await audioRef.current.play();
  };
  return (
    <>
      <div className="App">
        <Nav setMenu={setMenu} Menu={Menu} />
        <Song current={currentSong} />
        <Player
          setSong={setSong}
          songs={song}
          setCurrentSong={setCurrentSong}
          setIsPlaying={setIsPlaying}
          isPlaying={isPlaying}
          current={currentSong}
          audioRef={audioRef}
          onTimeHandler={onTimeHandler}
          songInfo={songInfo}
          setSongInfo={setSongInfo}
        />
        <Library
          Menu={Menu}
          isPlaying={isPlaying}
          songs={song}
          setCurrentSong={setCurrentSong}
          audioRef={audioRef}
          setSong={setSong}
        />
        <audio
          onTimeUpdate={onTimeHandler}
          onLoadedMetadata={onTimeHandler}
          ref={audioRef}
          src={currentSong.audio}
          type="audio/mpeg"
          onEnded={news}
        />
      </div>
    </>
  );
};
export default App;
