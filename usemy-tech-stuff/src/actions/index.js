import axios from 'axios'
import { axiosWithAuth } from "../utils/axiosWithAuth"


export const START_FETCHING = 'START_FETCHING'
export const FETCH_SUCCESS = 'FETCH_SUCCESS';
export const FETCH_FAILURE = "FETCH_FAILURE";


// TechListing get
export const fetchTechListing = () => dispatch => {
    dispatch({ type: START_FETCHING });
    axios
        .get(
            "https://cors-anywhere.herokuapp.com/https://cat-fact.herokuapp.com/facts"
        )
        .then(res => { console.log(res);
        dispatch({ type: FETCH_SUCCESS, payload: res.data.all})})
        .catch(err => dispatch({ type: FETCH_FAILURE, payload: err.response }));
}

