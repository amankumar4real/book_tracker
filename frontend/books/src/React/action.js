import {fetch_reg, fetch_reg_succ, fetch_reg_fail,
        fetch_log, fetch_log_succ, fetch_log_fail
        } from "./actionType";
import axios from "axios";


//register
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


//login
export const fetchLog = payload => ({
    type: fetch_log,
    payload
})

export const fetchLogSucc = payload => ({
    type: fetch_log_succ,
    payload
})

export const fetchLogFail = payload => ({
    type: fetch_log_fail,
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

export const doLog = payload => dispatch => {
    dispatch(fetchLog)

    return axios.post("http://127.0.0.1:5000/user/login", payload)
    .then(res=> res)
    .then(res=> dispatch(fetchLogSucc(res)))
    .catch(error=>dispatch(fetchLogFail(error)))
}