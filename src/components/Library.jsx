import React from 'react'
import LibrarySong from './LibrarySong'

export default function Library({Menu,setSong,audioRef,songs,setCurrentSong,isPlaying,setIsPlaying}) {
  return (
    
    <div className={`library ${Menu?"active-library":''}`}>
      <h2>Library</h2>
      <div className="library-songs">
          {songs.map((item)=>{
        return(
          <LibrarySong 
          isPlaying={isPlaying}
          key={item.id} 
          song={item} 
          songs={songs}
          setCurrentSong={setCurrentSong}
          audioRef={audioRef}
          setSong={setSong}
         />
        )
      })}
       
      
      </div>
    </div>
  )
}
