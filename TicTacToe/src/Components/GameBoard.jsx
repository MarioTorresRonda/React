export default function GameBoard( { onSelectSquare } ) {

    const initialGameBoard = [
        [null, 'X', 'O'],
        [null, null, null],
        [null, null, null]
    ]
    
    // const [gameboard, setGameBoard] = useState( initialGameBoard );
    
    // function handleSelectSquare( rowIndex, colIndex, symbol) {
    //     setGameBoard( (prevGameboard) => {
    //         const updatedBoard = [...prevGameboard.map( innerArray => [...innerArray])];
    //         updatedBoard[rowIndex][colIndex] = symbol;
    //         return updatedBoard;
    //     } )
    //     onSelectSquare();
    // }

    return (
      <ol id="game-board">
        { gameboard.map( ( row, rowindex ) =>  <li key={rowindex}>
                <ol>
                    { row.map( ( playerSymbol, playerSymbolIndex )  => 
                    <li key={playerSymbolIndex}>
                        <button onClick={ onSelectSquare }> {playerSymbol} </button>
                    </li>
                    ) } 
                </ol> 
           </li> ) }
      </ol>
    )
}