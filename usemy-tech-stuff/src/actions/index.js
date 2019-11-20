import axios from 'axios'
import { axiosWithAuth } from "../utils/axiosWithAuth"


export const START_FETCHING = 'START_FETCHING'
export const FETCH_SUCCESS = 'FETCH_SUCCESS';
export const FETCH_FAILURE = "FETCH_FAILURE";
export const SET_USERID = "SET_USERID"
// export const FETCH_CREATERENTPOST_SUCCESS = "FETCH_CREATERENTPOST_SUCCESS"






export const storeUserId = id=> { 
    console.log("does this work", id)
    return { type: SET_USERID, payload: id}
}



// TechListing get
export const fetchTechListing = () => dispatch => {
    dispatch({ type: START_FETCHING });
    axiosWithAuth()
        .get(
            "https://cors-anywhere.herokuapp.com/https://tech-stuff-api.herokuapp.com/api/rentals"
        )
        .then(res => { console.log(res);
        dispatch({ type: FETCH_SUCCESS, payload: res.data})})
        .catch(err => dispatch({ type: FETCH_FAILURE, payload: err.response }));
}



//TechListing post

// export const fetchCreateRentPost = (newPost) => dispatch => { 
//     axiosWithAuth()
//     .post("", newPost)
//     .then(res => dispatch({ type: FETCH_CREATERENTPOST_SUCCESS, payload: newPost }) & console.log(res.data, "fetchCreateRentPost"))
//     .catch(err => dispatch({ type: FETCH_FAILURE, payload: err.response }))
// }