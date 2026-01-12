import Header from "../componants/Header/Header";
import Footer from "../componants/Footer/Footer";
import { Outlet } from "react-router-dom";

const HEADER_HEIGHT = 0;

const MainLayout = () => {
  return (
    <>
      <Header />
      <main
        className="page-container"
        style={{
          marginTop: HEADER_HEIGHT,
          minHeight: `calc(100vh - ${HEADER_HEIGHT}px)`,
        }}
      >
        <Outlet />
      </main>

      <Footer />
    </>
  );
};

export default MainLayout;
