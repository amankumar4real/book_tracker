import {fetch_reg, fetch_reg_succ, fetch_reg_fail,
        fetch_log, fetch_log_succ, fetch_log_fail
        } from "./actionType";

const initState = {
    track_reg: "",
    track_log: "",
    token: ""
}

export default (state = initState, {type, payload}) => {
    
    switch(type){

        case fetch_reg_succ:
            console.log(payload.data)
            return{
                ...state,
                track_reg: payload.data.message
            }

        case fetch_log_succ:
            console.log(payload.data)
            return{
                ...state,
                track_log: payload.data.message,
                token: payload.token
            }
        
        default:
            return state
    }
}