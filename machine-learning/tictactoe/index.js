let X, O, TIE

const newBoard = () => 0
const isEmpty  = board => board === 0
const getPiece = (board, square) =>
  (board >> (square << 1)) & 3


