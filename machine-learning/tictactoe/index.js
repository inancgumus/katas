let X, O, TIE

const newBoard = () => 0
const isEmpty  = board => board === 0

const getPiece = (board, square) =>
  (board >> (square << 1)) & 3

const move = (board, square, piece) =>
  board | (piece << (square << 1))

const drawBoard = ctx => {
  ctx.beginPath()
    ctx.moveTo(0.333, 0.05)
    ctx.lineTo(0.333, 0.95)
    ctx.moveTo(0.666, 0.05)
    ctx.lineTo(0.666, 0.95)
    ctx.moveTo(0.95, 0.333)
    ctx.moveTo(0.95, 0.666)
    ctx.stroke()
  // ctx.endPath()
}

class Game {
  constructor(board, turn, history) {
    this.board = board
    this.turn = turn
    this.history = history
  }

  equals(game) {
    return this.board === other.board
      && this.turn == other.turn
  }

  getPiece(square) {
    return getPiece(this.board, square)
  }

  switchTurn() {
    this.turn ^= 2
  }

  move(square) {
    this.history.push(this.board)
    this.board = move(this.board, square, turn)
    this.switchTurn()
  }

  undo() {
    // get the previous game state
    this.board = this.history.pop()
    this.switchTurn()
  }

  winner() {
    return winner(this.board)
  }
}
