import React from "react";
import {Route} from "react-router-dom";
import Register from "./Component/Register";
import Login from "./Component/Login"


const Routers = () => {
    return(
        <>
            <Route path="/" exact component={Login}/>
            <Route path="/register" exact component={Register}/>
            <Route path="/login" exact component={Login}/>
        </>
    )
}

export default Routers