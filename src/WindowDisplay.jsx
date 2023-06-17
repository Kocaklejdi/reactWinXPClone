import React from 'react'
import "./index.css"
import DragDropComponent from './DragDropComponent'

function WindowDisplay({children}) {
  return (
    <DragDropComponent>
        <div className='displayScreen'>
            {children}
        </div>
    </DragDropComponent>
  )
}

export default WindowDisplay