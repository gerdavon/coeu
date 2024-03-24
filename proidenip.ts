
const board = new Board();
board.move('a2', 'a4');
const board1 = board.clone();
board.move('b1', 'c3');
const board2 = board.clone();
const actualResult = board.diff(board1, board2, Direction.HORIZONTAL);

