import React from "react";
import { Route, Routes } from "react-router-dom/dist";
import { Home } from "../Pages/Home";
import { Login } from "../Pages/Login";
import { PrivateRoute } from "./PrivateRoute";
import Budgets from "../Pages/Budgets/index";
import AddBudget from "../Pages/AddBudget";
import { SignUp } from "../Pages/SignUp";

export const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/add-budget" element={<AddBudget />} />
        <Route
          path="/budget"
          element={
            <PrivateRoute>
              <Budgets />
            </PrivateRoute>
          }
        />
      </Routes>
    </div>
  );
};
