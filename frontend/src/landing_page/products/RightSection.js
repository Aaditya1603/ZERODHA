import React from "react";

function RightSection({ imageURL, productName, productDesription, learnMore }) {
  return (
    <div className="container mt-5">
      <div className="row align-items-center">
        <div className="col-6 p-5 mt-5">
          <h1 style={{ color: "var(--text-primary)" }}>{productName}</h1>
          <p style={{ color: "var(--text-secondary)", lineHeight: "1.6" }}>
            {productDesription}
          </p>
          <div>
            <a
              href={learnMore}
              style={{
                textDecoration: "none",
                color: "var(--accent-color)",
                fontWeight: "500",
              }}
            >
              Learn More <i class="fa fa-long-arrow-right"></i>
            </a>
          </div>
        </div>
        <div className="col-6">
          <img
            src={imageURL}
            className="img-fluid theme-invert-img"
            alt={productName}
          />
        </div>
      </div>
    </div>
  );
}

export default RightSection;
