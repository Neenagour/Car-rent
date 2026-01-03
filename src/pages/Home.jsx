import { Row, Col, Button } from "antd";
import { useNavigate } from "react-router-dom";

import Hero from "../componants/HeroCard/HeroCard";
import PickDrop from "../componants/PickDrop/PickDrop";
import CarCard from "../componants/CarCard/CarCard";
import { carsData } from "../data/carsData";

// 🔥 IMAGE IMPORTS
import hero1 from "../assets/car.png";
import hero2 from "../assets/car.png";

const Home = () => {
  const navigate = useNavigate();

  return (
    <>
      {/* ================= HERO SECTION ================= */}
      <Hero hero1={hero1} hero2={hero2} />

      {/* ================= MAIN CONTENT ================= */}
      <div style={{ maxWidth: 1300, margin: "0 auto", padding: "32px" }}>
        
        {/* PICK & DROP */}
        <PickDrop />

        {/* POPULAR CARS */}
        <Row gutter={[24, 24]} style={{ marginTop: 32 }}>
          {carsData.slice(0, 8).map((car) => (
            <Col key={car.id} xs={24} sm={12} md={6}>
              <CarCard {...car} />
            </Col>
          ))}
        </Row>

        {/* SHOW MORE BUTTON */}
        <div style={{ textAlign: "center", marginTop: 40 }}>
          <Button
            type="primary"
            size="large"
            onClick={() => navigate("/cars")}
          >
            Show More Cars
          </Button>
        </div>
      </div>
    </>
  );
};

export default Home;
