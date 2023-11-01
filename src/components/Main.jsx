import React, {useEffect, useState} from 'react'

const Main = ({handleClick}) => {
    const totalNum=500;
    const MAX_SCORE=10
    let notFull=true;
    let containerHeight=0;
    const documentHeight=window.outerHeight - 170;
    const documentWidth=Math.ceil(window.outerWidth/50)
    let row=0;
    while(notFull){
        if(documentHeight>containerHeight){
            containerHeight=containerHeight+50;
        }
        else{
            notFull=false;
        }
        row=row+documentWidth;
    }
    row=row+documentWidth
    const [pointsStock, setPointsStock] = useState(Array.from(Array(row), (e=Math.floor(Math.random()*MAX_SCORE),i)=>e))
    const height={height:`${containerHeight}px`};
    const performClick=(e)=>{
        
        let element=e.target;
        handleClick(element.value);
        element.disabled = true;
    }

    return (
    <div className='main_container' style={height}>
        {
           pointsStock.map((val,idx)=><button className='box' key={idx} onClick={performClick} value={val}>{val}</button>)
        }
    </div>
  )
}

export default Main
