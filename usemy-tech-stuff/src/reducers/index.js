import data from "../data"
import { START_FETCHING, FETCH_SUCCESS,FETCH_FAILURE, SET_ID } from '../actions/index'


const initialState = {
    tech: [],
    user_id: "",
     isFetching: false,      
     error: ''
    
}



const reducer = (state =initialState, action) => {
    switch(action.type) {
       case START_FETCHING:
           return {
               ...state,
               isFetching: true,
               error: ''
           }
           case FETCH_SUCCESS:
              console.log(action.payload, "payload1")
            return {
              ...state,
              isFetching: false,
              error: '',
              tech: action.payload
            };
          case FETCH_FAILURE:
            return {
              ...state,
              error: action.payload,
              isFetching: false
            };
          case SET_ID:
              console.log(action.payload, "payload-id")
            return { 
              ...state, 
              user_id: action.payload 
            };


        default:
        return {...state};
    }
  
}


export default reducer;