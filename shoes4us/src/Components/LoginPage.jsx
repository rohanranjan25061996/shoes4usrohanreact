import React from "react"
import styles from "../Components/LoginPage.module.css"
import { v4 as uuid } from 'uuidv4';
import { useHistory } from "react-router-dom";
import {AuthContext} from "../Context/AuthContext"
import { BarContext } from "../Context/BarConext";

function Login(){

    const [user, setUser] = React.useState("")
    const [password, setPassword] = React.useState("")
    const [check, setCheck] = React.useState(false)
    let arr = []
    const history = useHistory()

    const {handelAuth} = React.useContext(AuthContext)

    const {show, setShow} = React.useContext(BarContext)

    const handelInput = (e) =>{
        const {name, type, value} = e.target
        if(name === "user"){
            setUser(value)
        }
        else if(name === "password"){
            setPassword(value)
        } else if(type === "checkbox"){
            setCheck((prev) => !prev)
        }
    }

    React.useEffect(() =>{
        if(check === true){
            let id = uuid()
            arr.push({id})
            localStorage.setItem("id", JSON.stringify(arr))
        }
        if(show){
            setShow(false)
        }else{
            setShow(false)
        }
    }, [check])

    const handelSubmit = () =>{

        if(user !== "" && password !== ""){
            alert("You Log in")
            handelAuth()
            history.goBack()

        } else{
            alert("Some Field is Missing")
        }
    }

    return(
        <>
        <div className = {styles.container}>
            <div className = {styles.login}> <h2> LOGIN </h2> </div>
        <div className = {styles.form}>
            <form>
                <input type = "text" placeholder = "username" className = {styles.input} 
                value = {user}
                name = "user"
                onChange = {handelInput}></input>
                <br />
                <br />
                <input type = "password" placeholder = "password" className = {styles.input}
                value = {password}
                name = "password"
                onChange = {handelInput}></input>
                <br />
                <input type = "checkbox" className = {styles.go}
                value = {true}
                name = "checkbox"
                onChange = {handelInput}></input>
                <label className = {styles.go__name}>Remember Me</label>
            </form>
        </div>
        <button className = {styles.btn} onClick = {handelSubmit}> SUBMIT </button>
        </div>
        </>
    )
}

export {Login}