import React, { useState } from "react"
import { BarContext } from "../Context/BarConext"
import styles from "../Components/About.module.css"

function Contact(){

    const [feedback, setFeedback] = React.useState("")
    const [name, setName] = React.useState("")
    const [email, setEmail] = React.useState("")

    const {show, setShow}  = React.useContext(BarContext)

    const handelSubmit = (e) =>{
        e.preventDefault()

        if(name != "" && email != "" && feedback != ""){

            let msg = {message: feedback, from_name: name, reply_to: email, to_name: "Rohan Ranjan"}
            window.emailjs.send(
                "default_service",
                'template_wdw9f3m',
                msg
            )
            .then((res) =>{
                console.log(res)
                alert("Feedback Sent successfully")
                setName("")
                setEmail("")
                window.location.reload()
            })
            .catch((err) =>{
                console.log(err)
                alert("Some Errors Occured")
            })
        }else{
            alert("Some Field is Missing")
        }
    }
    React.useEffect(() =>{
       if(show){
           setShow(false)
       }else{
           setShow(false)
       }
    }, [show])

    return(
        <>
        <div className = {styles.info}>
            <h2>Contact Info:</h2>
            <ul style = {{listStyleType: "none"}}>
                <li>☎️ 7488635956 </li>
                <li>&#128231; ranjanrohan96@gmail.com</li>
                <li>&#x1f6d2; Hinjewadi Pune 411057</li>
            </ul>
        </div>
        <div className = {styles.main}>
            <h2>Write your Feedback Here</h2>
            <form>
                <input type = "text" value = {name} placeholder = "Enter Name Here" onChange = {(e) => setName(e.target.value)}></input>
                <br></br>
                <br></br>
                <input type = "emaul" value = {email} placeholder = "Enter Email Here" onChange = {(e) => setEmail(e.target.value)}></input>
                <br></br>
                <br></br>
                <textarea rows = "5" cols = "50" placeholder = "Enter your thoughts" onChange = {(e) => setFeedback(e.target.value)}></textarea>
                <br></br>
                <br></br>
                <button onClick = {handelSubmit} className = {styles.btn}> Submit</button>
            </form>
        </div>
        </>
    )
}

export {Contact}