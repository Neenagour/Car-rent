import "./TopRental.css";
import goalImg from "../../assets/Chart.png";

const data = [
  { name: "Sport Car", value: "17,439", color: "#0B3C5D" },
  { name: "SUV", value: "9,478", color: "#1F6ED4" },
  { name: "Coupe", value: "18,197", color: "#2F80ED" },
  { name: "Hatchback", value: "12,510", color: "#6BB9F0" },
  { name: "MPV", value: "14,406", color: "#B7D8F5" },
];

const TopCarRental = () => {
  return (
    <div className="top-car">
      <div className="top-header">
        <h4>Top 5 Car Rental</h4>
        <span className="dots">•••</span>
      </div>

      <div className="content">
        {/* LEFT */}
        <div className="chart">
          <img src={goalImg} alt="goal" />
          <div className="center-text">
            <h2>72,030</h2>
            <p>Rental Car</p>
          </div>
        </div>

        {/* RIGHT */}
        <div className="list">
          {data.map((item) => (
            <div key={item.name} className="row">
              <div className="label">
                <span
                  className="dot"
                  style={{ background: item.color }}
                ></span>
                {item.name}
              </div>
              <b>{item.value}</b>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TopCarRental;
