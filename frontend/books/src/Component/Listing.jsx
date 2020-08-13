import React from "react";
import {connect} from "react-redux";
import {doListing, doDel, logOut} from "../React/action"
import {Link} from "react-router-dom"

class Listing extends React.Component{
    constructor(props){
        super(props)

        this.state = {

        }
    }

    componentDidMount(){
        if(this.props.token == ""){
            this.props.history.push("/login")
        }
        this.props.doListing(this.props.token)
    }


    handleAdd = () => {
        this.props.history.push(`/listing/${this.props.login_id}/add`)
    }

    handleDelete = (id) => {
        this.props.doDel({data: {book_id: id}, token: this.props.token})

        const {doListing, token} = this.props

        setTimeout(()=>{
            doListing(token)
        }, 1500)
    }

    handleOut = () => {
        this.props.logOut()
    }

    render(){

        const {listing_data, login_id, token} = this.props

        console.log(listing_data)

        if(token == ""){
            this.props.history.push("/login")
        }

        if(listing_data){
            return(
                <>
                    <div class="offset-3 col-6 text-center my-5">
                        <button onClick={this.handleAdd} className="btn btn-success mr-2">Add Books</button>
                        <button onClick={this.handleOut} className="btn btn-danger">LogOut</button>
                    </div>
                    <table class="table table-dark offset-3 col-6">
                        <thead>
                            <tr>
                            <th scope="col">Category</th>
                            <th scope="col">Title</th>
                            <th scope="col">Total Quantity</th>
                            <th scope="col">Price</th>
                            <th scope="col">Author</th>
                            <th scope="col">Edit</th>
                            <th scope="col">Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {listing_data.map((data)=>(
                                
                            <tr className="text-center">
                                    <td>{data.genre}</td>
                                    <td>{data.name}</td>
                                    <td>{data.quantity}</td>
                                    <td>{data.price}</td>
                                    <td>{data.user_name}</td>
                                    {
                                    (login_id == data.user_id)?
                                        <td><Link to={`/listing/edit/${data.id}`}>Edit</Link></td>:
                                        <td>-</td>
                                    }

                                    {
                                    (login_id == data.user_id)?
                                        <td><button onClick={()=>this.handleDelete(data.id)} className="btn btn-sm btn-danger">Delete</button></td>:
                                        <td>-</td>
                                    }
                                </tr> 
                            ))}
                            
                        </tbody>
                    </table>
                
                </>
            )
        }
        else{
            return(
                <>
                </>
            )
            
        }
        
    }
}

const mapStateToProps = state => {
    return{
        listing_data: state.listing_data,
        token: state.token,
        login_id: state.login_id
    }
}

const mapDispatchToProps = dispatch => {
    return{
        doListing: payload => dispatch(doListing(payload)),
        doDel: payload => dispatch(doDel(payload)),
        logOut: payload => dispatch(logOut(payload))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Listing)