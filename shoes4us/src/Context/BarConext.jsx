import React from "react";

export const BarContext = React.createContext()

export const BarContextProvider = ({ children }) =>{

    const [show, setShow] = React.useState(false)

    const handelShow = () =>{

        setShow((prev) => !prev)
    }

    const value = {show, handelShow, setShow}

    return(
        <BarContext.Provider value = {value}> {children} </BarContext.Provider>
    )
}