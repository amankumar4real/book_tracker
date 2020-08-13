import {fetch_reg, fetch_reg_succ, fetch_reg_fail,
        fetch_log, fetch_log_succ, fetch_log_fail,
        fetch_listing, fetch_listing_succ, fetch_listing_fail,
        fetch_add, fetch_add_succ, fetch_add_fail,
        fetch_del, fetch_del_succ, fetch_del_fail,
        fetch_edit, fetch_edit_succ, fetch_edit_fail
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

//listing
export const fetchListing = payload => ({
    type: fetch_listing,
    payload
})

export const fetchListingSucc = payload => ({
    type: fetch_listing_succ,
    payload
})

export const fetchListingFail = payload => ({
    type: fetch_listing_fail,
    payload
})


//add
export const fetchAdd = payload => ({
    type: fetch_add,
    payload
})

export const fetchAddSucc = payload => ({
    type: fetch_add_succ,
    payload
})

export const fetchAddFail = payload => ({
    type: fetch_add_fail,
    payload
})

//delete
export const fetchDel = payload => ({
    type: fetch_del,
    payload
})

export const fetchDelSucc = payload => ({
    type: fetch_del_succ,
    payload
})

export const fetchDelFail = payload => ({
    type: fetch_del_fail,
    payload
})


//update
export const fetchEdit = payload => ({
    type: fetch_edit,
    payload
})

export const fetchEditSucc = payload => ({
    type: fetch_edit_succ,
    payload
})

export const fetchEditFail = payload => ({
    type: fetch_edit_fail,
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

export const doListing = payload => dispatch => {
    dispatch(fetchListing)

    console.log(payload)

    return fetch("http://127.0.0.1:5000/books/listing",{
                method: 'GET',   
                headers: {
                    "Content-Type": "application/json",
                    "Auth": payload
                },
            })
            .then(res=> res.json())
            .then(res=> dispatch(fetchListingSucc(res)))
            .catch(error=>dispatch(fetchListingFail(error)))
}

export const doAdd = payload => dispatch => {
    dispatch(fetchAdd)

    console.log(payload)

    return fetch("http://127.0.0.1:5000/books/add",{
                method: 'POST',   
                headers: {
                    "Content-Type": "application/json",
                    "Auth": payload.token
                },
                body: JSON.stringify(payload.data)
            })
            .then(res=> res.json())
            .then(res=> dispatch(fetchAddSucc(res)))
            .catch(error=>dispatch(fetchAddFail(error)))
}

export const doDel = payload => dispatch => {
    dispatch(fetchDel)

    console.log(payload)

    return fetch("http://127.0.0.1:5000/books/delete",{
                method: 'POST',   
                headers: {
                    "Content-Type": "application/json",
                    "Auth": payload.token
                },
                body: JSON.stringify(payload.data)
            })
            .then(res=> res.json())
            .then(res=> dispatch(fetchDelSucc(res)))
            .catch(error=>dispatch(fetchDelFail(error)))
}

export const doEdit = payload => dispatch => {
    dispatch(fetchEdit)

    console.log(payload)

    return fetch("http://127.0.0.1:5000/books/update",{
                method: 'POST',   
                headers: {
                    "Content-Type": "application/json",
                    "Auth": payload.token
                },
            })
            .then(res=> res.json())
            .then(res=> dispatch(fetchEditSucc(res)))
            .catch(error=>dispatch(fetchEditFail(error)))
}