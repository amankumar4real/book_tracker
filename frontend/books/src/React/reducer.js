import {fetch_reg, fetch_reg_succ, fetch_reg_fail} from "./actionType";

const initState = {
    track_reg: ""
}

export default (state = initState, {type, payload}) => {
    
    switch(type){

        case fetch_reg_succ:
            console.log(payload.data)
            return{
                ...state,
                track_reg: payload.data.message
            }
        
        default:
            return state
    }
}