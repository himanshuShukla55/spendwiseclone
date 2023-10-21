import axios from "axios";
import {
  LOGIN_FAILURE,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,

  LOGOUT,
  SIGNUP_FAILURE,
  SIGNUP_REQUEST,
  SIGNUP_SUCCESS,
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

const signupnReq=()=>{
  return {type:SIGNUP_REQUEST}
}

const signupSuc=(payload)=>{
  return {type:SIGNUP_SUCCESS,payload:payload}
}

const signupFai=(message)=>{
  return {type:SIGNUP_FAILURE,message:message}
}

const logoutSuc=()=>{
  return {type:LOGOUT}
}

export const login = async (dispatch,payload) => {
  try {
    dispatch(loginReq())
    let res=await axios.get(`https://spendwise-239r.onrender.com/user?email=${payload.email}`)
    console.log(res)
    let login=false
    let name=""
    if(res.data.length>0){
      res.data.forEach(ele=>{
        if(ele.email===payload.email && ele.password===payload.password){ login=true;name=ele.name }
      })

      if(login){
        dispatch(loginSuc(name))
      }else{
        dispatch(loginFai('Invalid credentials'))
      }

    }else{
      dispatch(loginFai('Invalid credentials'))
    }
    
  } catch (error) {
    console.log(error.response.data.message)
    dispatch(loginFai(error.response.data.message))
  }
};

export const signup = async (dispatch,payload) => {
  try {
    dispatch(signupnReq())
    let res=await axios.post('https://spendwise-239r.onrender.com/user',payload)
    console.log(res)
    dispatch(signupSuc(res.data.name))
  } catch (error) {
    console.log(error.response.data.message)
    dispatch(signupFai(error.response.data.message))
  }
};

export const logout = (dispatch) => {
  dispatch(logoutSuc())
};
