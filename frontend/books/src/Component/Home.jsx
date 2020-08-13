import React from "react";
import { Link } from "react-router-dom"

class Home extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <>
            <span className="offset-5 col-2 mt- 5 text-center">
                <Link className="mr-5 text-center" to="/login"><button className="btn btn-success">Login</button></Link>
                <Link className="text-center" to="/register"><button className="btn btn-primary">Register</button></Link>
            </span>
            </>
        )
    }
}

export default (Home)