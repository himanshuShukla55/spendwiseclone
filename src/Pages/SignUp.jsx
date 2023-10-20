import React,{useState,useEffect} from "react";
// import "./login.css";
import { signup } from "../Redux/Reducers/AuthReducer/action";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom/dist";
import Loading from "../Components/Loading";

export const SignUp = () => {
  
  const dispatch=useDispatch()
  const state=useSelector(store=>store.authState)

  const[formdata,setFormdata]=useState({})
  const handleChange=(e)=>{
    const {name,value}=e.target
    setFormdata({...formdata,[name]:value})
  }

  const handleSubmit=(e)=>{
    e.preventDefault()
    signup(dispatch,formdata)
  }

  useEffect(()=>{
    if(state.error){
      alert(state.error)
      return
    }
  },[state.error])

 if(state.isAuth && state.name){
  return <Navigate to='/'/>
 }

 if(state.isAuth) return <Loading/>

  return (
    <div >
      <div className="card">
        <h4 className="title">Sign Up</h4>
        <form onSubmit={handleSubmit}>

        <div className="field">
           
           <input
            
             placeholder="Name"
             className="input-field"
             type="text"
             name="name"
             required
             onChange={handleChange}
           />
         </div>
          <div className="field">
           
            <input
              id="logemail"
              placeholder="Email"
              className="input-field"
              type="email"
              name="email"
              required
              onChange={handleChange}
            />
          </div>
          <div className="field">
            
            <input
              id="logpass"
              placeholder="Password"
              className="input-field"
              type="password"
              name="password"
              required
              onChange={handleChange}
            />
          </div>
          <button className="btn" type="submit">
            SignUP
          </button>
        </form>
      </div>
    </div>
  );
};
