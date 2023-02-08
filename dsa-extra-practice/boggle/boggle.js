/** Boggle word check.

Given a 5x5 boggle board, see if you can find a given word in it.

In Boggle, you can start with any letter, then move in any NEWS direction.
You can continue to change directions, but you cannot use the exact same
tile twice.

So, for example::

    N C A N E
    O U I O P
    Z Q Z O N
    F A D P L
    E D E A Z

In this grid, you could find `NOON* (start at the `N` in the top
row, head south, and turn east in the third row). You cannot find
the word `CANON` --- while you can find `CANO` by starting at the
top-left `C`, you can 't re-use the exact same `N` tile on the
front row, and there's no other `N` you can reach.

*/

/** Make a board from a string.

For example::

    board = makeBoard(`N C A N E
                        O U I O P
                        Z Q Z O N
                        F A D P L
                        E D E A Z`);

    board.length   // 5
    board[0]       // ['N', 'C', 'A', 'N', 'E']
*/
function makeBoard(boardString) {
  const letters = boardString.split(/\s+/);
  // console.log("boardString:", boardString, "letters:", letters)
  const board = [
    letters.slice(0, 5),
    letters.slice(5, 10),
    letters.slice(10, 15),
    letters.slice(15, 20),
    letters.slice(20, 25),
  ];

  return board;
}

function find(board, word) {
  console.log(board);
  const letterCoords = {};

  for (let y = 0; y < board.length; y++) {
    for (let x = 0; x < board[0].length; x++) {
      let tile = board[y][x]
      if (!letterCoords[tile]) {
        letterCoords[tile] = [];
      }
      letterCoords[tile].push(`${y}-${x}`);
    }
  }
  console.log(letterCoords)

  // NOON
  function _search(word, i = 0) {

    let currLetter = word[i]

    // base case
    if (!letterCoords[currLetter]) {
      debugger;
      return false
    }
    if (i === word.length - 1) {
      debugger;
      return true
    }

    for (let letCoord of letterCoords[word[i]]) {
      let [y, x] = letCoord.split("-")
      y = +y;
      x = +x;
      // check if each one away variation is included in word[i+1] array
      const nextCoords = letterCoords[word[i + 1]];
      debugger;

      if (nextCoords.includes([y + 1, x].join("-"))) {
        debugger;
        _search(word, i + 1);
      } else if (nextCoords.includes([y - 1, x].join("-"))) {
        debugger;
        _search(word, i + 1);
      } else if (nextCoords.includes([y, x + 1].join("-"))) {
        debugger;
        _search(word, i + 1);
      } else if (nextCoords.includes([y, x - 1].join("-"))) {
        debugger;
        _search(word, i + 1);
      } else {
        debugger;
        return false;
      }

    }

  }

  return _search(word)
}

// EXAMPLE TEST

// For example::

const board = makeBoard(`N C A N E
                         O U I O P
                         Z Q Z O N
                         F A D P L
                         E D E A Z`);

// `NOON` should be found (0, 3) -> (1, 3) -> (2, 3) -> (2, 4)::

console.log("NOON", find(board, "NOON"), true);

// `NOPE` should be found (0, 3) -> (1, 3) -> (1, 4) -> (0, 4)::

// console.log("NOPE", find(board, "NOPE"), true);

// // `CANON` can't be found (`CANO` starts at (0, 1) but can't find
// // the last `N` and can't re-use the N)::

// console.log("CANON", find(board, "CANON"), false);

// // You cannot travel diagonally in one move, which would be required
// // to find `QUINE`::

// console.log("QUINE", find(board, "QUINE"), false);

// // We can recover if we start going down a false path (start 3, 0)::

// console.log("FADED", find(board, "FADED"), true);

// An extra tricky case --- it needs to find the `N` toward the top right,
// and then go down, left, up, up, right to find all four `O`s and the `S`::

// const board2 = makeBoard(`E D O S Z
//                           N S O N R
//                           O U O O P
//                           Z Q Z O R
//                           F A D P L`);

// console.log(find(board2, "NOOOOS"), true);
