import React from "react";
import { Link } from "react-router-dom";
import { useTheme } from "./context/ThemeContext";

function Navbar() {
  const { theme, toggleTheme } = useTheme();
  return (
    <nav
      className="navbar navbar-expand-lg border-bottom"
      style={{
        backgroundColor: "var(--bg-primary)",
        transition: "background-color 0.2s ease",
      }}
    >
      <div className="container p-2">
        <Link
          className="navbar-brand"
          to="/"
          style={{ textDecoration: "none" }}
        >
          <h3
            style={{
              color: "var(--text-primary)",
              fontSize: "1.65rem",
              fontWeight: "700",
              letterSpacing: "0.08em",
              fontFamily: "'Inter', 'Helvetica Neue', sans-serif",
            }}
          >
            AlphaTrades
          </h3>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <div className="d-flex ms-auto align-items-center">
            <ul className="navbar-nav mb-lg-0 me-3">
              <li className="nav-item active">
                <Link
                  className="nav-link"
                  to="/signup"
                  style={{ color: "var(--text-primary)" }}
                >
                  Signup
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  to="/about"
                  style={{ color: "var(--text-primary)" }}
                >
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  to="/product"
                  style={{ color: "var(--text-primary)" }}
                >
                  Product
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  to="/pricing"
                  style={{ color: "var(--text-primary)" }}
                >
                  Pricing
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  to="/support"
                  style={{ color: "var(--text-primary)" }}
                >
                  Support
                </Link>
              </li>
            </ul>

            <button
              onClick={toggleTheme}
              className="btn btn-sm"
              style={{
                cursor: "pointer",
                padding: "6px 12px",
                borderRadius: "20px",
                border: "1px solid var(--border-color)",
                background: "transparent",
                color: "var(--text-primary)",
                fontSize: "14px",
                transition: "all 0.2s ease",
              }}
            >
              {theme === "light" ? "🌙 Dark" : "☀️ Light"}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
