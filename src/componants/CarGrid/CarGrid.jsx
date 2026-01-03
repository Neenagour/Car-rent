import { Row, Col, Button } from "antd";
import CarCard from "../CarCard/CarCard";
import { carsData } from "../../data/carsData";

const CarGrid = () => {
  return (
    <>
      {/* Pick & Drop bar */}
      <div
        style={{
          background: "#fff",
          padding: 20,
          borderRadius: 10,
          marginBottom: 24,
        }}
      >
        Pick – Up | Drop – Off (same as home)
      </div>

      {/* Car Cards */}
      <Row gutter={[24, 24]}>
        {carsData.map(car => (
          <Col key={car.id} xs={24} sm={12} md={8}>
            <CarCard {...car} />
          </Col>
        ))}
      </Row>

      {/* Show more */}
      <div style={{ textAlign: "center", marginTop: 32 }}>
        <Button type="primary">Show more car</Button>
      </div>
    </>
  );
};

export default CarGrid;
