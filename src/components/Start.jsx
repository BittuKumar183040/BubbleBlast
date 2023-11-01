import React, {useState} from 'react'

const Start = ({menuHandle}) => {
    const [start, setStart] = useState(false);



    return (
        <div className='intro'>
            <div className='introMenu'>
                <h2>Bubble Blast.</h2>
                <div className='introOptions'>
                    <p onClick={menuHandle}>Resume</p>
                    <p onClick={menuHandle}>New Game</p>
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