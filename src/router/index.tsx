import { Route, Routes } from "react-router-dom";

import HomePage from "@/pages/home";
import Layout from "@/layout";
import LoginPage from "@/pages/login";

const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" Component={HomePage} />
      </Route>
      <Route path="/login" Component={LoginPage} />
    </Routes>
  );
};

export default AppRoutes;
