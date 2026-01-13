import "./DetailsRental.css";
import PickDrop from "../../components/PickupDropCard/PickupDropCard";
import carImg from "../../assets/car.png";
import mapImg from "../../assets/Maps.png";
import PickupDropCard from "../../components/PickupDropCard/PickupDropCard";

const DetailsRental = () => {
  return (
    <div className="details-box">
      <h3 className="title">Details Rental</h3>

      {/* MAP */}
      <div className="map-box">
        <img src={mapImg} alt="map" />
      </div>

      {/* CAR INFO */}
      <div className="car-info">
        <img src={carImg} alt="car" />

        <div className="car-text">
          <h4>Nissan GT - R</h4>
          <span>Sport Car</span>
        </div>

        <span className="car-id">#9761</span>
      </div>

      {/* PICK / DROP */}
      <PickupDropCard />

      {/* PRICE */}
      <div className="price-box">
        <div>
          <p className="price-title">Total Rental Price</p>
          <span className="sub">
            Overall price and includes rental discount
          </span>
        </div>
        <h2>$80.00</h2>
      </div>
    </div>
  );
};

export default DetailsRental;
