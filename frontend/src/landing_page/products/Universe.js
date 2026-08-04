import React from "react";

function Universe() {
  return (
    <div className="container mt-5">
      <div className="row text-center">
        <h1 style={{ color: "var(--text-primary)" }}>The Zerodha Universe</h1>
        <p style={{ color: "var(--text-secondary)", marginBottom: "3rem" }}>
          Extend your trading and investment experience even further with our
          partner platforms
        </p>

        <div className="col-4 p-3 mt-5 d-flex flex-column align-items-center justify-content-between">
          <img
            src="media/images/smallcaseLogo.png"
            height="50px"
            alt="Smallcase"
          />

          <p
            className="text-small"
            style={{ marginTop: "20px", color: "var(--text-secondary)" }}
          >
            Thematic investment platform
          </p>
        </div>

        <div className="col-4 p-3 mt-5 d-flex flex-column align-items-center justify-content-between">
          <img src="media/images/streakLogo.png" height="50px" alt="Streak" />
          <p className="text-small" style={{ marginTop: "20px" }}>
            Algo & strategy platform
          </p>
        </div>

        <div className="col-4 p-3 mt-5 d-flex flex-column align-items-center justify-content-between">
          <img
            src="media/images/sensibullLogo.svg"
            height="40px"
            alt="Sensibull"
          />
          <p className="text-small" style={{ marginTop: "20px" }}>
            Options trading platform
          </p>
        </div>

        <div className="col-4 p-3 mt-5 d-flex flex-column align-items-center justify-content-between">
          <img
            src="media/images/zerodhaFundhouse.png"
            height="50px"
            className="logo-invert-white"
            alt="Zerodha Fund House"
          />
          <p
            className="text-small"
            style={{ marginTop: "20px", color: "var(--text-secondary)" }}
          >
            Asset management
          </p>
        </div>

        <div className="col-4 p-3 mt-5 d-flex flex-column align-items-center justify-content-between">
          <img
            src="media/images/goldenpiLogo.png"
            height="50px"
            className="logo-invert-white"
            alt="GoldenPi"
          />
          <p
            className="text-small"
            style={{ marginTop: "20px", color: "var(--text-secondary)" }}
          >
            Bonds trading platform
          </p>
        </div>

        <div className="col-4 p-3 mt-5 d-flex flex-column align-items-center justify-content-between">
          <img
            src="media/images/dittoLogo.png"
            height="45px"
            className="logo-invert-white"
            alt="Ditto"
          />
          <p
            className="text-small"
            style={{ marginTop: "20px", color: "var(--text-secondary)" }}
          >
            Insurance
          </p>
        </div>

        <div className="col-12 mt-5">
          <a href="https://zerodha-frontend-kch5.onrender.com/signup">
            <button
              className="p-2 btn btn-primary fs-5 mb-5"
              style={{
                width: "20%",
                margin: "0 auto",
                backgroundColor: "var(--accent-color)",
                border: "none",
              }}
            >
              Signup Now
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Universe;
