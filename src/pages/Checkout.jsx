import { useParams } from "react-router-dom";
import { carsData } from "../data/carsData";
import "./Checkout.css";

const Checkout = () => {
  const { id } = useParams();
  const car = carsData.find(item => item.id === Number(id));

  return (
    <div className="checkout-page">

      {/* LEFT FORM */}
      <div className="checkout-left">

        {/* Billing Info */}
        <div className="card">
          <h3>Billing Info</h3>

          <div className="grid-2">
            <input placeholder="Your name" />
            <input placeholder="Phone number" />
            <input placeholder="Address" />
            <input placeholder="Town / city" />
          </div>
        </div>

      {/* RENTAL INFO */}
<div className="card rental-card">

  <div className="card-head">
    <div>
      <h3>Rental Info</h3>
      <p>Please select your rental date</p>
    </div>
    <span className="step">Step 2 of 4</span>
  </div>

  {/* PICK UP */}
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

  {/* DROP OFF */}
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

        {/* PAYMENT METHOD */}
<div className="card payment-card">

  <div className="card-head">
    <div>
      <h3>Payment Method</h3>
      <p>Please enter your payment method</p>
    </div>
    <span className="step">Step 3 of 4</span>
  </div>

  {/* CREDIT CARD */}
  <div className="payment-option active">
    <div className="payment-header">
      <label className="radio-title">
        <input type="radio" checked readOnly />
        Credit Card
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

  {/* PAYPAL */}
  <div className="payment-option">
    <label className="radio-title">
      <input type="radio" />
      PayPal
    </label>
    <span className="paypal-text">PayPal</span>
  </div>

  {/* BITCOIN */}
  <div className="payment-option">
    <label className="radio-title">
      <input type="radio" />
      Bitcoin
    </label>
    <span className="bitcoin-text">Bitcoin</span>
  </div>

</div>

     {/* CONFIRMATION */}
<div className="card confirmation-card">

  <div className="card-head">
    <div>
      <h3>Confirmation</h3>
      <p>We are getting to the end. Just few clicks and your rental is ready!</p>
    </div>
    <span className="step">Step 4 of 4</span>
  </div>

  <div className="confirm-option">
    <label>
      <input type="checkbox" />
      I agree with sending an Marketing and newsletter emails. No spam, promised!
    </label>
  </div>

  <div className="confirm-option">
    <label>
      <input type="checkbox" />
      I agree with our terms and conditions and privacy policy.
    </label>
  </div>

<div className="card confirmation-card">
  
  <button className="confirm-btn">Rent Now</button>

</div>


  <div className="safe-box">
    <span className="shield">✔</span>
    <div>
      <strong>All your data are safe</strong>
      <p>We are using the most advanced security to provide you the best experience ever.</p>
    </div>
  </div>
</div>


      {/* RIGHT SUMMARY */}
      <div className="checkout-right">
        <h3>Rental Summary</h3>

        <div className="summary-car">
          <img src={car.image} alt={car.name} />
          <div>
            <h4>{car.name}</h4>
            ⭐⭐⭐⭐⭐
          </div>
        </div>

        <div className="summary-row">
          <span>Subtotal</span>
          <span>${car.price}.00</span>
        </div>

        <div className="summary-row total">
          <span>Total</span>
          <span>${car.price}.00</span>
        </div>
      </div>
</div>
</div>
  );
};

export default Checkout;

