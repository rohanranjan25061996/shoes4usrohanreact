import React from "react"
import { Link, useHistory, useLocation, useParams } from "react-router-dom"
import { AuthContext } from "../Context/AuthContext"
import { BarContext } from "../Context/BarConext"
import { CartContext } from "../Context/CartContext"
import styles from "../Routes/NavBar.module.css"



function NavBar(){

    const {show, handelShow} = React.useContext(BarContext)
    const {cart, ShoppingCartIcon, setCart} = React.useContext(CartContext)
    const history = useHistory()
    const path = useLocation()

    const {isAuth, handelAuth} = React.useContext(AuthContext)

    const link = [
        {
            to:"/",
            title: "Shoes",
        },

        {
            to:"/about",
            title: "About"
        },

        {
            to:"/faq",
            title: "FAQ"
        },

        {
            to:"/contact",
            title: "Contact US"
        },
    ]

    const handelProduct = (key) =>{
        if(key === "/"){
            handelShow()
        }else{
            handelShow()
        }
    }

    React.useEffect(() =>{
        if(localStorage.getItem("orders") !== null){
            let data = localStorage.getItem("orders")
            data = JSON.parse(data)
            setCart(data.length)
        }
        handelProduct()
    }, [])

    const handelGoCart = () => {
        if(cart !== 0 && isAuth && localStorage.getItem("id") !== null){
            let path = "/cart"
            history.push(path)
        }else{
            if(localStorage.getItem('id') !== null){
                let data = localStorage.getItem("orders")
                data = JSON.parse(data)
                if(data.length === 0){
                    alert("Cart is Empty")
                }else{
                    let path = "/cart"
                    history.push(path)
                }
            }
            else if(path.pathname == "/cart"){
                alert("Already in Cart you are")
            }
            else if(!isAuth){
                alert("You are not Login")
                let path = "/login"
                history.push(path)
            }
            else if( cart == 0){
                alert("Cart is Empty")
            }
        }
    }

    return(
       <>
        <div className = {styles.navbar}>
            {
               link.map(( { to, title } ) =>(
                   <div className = {styles.link__to} key = {to} onClick = {() => handelProduct(to)}> <Link to = {to} className = {styles.link}> {title} </Link> </div>
               ))
            }
            <button className = {styles.cart} onClick = {handelGoCart}> <ShoppingCartIcon></ShoppingCartIcon> 
            <span> {cart == 0 ? "" : cart} </span>
            </button>
        </div>
        <div>
            {
                show && <div className = {styles.product__type}>
                    <Link to = "/men" className = {styles.product__men}> MEN </Link>
                    <Link to = "/women" className = {styles.product__women}> WOMEN </Link>
                </div>
            }
        </div>
       </>
    )
}

export {NavBar}