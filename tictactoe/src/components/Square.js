import React,{useState} from "react";
import {css} from '@emotion/css';
import "./Square.css";

const Square = (props) => {

    const [owner, setOwner] = useState("None")
    const [color, setColor] = useState("red")
    const [player1Color, setPlayer1Color] = useState("blue")
    const [player2Color, setPlayer2Color] = useState("green")

    const square = css `
    width: 199px;
    height: 199px;
    border: 1px solid black;
    background-color: ${color};
    `
    const squareStarted = css `
    width: 199px;
    height: 199px;
    border: 1px solid black;
    background-color: ${color};
    `
    function chooseSquare(){
      
        if(props.gameStarted===true){
            if(props.player1turn===true){
                {console.log("Player 1 has chosen a square")}
            
            } else {
                {console.log("Player 2 has chosen a square")}
            
            }
            props.setPlayer1turn(!props.player1turn)
            console.log(props.player1turn, "<-- After")
        }
        else{
            console.log("Game has not started. Please start the game before picking a square")
        }
    }
    

    return(

        <div className={`square${props.gameStarted ? "Started":""}`}
        onClick={() => chooseSquare()}
        color={color}
        ></div>
    )
}

export default Square;