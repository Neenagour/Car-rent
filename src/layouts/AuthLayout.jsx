import { Outlet } from "react-router-dom";

const AuthLayout = () => {
  return (
    <main className="page-container auth-layout">
      <Outlet />
    </main>
  );
};

export default AuthLayout;
