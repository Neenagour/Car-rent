import { Row, Col } from "antd";
import "./PickBox.css";

const PickBox = ({ title }) => {

  const infoItems = [
    { title: "Location", subtitle: "Select city" },
    { title: "Date", subtitle: "Select date" },
    { title: "Time", subtitle: "Select time" },
  ];

  return (
    <div className="pick-box">
      <h4>{title}</h4>

      <Row gutter={16}>
        {infoItems.map((item) => (
          <Col key={item.title} span={8}>
            <b>{item.title}</b>
            <p>{item.subtitle}</p>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default PickBox;
