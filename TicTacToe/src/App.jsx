
import { useState } from "react"

import Player from "./Components/Player"
import GameBoard from "./Components/GameBoard"
import GameOver from "./Components/GameOver";
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
const initialPlayers = { X : 'Player 1' , O : 'Player 2' };

function App() {

  const [players, setPlayers] = useState( initialPlayers ); 
  const [gameTurns, setGameTurns] = useState([]);
  const activePlayer = deriveActivePlayer( gameTurns );

  let gameboard = [...initialGameBoard.map( array => [...array] )];
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
      winner = players[firstSquareSymbol];
    }
    
  }

  const hasDraw = ( gameTurns.length === 9 && !winner )

  function handleSelectSquare(rowIndex, colIndex)  {
    setGameTurns ( prevTurns => {
      
      const currentPlayer = deriveActivePlayer( prevTurns );
      
      const updatedTurns = [ { square: { row: rowIndex, col : colIndex }, player : currentPlayer } , ...prevTurns];

      return updatedTurns;
    } )
  }

  function handleRestart() {
    setGameTurns( prevTurns => []  );
  }

  function handlePlayerNameChange( player, name ) {
    setPlayers( prevPlayers => {
      return {
        ...prevPlayers,
        [player] : name
      }
    } ) 
  }

  return <main>
    <div id="game-container"> 
      <ol id="players" className="highlight-player">
        <Player initialName={players.X} symbol="X" isActive={activePlayer == "X"} onChangeName={handlePlayerNameChange} />
        <Player initialName={players.O} symbol="O" isActive={activePlayer == "O"} onChangeName={handlePlayerNameChange} />
      </ol>
      { ( winner || hasDraw ) && <GameOver winner={winner}  handleRestart={handleRestart}/> }
      <GameBoard onSelectSquare={handleSelectSquare} board={gameboard} />
    </div>
    <Log turns={gameTurns} />
  </main>
}

export default App
