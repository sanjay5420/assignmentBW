"use client"
import React,{useState} from 'react'


const count = () => {
    let [number,setNumber] = useState(1)
    const btnIncrement = () => {
        // if(number === 10) return; 
        //stop at 10
        setNumber(number + 1)
    }

    const btnDecrement = () => {
        // if(number === 0) return; 
        // stop at 0
        setNumber(number-1)
    }
  return (
    <div>
        <button onClick={btnDecrement} className='m-5 p-5 bg-pink-200'>Decrease</button>
        {number}
      <button onClick={btnIncrement} className='m-5 p-5 bg-pink-200'>Increase</button>
    </div>
  )
}

export default count
