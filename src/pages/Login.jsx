// pages/Login.jsx
import "./Login.css";

const Login = () => {
  return (
    <div className="login-card">
      <h2>Login</h2>

      <input type="email" placeholder="Email" />
      <input type="password" placeholder="Password" />

      <button>Login</button>
    </div>
  );
};

export default Login;
