import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faPlay,faAngleLeft,faAngleRight,faPause} from '@fortawesome/free-solid-svg-icons'

export default function Player({setSong,songs,setSongInfo,songInfo,audioRef,current,isPlaying,setIsPlaying,setCurrentSong}) {

const activeSong =async()=>{
  const newSongs =  await songs.map((s) => {
      if (s.id === current.id) {
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
     setSong(newSongs);
}

  const playSong =()=>{
      if(isPlaying){
        audioRef.current.pause()
        setIsPlaying(!isPlaying)
      }else{
        audioRef.current.play()
        setIsPlaying(!isPlaying)
      }
  }

  const getTime=(time)=>{
    return(
      Math.floor(time/60) + ":" + ("0"+Math.floor(time%60)).slice(-2)
    )
  }
  const dragInput=(e)=>{
    audioRef.current.currentTime=e.target.value
      setSongInfo({...songInfo,currentTime:e.target.value})
  }

  const TrackMove =async(direction)=>{
    const currentIndex = songs.findIndex((e)=>e.id === current.id  )
    if(direction ==='forward'){
      await setCurrentSong(songs[(currentIndex +1)%songs.length])
      await activeSong()
       if (isPlaying) {
      await audioRef.current.play();
    }
    }
    if(direction ==='backWord'){
      if((currentIndex -1)%songs.length ===-1 ){
        setCurrentSong(songs[songs.length- 1])
        await activeSong()
      }
      await setCurrentSong(songs[(currentIndex +1)%songs.length])
      await activeSong()
       if (isPlaying) {
      await audioRef.current.play();
    }
    }
    
  }

  return (
    <div className="player">
      <div className="time-control">
        <p>{getTime(songInfo.currentTime)}</p>
        <input
         min={0} 
         onChange={dragInput}
        max={songInfo.duration||0} 
        value={songInfo.currentTime}
        type="range"/>
        <p>{songInfo ? getTime(songInfo.duration):'0:00'}</p>
      </div>
      <div className="play-control">
      <FontAwesomeIcon onClick={()=>TrackMove("backWord")} className="skip-back" size="2x" icon={faAngleLeft} />
      {isPlaying?
      <FontAwesomeIcon onClick={playSong} className="play" size="2x" icon={faPause}/>
      :
       <FontAwesomeIcon onClick={playSong} className="play" size="2x" icon={faPlay}/>
      }
    
      <FontAwesomeIcon onClick={()=>TrackMove("forward")} className="skip-forward" size="2x" icon={faAngleRight}/>
      </div>
    </div>
  )
}
