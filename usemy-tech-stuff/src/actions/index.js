import axios from 'axios'
import { axiosWithAuth } from "../utils/axiosWithAuth"


export const START_FETCHING = 'START_FETCHING'
export const FETCH_SUCCESS = 'FETCH_SUCCESS';
export const FETCH_FAILURE = "FETCH_FAILURE";
export const SET_ID = 'SET_ID';
export const SET_USER_RENTALS = 'SET_USER_RENTALS';
export const FETCH_DELETE_TECHPOST_SUCCESS = 'FETCH_DELETETECHPOST_SUCCESS'

// export const FETCH_CREATERENTPOST_SUCCESS = "FETCH_CREATERENTPOST_SUCCESS"


export const storeUserId = (user_id) => dispatch => { 
    console.log("ACTION STORE USER ID ", user_id, SET_ID);
   dispatch({ type: SET_ID, payload: user_id});
}


export const storeUserRentals = (rent) => dispatch => {
    console.log("ACTION STORE RENTALS", rent, SET_USER_RENTALS)
    dispatch({type: SET_USER_RENTALS, payload: rent})
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


// account page delete

export const fetchDeleteTechPost = (id) => dispatch => {
    axiosWithAuth()
    .delete(`https://cors-anywhere.herokuapp.com/https://tech-stuff-api.herokuapp.com/api/rentals/${id}`)
    .then(res => dispatch({ type: FETCH_DELETE_TECHPOST_SUCCESS, payload: id }) & console.log(res.data, "fetchDeleteTechPost"))
    .catch(err => dispatch({ type: FETCH_FAILURE, payload: err.response }))
}



//TechListing post

// export const fetchCreateRentPost = (newPost) => dispatch => { 
//     axiosWithAuth()
//     .post("", newPost)
//     .then(res => dispatch({ type: FETCH_CREATERENTPOST_SUCCESS, payload: newPost }) & console.log(res.data, "fetchCreateRentPost"))
//     .catch(err => dispatch({ type: FETCH_FAILURE, payload: err.response }))
// }