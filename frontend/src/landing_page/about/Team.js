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
          <h6 style={{ color: "var(--text-secondary)" }}>
            Creator & Lead Engineer
          </h6>
        </div>

        <div
          className="col-6 col-md-6 p-3"
          style={{ color: "var(--text-secondary)" }}
        >
          <p>
            Aaditya engineered AlphaTrades to overcome the technological
            bottlenecks and interface complexities often found in modern retail
            brokerage platforms. By prioritizing speed and visual clarity,
            AlphaTrade reimagines how users track and manage real-time financial
            market portfolios.
          </p>
          <p>
            As a full-stack engineer specialized in the MERN ecosystem, he is
            focused on building highly scalable web applications, optimizing
            backend architectures, and designing secure financial API systems.
          </p>
          <p>Playing cricket is his zen.</p>
          <p className="mt-4">
            Connect on{" "}
            <a
              href="https://github.com/Aaditya1603"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                textDecoration: "none",
                color: "var(--accent-color)",
                fontWeight: "500",
              }}
            >
              GitHub
            </a>
            {" / "}
            <a
              href="https://www.linkedin.com/in/aaditya-bhardwaj-49590a277/"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                textDecoration: "none",
                color: "var(--accent-color)",
                fontWeight: "500",
              }}
            >
              LinkedIn
            </a>
            {" / "}
            <a
              href="YOUR_PORTFOLIO_URL_HERE"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                textDecoration: "none",
                color: "var(--accent-color)",
                fontWeight: "500",
              }}
            >
              Portfolio
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
