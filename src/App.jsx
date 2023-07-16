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
import Resume from './resume'
import TaskBarTab from './TaskBarTab'
import { useEffect } from 'react'

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


  useEffect(()=>{
    console.log(whatToShow)
  })

  const [content,setContent] = useState("null");
  const [showContentWindow,setShowContentWindow] = useState(false);
  const [whatToShow,setWhatToShow] = useState([]);
  const [itemId,setItemId] = useState(0);

  function filterById(id,array){
    const newArr = [];
    for(let i =0; i<array.length;i++){
      if(array.id != id){
        newArr.push()
      }
    }
    return newArr;
  }

  function handleRendering(content){
    if(content === "snakegame"){
      return(
        <SnakeGame />
      )
    }
    else if(content === "resume"){
      return(
        <Resume></Resume>
      )
    }
  }

  return (
    <div className='App'>
        <BackGround />
          <TaskBar>
            <StartButton handleClick={()=>handleShowMenu()} />
              {whatToShow.map((icon)=>{
                return(
                  <TaskBarTab name={icon.name} img={icon.img} />
                )
              })}
          </TaskBar>
        <StartMenu isShown={showMenu}>
              <div>
                hello
              </div>
        </StartMenu>>
        <IconHolder>
          {icons.map((icon)=>{return(<Icon onclick={()=>{
            const obj = {
              img:icon.img,
              name:icon.name,
              content:icon.content,
              id:itemId
            };
            setItemId(itemId + 1);
            setShowContentWindow(true);
            setWhatToShow(whatToShow => [...whatToShow,obj])}} 
            image={icon.img} name={icon.name}></Icon>)})}
        </IconHolder>
      {
        whatToShow.map((icon)=>{
          return(
            <WindowDisplay>
              <div className='handle'>
                  <div className='closeButton' onClick={()=>{setWhatToShow(whatToShow.filter((item)=>{
                    if(item.id != icon.id){
                      return item;
                    }
                  }))}}>
                    <div className='x1'></div>
                    <div className='x2'></div>
                  </div>
              </div>
              {handleRendering(icon.content)}
            </WindowDisplay>
          )
        })
      }
    </div>
  )
}

export default App