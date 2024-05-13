'use client'
import React,{useState} from 'react'

const page = () => {

const [output,setOutput] = useState('')

    const calculatorKeys = [['C', '<-', '%', '/'],
    ['7', '8', '9', '*'],
    ['4', '5', '6', '-'],
    ['1', '2', '3', '+'],
    ['+/-', '0', '.', '=']]

// const orangeKeys = ['C','=']
// const crimsonKeys = ['<-', '%', '/','*','+','-'] 
const colorConfig = {
    orangeKeys : ['C','='],
    crimsonKeys : ['<-', '%', '/','*','+','-']
}
const handleClick =(keys)=> {
    if(keys === "C"){
        setOutput('')
    }else if( keys === '='){
        const result = eval(output)
        setOutput(result)
 
    } 
    else if (keys === '<-'){
    const result = output.slice(0,output.length-1)
    setOutput(result)
    }else{
 setOutput(output + keys) 
}
}


    return (
        <div className='bg-black'>
            <div className='text-white text-3xl'> {output}</div>
            {
                calculatorKeys.map((item) => {
                    return (
                        <div className='flex'>
                            {
                                item.map((keys) => {
                                    return <div onClick={() => handleClick(keys)} 
                                    style={{backgroundColor: colorConfig.orangeKeys.includes(keys) ? 'orange' : 'white',
                                        color: colorConfig.crimsonKeys.includes(keys) ? 'orange' : 'black'
                                    }} className='p-2 m-2 w-8 shadow-lg bg-white rounded-lg'>{keys}</div>
                                })
                            } 
                        </div>
                    )
                })
            }
        </div>
    )
}

export default page
