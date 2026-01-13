import { Row, Col, Button } from "antd";
import CarCard from "../CarCard/CarCard";
import { carsData } from "../../data/carsData";
import "./CardGrid.css";

const CarGrid = () => {
  return (
    <>
      {/* Pick & Drop bar */}
      <div className="pick-drop-bar">Pick – Up | Drop – Off (same as home)</div>

      {/* Car Cards */}
      <Row gutter={[24, 24]}>
        {carsData.map((car) => (
          <Col key={car.id} xs={24} sm={12} md={8}>
            <CarCard {...car} />
          </Col>
        ))}
      </Row>

      {/* Show more */}
      <div className="show-more-wrapper">
        <Button type="primary">Show more car</Button>
      </div>
    </>
  );
};

export default CarGrid;
