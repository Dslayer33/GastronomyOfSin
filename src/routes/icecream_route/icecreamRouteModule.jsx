import { Fragment } from "react";
import { Outlet } from "react-router-dom";


const IceCreamRoute = () => {
   return(
       <Fragment>
            <h1>Hi,Im icecream route!</h1>
            <Outlet/>
       </Fragment>
   )
};

export default IceCreamRoute;