import styles from "../css/ColorPick.module.css"
import { useState, useEffect, useContext } from "react"
import { PresentColorContext } from "./presentColor"

function RecentColor({color}){
    
    const [backColor, setBackColor] = useState("white")

    const {presentColor, setPresentColor} = useContext(PresentColorContext)

    useEffect(()=>{
        setBackColor(color)
    }, [color])

    const changeColor = ()=>{
        setPresentColor(backColor)
    }
    return(
        <div className={styles.RecentColor}
            style={{backgroundColor:backColor}}
            onClick={changeColor}
        >
        </div>
    )
}

export default RecentColor