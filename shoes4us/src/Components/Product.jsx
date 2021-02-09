import React from "react"
import styles from "../Components/Product.module.css"
import { BarContext } from "../Context/BarConext"

function Product(){

    const {show, setShow} = React.useContext(BarContext)

    React.useEffect(() =>{
        if(show){
            setShow(false)
        }else{
            setShow(false)
        }
    }, [])
    return(
        <>
        <div className = {styles.product__container}>
        <div className = {styles.product__main}>
            <h1 style = {styles.tag}>Good Shoes Take You To Good Places</h1>
        </div>
        </div>
        </>
    )
}

export {Product}