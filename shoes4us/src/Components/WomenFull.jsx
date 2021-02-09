import React from "react"
import { useHistory, useParams } from "react-router-dom"
import styles from "../Components/MenFull.module.css"
import { AuthContext } from "../Context/AuthContext";
import { CartContext } from "../Context/CartContext";
import {uuid} from "uuidv4"
import { BarContext } from "../Context/BarConext";


function WomenFull(){

    const history = useHistory()
    const {id} = useParams()
    let main;
    const [mainData, setMainData] = React.useState([])
    const [color, setColor] = React.useState(null)
    const [size, setSize] = React.useState(0)
    const [price, setPrice] = React.useState(0)
    const [brand, setBrand] = React.useState("")
    const [img, setImg] = React.useState(null)

    const {isAuth, handelAuth} = React.useContext(AuthContext)
    const {cart, handelCart} = React.useContext(CartContext)
    const {show, setShow} = React.useContext(BarContext)

    React.useEffect(() =>{
        let data = localStorage.getItem("women1")
        data = JSON.parse(data)
        main = data.filter((item) => {
            if(item.id == id){
                return item
            }
        })
        console.log(main)
        setMainData(main)
        console.log("main Data is ",mainData)

        if(show){
            setShow(false)
        }else{
            setShow(false)
        }

    }, [])

    const handelInput = (e) =>{
        const {name, value} = e.target
        if(name === "option"){
            setSize(value)
        } else{
            setColor(e.target.textContent)
            setPrice(mainData[0].price)
            setBrand(mainData[0].Brand)
            setImg(mainData[0].img)
            console.log()
        }
    }

    const handelCartFull = () =>{
        if(!isAuth && localStorage.getItem("id") == null){
            let path = "/login"
            alert("You are not Login")
            history.push(path)
        } else{
            if(price != 0 && color != null && size != 0){

                let local = {
                    id: uuid(),
                    price: price,
                    color: color,
                    size: size,
                    img:img,
                    brand: brand
                }
    
                if(localStorage.getItem("orders") == null){
                    console.log("IF")
                    let arr = []
                    arr.push(local)
                    localStorage.setItem("orders", JSON.stringify(arr))
                    handelCart()
                }
                else{
                    console.log("ELSE")
                    let data = localStorage.getItem("orders")
                    data = JSON.parse(data)
                    data.push(local)
                    localStorage.setItem("orders", JSON.stringify(data))
                    handelCart()
                }
            } else{
                alert("Choose Color and Size")
            }
    }

}
        const handelBack = () =>{
            history.go(-1)
        }

        const handelCheckout = () => {
            if(cart != 0){
                let path = "/checkout"
                history.push(path)
            }else{
                alert("Cart is Empty")
            }
        }

        const handelGoToCart = () =>{
            if(localStorage.getItem("orders") != null && isAuth && localStorage.getItem("id") != null){
                let path = "/cart"
                history.push(path)
            }else{
                if(!isAuth){
                    let path = "/login"
                    alert("You are not Login")
                    history.push(path)
                }else{
                    if(cart != 0){
                        let path = "/cart"
                        history.push(path)
                    }else{
                        alert("Add some item in Cart")
                    }
                }
            }
        }

    return(
        <>
        <div className = {styles.main}>
        <div className = {styles.conatiner}>
            {
                mainData.map((item) => <div key = {item.id} className = {styles.sub}>
                    <div className = {styles.first}>
                        <img src = {item.img} alt = {item.name} width = "500"></img>
                        <div className = {styles.first__color}> <p value = {item.color[0]} onClick = {handelInput} name = "color"> {item.color[0]} </p> 
                        <p value = {item.color[1]} onClick = {handelInput} name = "color"> {item.color[1]} </p>
                        <p value = {item.color[2]} onClick = {handelInput} name = "color"> {item.color[2]} </p>
                        </div>
                        <button onClick = {handelBack} className = {styles.go__back}>BACK</button>
                    </div>
                    <div className = {styles.second}>
                        <div className = {styles.second__sub__1}>
                            <h2> {item.Brand} </h2>
                            <h3> {item.description} </h3>
                            <h2> Price- ${item.price} </h2>
                        </div>
                        <div className = {styles.second__sub__2}>
                            <h2 className = {styles.select__size}>Select Size</h2>
                            <div className = {styles.custom_select}>
                            <select onChange = {handelInput} name = "option">
                                <option>SIZE</option>
                                <option value = {item.size[0]} > {item.size[0]} </option>
                                <option value = {item.size[1]}> {item.size[1]} </option>
                                <option value = {item.size[2]}> {item.size[2]} </option>
                                <option value = {item.size[3]}> {item.size[3]} </option>
                            </select>
                            </div>
                        </div>
                        <div>
                            <button className = {styles.add__to__cart} onClick = {handelCartFull}> Add To Cart </button>
                            <button className = {styles.go__to__cart} onClick = {handelGoToCart}>Go To Cart</button>
                        </div>
                        <button className = {styles.checkout} onClick = {handelCheckout}>Check Out</button>
                    </div>
                </div>)
            }
        </div>
        </div>
        </>
    )
}

export {WomenFull}