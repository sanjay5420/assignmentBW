'use client'
import React, { useState } from 'react'
import { FaHeart } from "react-icons/fa";

const viber  = () => {
    let [color, setColor] = useState('grey');

    const changeColors = () => {
        setColor(color === "grey" ? "red" : "grey")
    }
    return (
        <div>
            <FaHeart onClick={changeColors} color={color}/>



        </div>
    )
}

export default viber
