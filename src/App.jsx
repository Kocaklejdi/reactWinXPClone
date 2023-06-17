import React from 'react'
import TaskBar from './taskBar'
import BackGround from './BackGround'
import "./index.css"
import StartMenu from './StartMenu'
import { useState } from 'react'
import StartButton from './StartButton'
import IconHolder from './IconHolder'
import Icon from './Icon'
import SnakeGame from './SnakeGame'
import WindowDisplay from './WindowDisplay'

function App() {



  const [showMenu,setShowMenu] = useState(false);

  function handleShowMenu(){
    setShowMenu(!showMenu)
    console.log(showMenu)
  }

  const icons = [
    {
      img:require("./assets/textFileImg.jpg"),
      name:"resume.txt",
      content:"resume"
    },
    {
      img:require("./assets/snakegame.PNG"),
      name:"Snake Game.exe",
      content:"snakegame"
    },

  ]

  const [content,setContent] = useState("null");
  const [showContentWindow,setShowContentWindow] = useState(false);

  function handleRendering(content){
    if(content == "snakegame"){
      return(
        <SnakeGame />
      )
    }
  }

  return (
    <div className='App'>
        <BackGround />
          <TaskBar>
            <StartButton handleClick={()=>handleShowMenu()} />
          </TaskBar>
        <StartMenu isShown={showMenu} />
        <IconHolder>
          {icons.map((icon)=>{return(<Icon onclick={()=>{setShowContentWindow(true);setContent(icon.content)}} image={icon.img} name={icon.name}></Icon>)})}
        </IconHolder>
        {
          showContentWindow ?
        <WindowDisplay>
            <div className='handle'>
            <div className='closeButton' onClick={()=>{setShowContentWindow(false)}}>
              <div className='x1'></div>
              <div className='x2'></div>
            </div>
          </div>
          {handleRendering(content)}
        </WindowDisplay>:<></>
        }
    </div>
  )
}

export default App