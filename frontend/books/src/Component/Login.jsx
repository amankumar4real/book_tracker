import React from "react";
import {connect} from "react-redux";
import {doLog} from "../React/action"
import {Link} from "react-router-dom"


class Login extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            email: "",
            password: ""
        }
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        this.props.doLog(this.state)
    }

    render() {
        const {track_log, login_id} = this.props

        // console.log(track_log)

        if(track_log == true){
            return (
                        <>
                            <span className="offset-5 mb-5 col-2 mt- 5 text-center">
                                <Link className="text-center mr-5" to="/register">Register</Link>
                                <Link className="text-center" to="/">Home</Link>
                            </span>
                            <div className="row mt-5">
                                <div className="offset-4 col-4">
                                    <form>
                                        <div class="form-group">
                                            <label >Email</label>
                                            <input name = "email" value= {this.state.email} onChange={this.handleChange} type="text" class="form-control" placeholder="name@example.com"/>
                                        </div>
                                        <div class="form-group">
                                            <label>Password</label>
                                            <input name = "password" value= {this.state.password} onChange={this.handleChange} type="password" class="form-control"/>
                                        </div>
                                        <button onClick={this.handleSubmit} className="btn btn-primary">Sign Up!</button>
                                    </form>
                                </div>
                            </div>
                            
                        </>
                    )
        }
        else{
            return(
                <div>
                    {this.props.history.push(`/listing/${login_id}`)}
                </div>
            )
        }

        
    }
}

const mapStateToProps = state => {
    return{
        track_log: state.track_log,
        login_id: state.login_id
    }
}

const mapDispatchToProps = dispatch => {
    return{
        doLog: payload => dispatch(doLog(payload))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)