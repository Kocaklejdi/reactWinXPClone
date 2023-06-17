import React from 'react'
import "./index.css"

function Icon({onclick,image,name}) {
  return (
    <div onClick={onclick} className='icon'>
        <img className='iconImage' src={image}></img>
        <span className='iconName'>{name}</span>
    </div>
  )
}

export default Icon