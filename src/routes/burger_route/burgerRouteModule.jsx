import { Fragment } from "react";
import { Outlet } from "react-router-dom";


const BurgerRoute = () => {
   return(
       <Fragment>
            <h1>Hi,I am BurgerRoute!</h1>
            <Outlet/>
       </Fragment>
   )
};


export default BurgerRoute;