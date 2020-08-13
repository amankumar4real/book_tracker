import React from "react";
import {Route} from "react-router-dom";
import Register from "./Component/Register";
import Login from "./Component/Login"
import Listing from "./Component/Listing"
import Add from "./Component/Add"


const Routers = () => {
    return(
        <>
            <Route path="/" exact component={Login}/>
            <Route path="/register" component={Register}/>
            <Route path="/login" component={Login}/>
            <Route path="/listing/:id" exact component={Listing}/>
            <Route path="/listing/:id/add" component={Add}/>
        </>
    )
}

export default Routers