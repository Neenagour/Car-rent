import "./RecentTransaction.css";
import car1 from "../../assets/whitecar.png";
import car2 from "../../assets/car.png";
import car3 from "../../assets/whitecar.png";
import car4 from "../../assets/car.png";

const transactions = [
  {
    name: "Nissan GT - R",
    type: "Sport Car",
    date: "20 July",
    price: "$80.00",
    img: car1,
  },
  {
    name: "Koenigsegg",
    type: "Sport Car",
    date: "19 July",
    price: "$99.00",
    img: car2,
  },
  {
    name: "Rolls - Royce",
    type: "Sport Car",
    date: "18 July",
    price: "$96.00",
    img: car3,
  },
  {
    name: "CR - V",
    type: "SUV",
    date: "17 July",
    price: "$80.00",
    img: car4,
  },
];

const RecentTransaction = () => {
  return (
    <div className="recent-box">
      {/* HEADER */}
      <div className="recent-header">
        <h4>Recent Transaction</h4>
        <span className="view-all">View All</span>
      </div>

      {/* LIST */}
      {transactions.map((item) => (
        <div key={item.name} className="txn-row">
          {/* LEFT */}
          <div className="txn-left">
            <img src={item.img} alt={item.name} />
            <div>
              <h5>{item.name}</h5>
              <p>{item.type}</p>
            </div>
          </div>

          {/* RIGHT */}
          <div className="txn-right">
            <span>{item.date}</span>
            <b>{item.price}</b>
          </div>
        </div>
      ))}
    </div>
  );
};

export default RecentTransaction;
