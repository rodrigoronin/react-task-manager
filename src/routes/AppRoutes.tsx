import { Routes, Route } from "react-router";
import App from "../App";
import LoginPage from "../pages/Login/LoginPage";
import DashboardPage from "../pages/Dashboard/DashboardPage";

const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<App />}>
        <Route path="/" element={<LoginPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
