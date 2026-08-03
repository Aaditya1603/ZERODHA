import React, { useContext, useState } from "react";
import axios from "axios";
import GeneralContext from "./GeneralContext";
import "./BuyActionWindow.css";
import { Link } from "react-router-dom";

const SellActionWindow = ({ uid }) => {
  const [stockQuantity, setStockQuantity] = useState(1);
  const [stockPrice, setStockPrice] = useState(0.0);
  const { closeSellWindow } = useContext(GeneralContext);

  const handleSellClick = () => {
    axios.post("https://zerodha-backend-h3nz.onrender.com/newOrder", {
      name: uid,
      qty: stockQuantity,
      price: stockPrice,
      mode: "SELL",
    });
    closeSellWindow();
  };

  const handleCancelClick = () => {
    closeSellWindow();
  };

  return (
    <div className="container" id="sell-window" draggable="true">
      <div className="regular-order">
        <div
          className="sell-window-header"
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
              backgroundColor: "#df514c",
              color: "#fff",
              padding: "2px 6px",
              borderRadius: "3px",
              fontWeight: "bold",
            }}
          >
            SELL
          </span>
        </div>

        <div className="inputs">
          <fieldset>
            <legend>Qty.</legend>
            <input
              type="number"
              name="qty"
              id="qty"
              onChange={(e) => {
                setStockQuantity(e.target.value);
              }}
              value={stockQuantity}
            />
          </fieldset>
          <fieldset>
            <legend>Price</legend>
            <input
              type="number"
              name="price"
              id="price"
              onChange={(e) => {
                setStockPrice(e.target.value);
              }}
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
          <Link className="btn btn-danger" onClick={handleSellClick}>
            Sell
          </Link>
          <Link to="" className="btn btn-grey" onClick={handleCancelClick}>
            Cancel
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SellActionWindow;
