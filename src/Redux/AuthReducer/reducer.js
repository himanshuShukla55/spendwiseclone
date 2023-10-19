import {
  LOGIN_FAILURE,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGOUT,
} from "./actionTypes";

// Initial State
const initialState = {
  token: "",
  isAuth: false,
  loading: false,
  error: null,
  success: false,
};

// Reducer
export const authReducer = (state=initialState,{type,payload,message}) => {

  switch (type) {
    case LOGIN_REQUEST:
      return {...state,loading:true}
      break;
      case LOGIN_SUCCESS:
      return {...state,loading:false,token:payload,success:true,isAuth:true,error:null}
      break;
      case LOGIN_FAILURE:
      return {...state,loading:false,error:message}
      break;
      case LOGOUT:
      return {...state,token:"",isAuth:false,success:false}
      break;
  
    default:
      return state
      break;
  }
 
};
