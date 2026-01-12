import Header from "../componants/Header/Header";
import { Outlet } from "react-router-dom";

const DashboardLayout = () => {
  return (
    <>
    <main className="page-container">
      <Header />
      <Outlet />
      </main>
    </>
  );
};

export default DashboardLayout;


