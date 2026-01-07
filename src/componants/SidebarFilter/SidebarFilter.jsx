import { Checkbox, Slider } from "antd";
import "./SidebarFilter.css";

const SidebarFilter = () => {
  return (
    <div className="sidebar-filter">

      <h4 className="filter-title">TYPE</h4>
      <Checkbox.Group className="filter-group">
        <Checkbox>Sport (10)</Checkbox>
        <Checkbox>SUV (12)</Checkbox>
        <Checkbox>MPV (16)</Checkbox>
        <Checkbox>Sedan (20)</Checkbox>
        <Checkbox>Coupe (14)</Checkbox>
        <Checkbox>Hatchback (14)</Checkbox>
      </Checkbox.Group>

      <h4 className="filter-title">CAPACITY</h4>
      <Checkbox.Group className="filter-group">
        <Checkbox>2 Person</Checkbox>
        <Checkbox>4 Person</Checkbox>
        <Checkbox>6 Person</Checkbox>
        <Checkbox>8 or More</Checkbox>
      </Checkbox.Group>

      <h4 className="filter-title">PRICE</h4>
      <Slider max={100} defaultValue={80} />
      <p className="price-text">Max. $100.00</p>

    </div>
  );
};

export default SidebarFilter;
