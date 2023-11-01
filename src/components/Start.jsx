import React, {useState} from 'react'

const Start = ({menuHandle}) => {
    const [newGame, setNewGame] = useState(false);
    const newGameStart=(e)=>{
        setNewGame(true)
    }
    return (
        <div className='intro'>
            {newGame?
            <>
                <div id="backBlur" onClick={()=>setNewGame(false)}></div>
                <div className='newGame'>
                    <p onClick={menuHandle}>integer</p>
                    <p onClick={menuHandle}>even</p>
                    <p onClick={menuHandle}>odd</p>
                    <p onClick={menuHandle}>prime</p>
                </div>
            </>:null
            }
        
            <div className='introMenu'>
                <h2>Bubble Blast.</h2>
                <div className='introOptions'>
                    <p onClick={menuHandle}>Quick Start</p>
                    <p onClick={newGameStart}>New Game</p>
                    <p onClick={menuHandle}>Options</p>
                    <p onClick={menuHandle}>Exit</p>
                </div>
                <div className='menuInfo'>
                    <p id="menuInfo">Start the single player game</p>
                </div>
            </div>
        </div>
    )
}

export default Start