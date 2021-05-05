//this code is adapted from the tic tac toe game we saw in class

//good luck reading this code.. it's a mess... shoud've used a 2D array

//love you guys thanks for a great semester

 let canvas;
 let context;
 let t = 0;
 let i = 0;
 let model = {
   board: "......./......./......./......./......./.......",
   next: "Blue",
 }


function tick() {
  window.requestAnimationFrame(splat);
}

function splat(n) {
  let d = n - t;
  t = n;
  context.clearRect(0,0,canvas.width,canvas.height)


  // Taken from https://www.html5canvastutorials.com/tutorials/html5-canvas-lines/
  for(let i = 0;i < 5;i++) {
    context.beginPath();
    context.moveTo(0,(1+i)*144);
    context.lineTo(1008,(1+i)*144);
    context.strokeStyle = '#000000';
    context.lineWidth = 5;
    context.stroke();
  }
  for(let i=0; i < 6; i++) {
    context.beginPath();
    context.moveTo((1+i)*144, 0);
    context.lineTo((1+i)*144, 1008);
    context.strokeStyle = '#000000';
    context.lineWidth = 5;
    context.stroke();
  }

  for(let i = 0; i <= 6; i++) {
    for(let j = 0; j <= 5; j++) {
      let me = model.board.charAt(i + j * 8);
      if (me == 'B') {
        context.font = "650pt Calibri"
        context.fillStyle = "blue";
	      context.fillText('.', (i*144)-40, (j*144)+120);
      }else if (me == 'R'){
        context.font = "650pt Calibri"
        context.fillStyle = "red";
	      context.fillText('.', (i*144)-40, (j*144)+120);
      }
    }
  }

  //displays board state for debugging
  //context.font = "20pt Calibri"
  //context.fillStyle = "green";
  //context.fillText(JSON.stringify(model), 10, 860);



  //tick();
}

function roundMe(x){ return Math.ceil((x-10)/144)-1 }

function checkWin(){
  //horizontal
  for(let i=0;i<6;i++){
    let t = i*8;
    var count = 0;
    lastSeen = '';
    for (let j=0;j<7;j++){
      if (model.board.charAt(t+j) == lastSeen){
        //console.log("incrementing count");
        count += 1;
        if (count == 3){
          console.log("victory detected");
          victory(lastSeen);
        }
      }else if (model.board.charAt(t+j) == '.'){
        count = 0;
        lastSeen = ' ';
      }else{
        count = 0;
        lastSeen = model.board.charAt(t+j);
      }
    }
  }
  //vertical
  for(let i=0;i<7;i++){
    var count = 0;
    lastSeen = '';
    for (let j=0;j<6;j++){
      let t=j*8
      if (model.board.charAt(t+i) == lastSeen){
        //console.log("incrementing count");
        count += 1;
        if (count == 3){
          console.log("victory detected");
          victory(lastSeen);
        }
      }else if (model.board.charAt(t+i) == '.'){
        count = 0;
        lastSeen = ' ';
      }else{
        count = 0;
        lastSeen = model.board.charAt(t+i);
      }
    }
  }
  //diagonal right
  for(let i=0;i<3;i++){
    count=0;
    var tempRow = i;
    lastSeen = '';
    for(let j=0; tempRow<6 && j<7; tempRow++, j++){
      //console.log(j + "," + tempRow);
      if (model.board.charAt(j+tempRow*8) == lastSeen){
        //console.log("incrementing count");
        count += 1;
        //console.log(count);
        if (count == 3){
          console.log("victory detected");
          victory(lastSeen);
        }
      }else if (model.board.charAt(j+tempRow*8) == '.'){
        count = 0;
        lastSeen = ' ';
      }else{
        count = 0;
        lastSeen = model.board.charAt(j+tempRow*8);
      }
    }
  }
  //console.log("start");
  for(let j=1;j<4;j++){
    count = 0;
    var tempCol = j;
    lastSeen = '';
    for(let i=0; i<6 && tempCol<7; i++, tempCol++){
      //console.log(tempCol + "," + i);
      if (model.board.charAt(tempCol+i*8) == lastSeen){
        //console.log("incrementing count");
        count += 1;
        //console.log(count);
        if (count == 3){
          console.log("victory detected");
          victory(lastSeen);
        }
      }else if (model.board.charAt(tempCol+i*8) == '.'){
        count = 0;
        lastSeen = ' ';
      }else{
        count = 0;
        lastSeen = model.board.charAt(tempCol+i*8);
      }
    }
  }
  //diagonal left
  //console.log("start");
  for(let i=0;i<3;i++){
    count=0;
    var tempRow = i;
    lastSeen = '';
    for(let j=6; tempRow<6 && j>0; tempRow++, j--){
      //console.log(j + "," + tempRow);
      if (model.board.charAt(j+tempRow*8) == lastSeen){
        //console.log("incrementing count");
        count += 1;
        //console.log(count);
        if (count == 3){
          console.log("victory detected");
          victory(lastSeen);
        }
      }else if (model.board.charAt(j+tempRow*8) == '.'){
        count = 0;
        lastSeen = ' ';
      }else{
        count = 0;
        lastSeen = model.board.charAt(j+tempRow*8);
      }
    }
  }
  //console.log("start");
  for(let j=5;j>2;j--){
    count = 0;
    var tempCol = j;
    lastSeen = '';
    for(let i=0; i<6 && tempCol>-1; i++, tempCol--){
      //console.log(tempCol + "," + i);
      if (model.board.charAt(tempCol+i*8) == lastSeen){
        //console.log("incrementing count");
        count += 1;
        //console.log(count);
        if (count == 3){
          console.log("victory detected");
          victory(lastSeen);
        }
      }else if (model.board.charAt(tempCol+i*8) == '.'){
        count = 0;
        lastSeen = ' ';
      }else{
        count = 0;
        lastSeen = model.board.charAt(tempCol+i*8);
      }
    }
  }
  let drawFlag = 0;
  for(let i=0;i<47;i++){
    if(model.board.charAt(i)=='.'){
      drawFlag = 1;
      break;
    }
  }
  if (drawFlag == 0){
    victory('D');
  }
}

function victory(lastSeen){
  if (lastSeen == 'R'){
    document.getElementById('header').innerHTML="Good game";
    p = setTimeout(() => {alert("Red wins!")},0);
    document.location.reload();
  }else if (lastSeen == 'B'){
    document.getElementById('header').innerHTML="Good game";
    p = setTimeout(() => {alert("Blue wins!")},0);
    document.location.reload();
  }else if (lastSeen == 'D'){
    document.getElementById('header').innerHTML="Good game";
    p = setTimeout(() => {alert("It's a draw!")},0);
    document.location.reload();
  }
}

document.addEventListener("DOMContentLoaded", () => {
  //alert("this is running");
  canvas = document.querySelector("#gameCanvas");
  console.log("Got here");
  context = canvas.getContext("2d");
  console.log(context);
  splat();
  //alert("Red starts!");
})


document.addEventListener("click", e => {
  //alert("click detected");
  const [i,j] = [e.x,e.y].map(roundMe);
  console.log ([i,j]);
  //alert("first line isn't broken");
  if (i < 0 || i > 7) return;
  if (j < 0 || j > 6) return;
  var ix = i + j * 8;
  if (model.board.charAt(ix) != '.') {
    return;
  }
  console.log(i,j,ix)
  var temp = ix + 8;
  while (temp < 47){
    if (model.board.charAt(temp) == '.'){
      temp += 8;
      ix += 8;
    }else{
      break;
    }
  }
  if (model.next == 'Blue'){
    model.board =
    model.board.slice(0,ix) +
    'R' +
    model.board.slice(ix+1,47)
  }else if (model.next == 'Red'){
    model.board =
    model.board.slice(0,ix) +
    'B' +
    model.board.slice(ix+1,47)
  }




  if (model.next == 'Blue') {
    document.getElementById('header').innerHTML="Blue's turn";
    //p = setTimeout(() => {alert("Blue turn!")},100);
    model.next = 'Red'
  } else if (model.next == 'Red') {
    document.getElementById('header').innerHTML="Red's turn";
    //p = setTimeout(() => {alert("Red turn!")},100);
    model.next = 'Blue'
  }

  splat();
  checkWin();

})
