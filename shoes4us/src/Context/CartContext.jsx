import React from "react";
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

export const CartContext = React.createContext() 

  export const CartContextProvider = ({ children }) =>{

    let [cart, setCart] = React.useState(0);

    const handelCart = () =>{
      setCart((prev)=> prev + 1)
    }

    const handelCartMinus = () => {
      setCart((prev) => prev - 1)
    }


    let value = {cart, handelCart, ShoppingCartIcon, setCart, handelCartMinus}
    return(
        <CartContext.Provider value = {value}> {children} </CartContext.Provider>
    )

  }