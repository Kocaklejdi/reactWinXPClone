import React from 'react'
import "./index.css"

function StartMenu({isShown}) {
  return (
      <div className={isShown?"StartMenu":"StartMenuHidden"} >
        <div className='StartUserProfile'>
          <img className='fixImage' src={require("./assets/profilepic.PNG")}></img>
          <span className='fixUserName'>Klejdi Koca</span>
        </div>
        <div className='programsFromStartMenu'></div>
      </div>
  )
}

export default StartMenu