import {fetch_reg, fetch_reg_succ, fetch_reg_fail,
        fetch_log, fetch_log_succ, fetch_log_fail,
        fetch_listing, fetch_listing_succ, fetch_listing_fail,
        fetch_add, fetch_add_succ, fetch_add_fail,
        fetch_del, fetch_del_succ, fetch_del_fail,
        fetch_edit, fetch_edit_succ, fetch_edit_fail
        } from "./actionType";

const initState = {
    track_reg: "",
    track_log: true,
    token: "",
    login_id: "",
    listing_data: ""
}

export default (state = initState, {type, payload}) => {
    
    switch(type){

        case fetch_reg_succ:
            
            return{
                ...state,
                track_reg: payload.data.message
            }

        case fetch_log_succ:
            // console.log(payload)
            return{
                ...state,
                track_log: payload.data.error,
                token: payload.data.token,
                login_id: payload.data.id
            }

        case fetch_listing_succ:
            // console.log(payload)
            return{
                ...state,
                listing_data: payload.result
            }

        case fetch_add_succ:
            console.log(payload)
            return{
                ...state
                // listing_data: payload.result
            }
        
        case fetch_del_succ:
            console.log(payload)
            return{
                ...state
                // listing_data: payload.result
            }

        case fetch_edit_succ:
            console.log(payload)
            return{
                ...state
                // listing_data: payload.result
            }
        
        default:
            return state
    }
}