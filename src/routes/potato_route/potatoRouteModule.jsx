import { Fragment } from "react";
import { Outlet } from "react-router-dom";


const PotatoRoute = () => {
    return(
        <Fragment>
               <h1>Hi,Im potato route</h1>
               <Outlet/>
        </Fragment>
    )
};

export default PotatoRoute;