'use client'
import React from 'react'

const page = () => {
    const calculatorKeys = [['C', '<-', '%', '/'],
    ['7', '8', '9', '*'],
    ['4', '5', '6', '-'],
    ['1', '2', '3', '+'],
    ['+/-', '0', '.', '=']]
    return (
        <div>
            {
                calculatorKeys.map((item) => {
                    return (
                        <div className='flex'>
                            {
                                item.map((keys) => {
                                    return <div className='m-1 px-9 py-5 shadow-lg w-8 flex justify-center'>{keys}</div>
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
