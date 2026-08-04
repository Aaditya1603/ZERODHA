import React from "react";

function Stats() {
  return (
    <div className="container p-3">
      <div className="row p-5">
        <div className="col-6 p-5">
          <h1 className="fs-2 mb-5" style={{ color: "var(--text-primary)" }}>
            Trust with confidence
          </h1>
          <h2 className="fs-4" style={{ color: "var(--text-primary)" }}>
            Customer-first always
          </h2>
          <p style={{ color: "var(--text-secondary)", lineHeight: "1.6" }}>
            That's why 1.3+ crore customers trust AlphaTrades with ₹3.5+ lakhs
            crores worth of equity investments.
          </p>
          <h2 className="fs-4" style={{ color: "var(--text-primary)" }}>
            No spam or gimmicks
          </h2>
          <p style={{ color: "var(--text-secondary)", lineHeight: "1.6" }}>
            No gimmicks, spam, "gamification, or annoying push notifications.
            High quality apps that you use at your pace, the way you like."
          </p>
          <h2 className="fs-4" style={{ color: "var(--text-primary)" }}>
            The AlphaTrades universe
          </h2>
          <p style={{ color: "var(--text-secondary)", lineHeight: "1.6" }}>
            Not just an app, but a whole ecosystem. Our investments in 30+
            fintech startups offer you tailored services specific to your needs.
          </p>
          <h2 className="fs-4" style={{ color: "var(--text-primary)" }}>
            Do better with money
          </h2>
          <p style={{ color: "var(--text-secondary)", lineHeight: "1.6" }}>
            with initiatives like Nudge and Kill Switch, we don't just
            facilitate transactions, but actively help you do better with your
            money.
          </p>
        </div>
        <div className="col-6 p-5">
          <img
            src="media/images/ecosystem.png"
            style={{ width: "90%" }}
            className="theme-invert-img"
          />

          <div className="text-center mt-3">
            <a
              href=""
              className="mx-5"
              style={{ textDecoration: "none", color: "var(--accent-color)" }}
            >
              Explore our products{" "}
              <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
            </a>
            <a
              href=""
              style={{ textDecoration: "none", color: "var(--accent-color)" }}
            >
              Try Kite demo{" "}
              <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Stats;
