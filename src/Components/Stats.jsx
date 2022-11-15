import React from 'react';
import Graph from './Graph';

const Stats = ({wpm,accuracy,graphData,correctChars,incorrectChars,extraChars,missedChars}) => {

  const timeSet = new Set();
  const newGraph = graphData.filter((i)=>{
    if(!timeSet.has(i[0])){
      timeSet.add(i[0]);
      return i;
    }
  })
  return (
    <div className="stats-box">
        <div className="left-stats">
            <div className="title">WPM</div>
            <div className="subtitle">{wpm}</div>
            <div className="title">Accuracy</div>
            <div className="subtitle">{accuracy}%</div>
            <div className="title">Characters</div>
            <div className="subtitle">correct-{correctChars}</div>
            <div className="subtitle">incorrect-{incorrectChars}</div>
            <div className="subtitle">missed-{missedChars}</div>
            <div className="subtitle">extra-{extraChars}</div>
        </div>
        <div className="right-stats">
            <Graph graphData={newGraph} color={accuracy<50?'#ff0000':'#00FF00'} />
        </div>
    </div> 
  )
}

export default Stats;