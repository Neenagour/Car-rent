import Sidebar from "../components/Sidebar/Sidebar";
import DetailsRental from "../components/DetailsRental/DetailsRental";
import TopCarRental from "../components/TopRental/TopCarRental";
import RecentTransaction from "../components/RecentTransaction/RecentTransaction";

import "./Dashboard.css";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <Sidebar />

      <div className="content">
        <DetailsRental />

        <div className="right-panel">
          <TopCarRental />
          <RecentTransaction />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
