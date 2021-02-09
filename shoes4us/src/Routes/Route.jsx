import React from "react"
import { Route, Switch } from "react-router-dom"
import { About } from "../Components/About"
import { Cart } from "../Components/Cart"
import { Contact } from "../Components/Contact"
import { FAQ } from "../Components/FAQ"
import { Login } from "../Components/LoginPage"
import { Men } from "../Components/Men"
import { MenFull } from "../Components/MenFull"
import { Product } from "../Components/Product"
import { ProductSummary } from "../Components/ProductSummary"
import { Women } from "../Components/Women"
import { WomenFull } from "../Components/WomenFull"

function Routes(){

    return(
        <>
        <div>
             <Switch>
                 <Route exact path = "/">
                    <Product />
                 </Route>
                 <Route exact path = "/men">
                     <Men />
                 </Route>
                 <Route exact path = "/men/:id">
                     <MenFull />
                 </Route>
                 <Route exact path = "/women/:id">
                     <WomenFull />
                 </Route>
                 <Route exact path = "/women">
                     <Women />
                 </Route>
                 <Route exact path = "/login">
                     <Login />
                 </Route>
                 <Route exact path = "/checkout">
                     <ProductSummary />
                 </Route>
                 <Route exact path = "/cart">
                    <Cart></Cart>
                 </Route>
                 <Route exact path = "/about">
                    <About></About>
                 </Route>
                 <Route exact path = "/faq">
                    <FAQ></FAQ>
                 </Route>
                 <Route exact path = "/contact">
                    <Contact></Contact>
                 </Route>
                 <Route>
                     <h1>404 Not Found</h1>
                 </Route>
             </Switch>
        </div>
        </>
    )
}

export {Routes}