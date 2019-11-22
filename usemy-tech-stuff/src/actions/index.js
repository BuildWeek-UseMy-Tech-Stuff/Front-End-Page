import { axiosWithAuth } from "../utils/axiosWithAuth"


export const START_FETCHING = 'START_FETCHING'
export const FETCH_SUCCESS = 'FETCH_SUCCESS';
export const FETCH_FAILURE = "FETCH_FAILURE";
export const SET_ID = 'SET_ID';
export const SET_USER_RENTALS = 'SET_USER_RENTALS';
export const FETCH_DELETE_TECHPOST_SUCCESS = 'FETCH_DELETETECHPOST_SUCCESS'
export const FETCH_ADD_RENT_SUCCESS = 'FETCH_ADD_RENT_SUCCESS'
export const FETCH_RENTED_ITEMS_SUCCESS = 'FETCH_RENTED_ITEMS_SUCCESS'
export const SET_ITEM_ID = 'SET_ITEM_ID'
// export const FETCH_CREATERENTPOST_SUCCESS = "FETCH_CREATERENTPOST_SUCCESS"


export const storeUserId = (user_id) => dispatch => { 
   
   dispatch({ type: SET_ID, payload: user_id});
}


export const storeUserRentals = (rent) => dispatch => {
    
    dispatch({type: SET_USER_RENTALS, payload: rent})
}
// TechListing Rent
export const fetchAddRentedItem = (id,rented_at, due_back, renter_id ) => dispatch => {
    //id = the id of the rental item you want to rent
    // renter_id = who is renting the item
    axiosWithAuth()
    .post(`https://tech-stuff-api.herokuapp.com/api/rentals/${id}/rent`, {renter_id, rented_at, due_back })
    .then(res => dispatch({ type: FETCH_ADD_RENT_SUCCESS })& console.log(res, "fetchAddRental"))
    .catch(err => dispatch({ type: FETCH_FAILURE, payload: err.response }))
}

// TechListing get
export const fetchTechListing = () => dispatch => {
    dispatch({ type: START_FETCHING });
    axiosWithAuth()
        .get(
            "https://cors-anywhere.herokuapp.com/https://tech-stuff-api.herokuapp.com/api/rentals"
        )
        .then(res => { console.log(res, "techListing get");
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

// account page rented items 
export const fetchRentedItem = (id) => dispatch => {
    dispatch({ type: START_FETCHING });
    axiosWithAuth()
    .get(`https://cors-anywhere.herokuapp.com/https://tech-stuff-api.herokuapp.com/api/users/${id}/rented`)
    .then(res => dispatch({ type: FETCH_RENTED_ITEMS_SUCCESS, payload: res.data.rented }) & console.log(res, "fetchRentedTech"))
    .catch(err => dispatch({ type: FETCH_FAILURE, payload: err.response }))
}




    
// export const storeItemId = (id) => dispatch => {
//     console.log("ACTION STORE ID", id, SET_ITEM_ID)
//     dispatch({type: SET_ITEM_ID, payload: id})
// }

//TechListing post

// export const fetchCreateRentPost = (newPost) => dispatch => { 
//     axiosWithAuth()
//     .post("", newPost)
//     .then(res => dispatch({ type: FETCH_CREATERENTPOST_SUCCESS, payload: newPost }) & console.log(res.data, "fetchCreateRentPost"))
//     .catch(err => dispatch({ type: FETCH_FAILURE, payload: err.response }))
// }