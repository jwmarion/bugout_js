$(document).ready(function () {

function Board(){
  this.level = 1;
  this.grid = new Array();
  for (i=1;i<=25;i++) {
    this.grid[i] = -1;
  }
}

Board.prototype.draw = function(){
  for (i=1;i<=25;i++){
    if(this.grid[i] == 1){
      $('.gameboard div:nth-of-type('+i+')').css('backgroundColor','grey');
    }
    else {
      $('.gameboard div:nth-of-type('+i+')').css('backgroundColor','lightblue');
    }
  }
};

Board.prototype.click = function(num){
  this.grid[num +1] = this.grid[num +1] * -1;
  console.log(num);
  if ((num +1)  % 5 != 0){
    this.grid[num+2] = this.grid[num+2] * -1;
  }
  if (num+1 > 4){
    this.grid[num-4] = this.grid[num-4] * -1;
  }
  if ((num % 5) != 0){
    this.grid[num] = this.grid[num] * -1;
  }
  if (num+1 <= 20){
    this.grid[num+6] = this.grid[num+6] * -1;
  }
};

Board.prototype.checkWin = function(){
  var w = 0;
  this.grid.forEach(function(e){
    if (e == 1){
      w++;
    }
  });
  if (w == 0){
    console.log('win');
    this.level = this.level  +1;
    this.setLevel();
  }
}

Board.prototype.setLevel= function(){
  console.log(this.level);
  if (this.level == 1){
    this.grid[11] = 1;
    this.grid[13] = 1;
    this.grid[15] = 1;
  }
  if(this.level == 2){
    this.grid[1]=1;
    this.grid[3]=1;
    this.grid[5]=1;
    this.grid[6]=1;
    this.grid[8]=1;
    this.grid[10]=1;
    this.grid[16]=1;
    this.grid[18]=1;
    this.grid[20]=1;
    this.grid[21]=1;
    this.grid[23]=1;
    this.grid[25]=1;
  }
  if(this.level==3){
    this.grid[2]=1;
    this.grid[4]=1;
    this.grid[6]=1;
    this.grid[7]=1;
    this.grid[9]=1;
    this.grid[10]=1;
    this.grid[11]=1;
    this.grid[12]=1;
    this.grid[14]=1;
    this.grid[15]=1;
    this.grid[16]=1;
    this.grid[17]=1;
    this.grid[19]=1;
    this.grid[20]=1;
    this.grid[22]=1;
    this.grid[24]=1;
  }
  if(this.level == 4){
    this.grid[6]=1;
    this.grid[7]=1;
    this.grid[9]=1;
    this.grid[10]=1;
    this.grid[16]=1;
    this.grid[20]=1;
    this.grid[21]=1;
    this.grid[22]=1;
    this.grid[24]=1;
    this.grid[25]=1;
  }
  if(this.level==5){
    this.grid[1]=1;
    this.grid[2]=1;
    this.grid[3]=1;
    this.grid[4]=1;

    this.grid[6]=1;
    this.grid[7]=1;
    this.grid[8]=1;
    this.grid[10]=1;

    this.grid[11]=1;
    this.grid[12]=1;
    this.grid[13]=1;
    this.grid[15]=1;

    this.grid[19]=1;
    this.grid[20]=1;

    this.grid[21]=1;
    this.grid[22]=1;
    this.grid[24]=1;
    this.grid[25]=1;
  }

  if (this.level > 5){
    for(var i=0; i<25; i++){
      if(Math.floor((Math.random() * 12) + 1) <= 4){
        board.click(i);
      }
    }
  }
  this.draw();
}

$('.gameboard').on('click','div',function(){
  var list = $('.gameboard div');
  board.click(list.index(this));
  board.draw();
  board.checkWin();
})


board = new Board();
board.setLevel();
board.draw();

});
