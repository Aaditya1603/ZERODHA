import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";

import axios from "axios";

import GeneralContext from "./GeneralContext";

import "./BuyActionWindow.css";

const BuyActionWindow = ({ uid }) => {
  const generalContext = useContext(GeneralContext);
  const [stockQuantity, setStockQuantity] = useState(1);
  const [stockPrice, setStockPrice] = useState(0.0);
  const { closeBuyWindow } = useContext(GeneralContext);

  const handleBuyClick = async () => {
    try {
      await axios.post("https://zerodha-backend-h3nz.onrender.com/newOrder", {
        name: uid,
        qty: parseFloat(stockQuantity),
        price: parseFloat(stockPrice),
        mode: "BUY",
      });
      closeBuyWindow();
    } catch (err) {
      console.error("Buy failed", err);
      alert("Failed to place order. Please try again.");
    }
  };

  const handleCancelClick = () => {
    closeBuyWindow();
  };

  return (
    <div className="container" id="buy-window" draggable="true">
      <div className="regular-order">
        <div
          className="buy-window-header"
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            paddingBottom: "10px",
            marginBottom: "15px",
            borderBottom: "1px solid #ccc",
          }}
        >
          <h2 style={{ margin: 0, fontSize: "1.3rem", fontWeight: "600" }}>
            {uid}
          </h2>
          <span
            style={{
              fontSize: "0.75rem",
              backgroundColor: "#387ed1",
              color: "#fff",
              padding: "2px 6px",
              borderRadius: "3px",
              fontWeight: "bold",
            }}
          >
            BUY
          </span>
        </div>
        <div className="inputs">
          <fieldset>
            <legend>Qty.</legend>
            <input
              type="number"
              name="qty"
              id="qty"
              onChange={(e) => setStockQuantity(e.target.value)}
              value={stockQuantity}
            />
          </fieldset>
          <fieldset>
            <legend>Price</legend>
            <input
              type="number"
              name="price"
              id="price"
              step="0.05"
              onChange={(e) => setStockPrice(e.target.value)}
              value={stockPrice}
            />
          </fieldset>
        </div>
      </div>

      <div className="buttons">
        <span>
          Margin required ₹
          {((stockQuantity || 0) * (stockPrice || 0)).toFixed(2)}
        </span>
        <div>
          <Link className="btn btn-blue" onClick={handleBuyClick}>
            Buy
          </Link>
          <Link to="" className="btn btn-grey" onClick={handleCancelClick}>
            Cancel
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BuyActionWindow;
