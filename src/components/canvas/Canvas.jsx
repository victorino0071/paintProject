import React, {useState, useEffect} from "react"
import styles from "../css/Canvas.module.css"
import Pixel from "./Pixel"

function PixelNumber(number, isMousePressed, setMousePressed, presentColor, pixelSize){
    const pixels = [];
    for (let i = 0; i < number; i++){
        pixels.push(<Pixel
                        pixelSize={pixelSize} 
                        key={i}
                        id={i} 
                        isMousePressed={isMousePressed}
                        setMousePressed={setMousePressed}
                        presentColor = {presentColor}
        />)
    }
    return pixels;
}

function Canvas({presentColor, canvasRef, pixelsRow, pixelsColumn}){

    const pixelAmount = pixelsColumn*pixelsRow;


    const [size, setSize] = useState(2000)
    const pixelSize = pixelsColumn >= pixelsRow ? size / pixelsColumn : size / pixelsRow;


    

    const [isMousePressed, setMousePressed]= useState(false)
    const handleMouseDown = ()=>{
        setMousePressed(true);
    }

    const handleMouseUp = ()=>{
        setMousePressed(false)
    }

    return (
        <div
        ref={canvasRef} 
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp} 
        className={styles.Canvas}
        style={{gridTemplateColumns:`repeat(${pixelsColumn}, 1fr)`,
                gridTemplateRows:`repeat(${pixelsRow}, 1fr)`
        }}
        >
            {PixelNumber(pixelAmount, isMousePressed, setMousePressed, presentColor, pixelSize)}
        </div>
    )
}

export default Canvas