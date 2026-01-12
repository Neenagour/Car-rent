import { Checkbox, Slider } from "antd";
import { useState } from "react";
import "./SidebarFilter.css";

const SidebarFilter = () => {
  const [typeValue, setTypeValue] = useState([]);
  const [capacityValue, setCapacityValue] = useState([]);

  return (
    <div className="sidebar-filter">

      {/* TYPE */}
      <h4 className="filter-title">TYPE</h4>
      <Checkbox.Group
        className="filter-group"
        value={typeValue}
        onChange={(checkedValues) =>
          setTypeValue(checkedValues.slice(-1)) 
        }
      >
        <Checkbox value="Sport">Sport (10)</Checkbox>
        <Checkbox value="SUV">SUV (12)</Checkbox>
        <Checkbox value="MPV">MPV (16)</Checkbox>
        <Checkbox value="Sedan">Sedan (20)</Checkbox>
        <Checkbox value="Coupe">Coupe (14)</Checkbox>
        <Checkbox value="Hatchback">Hatchback (14)</Checkbox>
      </Checkbox.Group>

      {/* CAPACITY */}
      <h4 className="filter-title">CAPACITY</h4>
      <Checkbox.Group
        className="filter-group"
        value={capacityValue}
        onChange={(checkedValues) =>
          setCapacityValue(checkedValues.slice(-1))
        }
      >
        <Checkbox value="2">2 Person</Checkbox>
        <Checkbox value="4">4 Person</Checkbox>
        <Checkbox value="6">6 Person</Checkbox>
        <Checkbox value="8">8 or More</Checkbox>
      </Checkbox.Group>

      {/* PRICE */}
      <h4 className="filter-title">PRICE</h4>
      <Slider max={100} defaultValue={80} />
      <p className="price-text">Max. $100.00</p>

    </div>
  );
};

export default SidebarFilter;
