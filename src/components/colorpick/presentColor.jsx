import {createContext, useState} from "react"

export const PresentColorContext = createContext()

export const PresentColorProvider= ({children}) =>{
    const [presentColor, setPresentColor] = useState("white")
    return(
        <PresentColorContext.Provider value={{presentColor, setPresentColor}}>
            {children}
        </PresentColorContext.Provider>
    )
}