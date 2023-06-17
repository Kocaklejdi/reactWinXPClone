import React from 'react'
import { useState } from 'react'
import "./index.css"

function StartButton({handleClick}) {
    const normalStart = require("./assets/normalStart.png")
    const highlightedStart = require("./assets/highlightedStart.png")
    const clickedStart = require("./assets/clickedStart.png")

    const [hover,setHover] = useState(false);

  return (
    <img onClick={handleClick} onMouseEnter={()=>setHover(true)} onMouseLeave={()=>setHover(false)} src={hover?highlightedStart:normalStart} className='StartButton'></img>
  )
}

export default StartButton