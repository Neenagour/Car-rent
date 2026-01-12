// App.jsx
import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainLayout from "./layouts/MainLayout";
import AuthLayout from "./layouts/AuthLayout";
import DashboardLayout from "./layouts/DashboardLayout";

import Home from "./pages/Home";
import Cars from "./pages/Cars";
import Login from "./pages/Login";
import CarDetails from "./pages/CarDetails";
import Checkout from "./pages/Checkout";
import Dashboard from "./pages/Dashboard";
import ScrollToTop from "./componants/ScrollToTop";

const App = () => {
  return (
    <BrowserRouter>
    <ScrollToTop/>
      <Routes>
        {/* MAIN WEBSITE */}
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/cars" element={<Cars />} />
          <Route path="/cars/:id" element={<CarDetails />} />
          <Route path="/checkout/:id" element={<Checkout />} />
        </Route>

        <Route element={<DashboardLayout />}>
          <Route path="/dashboard" element={<Dashboard />} />
        </Route>

        {/* AUTH PAGES */}
        <Route element={<AuthLayout />}>
          <Route path="/login" element={<Login />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
