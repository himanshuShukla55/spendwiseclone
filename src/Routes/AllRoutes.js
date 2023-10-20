import { Route, Routes } from "react-router-dom";
import AddBudget from "../Pages/AddBudget";
import Budgets from "../Pages/Budgets.jsx";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/add-budget" element={<AddBudget />} />
      <Route path="/budgets" element={<Budgets />} />
    </Routes>
  );
};

export default AllRoutes;
