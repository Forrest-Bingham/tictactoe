import React,{useState} from "react"
import "./Game.css";


const Game = () => {

    const [player, setPlayer] = useState("Player 1");
    var gameStarted = true;
    
    function startGame(){

        gameStarted = !gameStarted
        
    }
    

    return (
    <div className="game">
        <div><button onClick={() => startGame()}>Start Game</button></div>
        {console.log(gameStarted, "<--- Game Started")}
        <div>{{gameStarted} ? "The game has started" : "The game has not started"}</div>
        
        <div className="board">
            <div className="square"></div>
            <div className="square"></div>
            <div className="square"></div>
            <div className="square"></div>
            <div className="square"></div>
            <div className="square"></div>
            <div className="square"></div>
            <div className="square"></div>
            <div className="square"></div>
        </div>
    </div>
    )
}
export default Game;