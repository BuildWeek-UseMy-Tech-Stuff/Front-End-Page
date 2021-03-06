import data from "../data"
import { START_FETCHING, FETCH_SUCCESS,FETCH_FAILURE, SET_ID, FETCH_DELETE_TECHPOST_SUCCESS, SET_USER_RENTALS, FETCH_ADD_RENT_SUCCESS,FETCH_RENTED_ITEMS_SUCCESS} from '../actions/index'


const initialState = {
    tech: [],
    userId: "",
    postItems:[],
    rentItems:[],
    itemId:'',
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
            
            return { 
              ...state, 
              userId: action.payload
            };
          
          case SET_USER_RENTALS:
              // console.log(action.payload, "SET_USER_RENTALS")
            return {
              ...state,
              postItems: action.payload

            }
        
          case FETCH_ADD_RENT_SUCCESS:
              
            return {
              ...state,
              isFetching: false,
              error: ""
            }
          case FETCH_RENTED_ITEMS_SUCCESS:
              console.log(action.payload, "FETCH_RENTED_ITEMS_SUCCESS")
              return {
                ...state,
                isFetching: false,
                error:'',
                rentItems: action.payload
              }
          case FETCH_DELETE_TECHPOST_SUCCESS:
              console.log(action.payload, "FETCH_DELETE_TECHPOST_SUCCESS")
            return {
              ...state,
              isFetching: false,
              error:"",
              postItems: state.postItems.filter(e => e !== action.payload)
            }

        default:
      
        return {...state};
    }
  
}


export default reducer;



// case SET_ITEM_ID: 
// console.log(action.payload, "SET_ITEM_ID")
// return {
//   ...state,
//   itemId: action.payload

// }