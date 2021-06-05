import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faMusic} from '@fortawesome/free-solid-svg-icons'


export default function Nav({setMenu,Menu}) {
  const showMenu=()=>{
    setMenu(()=>setMenu(!Menu))
  }


  return (
    <nav>
      <h1>Music Player</h1>
      <button onClick={showMenu}>Song List <FontAwesomeIcon icon={faMusic}/></button>
    </nav>
  )
}
