import React, { useState } from "react"
import styles from "../Components/About.module.css"
import { BarContext } from "../Context/BarConext"

function About(){
    const {show, setShow} = React.useContext(BarContext)
    React.useEffect(() =>{
        if(show){
            setShow(false)
        }else{
            setShow(false)
        }
    }, [show])
    return(
        <>
        <div className = {styles.goal}>
        <div className = {styles.contain}>
         <h2> Shoes4Us - Footwear for Everyone</h2>
        </div>
        <div className = {styles.content}>
            For each one of those shoe fanatics out there, 'Shoes4Us' offers the one-stop goal to pick the correct match of footwear. To satisfy the affection for shoes, 
            we offer heaps of alternatives from a variety of brands all under one roof. At 'Shoes4Us', you can locate a vast accumulation of dashing footwear in all sizes and styles,
            all inside a couple of snaps.  
        </div>
        </div>
        </>
    )
}

export {About}