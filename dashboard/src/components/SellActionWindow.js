import React, { useContext, useState, useEffect } from "react";
import axios from "axios";
import "./SellActionWindow.css";
import GeneralContext from "./GeneralContext";

const SellActionWindow = ({ uid }) => {
  const { closeSellWindow } = useContext(GeneralContext);
  const [stockDetails, setStockDetails] = useState({ name: "", qty: 0, price: 0 });

  // 1. Fetching specific order details from Database using UID
  useEffect(() => {
    const fetchCurrentOrder = async () => {
        try{
            const res = await axios.get("http://localhost:3002/allOrders");
            console.log("All Orders from DB:", res.data); // Debugging ke liye
            console.log("Looking for UID:", uid);

            const currentStock = res.data.find(item => String(item._id) === String(uid));
            if(currentStock){
                setStockDetails(currentStock);
            } 
            else{
                console.log("Stock not found in database for UID:", uid);
            }

        }
        catch(err){
            console.error("Fetch error:", err);
        }
        
    };
    if(uid)
    fetchCurrentOrder();
  }, [uid]);

  // 2. Final Sell Logic
  const handleSell = async () => {
    try {
      const response = await axios.post("http://localhost:3002/sellOrder", { 
        orderId: uid,
        qty: stockDetails.qty,
        price: stockDetails.price
      });
      if (response.status === 200){
         alert(`Sold ${stockDetails.name} successfully!`);
         closeSellWindow();
         window.location.reload(); // UI update karne ke liye
      }

     
    } catch (err) {
        console.error("Sell error details:", err.response);
        alert("Error while selling: " + (err.response?.data || "Server Error"));
    }
  };

  return (
    <div className="container sell-window-container" id="sell-window">
      <div className="header sell-header">
        <h3>SELL {stockDetails.name} <span> x {stockDetails.qty} Qty</span></h3>
        <div className="market-options">
          <label><input type="radio" name="market" checked readOnly /> NSE</label>
          <label><input type="radio" name="market" disabled /> BSE</label>
        </div>
      </div>

      <div className="regular-order">
        <div className="inputs">
          <fieldset>
            <legend>Qty.</legend>
            <input 
            type="number" 
            Value={stockDetails.qty} 
            onChange={(e) => setStockDetails({...stockDetails, qty: e.target.value})}/>
          </fieldset>
          <fieldset>
            <legend>Price</legend>
            <input type="number" step="0.05" Value={stockDetails.price} onChange={(e)=> setStockDetails({...stockDetails,price: e.target.value})}/>
          </fieldset>
        </div>
      </div>

      <div className="buttons">
        <span>Approx. Credit: ₹{(stockDetails.qty * stockDetails.price).toFixed(2)}</span>
        <div>
          <button className="btn btn-orange" onClick={handleSell}>Sell</button>
          <button className="btn btn-grey" onClick={closeSellWindow}>Cancel</button>
        </div>
      </div>
    </div>
  );
};

export default SellActionWindow;