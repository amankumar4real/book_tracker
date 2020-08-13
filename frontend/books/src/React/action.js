import {fetch_reg, fetch_reg_succ, fetch_reg_fail} from "./actionType";
import axios from "axios";

export const fetchReg = payload => ({
    type: fetch_reg,
    payload
})

export const fetchRegSucc = payload => ({
    type: fetch_reg_succ,
    payload
})

export const fetchRegFail = payload => ({
    type: fetch_reg_fail,
    payload
})

// axios calls

export const doReg = payload => dispatch => {
    dispatch(fetchReg)

    return axios.post("http://127.0.0.1:5000/user/register", payload)
    .then(res=> res)
    .then(res=> dispatch(fetchRegSucc(res)))
    .catch(error=>dispatch(fetchRegFail(error)))
}