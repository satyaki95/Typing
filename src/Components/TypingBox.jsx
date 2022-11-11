import React,{ createRef,useEffect, useRef, useState} from 'react';

const TypingBox = ({words}) => {

  const [currWordIndex, setcurrWordIndex] = useState(0);
  const [currCharIndex, setcurrCharIndex] = useState(0);

  const inputTextRef = useRef(null);

  const wordSpanRef = Array(words.length).fill(0).map(i=>createRef(null));

  const handleKeyDown = (e) =>{
    let allChildrenSpans = wordSpanRef[currWordIndex].current.childNodes;
   
    
// Space

//Backpace


// Correct and incorrect characters

    if(e.key===allChildrenSpans[currCharIndex].innerText){
      allChildrenSpans[currCharIndex].className='char correct';
    }
    else{
      console.log("incorrect");
      allChildrenSpans[currCharIndex].className='char incorrect';
    }

    setcurrCharIndex(currCharIndex+1);
  }

  const focusInput = ()=>{
    inputTextRef.current.focus();
  }

  useEffect(()=>{
    
    focusInput();
  },[]);


  return (
    <div>
      <div className='type-box'>
        <div className='words'>
          {words.map((word,index)=>(
            <span className='word'ref={wordSpanRef[index]}>
                {word.split("").map((char,idx)=>(
                  <span className='char'>{char}</span>
                ))}
            </span>
          ))}
        </div>
      </div>
      <input 
      type='text' 
      className='hidden-input'
      ref={inputTextRef}
      onKeyDown={((e)=>handleKeyDown(e))}>
        
      </input>

    </div>
  )
}

export default TypingBox;