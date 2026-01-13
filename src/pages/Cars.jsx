import { Row, Col, Button } from "antd";
import Sidebar from "../componants/SidebarFilter/SidebarFilter";
import CarCard from "../componants/CarCard/CarCard";
import PickDrop from "../componants/PickDrop/PickDrop";
import { carsData } from "../data/carsData";
import { useState } from "react";
import "./Cars.css";

const Cars = () => {
  const [visibleCount, setVisibleCount] = useState(9);

  return (
    <div className="cars-wrapper">

      <Row gutter={24}>
        
        {/* LEFT SIDEBAR */}
        <Col xs={24} md={6}>
          <Sidebar />
        </Col>

        {/* RIGHT CONTENT */}
        <Col xs={24} md={18}>

          {/* PICK & DROP */}
          <PickDrop />

          {/* CAR CARDS */}
          <Row gutter={[24, 24]}>
            {carsData.slice(0, visibleCount).map(car => (
              <Col key={car.id} xs={24} sm={12} md={8}>
                <CarCard {...car} />
              </Col>
            ))}
          </Row>

          {/* SHOW MORE */}
          {visibleCount < carsData.length && (
           <div className="show-more-wrapper">

              <Button
                type="primary"
                onClick={() => setVisibleCount(prev => prev + 6)}
              >
                Show More Cars
              </Button>

              <span className="car-count">120 Car</span>
            </div>
          )}

        </Col>
      </Row>
    </div>
  );
};

export default Cars;
