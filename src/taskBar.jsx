import React from 'react'
import "./index.css"

function TaskBar({children}) {
  return (
    <div className='TaskBar'>
      {children}
    </div>
  )
}

export default TaskBar