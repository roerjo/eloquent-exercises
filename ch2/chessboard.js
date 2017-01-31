//Task: Create an 8x8 chessboard in the console

//My solution:

var size = 8;
var startChar;

for(var row = 0; row < size; row++) {
	var layout = "";
    if(row % 2 == 0)
    	startChar = " ";
    else
    	startChar = "#";
	for(var col = 0; col < size; col++) {
    	layout += startChar;
        if(startChar == " ")
        	startChar = "#";
        else
        	startChar = " ";
    }
    console.log(layout)
}

/*
	Eloquent's Solution:
    
    var size = 8;
    var board = "";

    for (var y = 0; y < size; y++) {
      for (var x = 0; x < size; x++) {
        if ((x + y) % 2 == 0)
          board += " ";
        else
          board += "#";
      }
      board += "\n";
    }

console.log(board);
*/
