import {
  LOGIN_FAILURE,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGOUT,
  SIGNUP_FAILURE,
  SIGNUP_REQUEST,
  SIGNUP_SUCCESS,
} from "./actionTypes";

// Initial State
const initialState = {
  name: "",
  isAuth: false,
  loading: false,
  error: null,
  
};

// Reducer
export const reducer = (state=initialState,{type,payload,message}) => {

  switch (type) {
    case LOGIN_REQUEST:
      return {...state,loading:true}
      break;
      case LOGIN_SUCCESS:
      return {...state,loading:false,name:payload,isAuth:true,error:null}
      break;
      case LOGIN_FAILURE:
      return {...state,loading:false,error:message}
      break;
      case SIGNUP_REQUEST:
      return {...state,loading:true}
      break;
      case SIGNUP_SUCCESS:
      return {...state,loading:false,name:payload,isAuth:true,error:null}
      break;
      case SIGNUP_FAILURE:
      return {...state,loading:false,error:message}
      break;
      case LOGOUT:
      return {...state,name:"",isAuth:false,}
      break;
  
    default:
      return state
      break;
  }
 
};
