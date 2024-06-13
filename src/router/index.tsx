import { Route, Routes } from "react-router-dom";

import BillingPage from "@/pages/billing";
import GridPage from "@/pages/grid";
import HomePage from "@/pages/home";
import Layout from "@/layout";
import LoginPage from "@/pages/login";
import SubjectsPage from "@/pages/subjects";

const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" Component={HomePage} />
        <Route path="/materias" Component={SubjectsPage} />
        <Route path="/grade" Component={GridPage} />
        <Route path="/financeiro" Component={BillingPage} />
      </Route>
      <Route path="/login" Component={LoginPage} />
    </Routes>
  );
};

export default AppRoutes;
