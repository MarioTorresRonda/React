export default function GameOver({winner, handleRestart}) {

    let gameResult = <p> It's a draw! </p>
    if ( winner ) {
        gameResult = <p> {winner} Won!</p>
    }

    return <div id="game-over">
        <h2> Game Over </h2>
        {gameResult}
        <p> <button onClick={handleRestart} > Rematch! </button> </p>
    </div>
}