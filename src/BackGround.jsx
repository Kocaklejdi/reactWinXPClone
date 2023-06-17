import React from 'react'
import "./index.css"

function BackGround() {
    const path = require("./assets/windowsXPBackground.jpg")
  return (
    <div>
        <img src={path} className='Background'></img>
    </div>
  )
}

export default BackGround