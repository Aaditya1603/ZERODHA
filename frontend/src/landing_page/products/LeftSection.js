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
        {" "}
        {/* Added vertical alignment to keep sections balanced */}
        <div className="col-6">
          {/* 1. FIXED: Added theme-invert-img class to cleanly flip the bright white dashboard background */}
          <img
            src={imageURL}
            className="img-fluid theme-invert-img"
            alt={productName}
          />
        </div>
        <div className="col-6 p-5">
          {/* 2. FIXED: Injected dynamic typography variables for text readability */}
          <h1 style={{ color: "var(--text-primary)" }}>{productName}</h1>
          <p style={{ color: "var(--text-secondary)", lineHeight: "1.6" }}>
            {productDesription}
          </p>

          <div>
            {/* 3. FIXED: Replaced default faint color links with your brand accent blue variable */}
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
