import React, { useState, useEffect } from "react";

import Dashboard from "./Dashboard";
import TopBar from "./TopBar";

const Home = () => {
  const [isVerified, setIsVerified] = useState(false);

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const tokenFromUrl = urlParams.get("token");

    console.log("URL token:", tokenFromUrl);

    if (tokenFromUrl) {
      localStorage.setItem("token", tokenFromUrl);

      window.history.replaceState(null, null, "/");
    }

    const verifyToken = async () => {
      const token = localStorage.getItem("token");
      console.log("Stored token:", token);

      if (!token) {
        window.location.href = "https://zerodha-frontend-kch5.onrender.com/";

        return;
      }

      try {
        const res = await fetch(
          "https://zerodha-backend-h3nz.onrender.com/verify",
          {
            method: "POST",
            headers: {
              Authorization: `Bearer ${token}`,
            },
            credentials: "include",
          },
        );

        const data = await res.json();
        console.log("Verify API response:", res.status, data);

        if (res.status === 200) {
          setIsVerified(true);
        } else {
          window.location.href = "https://zerodha-frontend-kch5.onrender.com/";
        }
      } catch (err) {
        console.error("Verification failed:", err);
        window.location.href = "https://zerodha-frontend-kch5.onrender.com/";
      }
    };

    verifyToken();
  }, []);

  if (!isVerified) return <p>Verifying user...</p>;
  return (
    <>
      <TopBar />
      <Dashboard />
    </>
  );
};

export default Home;
