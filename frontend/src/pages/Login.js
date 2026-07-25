import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function Login() {
  const [inputValue, setInputValue] = useState({ email: "", password: "" });
  const { email, password } = inputValue;

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setInputValue({ ...inputValue, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        "https://zerodha-backend-5uut.onrender.com",
        { ...inputValue },
        { withCredentials: true },
      );

      const { success, message } = data;
      if (success) {
        alert(message);
        window.location.href = "http://localhost:3001";
      } else {
        alert(message);
      }
    } catch (error) {
      console.error("Login error:", error);
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <div style={styles.container}>
      <h2>Login to Zerodha</h2>
      <p style={styles.subtitle}>Access your trading dashboard and portfolio</p>

      <form onSubmit={handleSubmit} style={styles.form}>
        <div style={styles.inputGroup}>
          <label htmlFor="email">Email Address</label>
          <input
            type="email"
            name="email"
            value={email}
            placeholder="Enter your email"
            onChange={handleOnChange}
            required
            style={styles.input}
          />
        </div>
        <div style={styles.inputGroup}>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            value={password}
            placeholder="Enter your password"
            onChange={handleOnChange}
            required
            style={styles.input}
          />
        </div>
        <button type="submit" style={styles.button}>
          Login
        </button>
        <span style={styles.span}>
          Don't have an account yet?{" "}
          <Link to="/signup" style={styles.link}>
            Signup here
          </Link>
        </span>
      </form>
    </div>
  );
}

const styles = {
  container: {
    maxWidth: "400px",
    margin: "80px auto",
    padding: "30px 20px",
    border: "1px solid #e0e0e0",
    borderRadius: "4px",
    fontFamily: "Inter, sans-serif",
    textAlign: "center",
  },
  subtitle: {
    color: "#666",
    fontSize: "14px",
    marginBottom: "20px",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "18px",
  },
  inputGroup: {
    display: "flex",
    flexDirection: "column",
    textAlign: "left",
    gap: "6px",
  },
  input: {
    padding: "12px",
    fontSize: "14px",
    border: "1px solid #ccc",
    borderRadius: "4px",
  },
  button: {
    padding: "12px",
    backgroundColor: "#387ed1",
    color: "white",
    border: "none",
    borderRadius: "4px",
    fontSize: "16px",
    cursor: "pointer",
    fontWeight: "500",
    marginTop: "5px",
  },
  span: {
    fontSize: "14px",
    color: "#666",
    marginTop: "10px",
  },
  link: {
    color: "#387ed1",
    textDecoration: "none",
  },
};

export default Login;
