import React from "react";
import {connect} from "react-redux";
import {doLog} from "../React/action"


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
        return (
             <>
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
}

const mapStateToProps = state => {
    return{
        track_log: state.track_log
    }
}

const mapDispatchToProps = dispatch => {
    return{
        doLog: payload => dispatch(doLog(payload))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)