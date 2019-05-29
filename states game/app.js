const canvas = document.getElementById("canvas");
const stateOutPut = document.getElementById("output");
const results = document.getElementById("result");
const ctx = canvas.getContext("2d");
const canvasHeight = 800;
const canvasWidth = 1200;
canvas.width = canvasWidth;
canvas.height = canvasHeight;
let image = new Image();
image.src = "states.png";
let activeState;
let states = [{name:"alaska", x:132, y:651, size:40},
              {name:"Alabama", x:810, y:544, size:40},
              {name:"Arkansas", x:670, y:490,size:40},
              {name:"Arizona", x:241, y:471, size:40},
              {name:"California", x:80, y:384, size:40},
              {name:"Colorado", x:374, y:361, size:40},
              {name:"Connecticut", x:1066, y:235, size:15},
              {name:"Delaware", x:1036, y:336, size:10},
              {name:"Florida", x:945, y:674, size:30},
              {name:"Georgia", x:891, y:545, size:40},
              {name:"Hawaii", x:410, y:760, size:10},
              {name:"Iowa", x:641, y:279, size:40},
              {name:"Idaho", x:230, y:194, size:40},
              {name:"Illinois", x:730, y:341, size:40},
              {name:"Indiana", x:790, y:335, size:30},
              {name:"Kansas", x:528, y:370, size:40},
              {name:"Kentucky", x:846, y:389, size:30},
              {name:"Louisiana", x:670, y:572, size:30},
              {name:"Massachusetts", x:1071, y:211, size:10},
              {name:"Maryland", x:1029, y:347, size:10},
              {name:"Maine", x:1109, y:96, size:20},
              {name:"Michigan", x:816, y:236, size:30},
              {name:"Minnesota", x:609, y:133, size:40},
              {name:"Missouri", x:663, y:386, size:40},
              {name:"Mississippi", x:735, y:540, size:30},
              {name:"Montana", x:321, y:101, size:40},
              {name:"North Carolina", x:967, y:436, size:30},
              {name:"North Dakota", x:490, y:104, size:30},
              {name:"Nebraska", x:514, y:286, size:30},
              {name:"New Hampshire", x:1078, y:174, size:20},
              {name:"New Jersey", x:1044, y:301, size:20},
              {name:"New Mexico", x:352, y:472, size:40},
              {name:"Nevada", x:146, y:281, size:40},
              {name:"New York", x:1007, y:193, size:30},
              {name:"Ohio", x:856, y:308, size:30},
              {name:"Oklahoma", x:556, y:465, size:30},
              {name:"Oregon", x:103, y:157, size:40},
              {name:"Pennsylvania", x:959, y:273, size:30},
              {name:"Rhode Island", x:1094, y:227, size:10},
              {name:"South Carolina", x:928, y:488, size:30},
              {name:"South Dakota", x:492, y:194, size:30},
              {name:"Tennessee", x:788, y:454, size:30},
              {name:"Texas", x:510, y:579, size:40},
              {name:"Utah",x:253, y:328, size:40},
              {name:"Virginia", x:966, y:374, size:30},
              {name:"Vermont", x:1046, y:151, size:20},
              {name:"Washington", x:123, y:63, size:30},
              {name:"Wisconsin", x:700, y:196, size:30},
              {name:"West Virginia", x:907, y:365, size:20},
              {name:"Wyoming", x:338, y:223, size:40}]



function draw(){
    ctx.drawImage(image, 0, 0, canvasWidth, canvasHeight);
    for(i=0; i < states.length; i++){
      ctx.strokeRect(states[i].x,states[i].y,states[i].size,states[i].size);
    }
    setState();
}

window.onload = draw;


function setState(){
const randomNum = Math.floor(Math.random() * (states.length - 0 )) + 0
activeState = states[randomNum];
stateOutPut.innerText = `click on: ${activeState.name}`;
}


function checkCoords(event) {
  const rect = canvas.getBoundingClientRect();
  const x = event.clientX - rect.left;
  const y = event.clientY - rect.top;
  
  if(x > activeState.x && x < activeState.x + 40 && y > activeState.y && y < activeState.y + 40){
    results.innerHTML = "correct";
    ctx.fillStyle = "green";
    ctx.fillRect(activeState.x,activeState.y,activeState.size,activeState.size);
  } else {
    ctx.fillStyle = "red";
    ctx.fillRect(activeState.x,activeState.y,activeState.size,activeState.size);
    results.innerHTML = "incorrect";
  }
  removeState();
  setState();

}
canvas.onclick = checkCoords;


function removeState(){
  if(states.length > 1){
    let toRemove = states.indexOf(activeState);
    states.splice(toRemove,1);
  } else{
    results.innerText = "Game Over"
  }

}