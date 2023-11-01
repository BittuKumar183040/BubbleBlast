import React, {useEffect, useState} from 'react'

const Heading = ({tPoint}) => {
  const [getHigh, setHigh] = useState(localStorage.getItem("high"))
  useEffect(()=>{
    if(tPoint> getHigh){
      localStorage.setItem("high", tPoint)
      setHigh(tPoint)
    }
  },[tPoint])
  const resetGame=(e)=>{
    console.log(e.target)
    window.location.reload(false)
  }
  return (
    <>
      <div className='container_heading'>
          <p id="total">Total : {tPoint}</p>
          <p id="resetBtn" onClick={resetGame}>QUIT</p>
          <p id="highScore">High Score : {getHigh}</p>
      </div>
    </>
  )
}

export default Heading