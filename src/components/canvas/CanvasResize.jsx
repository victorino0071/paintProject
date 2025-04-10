import React, {useState} from "react"
import styles from "../css/Canvas.module.css"

function CanvasResize({onResize}){

    const [numberRows, setNumberRows] = useState(10)
    const [numberColumns, setNumberColumns] = useState(10)

    const changeRowsValue = (event) =>{
        setNumberRows(event.target.value)
    }

    const changeColumnsValue = (event) =>{
        setNumberColumns(event.target.value)
    }

    const handleClickResize = () =>{
        onResize(numberRows, numberColumns)
    }
    return(
        <div className={styles.ResizeConfig}>
            <div className={styles.divConfig}>
                <p>ROWS</p>
                <input type="number" value={numberRows} onChange={changeRowsValue} className={styles.SizeConfig}/>
            </div>
            <div className={styles.divConfig}>
                <p>COLUMNS</p>
                <input type="number" value={numberColumns} onChange={changeColumnsValue} className={styles.SizeConfig}/>
            </div>
            

            <button className={styles.Resize}onClick={handleClickResize}>Redimensionar</button>
        </div>
    )
}

export default CanvasResize