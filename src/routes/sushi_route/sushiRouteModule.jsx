import { Fragment } from "react";
import { Outlet } from "react-router-dom";


const SushiRoute = () => {
    return(
        <Fragment>
              <h1>Hello,I am sushi route!</h1>
              <Outlet/>
        </Fragment>
    )
};

export default SushiRoute;