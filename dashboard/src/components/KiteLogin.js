import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./KiteLogin.css";

const KiteLogin = () => {
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const response = await axios.post("http://localhost:3002/auth/login", {
        phone,
        password,
      });

      if (response.data.token) {
  localStorage.setItem("token", response.data.token);

  localStorage.setItem("userName", response.data.user.name);
  localStorage.setItem("userId", response.data.user.userId);
  localStorage.setItem("phone", response.data.user.phone);

  navigate("/");
}
    } catch (err) {
      setError(err.response?.data?.message || "Login failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="kite-login-container">
      <div className="kite-login-card">
        <div className="kite-login-header">
          <img src="logo.png" alt="Zerodha Logo" className="kite-logo" />
          <h2>Kite Login</h2>
        </div>

        {error && <div className="alert alert-danger">{error}</div>}

        <form onSubmit={handleLogin}>
          <div className="form-group mb-3">
            <label className="form-label">Phone Number</label>
            <input
              type="tel"
              className="form-control"
              placeholder="Enter your phone number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            />
          </div>

          <div className="form-group mb-3">
            <label className="form-label">Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button
            type="submit"
            className="btn btn-primary w-100 mb-3"
            disabled={loading}
          >
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>

        <div className="kite-login-footer">
          <p>
            Don't have an account?{" "}
            <a href="http://localhost:3001/signup" className="text-primary">
              Sign up on main website
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default KiteLogin;
