import React from 'react';

const TypingBox = ({words}) => {
  return (
    <>
      <div className='type-box'>
        <div className='words'>
          {words.map((word,index)=>(
            <span className='word'>
                {word.split("").map((char,idx)=>(
                  <span>{char}</span>
                ))}
            </span>
          ))}
        </div>
      </div>


    </>
  )
}

export default TypingBox;