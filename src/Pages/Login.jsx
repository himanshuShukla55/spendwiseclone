import React, { useState, useEffect } from "react";
// import "./login.css";
import { login } from "../Redux/Reducers/AuthReducer/action";
import { useDispatch, useSelector } from "react-redux";
import { Link, Navigate } from "react-router-dom/dist";
import Loading from "../Components/Loading";

export const Login = () => {
  const dispatch = useDispatch();
  const state = useSelector((store) => store.authState);

  const [formdata, setFormdata] = useState({});
  const handleChange = (e) => {
    const { type, value } = e.target;
    setFormdata({ ...formdata, [type]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    login(dispatch, formdata);
  };

  useEffect(() => {
    if (state.error) {
      alert(state.error);
      return;
    }
  }, [state.error]);

  if (state.isAuth && state.name) {
    return <Navigate to="/" />;
  }

  if (state.loading) return <Loading />;

  return (
    <div className="container">
      <div className="card">
        <h4 className="title">LOGIN</h4>
        <form onSubmit={handleSubmit}>
          <div className="field">
            <input
              id="logemail"
              placeholder="Email"
              className="input-field"
              type="email"
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
              required
              onChange={handleChange}
            />
          </div>
          <button className="btn" type="submit">
            Login
          </button>
        </form>

        <p className="para">
          New Customer{" "}
          <Link className="link" to="/signup">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
};
