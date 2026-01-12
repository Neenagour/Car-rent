import { useParams } from "react-router-dom";
import { carsData } from "../data/carsData";
import { useNavigate } from "react-router-dom";
import Dashboard from "./Dashboard";
import "./Checkout.css";

const Checkout = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const car = carsData.find((item) => item.id === Number(id));

  return (
    <div className="checkout-page">
      {/* LEFT FORM */}
      <div className="checkout-left">
        {/* Billing Info */}
        <div className="card billing-card">
          <div className="billing-header">
            <div>
              <h3>Billing Info</h3>
              <p className="sub-text">Please enter your billing info</p>
            </div>
            <span className="step">Step 1 of 4</span>
          </div>

          <div className="grid-2">
            <div className="field">
              <label>Name</label>
              <input placeholder="Your name" />
            </div>

            <div className="field">
              <label>Phone Number</label>
              <input placeholder="Phone number" />
            </div>

            <div className="field">
              <label>Address</label>
              <input placeholder="Address" />
            </div>

            <div className="field">
              <label>Town / City</label>
              <input placeholder="Town or city" />
            </div>
          </div>
        </div>

        {/* Rental Info */}
        <div className="card rental-card">
          <div className="card-head">
            <div>
              <h3>Rental Info</h3>
              <p>Please select your rental date</p>
            </div>
            <span className="step">Step 2 of 4</span>
          </div>

          {/* Pick Up */}
          <div className="radio-section">
            <label className="radio-title">
              <input type="radio" checked readOnly /> Pick - Up
            </label>

            <div className="rental-grid">
              <div className="field">
                <label>Locations</label>
                <select>
                  <option>Select your city</option>
                </select>
              </div>

              <div className="field">
                <label>Date</label>
                <select>
                  <option>Select your date</option>
                </select>
              </div>

              <div className="field">
                <label>Time</label>
                <select>
                  <option>Select your time</option>
                </select>
              </div>
            </div>
          </div>

          {/* Drop Off */}
          <div className="radio-section">
            <label className="radio-title">
              <input type="radio" checked readOnly /> Drop - Off
            </label>

            <div className="rental-grid">
              <div className="field">
                <label>Locations</label>
                <select>
                  <option>Select your city</option>
                </select>
              </div>

              <div className="field">
                <label>Date</label>
                <select>
                  <option>Select your date</option>
                </select>
              </div>

              <div className="field">
                <label>Time</label>
                <select>
                  <option>Select your time</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        {/* Payment Method */}
        <div className="card payment-card">
          <div className="card-head">
            <div>
              <h3>Payment Method</h3>
              <p>Please enter your payment method</p>
            </div>
            <span className="step">Step 3 of 4</span>
          </div>

          <div className="payment-option active">
            <div className="payment-header">
              <label className="radio-title">
                <input type="radio" checked readOnly /> Credit Card
              </label>

              <div className="card-icons">
                <span className="visa">VISA</span>
                <span className="master">●●</span>
              </div>
            </div>

            <div className="payment-grid">
              <div className="field">
                <label>Card Number</label>
                <input placeholder="Card number" />
              </div>

              <div className="field">
                <label>Expiration Date</label>
                <input placeholder="DD / MM / YY" />
              </div>

              <div className="field">
                <label>Card Holder</label>
                <input placeholder="Card holder" />
              </div>

              <div className="field">
                <label>CVC</label>
                <input placeholder="CVC" />
              </div>
            </div>
          </div>

          <div className="payment-option">
            <label className="radio-title">
              <input type="radio" /> PayPal
            </label>
            <span className="paypal-text">PayPal</span>
          </div>

          <div className="payment-option">
            <label className="radio-title">
              <input type="radio" /> Bitcoin
            </label>
            <span className="bitcoin-text">Bitcoin</span>
          </div>
        </div>

        {/* Confirmation */}
        <div className="card confirmation-card">
          <div className="card-head">
            <div>
              <h3>Confirmation</h3>
              <p>
                We are getting to the end. Just few clicks and your rental is
                ready!
              </p>
            </div>
            <span className="step">Step 4 of 4</span>
          </div>

          <div className="confirm-option">
            <label>
              <input type="checkbox" />I agree with sending Marketing and
              newsletter emails.
            </label>
          </div>

          <div className="confirm-option">
            <label>
              <input type="checkbox" />I agree with our terms and conditions and
              privacy policy.
            </label>
          </div>

          <button
            className="confirm-btn"
            onClick={() => navigate("/Dashboard")}
          >
            Rent Now
          </button>

          <div className="safe-box">
            <span className="shield">✔</span>
            <div>
              <strong>All your data are safe</strong>
              <p>We are using the most advanced security.</p>
            </div>
          </div>
        </div>
      </div>

      {/* RIGHT SUMMARY */}
      <div className="checkout-right">
        <h3 className="summary-title">Rental Summary</h3>
        <p className="summary-subtext">
          Prices may change depending on the length of the rental and the price
          of your rental car.
        </p>

        {/* CAR INFO */}
        <div className="summary-car">
          <img src={car.image} alt={car.name} />

          <div className="summary-car-info">
            <h4>{car.name}</h4>

            <div className="rating">
              ⭐⭐⭐⭐☆
              <span>440+ Reviewer</span>
            </div>
          </div>
        </div>

        <hr />

        {/* PRICE ROWS */}
        <div className="summary-row">
          <span>Subtotal</span>
          <span>${car.price}.00</span>
        </div>

        <div className="summary-row">
          <span>Tax</span>
          <span>$0</span>
        </div>

        {/* PROMO */}
        <div className="promo-box">
          <input type="text" placeholder="Apply promo code" />
          <button>Apply now</button>
        </div>

        {/* TOTAL */}
        <div className="summary-total">
          <div>
            <strong>Total Rental Price</strong>
            <p>Overall price and includes rental discount</p>
          </div>
          <span>${car.price}.00</span>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
