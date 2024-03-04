import { Fragment } from "react";
import { Outlet } from "react-router-dom";


const DrinksRoute = () => {
    return(
       <Fragment>
             <h1>Hi,Im drinks route!</h1>
             <Outlet/>
       </Fragment>
    )
};

export default DrinksRoute;