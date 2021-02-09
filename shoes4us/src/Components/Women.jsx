import React, { useState } from "react"
import { BarContext } from "../Context/BarConext"
import { NavBar } from "../Routes/NavBar"
import Axios from "axios"
import styles from "../Components/Men.module.css"
import { useHistory } from "react-router-dom"
import { AuthContext } from "../Context/AuthContext"


function Women(){

    const {show, setShow} = React.useContext(BarContext)
    const [data, setData] = React.useState([])
    const history = useHistory()

    const {isAuth, handelAuth} = React.useContext(AuthContext)

    const getData = () =>{

        Axios.get("https://json-server-mocker-rohan.herokuapp.com/posts")
        .then((res) =>{
            console.log(res.data[0].women)
            setData(res.data[0].women)
            localStorage.setItem("women1", JSON.stringify(res.data[0].women))
        })
    }

    React.useEffect(() =>{
        if(show){
            setShow(false)
        }else{
            setShow(false)
        }
        getData()
    }, [])

    const handelDisplayFull = (id, e) =>{
        if(e.target.value == undefined){
            history.push(`/women/${id}`)
        }
    }

    const handelRedirectWomen = (e) => {
        let path = "/men"
        history.push(path)
    }

    const handelAddToCart = (id) =>{
        if(!isAuth && localStorage.getItem("id") == null){
            alert("You are not Login")
            let path = "/login"
            history.push(path)
        }else{
            history.push(`/women/${id}`)
        }
    }

    return(
        <>
        <NavBar />
        <div className = {styles.link}>
            <div className = {styles.link__to__women} onClick = {handelRedirectWomen}> MEN </div>
        </div>
        <div className =  {styles.conatiner}>
            <div className = {styles.main}>
                {
                    data.map((item) => <div key = {item.id} value = {1} className = {styles.card} onClick = {(e) => handelDisplayFull(item.id, e)}> <img src = {item.img} width = "500" className = {styles.img} alt = {item.id}></img> 
                    <div className = {styles.opps__go}>
                        <div className = {styles.show}>
                        <h2> {item.Brand} </h2> 
                        <h2> ${item.price} </h2>
                        </div>
                        <button className = {styles.add__cart} onClick = {() => handelAddToCart(item.id)} value = {0}> Add To Cart </button>
                        </div>
                        </div>)
                }
            </div>
        </div>
        </>
    )
}

export {Women}