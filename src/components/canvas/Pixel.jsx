import React, {useState} from "react";
import styles from "../css/Pixel.module.css"


function Pixel({id, isMousePressed, presentColor, pixelSize}){
    const [backColor, setBackColor] = useState("white")

    const handleMouseDown = ()=>{
        setBackColor(presentColor)
        console.log(`Pixel ${id} pressionado`)
    }

    const handleMouseEnter = ()=>{
        if (isMousePressed){
            setBackColor(presentColor)
            console.log(`Mouse entrou no pixel ${id} com o botão pressionado!`)
        }
    }

    const handleMouseUp = ()=>{
        console.log(`Pixel ${id} liberado`)
    }

    return(
        <div 
        className={styles.Pixel}
        onMouseDown={handleMouseDown}
        onMouseEnter={handleMouseEnter}
        onMouseUp={handleMouseUp}
        style={{ backgroundColor: backColor, height: pixelSize, width: pixelSize }}>
        </div>
    )
}

export default Pixel