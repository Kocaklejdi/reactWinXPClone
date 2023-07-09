import React from 'react'

function SnakeGame() {
  return (
    <><iframe className='iFrame' srcDoc='<body style="overflow: hidden;">
    <canvas id = "myCanvas" height = 500px width = 500px style="background-color: white"></canvas>    
    <script>const canvas = document.getElementById("myCanvas");
    canvas.style = `
    border: 2px solid black;
    `
    const ctx = canvas.getContext("2d");

    function drawGameBoard(){
      for(let i = 0; i<41;i++){
      ctx.beginPath();
      ctx.moveTo(20*i,0);
      ctx.lineTo(20*i,canvas.height);
      ctx.stroke();
      }
      for(let i = 0; i<31;i++){
          ctx.beginPath();
          ctx.moveTo(0,20*i);
          ctx.lineTo(canvas.width,20*i);
          ctx.stroke();
      }
  }
  function generateFood(width){
      let num1 = Math.floor(Math.random()*width);
      num1 = num1 - num1%20;
      return num1
  }

    class tail{
      constructor(x,y,ctx){
          this.x = x;
          this.y = y;
          this.ctx = ctx;
          this.drawTail();
      }
      drawTail(){
          ctx.beginPath();    
          ctx.fillStyle = "red";
          ctx.fillRect(this.x*20,this.y*20,20,20);
      }
  }

    class food{
      constructor(x,y,ctx){
          this.x = x;
          this.y = y;
          this.ctx = ctx;
          this.drawFood();
      }
      drawFood(x,y){
          ctx.beginPath();
          ctx.fillStyle = "green";
          ctx.fillRect(this.x*20,this.y*20,20,20);
      }
      chasePlayer(){
          if(time%2 == 0){
          if(this.x < player.x){
              this.x +=2;
          }
          else if(this.y < player.y){
              this.y +=2;
          }
          else if(this.x > player.x){
              this.x -=2;
          }
          else if(this.y > player.y){
              this.y -=2;
          }
      }
      }
  }

    class Controls{
      constructor(){
          this.left = false;
          this.right = false;
          this.up = false;
          this.down = false;
  
          this.#addKeyboardListeners();
      }
      #addKeyboardListeners(){
          document.onkeydown=(event)=>{
              switch(event.key){
                  case "ArrowLeft":
                      this.left = true;
                      this.right = false;
                      this.down = false;
                      this.up = false;
                      break;
                  case "ArrowRight":
                      this.left = false;
                      this.right = true;
                      this.down = false;
                      this.up = false;
                      break;
                  case "ArrowUp":
                      this.left = false;
                      this.right = false;
                      this.down = false;
                      this.up = true;
                      break;
                  case "ArrowDown":
                      this.left = false;
                      this.right = false;
                      this.down = true;
                      this.up = false;
                      break;
              }
          }/*
          document.onkeyup=(event)=>{
              switch(event.key){
                  case "ArrowLeft":
                      this.left = false;
                      break;
                  case "ArrowRight":
                      this.right = false;
                      break;
                  case "ArrowUp":
                      this.up = false;
                      break;
                  case "ArrowDown":
                      this.down = false;
                      break;
              }
          }
          */
      }    
  }
    
 
    
    class body{
        constructor(x,y,ctx){
            this.x = x;
            this.y = y;
            this.ctx = ctx;
            this.controls = new Controls;
            this.draw();
        };
        draw(){
            ctx.beginPath();
            ctx.fillStyle = "red";
            ctx.fillRect(this.x*20,this.y*20,20,20);
        }
        movement(){
            if(this.controls.down){
                this.y += 1;
            }
            else if(this.controls.up){
                this.y -= 1;
            }
            else if(this.controls.left){
                this.x -= 1;
            }
            else if(this.controls.right){
                this.x += 1;
            }
        }
    }
    let time = 0;
    
    
    
    const player =new body(20,15,canvas.getContext("2d"));
    let food1 = new food(generateFood(canvas.width)/20,generateFood(canvas.height)/20,canvas.getContext("2d")) ;
    setInterval(animate,80);
    let tails=[];
    let obj;
    function animate(){
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        if(player.x == food1.x && player.y == food1.y){
           food1 = new food(generateFood(canvas.width)/20,generateFood(canvas.height)/20,canvas.getContext("2d"));
           const tail1 = {x:player.x,y:player.y}
           tails.unshift(tail1);
           for(let i = 0; i<tails.length;i++){
            ctx.beginPath();    
            ctx.fillStyle = "red";
            ctx.fillRect(tails[i].x*20,tails[i].y*20,20,20);
        }
        } else {
    
        }
        if(player.x == 0){
            player.controls.left = false;
        }
        if(player.y == 0){
            player.controls.up = false;
        }
        if(player.x == (canvas.width-20)/20){
            player.controls.right = false;
        }
        if(player.y == (canvas.height-20)/20){
            player.controls.down = false;
        }
    
        const tail1 = {x:player.x,y:player.y}
        tails.unshift(tail1);
        for(let i = 0; i<tails.length;i++){
            ctx.beginPath();    
            ctx.fillStyle = "red";
            ctx.fillRect(tails[i].x*20,tails[i].y*20,20,20);
        }
        tails.pop();
    
        
        player.movement();
        player.draw();
        food1.drawFood();
       //food1.chasePlayer();
        drawGameBoard();
        obj = {
            xcor: player.x,
            ycor: player.y
        };
    time ++;
    }
    
    </script>
  </body>'></iframe>
</>
  )
}

export default SnakeGame