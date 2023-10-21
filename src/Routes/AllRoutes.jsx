import React from "react";
import { Route, Routes } from "react-router-dom/dist";
import { Home } from "../Pages/Home";
import { Login } from "../Pages/Login";
import { PrivateRoute } from "./PrivateRoute";
import { Budget } from "../Pages/Budget";
import { SignUp } from "../Pages/SignUp";

export const AllRoutes = () => {
  return <div>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/signup" element={<SignUp/>}/>
      <Route path="/budget" element={
        <PrivateRoute>
          <Budget/>
        </PrivateRoute>
      }/>
    </Routes>
  </div>;
};
