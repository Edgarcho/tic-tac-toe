//back end

//board constructor
function Board(rows, columns) {
  this.boardRows = rows;
  this.boardColumns = columns;
  this.spaces = [];
}

//player constructor
function Player(name) {
  this.playerName = name;
  this.marker = "X";
}

//creates the game board
Board.prototype.boardSpaces = function () {
  for (i = 1, j = 1; j <= this.boardColumns; j++) {
    space = [i, j];
    this.spaces.push(space);
    console.log(space);
  }
  i++;
  for (i = i, j = 1; j <= this.boardColumns; j++) {
    space = [i, j];
    this.spaces.push(space);
    console.log(space);
  }
  i++;
  for (i = i, j = 1; j <= this.boardColumns; j++) {
    space = [i, j];
    this.spaces.push(space);
    console.log(space);
  }
  console.log(this.spaces);
}

//front-end
$(document).ready(function() {
  var newPlayer = new Player("Me");
  $("#bt").click(function(event){
    event.preventDefault();
    var newBoard = new Board(3,3);
    newBoard.boardSpaces();
  });
  $("#game-board div").click(function(event) {
    event.preventDefault();
    $(this).text(newPlayer.marker);
  });
});
