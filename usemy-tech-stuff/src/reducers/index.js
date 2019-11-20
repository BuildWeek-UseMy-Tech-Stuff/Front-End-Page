import data from "../data"
import { START_FETCHING, FETCH_SUCCESS,FETCH_FAILURE, SET_ID} from '../actions/index'


const initialState = {
    tech: [],
    userId: "",
     isFetching: false,      
     error: ''
    
}



const reducer = (state =initialState, action) => {
  console.log("reducer", action.type, action.payload)
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
              console.log(action.payload, "SET_ID")
            return { 
              ...state, 
              userId: action.payload
            };


        default:
          console.log("default: ", action.type, "set id: ", SET_ID)
        return {...state};
    }
  
}


export default reducer;