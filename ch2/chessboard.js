//Task: Create an 8x8 chessboard in the console using newlines

//My solution:

let board = '';
const even = ' # # # #\n', odd = '# # # # \n';

for (let i=0; i<8; i++) {
  board += (i % 2 == 0) ? even : odd;
}

console.log(board);

/*
    Eloquent's Solution:

    let size = 8;
    let board = "";

    for (let y = 0; y < size; y++) {
      for (let x = 0; x < size; x++) {
        if ((x + y) % 2 == 0)
          board += " ";
        else
          board += "#";
      }
      board += "\n";
    }

console.log(board);
*/
