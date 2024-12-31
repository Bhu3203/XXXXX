import React, { useState } from "react";
import "./CattleFeedForm.css";

const CattleFeedForm = () => {
  const [formData, setFormData] = useState({
    farmerId: "",
    farmerName: "",
    feedType: "",
    quantity: "",
    cost: "",
    supplierName: "",
  });

  const [errorMessage, setErrorMessage] = useState("");

  // Handle Input Changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Fetch Farmer Details by ID
  const fetchFarmerDetails = () => {
    const farmers = JSON.parse(localStorage.getItem("farmers")) || [];
    const farmer = farmers.find((f) => f.farmerId === formData.farmerId.trim());

    if (farmer) {
      setFormData((prev) => ({
        ...prev,
        farmerName: farmer.fullName,
      }));
      setErrorMessage("");
    } else {
      setFormData((prev) => ({
        ...prev,
        farmerName: "",
      }));
      setErrorMessage("Farmer ID not found. Please check and try again.");
    }
  };

  // Handle Submit
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.farmerId || !formData.farmerName) {
      setErrorMessage("Please fetch a valid Farmer ID before submitting.");
      return;
    }

    const storedFeeds = JSON.parse(localStorage.getItem("cattleFeeds")) || [];
    storedFeeds.push(formData);
    localStorage.setItem("cattleFeeds", JSON.stringify(storedFeeds));

    alert("Cattle feed record saved successfully!");

    setFormData({
      farmerId: "",
      farmerName: "",
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
        {/* Farmer ID */}
        <label>
          Farmer ID:
          <div style={{ display: "flex", gap: "10px" }}>
            <input
              type="text"
              name="farmerId"
              value={formData.farmerId}
              onChange={handleChange}
              placeholder="Enter Farmer ID"
              required
            />
            <button
              type="button"
              onClick={fetchFarmerDetails}
              className="btn-fetch"
            >
              Fetch Farmer
            </button>
          </div>
          {errorMessage && (
            <p style={{ color: "red", marginTop: "5px" }}>{errorMessage}</p>
          )}
        </label>

        {/* Farmer Name */}
        <label>
          Farmer Name:
          <input
            type="text"
            name="farmerName"
            value={formData.farmerName}
            readOnly
            placeholder="Farmer Name"
          />
        </label>

        {/* Feed Type */}
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

        {/* Quantity */}
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

        {/* Cost */}
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

        {/* Supplier Name */}
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

        {/* Submit Button */}
        <button type="submit" className="submit-btn">
          Save Record
        </button>
      </form>
    </div>
  );
};

export default CattleFeedForm;
