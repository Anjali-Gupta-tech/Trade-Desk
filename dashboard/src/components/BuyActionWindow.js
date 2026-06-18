import React, { useState } from "react";
import axios from "axios";
import { useContext } from "react";
import GeneralContext from "./GeneralContext";

import "./BuyActionWindow.css";

const BuyActionWindow = ({ uid }) => {
   const context = useContext(GeneralContext);
   console.log("BUY BUTTON CLICKED"); 

  console.log("UID:", uid);

  const [stockQuantity, setStockQuantity] = useState(1);
  const [stockPrice, setStockPrice] = useState(0.0);
const handleBuyClick = async () => {
  try {
    await axios.post('https://backend-x7uu.onrender.com/neworders', {
      name: uid,
      qty: stockQuantity,
      price: stockPrice,
      mood: "BUY"
    });

    // close window ONLY after successful order
    context.closeBuyWindow();

  } catch (error) {
    console.error("Order failed:", error.response?.data || error.message);
    alert("Order failed. Please try again.");
  }
};

const handleCancelClick = () => {
  context.closeBuyWindow();
};

  return (
    <div className="container" id="buy-window" draggable="true">
      <div className="regular-order">
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
        <span>Margin required ₹140.65</span>
        <div>
          <button className="btn btn-blue" onClick={handleBuyClick}>
            Buy
          </button>
          <button className="btn btn-grey" onClick={handleCancelClick}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default BuyActionWindow;
