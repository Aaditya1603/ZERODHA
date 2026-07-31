import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

const Login = () => {
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState({
    email: "",
    password: "",
  });
  const { email, password } = inputValue;
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setInputValue({
      ...inputValue,
      [name]: value,
    });
  };

  const handleError = (err) =>
    toast.error(err, {
      position: "bottom-left",
    });
  const handleSuccess = (msg) =>
    toast.success(msg, {
      position: "bottom-right",
    });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        "https://zerodha-backend-h3nz.onrender.com/login",
        {
          ...inputValue,
        },
        { withCredentials: true },
      );

      const { success, message, token } = data;
      console.log("Force redeploy");

      if (success) {
        handleSuccess(message);
        if (token) {
          localStorage.setItem("token", token);
          const currentTheme = localStorage.getItem("app-theme") || "light";
          window.location.href = `https://zerodha-dashboard-wj7w.onrender.com?token=${token}&theme=${currentTheme}`;
        }
      } else {
        handleError(message);
      }
    } catch (error) {
      console.log(error);
      handleError("Login failed. Try again.");
    }
    setInputValue({
      ...inputValue,
      email: "",
      password: "",
    });
  };

  return (
    <div
      className="container-fluid d-flex justify-content-center align-items-center min-vh-100"
      style={{ backgroundColor: "var(--bg-primary)" }}
    >
      <div className="form_container">
        <h2 className="text-center">Login Account</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              value={email}
              placeholder="Enter your email"
              onChange={handleOnChange}
            />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              value={password}
              placeholder="Enter your password"
              onChange={handleOnChange}
            />
          </div>
          <button type="submit">Submit</button>
          <span
            style={{
              color: "var(--text-secondary)",
              marginTop: "1rem",
              display: "block",
            }}
          >
            Don't have an account?{" "}
            <Link to={"/signup"} style={{ color: "var(--accent-color)" }}>
              Signup
            </Link>
          </span>
        </form>
        <ToastContainer />
      </div>
    </div>
  );
};

export default Login;
