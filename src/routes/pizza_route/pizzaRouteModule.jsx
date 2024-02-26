import { Fragment } from "react";
import { Outlet } from "react-router-dom"; 


const PizzaRoute = () => {
    return(
        <Fragment>
              <h1>Hello,I am pizza route!</h1>
              <Outlet/>
        </Fragment>
    )
};

export default PizzaRoute;