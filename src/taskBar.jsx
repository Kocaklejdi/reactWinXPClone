import React from 'react'
import "./index.css"
import Time from './Time'

function TaskBar({children}) {
  return (
    <div className='TaskBarHolder'>
      <div className='TaskBar'>
        {children}
      </div>
      <Time></Time>
    </div>
  )
}

export default TaskBar