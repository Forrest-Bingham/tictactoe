import React,{useState} from "react"
import "./Game.css";
import Square from "./Square.js"


const Game = () => {

    var [gameStarted, setGameStarted] = useState(false)
    var [player1turn, setPlayer1turn] = useState(true)
    
    function startGame(){
        setGameStarted(!gameStarted)
        console.log("Game started is now -> ", gameStarted)
    }

    return (
    <div className="game">
        <div className="gameInfo">
            <div className="start"><button className="startButton" onClick={() => startGame()}>Start Game</button></div>
            <div>{gameStarted ? "The game has started" : "The game has not started"}</div>
            <div>{player1turn ? "It is Player 1's turn" : "It is Player 2's turn"}</div>
        </div>
        <div className="board">
            <Square
            gameStarted={gameStarted}
            player1turn={player1turn}
            setPlayer1turn={setPlayer1turn}
            />
            <Square
            gameStarted={gameStarted}
            player1turn={player1turn}
            setPlayer1turn={setPlayer1turn}
            />
            <Square
            gameStarted={gameStarted}
            player1turn={player1turn}
            setPlayer1turn={setPlayer1turn}
            />
            <div className={`square${gameStarted ? "Started":""}`}></div>
            <div className={`square${gameStarted ? "Started":""}`}></div>
            <div className={`square${gameStarted ? "Started":""}`}></div>
            <div className={`square${gameStarted ? "Started":""}`}></div>
            <div className={`square${gameStarted ? "Started":""}`}></div>
            <div className={`square${gameStarted ? "Started":""}`}></div>
        </div>
    </div>
    )
}
export default Game;