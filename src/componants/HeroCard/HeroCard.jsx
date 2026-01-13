
import { Row, Col, Button } from "antd";
import "./HeroCard.css";

const Hero = ({ hero1, hero2 }) => {
  return (
 <div className="container-box">

      <Row gutter={[24, 24]}>
        <Col xs={24} md={12}>
          <div className="hero-card blue">
            <div>
              <h2>The Best Platform for Car Rental</h2>
              <p>Ease of doing a car rental safely and reliably.</p>
              <Button type="primary">Rental Car</Button>
            </div>
            <img src={hero1} alt="car" />
          </div>
        </Col>

        <Col xs={24} md={12}>
          <div className="hero-card dark">
            <div>
              <h2>Easy way to rent a car at a low price</h2>
              <p>Providing cheap car rental services.</p>
              <Button type="primary">Rental Car</Button>
            </div>
            <img src={hero2} alt="car" />
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Hero;


