import React from "react";
import {Route} from "react-router-dom";
import Register from "./Component/Register"


const Routers = () => {
    return(
        <>
            <Route path="/" exact/>
            <Route path="/register" exact component={Register}/>
        </>
    )
}

export default Routers