import { useState } from "react"

import Player from "./Components/Player"
import GameBoard from "./Components/GameBoard"
import Log from "./Components/Log";
import { WINNING_COMBINATIONS } from "./winning-combinations";

function deriveActivePlayer( gameTurns ) {
  var activePlayer = 'X';
  if ( gameTurns.length > 0 && gameTurns[0].player == 'X' ) {
    activePlayer = 'O';
  }
  return activePlayer;
}

const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null]
]

function App() {

  const [gameTurns, setGameTurns] = useState([]);
  const activePlayer = deriveActivePlayer( gameTurns );

  let gameboard = initialGameBoard;
    gameTurns.forEach(element => {
    const {  square, player } = element;
    const { row, col } = square;

    gameboard[row][col] = player
  });

  let winner;

  for (let combinations of WINNING_COMBINATIONS) {
    const firstSquareSymbol = gameboard[combinations[0].row][combinations[0].column];
    const secondSquareSymbol = gameboard[combinations[1].row][combinations[1].column];
    const thirdSquareSymbol = gameboard[combinations[2].row][combinations[2].column];
    if ( firstSquareSymbol && firstSquareSymbol === secondSquareSymbol && firstSquareSymbol === thirdSquareSymbol) {
      winner = firstSquareSymbol;
    }
    
  }

  function handleSelectSquare(rowIndex, colIndex)  {
    setGameTurns ( prevTurns => {
      
      const currentPlayer = deriveActivePlayer( prevTurns );
      
      const updatedTurns = [ { square: { row: rowIndex, col : colIndex }, player : currentPlayer } , ...prevTurns];

      return updatedTurns;
    } )
  }



  return <main>
    <div id="game-container"> 
      <ol id="players" className="highlight-player">
        <Player initialName="Player 1" symbol="X" isActive={activePlayer == "X"} />
        <Player initialName="Player 2" symbol="O" isActive={activePlayer == "O"}/>
      </ol>
      {winner && <p> You won {winner}</p> }
      <GameBoard onSelectSquare={handleSelectSquare} board={gameboard} />
    </div>
    <Log turns={gameTurns} />
  </main>
}

export default App
