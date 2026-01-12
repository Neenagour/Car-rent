import { Select, DatePicker } from "antd";
import "./PickupDropCard.css";

const PickupDropCard = () => {
  return (
    <div className="pickupdrop-card">
      {/* PICK UP */}
      <div className="pd-row">
        <div className="pd-title">
          <span className="dot active"></span>
          <h4>Pick - Up</h4>
        </div>

        <div className="pd-fields">
          <div>
            <label>Locations</label>
            <Select placeholder="Kota Semarang" />
          </div>

          <div>
            <label>Date</label>
            <DatePicker placeholder="20 July 2022" />
          </div>

          <div>
            <label>Time</label>
            <Select placeholder="07.00" />
          </div>
        </div>
      </div>

      {/* DIVIDER */}
      <div className="divider"></div>

      {/* DROP OFF */}
      <div className="pd-row">
        <div className="pd-title">
          <span className="dot"></span>
          <h4>Drop - Off</h4>
        </div>

        <div className="pd-fields">
          <div>
            <label>Locations</label>
            <Select placeholder="Kota Semarang" />
          </div>

          <div>
            <label>Date</label>
            <DatePicker placeholder="21 July 2022" />
          </div>

          <div>
            <label>Time</label>
            <Select placeholder="01.00" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PickupDropCard;
