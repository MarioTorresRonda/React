export default function GameBoard( { onSelectSquare, board } ) {


    
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
        { board.map( ( row, rowindex ) =>  <li key={rowindex}>
                <ol>
                    { row.map( ( playerSymbol, playerSymbolIndex )  => 
                    <li key={playerSymbolIndex}>
                        <button onClick={ () => onSelectSquare( rowindex, playerSymbolIndex ) } disabled={playerSymbol !== null} > {playerSymbol} </button>
                    </li>
                    ) } 
                </ol> 
           </li> ) }
      </ol>
    )
}