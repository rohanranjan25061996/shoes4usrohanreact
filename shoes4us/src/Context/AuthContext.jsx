import React from "react"

export const AuthContext = React.createContext()

export const AuthContextProvider = ({ children }) => {

    const [isAuth, setAuth] = React.useState(false)

    const handelAuth = () =>{

        setAuth((prev) => !prev)
    }

    const value = {isAuth, handelAuth}

    return(
        <AuthContext.Provider value = {value}> {children} </AuthContext.Provider>
    )
}