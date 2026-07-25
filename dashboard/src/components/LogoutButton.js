import React from "react";
import axios from "axios";
import { useAuth } from "../context/AuthContext";

function LogoutButton() {
  const { setUser } = useAuth();

  const handleLogout = async () => {
    try {
      const { data } = await axios.post(
        "https://onrender.com",
        {},
        { withCredentials: true },
      );
      if (data.success) {
        alert("Logged out successfully");

        window.location.href = "https://onrender.com";
      }
    } catch (error) {
      console.log("Logout request failed", error);
      alert("Could not process logout. Please try again.");
    }
  };

  return (
    <button onClick={handleLogout} style={styles.logoutBtn}>
      Logout
    </button>
  );
}

const styles = {
  logoutBtn: {
    backgroundColor: "#df4949",
    color: "white",
    border: "none",
    padding: "8px 16px",
    borderRadius: "4px",
    fontSize: "14px",
    fontWeight: "500",
    cursor: "pointer",
    fontFamily: "Inter, sans-serif",
    transition: "background-color 0.2s",
  },
};

export default LogoutButton;
