import React from "react"
import { useHistory } from "react-router-dom"
import styles from "../Components/Cart.module.css"
import { BarContext } from "../Context/BarConext"
import { CartContext } from "../Context/CartContext"

function Cart(){

    const [cartData, setCartData] = React.useState([])
    const {cart, handelCartMinus} = React.useContext(CartContext)
    const history = useHistory()

    const {show, setShow} = React.useContext(BarContext)

    React.useEffect(() =>{
        let data = localStorage.getItem("orders")
        data = JSON.parse(data)
        console.log(data)
        setCartData(data)
        if(show){
            setShow(false)
        }else{
            setShow(false)
        }
    }, [])

    const handelRemoveItems = (id) => {
        console.log("Event is", id)
        let temp = localStorage.getItem("orders")
        temp = JSON.parse(temp)
        let up = temp.filter((item) => {
            if(item.id != id){
                return item
            }
        })

        localStorage.setItem("orders", JSON.stringify(up))
        setCartData(up)
        handelCartMinus()
    }

    const handelGoBack = () =>{
        history.goBack()
    }

    const handelCheckOut = () =>{
        if(cart != 0){
            let path = "/checkout"
            history.push(path)
        }else{
            alert("Cart is Empty")
        }
    }
    return(
        <>
        <div className = {styles.main}>
            <table className = {styles.table}>
                <tbody>
                    {
                        cartData.map((item) => <tr>
                            <td> <img src = {item.img} width = "100" alt = "img" className = {styles.img}></img> </td>
                            <td> {item.brand} </td>
                            <td> {item.size} </td>
                            <td> {item.color} </td>
                            <td> ${item.price} </td>
                            <td> <button className = {styles.btn} onClick = {() => handelRemoveItems(item.id)}> Remove Item </button> </td>
                        </tr>)
                    }
                </tbody>
            </table>
            <div className = {styles.last}>
            <button className = {styles.go__back} onClick = {handelGoBack}>Go Back</button>
            <button className = {styles.checkout} onClick = {handelCheckOut}>Checkout</button>
            </div>
        </div>
        </>
    )
}

export {Cart}