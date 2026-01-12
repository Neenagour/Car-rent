import "./PickDrop.css";
import { Row, Col, Select, Button } from "antd";
import { SwapOutlined } from "@ant-design/icons";

const PickDrop = () => {
  return (
    <div className="pickdrop-wrapper">
   
        <Row gutter={16} align="middle" wrap={false}>
  <Col flex="1">
          <div className="box">
            <h4>Pick - Up</h4>

            <div className="fields">
              <div className="city">
                <label>Location</label>
                <Select placeholder="Select your city" />
              </div>

              <div className="date">
                <label>Date</label>
                <Select placeholder="Select your date" />
              </div>

              <div className="time">
                <label>Time</label>
                <Select placeholder="Select your time" />
              </div>
            </div>
          </div>
        </Col>

        {/* SWAP ICON */}
      <Col flex="none" className="swap">
    <Button type="primary" shape="squear" icon={<SwapOutlined />} />
  </Col>

        {/* DROP OFF */}
        <Col flex="1">
          <div className="box">
            <h4>Drop - Off</h4>

            <div className="fields">
              <div>
                <label>Location</label>
                <Select placeholder="Select your city" />
              </div>

              <div>
                <label>Date</label>
                <Select placeholder="Select your date" />
              </div>

              <div>
                <label>Time</label>
                <Select placeholder="Select your time" />
              </div>
            </div>
          </div>
        </Col>

      </Row>
    </div>
  );
};

export default PickDrop;
