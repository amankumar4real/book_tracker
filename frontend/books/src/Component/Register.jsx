import React from "react";
import {connect} from "react-redux";
import {doReg} from "../React/action"


class Register extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            name: "",
            email: "",
            password: "",
            mobile: ""
        }
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    handleSubmit = (event) => {
        event.preventDefault()

        var data = this.state

        data.mobile = Number(this.state.mobile)

        this.props.doReg(data)
    }

    render(){

        if(this.props.track_reg){
            alert(this.props.track_reg)
        }

        return(
            <>
                <div className="row mt-5">
                    <div className="offset-4 col-4">
                        <form>
                            <div class="form-group">
                                <label>Name</label>
                                <input name = "name" value= {this.state.name} onChange={this.handleChange} type="text" class="form-control"/>
                            </div>
                            <div class="form-group">
                                <label >Email</label>
                                <input name = "email" value= {this.state.email} onChange={this.handleChange} type="text" class="form-control" placeholder="name@example.com"/>
                            </div>
                            <div class="form-group">
                                <label>Password</label>
                                <input name = "password" value= {this.state.password} onChange={this.handleChange} type="password" class="form-control"/>
                            </div>
                            <div class="form-group">
                                <label>Mobile</label>
                                <input name = "mobile" value= {this.state.mobile} onChange={this.handleChange} type="text" class="form-control" />
                            </div>
                            <button onClick={this.handleSubmit} className="btn btn-warning">Sign Up!</button>
                        </form>
                    </div>
                </div>
            </>
        )
    }
}

const mapStateToProps = state => {
    return{
        track_reg: state.track_reg
    }
}

const mapDispatchToProps = dispatch => {
    return{
        doReg: payload => dispatch(doReg(payload))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Register)