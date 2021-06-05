import React from 'react'

export default function Song({current}) {
  return (
    <div className="song-container">
      <img src={current.cover} alt={current.name}/>
      <h2>{current.name}</h2>
      <h3>{current.artist}</h3>
    </div>
  )
}
