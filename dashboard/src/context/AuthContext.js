import React, { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

// Create the Authentication Context
const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const verifyUserSession = async () => {
      try {
        const { data } = await axios.get(
          "http://localhost:3002/portfolio", // Points to your unified backend port
          { withCredentials: true }, // Required to send the secure cookie token
        );

        if (data.status) {
          setUser(data.user); // Save username/user data to global state
        } else {
          setUser(null);
          // Kick unauthenticated users back to the frontend website login screen
          window.location.href = "http://localhost:3000/login";
        }
      } catch (error) {
        console.error("Session verification failed:", error);
        window.location.href = "http://localhost:3000/login";
      } finally {
        setLoading(false);
      }
    };

    verifyUserSession();
  }, []);

  return (
    <AuthContext.Provider value={{ user, loading, setUser }}>
      {/* Show a loading screen while validating the cookie to prevent interface flashing */}
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

// Hook to easily use auth state inside dashboard components (e.g., Topbar, Profile dropdown)
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
