import React, { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const verifyUserSession = async () => {
      try {
        const { data } = await axios.get(
          "https://zerodha-backend-h3nz.onrender.com/portfolio",
          {
            withCredentials: true,
          },
        );

        if (data.status) {
          setUser(data.user);
        } else {
          setUser(null);

          window.location.href =
            "https://zerodha-frontend-kch5.onrender.com/login";
        }
      } catch (error) {
        console.error("Session verification failed:", error);
        window.location.href =
          "https://zerodha-frontend-kch5.onrender.com/login";
      } finally {
        setLoading(false);
      }
    };

    verifyUserSession();
  }, []);

  return (
    <AuthContext.Provider value={{ user, loading, setUser }}>
      {}
      {loading ? (
        <div style={styles.loaderContainer}>
          <h3>Verifying secure session...</h3>
        </div>
      ) : (
        children
      )}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}

const styles = {
  loaderContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    fontFamily: "Inter, sans-serif",
    color: "#666",
  },
};
