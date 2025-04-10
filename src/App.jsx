import Canvas from "./components/canvas/Canvas";
import DownloadButton from "./components/downloadButton";
import CanvasResize from "./components/canvas/canvasResize";
import styles from "./components/css/app.module.css"
import { useState, useRef, useContext } from "react";
import ColorInput from "./components/colorpick/ColorInput";
import { PresentColorContext } from "./components/colorpick/presentColor";

function App(){

    const [pixelRow, setPixelRow] = useState(50)
    const [pixelColumn, setPixelColumn] = useState(55)

    const setNewCanvaSize = (newRows, newColumns) =>{
        setPixelColumn(newColumns)
        setPixelRow(newRows)
    }


    const canvasRef = useRef(null)
    const {presentColor, setPresentColor} = useContext(PresentColorContext)

    return(
        <div className={styles.App}>

            <div className={styles.Drawing}>
                <CanvasResize onResize={setNewCanvaSize}/>
                <Canvas presentColor={presentColor} canvasRef={canvasRef} pixelsColumn={pixelColumn} pixelsRow={pixelRow}/>
                <DownloadButton canvasRef={canvasRef}/>
            </div>            
            <div className={styles.Config}>
                <ColorInput presentColor={presentColor} onColorChange={setPresentColor}/>
            </div>
        </div>
    )
}

export default App
