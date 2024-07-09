import React, { useState} from 'react'

const ColourChangingButton = () => {
    const [color,setColor] = useState("000000")
    const [textColor, setTextColor] = useState("black");

    const handleClick =()=>{
        const randomColor = Math.floor(Math.random()* 16777215).toString(16)
        setColor(randomColor)

        const isDark = parseInt(randomColor, 16) > 0xffffff / 2; 
        setTextColor(isDark ? "white" : "black");
    }
  return (
    <div>
        <h2>colourChangingButton</h2>
        <button onClick= {handleClick} style={{ backgroundColor: `#${color}`,color :textColor }} >change me </button>
    </div>
  )
}

export default ColourChangingButton