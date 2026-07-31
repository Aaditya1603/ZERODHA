import React from "react";

function LeftSection({
  imageURL,
  productName,
  productDesription,
  tryDemo,
  learnMore,
  googlePlay,
  appStore,
}) {
  return (
    <div className="container mt-5">
      <div className="row align-items-center">
        <div className="col-6">
          <img
            src={imageURL}
            className="img-fluid theme-invert-img"
            alt={productName}
          />
        </div>
        <div className="col-6 p-5">
          <h1 style={{ color: "var(--text-primary)" }}>{productName}</h1>
          <p style={{ color: "var(--text-secondary)", lineHeight: "1.6" }}>
            {productDesription}
          </p>

          <div>
            <a
              href={tryDemo}
              style={{
                textDecoration: "none",
                color: "var(--accent-color)",
                fontWeight: "500",
              }}
            >
              Try Demo <i className="fa fa-long-arrow-right"></i>
            </a>
            <a
              href={learnMore}
              style={{
                marginLeft: "50px",
                textDecoration: "none",
                color: "var(--accent-color)",
                fontWeight: "500",
              }}
            >
              Learn More <i className="fa fa-long-arrow-right"></i>
            </a>
          </div>

          <div className="mt-4">
            <a href={googlePlay}>
              <img
                src="media/images/googlePlayBadge.svg"
                alt="Google Play Badge"
              />
            </a>
            <a href={appStore}>
              <img
                src="media/images/appstoreBadge.svg"
                style={{ marginLeft: "30px" }}
                alt="App Store Badge"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftSection;
