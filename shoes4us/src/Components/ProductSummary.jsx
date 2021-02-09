import React from "react"
import { useHistory } from "react-router-dom"
import styles from "../Components/ProductSummary.module.css"
import { CartContext } from "../Context/CartContext"

function ProductSummary(){
    const [price, setFinalPrice] = React.useState(0)
    const [coupan, setCoupan] = React.useState("")
    const [discount, setDiscount] = React.useState(0)
    const history = useHistory()
    const {setCart} = React.useContext(CartContext)

    const [showInput, setShowInput] = React.useState(false)
    const [address, setAddress] = React.useState("")
    const [mobile, setMobile] = React.useState("")
    const [pincode, setPincode] = React.useState("")

    React.useEffect(() =>{
        if(localStorage.getItem("orders") != null){
            let xyz = localStorage.getItem("orders")
            xyz = JSON.parse(xyz)
            console.log(xyz)
            let arr = xyz.map((item) =>{
                return item.price
            })
            let sum = arr.reduce((item, acc) => item + acc)
            setFinalPrice(sum)
        }
    },  [])

    const handelCoupanCode = () => {
        if(coupan == "MASAI"){
            setDiscount(50)
            setCoupan("")
            setShowInput(true)
        } else{
            alert("Invalid Coupan Code")
        }
    }
    const handelBack = () =>{
        history.go(-1)
    }

    const handelOrder = () =>{
        alert("Order Sucessfull")
        setCart(0)
        localStorage.clear()
        history.push("/")
    }
    const handelSubmitADD = () => {
      setShowInput(false)
    }
    return(
        <>
        <div className = {styles.summary_main_container}>
        <div className = {styles.top_div}>
        <h2>COUPONS</h2>
        <div className = {styles.apply_coupen}>
          <input type="text" placeholder="Enter coupon code: MASAI" value = {coupan} onChange = {(e) => setCoupan(e.target.value)}/>
          <button className = {styles.btn_apply} onClick = {handelCoupanCode}>APPLY</button>
        </div>
        </div>
        <div className = {styles.price_div}>
        <div className = {styles.item_price_cal}>
          <h4>PRICE DETAILS</h4>
          <div className = {styles.mrp_price}>
            <h4>Total MRP</h4>
            <sapn className = {styles.show__price}>$ {price}</sapn>
          </div>
          <div className = {styles.dis_price}>
            <h4>Discount on MRP</h4>
            <span className = {styles.dis_amnt}>${ discount}</span>
          </div>
          <div className = {styles.coupen_dis}>
            <h4>Coupon Discount</h4>
            <button className = {styles.btn_apply2}>Apply Coupen</button>
          </div>
        </div>
        <div className = {styles.final_amnt}>
          <h2>Total Amount</h2>
          <h3>$ {price-discount}</h3>
        </div>
       {
         showInput ? <div></div> :  <button className = {styles.place_order_btn} onClick = {handelOrder}>PLACE ORDER</button>
       }
      </div>
        <button className = {styles.go__back} onClick = {handelBack}>GO BACK</button>
        </div>
        <div>
          {
            showInput ? <div className = {styles.take__add}>
              <h3>Enter Some Details Here</h3>
              <textarea rows = "5" cols = "50" value = {address} placeholder = "Enter Full Address" onChange = {(e) => setAddress(e.target.value)}></textarea>
              <br></br>
              <br></br>
              <input type = "text" value = {mobile} placeholder = "Enter Mobile Number" onChange = {(e) => setMobile(e.target.value)}></input>
              <br></br>
              <br></br>
              <input type = "text" value = {pincode} placeholder = "Enter Pincode" onChange = {(e) => setPincode(e.target.value)}></input>
              <br></br>
              <br></br>
              <button onClick = {handelSubmitADD} className = {styles.add__btn}>SUBMIT</button>
              </div>
              :<div></div>
          }
        </div>
        </>
    )
}

export {ProductSummary}