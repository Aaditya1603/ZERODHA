import React from "react";

function Team() {
  return (
    <div className="container">
      <div
        className="p-3 mt-5 border-top"
        style={{
          lineHeight: "1.8",
          fontSize: "1.2em",
          color: "var(--text-secondary)",
          borderColor: "var(--border-color) !important",
        }}
      >
        <h1 className="text-center" style={{ color: "var(--text-primary)" }}>
          People
        </h1>
      </div>

      <div
        className="row p-3 align-items-center justify-content-center"
        style={{ lineHeight: "1.8", fontSize: "1.2em" }}
      >
        <div className="col-6 col-md-5 p-3 text-center">
          <div style={styles.imageWrapper}>
            <img
              src="media/images/profile-image copy.png"
              alt="Aaditya Bhardwaj"
              style={styles.profileImage}
            />
          </div>

          <h4 className="mt-3" style={{ color: "var(--text-primary)" }}>
            Aaditya Bhardwaj
          </h4>
          <h6 style={{ color: "var(--text-secondary)" }}>Founder, CEO</h6>
        </div>

        <div
          className="col-6 col-md-6 p-3"
          style={{ color: "var(--text-secondary)" }}
        >
          <p>
            Aaditya founded Zerodha in 2010 to overcome the hurdles he faced
            during his decade long stint as a trader. Today, Zerodha has changed
            the landscape of the Indian broking industry.{" "}
          </p>
          <p>
            He is a member of the SEBI Secondary Market Advisory Committee
            (SMAC) and the Market Data Advisory Committee (MDAC).{" "}
          </p>{" "}
          <p>Playing basketball is his zen.</p>{" "}
          <p className="mt-4">
            Connect on{" "}
            <a
              href=""
              style={{
                textDecoration: "none",
                color: "var(--accent-color)",
                fontWeight: "500",
              }}
            >
              Homepage / TradingQnA / Twitter
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Team;

const styles = {
  imageWrapper: {
    position: "relative",
    display: "inline-block",
    width: "220px",
    height: "220px",
    margin: "0 auto",
  },
  profileImage: {
    width: "100%",
    height: "100%",
    borderRadius: "50%",
    objectFit: "cover",
    objectPosition: "center",
  },
};
