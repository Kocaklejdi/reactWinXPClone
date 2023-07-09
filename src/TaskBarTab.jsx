import React from 'react'
import "./index.css"

function TaskBarTab({name,img}) {
  return (
    <div className='TaskBarTab'>
      <img className='taskBarImage' src={img}></img>
      <span>{name}</span>
    </div>
  )
}

export default TaskBarTab