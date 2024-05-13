
'use client'
import React, {useEffect, useState} from 'react'
 
const page = () => {
    const lotteryNumbers = [4123,4225,2332,4332,4352,3215,32345, 32156, 23231]
    const [lotteryWinnerNumber, setLotteryWinnerNumber] = useState(null)
    const [isPaused, setIsPaused] = useState(false)
    
    
    useEffect(() => {
        if(!isPaused){
            setTimeout(() => {
                const randomNum=  Math.floor(Math.random()*lotteryNumbers.length)
                
                const winNumber = lotteryNumbers[randomNum]
                if(winNumber ===  lotteryWinnerNumber){
                    setLotteryWinnerNumber(winNumber+1)
                }else{
                    setLotteryWinnerNumber(winNumber)
                   
                }
              
            }, 200);
        }else{
            alert('winner is '+ lotteryWinnerNumber)
        }
    
      },[lotteryWinnerNumber]);
  return (
    <>
       <div style={{backgroundColor: isPaused ? 'green':'red'  ,width:60+'px', padding:10+'px'}}>
                  {lotteryWinnerNumber}
          </div>
          <button onClick={()=>setIsPaused(true)} className='border border-gray-500 m-2'>Stop</button>
          
    </>
  )
}
//stop -> stop
//stop -> green
 
export default page