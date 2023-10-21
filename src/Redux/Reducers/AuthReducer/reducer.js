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
      case LOGIN_SUCCESS:
      return {...state,loading:false,name:payload,isAuth:true,error:null}
      case LOGIN_FAILURE:
      return {...state,loading:false,error:message}
      case SIGNUP_REQUEST:
      return {...state,loading:true}
      case SIGNUP_SUCCESS:
      return {...state,loading:false,name:payload,isAuth:true,error:null}
      case SIGNUP_FAILURE:
      return {...state,loading:false,error:message}
      case LOGOUT:
      return {...state,name:"",isAuth:false,}
    default:
      return state
  }
};
