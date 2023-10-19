import axios from "axios";
import {
  LOGIN_FAILURE,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGOUT,
} from "./actionTypes";


const loginReq=()=>{
  return {type:LOGIN_REQUEST}
}

const loginSuc=(payload)=>{
  return {type:LOGIN_SUCCESS,payload:payload}
}

const loginFai=(message)=>{
  return {type:LOGIN_FAILURE,message:message}
}

const logoutSuc=()=>{
  return {type:LOGOUT}
}

export const login = async (dispatch,payload) => {
  try {
    dispatch(loginReq())
    let res=await axios.post('https://spendwise-239r.onrender.com/user',payload)
    console.log(res)
    dispatch(loginSuc(res.data.token))
  } catch (error) {
    console.log(error.response.data.message)
    dispatch(loginFai(error.response.data.message))
  }
};

export const logout = (dispatch) => {
  dispatch(logoutSuc())
};
