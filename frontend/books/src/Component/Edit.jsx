import React from "react";
import {connect} from "react-redux";
import {doEdit} from "../React/action"


class Edit extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            name: "",
            cat_id: "",
            price: "",
            quantity: ""
        }
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()

        var my_data = this.state

        my_data.cat_id = Number(my_data.cat_id)
        my_data.price = Number(my_data.price)
        my_data.quantity = Number(my_data.quantity)

        var path_name = this.props.location.pathname.split("/")
        console.log(path_name)

        my_data.book_id = Number(path_name[path_name.length-1])

        this.props.doEdit({data: this.state, token: this.props.token})

        const {history, login_id} = this.props

        setTimeout(()=>{
            history.push(`/listing/${login_id}`)
        }, 1500)
    }

    render() {
        // const {track_log, login_id} = this.props
        return (
            <>
                <div className="row mt-5">
                    <div className="offset-4 col-4">
                        <form>
                            <div class="form-group">
                                <label >Title</label>
                                <input name = "name" value= {this.state.name} onChange={this.handleChange} type="text" class="form-control"/>
                            </div>
                            <div class="form-group">
                                <label>Price</label>
                                <input name = "price" value= {this.state.price} onChange={this.handleChange} type="text" class="form-control"/>
                            </div>
                            <div class="form-group">
                                <label>Quantity</label>
                                <input name = "quantity" value= {this.state.quantity} onChange={this.handleChange} type="text" class="form-control"/>
                            </div>
                            <div class="form-group">
                                <label>
                                Genre:
                                    <select value={this.state.cat_id} class="form-control" onChange={this.handleChangeSel}>
                                        <option value="1">Thriller</option>
                                        <option value="2">Action and adventure</option>
                                        <option value="3">Classic</option>
                                        <option value="4">Comic book</option>
                                        <option value="5">Children's</option>
                                        <option value="6">Crime</option>
                                        <option value="7">Drama</option>
                                        <option value="8">Fantasy</option>
                                        <option value="9">Mystery</option>
                                        <option value="10">Romance</option>
                                    </select>
                                </label>
                            </div>
                            
                            <button onClick={this.handleSubmit} className="btn btn-primary">Edit</button>
                        </form>
                    </div>
                </div>
                
            </>
                )
        }

}

const mapStateToProps = state => {
    return{
        track_log: state.track_log,
        login_id: state.login_id,
        token: state.token
    }
}

const mapDispatchToProps = dispatch => {
    return{
        doEdit: payload => dispatch(doEdit(payload))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Edit)