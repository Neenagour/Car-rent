// import "./CarCard.css";
// import { HeartOutlined, HeartFilled } from "@ant-design/icons";
// import { useState } from "react";

// const CarCard = ({ name, type, image, price }) => {
//   const [fav, setFav] = useState(false);

//   return (
//     <div className="car-card">
//       {/* TOP */}
//       <div className="card-top">
//         <div>
//           <h4 className="car-name">{name}</h4>
//           <p className="car-type">{type}</p>
//         </div>

//         <span className="fav-icon" onClick={() => setFav(!fav)}>
//           {fav ? <HeartFilled /> : <HeartOutlined />}
//         </span>
//       </div>

//       {/* IMAGE */}
//       <img src={image} alt={name} className="car-img" />

//       {/* FEATURES */}
//       <div className="car-info">
//         <span>⛽ 80L</span>
//         <span>⚙ Manual</span>
//         <span>👤 2 People</span>
//       </div>

//       {/* BOTTOM */}
//       <div className="card-bottom">
//         <div>
//           <h4 className="price">${price}.00</h4>
//           <span className="per-day">/ day</span>
//         </div>

//         <button className="rent-btn">Rent Now</button>
//       </div>
//     </div>
//   );
// };

// export default CarCard;


import "./CarCard.css";
import { HeartOutlined, HeartFilled } from "@ant-design/icons";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const CarCard = ({ id, name, type, image, price }) => {
  const [fav, setFav] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="car-card">
      {/* TOP */}
      <div className="card-top">
        <div>
          <h4 className="car-name">{name}</h4>
          <p className="car-type">{type}</p>
        </div>

        <span className="fav-icon" onClick={() => setFav(!fav)}>
          {fav ? <HeartFilled style={{ color: "red" }} /> : <HeartOutlined />}
        </span>
      </div>

      {/* IMAGE */}
      <img src={image} alt={name} className="car-img" />

      {/* FEATURES */}
      <div className="car-info">
        <span>⛽ 80L</span>
        <span>⚙ Manual</span>
        <span>👤 2 People</span>
      </div>

      {/* BOTTOM */}
      <div className="card-bottom">
        <div>
          <h4 className="price">${price}.00</h4>
          <span className="per-day">/ day</span>
        </div>

        <button
          className="rent-btn"
          onClick={() => navigate(`/cars/${id}`)}
        >
          Rent Now
        </button>
      </div>
    </div>
  );
};

export default CarCard;
