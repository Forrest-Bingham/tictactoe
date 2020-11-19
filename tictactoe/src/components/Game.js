import React,{useState} from "react"
import "./Game.css";


const Game = () => {

    const [player, setPlayer] = useState("Player 1");
    var [gameStarted, setGameStarted] = useState(false)
    var [player1turn, setPlayer1turn] = useState(true)
    
    function startGame(){
        setGameStarted(!gameStarted)
        console.log("Game started is now -> ", gameStarted)
    }

    function chooseSquare(){
        console.log(player1turn, "<-- Before")
        if(player1turn===true){
            {console.log("Player 1 has chosen a square")}
            
        } else {
            {console.log("Player 2 has chosen a square")}
            
        }
        setPlayer1turn(!player1turn)
        console.log(player1turn, "<-- After")
    }
    

    return (
    <div className="game">
        <div className="gameInfo">
            <div className="start"><button className="startButton" onClick={() => startGame()}>Start Game</button></div>
            <div>{gameStarted ? "The game has started" : "The game has not started"}</div>
            <div>{player1turn ? "It is Player 1's turn" : "It is Player 2's turn"}</div>
            <div className="start"><button className="startButton" onClick={() => chooseSquare()}>Choose a Square</button></div>
        </div>
        <div className="board">
            <div className={`square${gameStarted ? "Started":""}`}></div>
            <div className={`square${gameStarted ? "Started":""}`}></div>
            <div className={`square${gameStarted ? "Started":""}`}></div>
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