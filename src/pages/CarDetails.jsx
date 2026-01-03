// import { useParams } from "react-router-dom";
// import { carsData } from "../data/carsData";
// import CarCard from "../componants/CarCard/CarCard";
// import "./CarDetails.css";

// const CarDetails = () => {
//   const { id } = useParams();
//   const car = carsData.find(item => item.id === Number(id));

//   if (!car) return <h2>Car not found</h2>;

//   return (
//     <div className="details-page">

//       {/* TOP CARD */}
//       <div className="details-top">

//         {/* LEFT BLUE */}
//         <div className="details-left">
//           <h2>Sports car with the best <br></br>design and acceleration</h2>
//           <p className="left-desc">
//             Safety and comfort while driving a <br/>futuristic and elegant sports car
//           </p>

//           <img src={car.image} alt={car.name} className="main-car-img" />

//           <div className="thumbs">
//             <img src={car.image} className="active" />
//             <img src={car.image} />
//             <img src={car.image} />
//           </div>
//         </div>

//         {/* RIGHT WHITE */}
//         <div className="details-right">

//           <div className="title-row">
//             <h2>{car.name}</h2>
//             <span className="heart">❤️</span>
//           </div>

//           <div className="rating-row">
//             ⭐⭐⭐⭐⭐ <span>440+ Reviewer</span>
//           </div>

//           <p className="desc">
//             NISMO has become the embodiment of Nissan's outstanding performance,
//             inspired by the most unforgiving proving ground, the "race track".
//           </p>

//           <div className="specs">
//             <p>Type Car <span>Sport</span></p>
//             <p>Capacity <span>2 Person</span></p>
//             <p>Steering <span>Manual</span></p>
//             <p>Gasoline <span>70L</span></p>
//           </div>

//           <div className="price-row">
//             <div>
//               <h2>${car.price}.00 <span>/ days</span></h2>
//               <p className="old-price">$100.00</p>
//             </div>

//             <button className="rent-btn">Rent Now</button>
//           </div>
//         </div>
//       </div>

//       {/* REVIEWS */}
//       <div className="reviews">
//         <h3>Reviews <span className="count">13</span></h3>

//         <div className="review-card">
//           <div className="review-top">
//             <b>Alex Stanton</b>
//             <span>21 July 2022</span>
//           </div>
//           <p className="review-sub">CEO at Bukalapak</p>
//           ⭐⭐⭐⭐⭐
//           <p className="review-text">
//             We are very happy with the service from the MORIENT App. Morient has
//             a low price and also a large variety of cars.
//           </p>
//         </div>

//         <div className="review-card">
//           <div className="review-top">
//             <b>Skylar Dias</b>
//             <span>20 July 2022</span>
//           </div>
//           <p className="review-sub">CEO at Amazon</p>
//           ⭐⭐⭐⭐⭐
//           <p className="review-text">
//             We are greatly helped by the services of the MORIENT Application.
//           </p>
//         </div>
//       </div>

//       {/* RECOMMEND */}
//       <div className="recommend">
//         <h3>Recommendation Car</h3>

//         <div className="recommend-grid">
//           {carsData.slice(0, 6).map(car => (
//             <CarCard key={car.id} {...car} />
//           ))}
//         </div>
//       </div>

//     </div>
//   );
// };

// export default CarDetails;

import { useParams } from "react-router-dom";
import { carsData } from "../data/carsData";
import CarCard from "../componants/CarCard/CarCard";
import SidebarFilter from "../componants/SidebarFilter/SidebarFilter";
import "./CarDetails.css";

const CarDetails = () => {
  const { id } = useParams();
  const car = carsData.find(item => item.id === Number(id));

  if (!car) return <h2>Car not found</h2>;

  return (
    <div className="details-layout">

      {/* SIDEBAR */}
      <SidebarFilter />

      {/* RIGHT SIDE */}
      <div className="details-content">

        {/* ================= TOP DETAILS ================= */}
        <div className="details-top">

          {/* BLUE CARD */}
          <div className="details-left">
            <h2>Sports car with the best design and acceleration</h2>
            <p className="left-desc">
              Safety and comfort while driving a futuristic and elegant sports car
            </p>

            <img src={car.image} className="main-car-img" />

            <div className="thumbs">
              <img src={car.image} className="active" />
              <img src={car.image} />
              <img src={car.image} />
            </div>
          </div>

          {/* WHITE INFO CARD */}
          <div className="details-right">
            <div className="title-row">
              <h2>{car.name}</h2>
              ❤️
            </div>

            <div className="rating-row">
              ⭐⭐⭐⭐⭐ <span>440+ Reviewer</span>
            </div>

            <p className="desc">
              NISMO has become the embodiment of Nissan's outstanding performance,
              inspired by the most unforgiving proving ground.
            </p>

            <div className="specs">
              <p>Type Car <span>Sport</span></p>
              <p>Capacity <span>2 Person</span></p>
              <p>Steering <span>Manual</span></p>
              <p>Gasoline <span>70L</span></p>
            </div>

            <div className="price-row">
              <div>
                <h2>${car.price}.00 <span>/ days</span></h2>
                <p className="old-price">$100.00</p>
              </div>
              <button className="rent-btn">Rent Now</button>
            </div>
          </div>
        </div>

        {/* ================= REVIEWS ================= */}
        <div className="reviews">
          <h3>Reviews <span className="count">13</span></h3>

          <div className="review-card">
            <b>Alex Stanton</b>
            <span>⭐⭐⭐⭐⭐</span>
            <p>
              We are very happy with the service from the MORIENT App.
            </p>
          </div>

          <div className="review-card">
            <b>Skylar Dias</b>
            <span>⭐⭐⭐⭐⭐</span>
            <p>
              Morient provides great service with clean cars.
            </p>
          </div>
        </div>

        {/* ================= RECENT CAR ================= */}
        <div className="section">
          <div className="section-header">
            <h3>Recent Car</h3>
            <span className="view">View All</span>
          </div>

          <div className="card-grid">
            {carsData.slice(0, 3).map(car => (
              <CarCard key={car.id} {...car} />
            ))}
          </div>
        </div>

        {/* ================= RECOMMEND ================= */}
        <div className="section">
          <div className="section-header">
            <h3>Recommendation Car</h3>
            <span className="view">View All</span>
          </div>

          <div className="card-grid">
            {carsData.slice(3, 6).map(car => (
              <CarCard key={car.id} {...car} />
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default CarDetails;
