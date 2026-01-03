// import { Row, Col } from "antd";
// import SidebarFilter from "../componants/SidebarFilter/SidebarFilter";
// import CarGrid from "../componants/CarGrid/CarGrid";

// const Cars = () => {
//   return (
//     <div style={{ padding: 24 }}>
//       <Row gutter={24}>
//         {/* LEFT SIDEBAR */}
//         <Col xs={24} md={6} lg={5}>
//           <SidebarFilter />
//         </Col>

//         {/* RIGHT CONTENT */}
//         <Col xs={24} md={18} lg={19}>
//           <CarGrid />
//         </Col>
//       </Row>
//     </div>
//   );
// };

// export default Cars;

// import { Row, Col } from "antd";
// import CarCard from "../componants/CarCard/CarCard";
// import { carsData } from "../data/carsData";
// import SidebarFilter from "../componants/SidebarFilter/SidebarFilter";

// const Cars = () => {
//   return (
//     <div style={{ maxWidth: 1400, margin: "0 auto", padding: "32px" }}>
//       <Row gutter={[24, 24]}>
//         {carsData.map(car => (
//           <Col key={car.id} md={6}>
//             <CarCard {...car} />
//           </Col>
//         ))}
//       </Row>
//     </div>
//   );
// };

// export default Cars;

import { Row, Col, Button } from "antd";
import Sidebar from "../componants/SidebarFilter/SidebarFilter";
import CarCard from "../componants/CarCard/CarCard";
import { carsData } from "../data/carsData";
import { useState } from "react";

const Cars = () => {
  const [visibleCount, setVisibleCount] = useState(9);

  return (
    // <div style={{ maxWidth: 1400, margin: "0 auto", padding: "24px 24px 120px" }}>
      <div style={{ maxWidth: 1400, margin: "0 auto", padding: "14px 20px 24px" }}>


      <Row gutter={24}>
        
        {/* LEFT SIDEBAR */}
        <Col xs={24} md={6}>
          <Sidebar />
        </Col>

        {/* RIGHT CONTENT */}
        <Col xs={24} md={18}>
          
          {/* CAR CARDS */}
          <Row gutter={[24, 24]}>
            {carsData.slice(0, visibleCount).map(car => (
              <Col key={car.id} xs={24} sm={12} md={8}>
                <CarCard {...car} />
              </Col>
            ))}
          </Row>

          {/* 🔥 SHOW MORE BUTTON */}
          {visibleCount < carsData.length && (
            <div style={{ textAlign: "center", marginTop: 32 }}>
              <Button
                type="primary"
                onClick={() => setVisibleCount(prev => prev +6)}
              >
                Show More Cars
              </Button>
            </div>
          )}

        </Col>
      </Row>
    </div>
  );
};

export default Cars;


