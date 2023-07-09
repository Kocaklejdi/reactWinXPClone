import React from 'react'
import "./index.css"
import DragDropComponent from './DragDropComponent'
import SnakeGame from './SnakeGame'
import Resume from './resume'
import { useState } from 'react'

function WindowDisplay({children}) {

  return (
    <DragDropComponent className="contentHolder">
        <div className='displayScreen'>
            {children}
        </div>
    </DragDropComponent>
  )
}


export default WindowDisplay