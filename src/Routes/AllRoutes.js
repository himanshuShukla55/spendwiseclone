import { Route, Routes } from "react-router-dom";
import AddBudget from "../Pages/AddBudget";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/add-budget" element={<AddBudget />} />
    </Routes>
  );
};

export default AllRoutes;
