import { Row, Col } from "antd";

const PickBox = ({ title }) => (
  <div
    style={{
      background: "#fff",
      padding: 20,
      borderRadius: 12,
      boxShadow: "0 4px 12px rgba(0,0,0,0.06)",
    }}
  >
    <h4>{title}</h4>

    <Row gutter={16}>
      <Col span={8}><b>Location</b><p>Select city</p></Col>
      <Col span={8}><b>Date</b><p>Select date</p></Col>
      <Col span={8}><b>Time</b><p>Select time</p></Col>
    </Row>
  </div>
);

export default PickBox;
