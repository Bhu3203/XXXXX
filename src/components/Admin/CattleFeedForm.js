// CattleFeedForm.js
import React, { useState } from "react";
import "./CattleFeedForm.css";

const CattleFeedForm = () => {
  const [formData, setFormData] = useState({
    farmerName: "",
    date: "",
    feedType: "",
    quantity: "",
    cost: "",
    supplierName: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Save data to localStorage
    const storedFeeds = JSON.parse(localStorage.getItem("cattleFeeds")) || [];
    storedFeeds.push(formData);
    localStorage.setItem("cattleFeeds", JSON.stringify(storedFeeds));

    alert("Cattle feed record saved successfully!");

    // Reset Form
    setFormData({
      farmerName: "",
      date: "",
      feedType: "",
      quantity: "",
      cost: "",
      supplierName: "",
    });
  };

  return (
    <div className="cattle-feed-container">
      <h2>Cattle Feed Record Form</h2>
      <form onSubmit={handleSubmit} className="cattle-feed-form">
        <label>
          Farmer Name:
          <input
            type="text"
            name="farmerName"
            value={formData.farmerName}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Date:
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Feed Type:
          <select
            name="feedType"
            value={formData.feedType}
            onChange={handleChange}
            required
          >
            <option value="">Select Feed Type</option>
            <option value="Grain Feed">Grain Feed</option>
            <option value="Silage">Silage</option>
            <option value="Hay">Hay</option>
            <option value="Concentrate Feed">Concentrate Feed</option>
          </select>
        </label>

        <label>
          Quantity (kg):
          <input
            type="number"
            name="quantity"
            value={formData.quantity}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Cost (₹):
          <input
            type="number"
            name="cost"
            value={formData.cost}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Supplier Name:
          <input
            type="text"
            name="supplierName"
            value={formData.supplierName}
            onChange={handleChange}
            required
          />
        </label>

        <button type="submit" className="submit-btn">
          Save Record
        </button>
      </form>
    </div>
  );
};

export default CattleFeedForm;
