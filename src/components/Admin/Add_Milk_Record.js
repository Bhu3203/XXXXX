import React, { useState } from "react";
import "./Add_Milk_Record.css";

const Add_Milk_Record = () => {
  const [formData, setFormData] = useState({
    farmerId: "",
    farmerName: "",
    time: "M",
    cattle: "cow",
    litre: 0,
    fat: 0,
    snf: 0,
    totalAmount: 0,
  });

  const [errorMessage, setErrorMessage] = useState("");
  const pricePerLitre = 50;

  // Handle Input Changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => {
      const updatedData = { ...prev, [name]: value };

      if (name === "fat" || name === "snf") {
        const totalAmount =
          (parseFloat(updatedData.fat) + parseFloat(updatedData.snf)) *
          pricePerLitre;
        updatedData.totalAmount = isNaN(totalAmount) ? 0 : totalAmount;
      }

      return updatedData;
    });
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

    const currentDate = new Date().toISOString().split("T")[0]; // YYYY-MM-DD format

    const savedRecords = JSON.parse(localStorage.getItem("milkRecords")) || [];
    const updatedRecords = [
      ...savedRecords,
      { ...formData, date: currentDate },
    ];
    localStorage.setItem("milkRecords", JSON.stringify(updatedRecords));

    alert("Milk record saved successfully!");

    setFormData({
      farmerId: "",
      farmerName: "",
      time: "M",
      cattle: "cow",
      litre: 0,
      fat: 0,
      snf: 0,
      totalAmount: 0,
    });
  };

  return (
    <div className="milk-collection">
      <form onSubmit={handleSubmit}>
        <h2>Add Milk Record</h2>

        {/* Farmer ID Input */}
        <label htmlFor="farmerId">Farmer ID:</label>
        <div style={{ display: "flex", gap: "10px" }}>
          <input
            type="text"
            id="farmerId"
            name="farmerId"
            value={formData.farmerId}
            onChange={handleInputChange}
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

        {/* Farmer Name */}
        <label htmlFor="farmerName">Farmer Name:</label>
        <input
          type="text"
          id="farmerName"
          name="farmerName"
          value={formData.farmerName}
          readOnly
          placeholder="Farmer Name"
        />

        {/* Time */}
        <label htmlFor="time">Time:</label>
        <select
          id="time"
          name="time"
          value={formData.time}
          onChange={handleInputChange}
          required
        >
          <option value="M">Morning</option>
          <option value="E">Evening</option>
        </select>

        {/* Cattle */}
        <label htmlFor="cattle">Cattle:</label>
        <select
          id="cattle"
          name="cattle"
          value={formData.cattle}
          onChange={handleInputChange}
          required
        >
          <option value="cow">Cow</option>
          <option value="buffalo">Buffalo</option>
        </select>

        {/* Litre */}
        <label htmlFor="litre">Litre:</label>
        <input
          type="number"
          id="litre"
          name="litre"
          value={formData.litre}
          onChange={handleInputChange}
        />

        {/* Fat */}
        <label htmlFor="fat">Fat:</label>
        <input
          type="number"
          id="fat"
          name="fat"
          value={formData.fat}
          onChange={handleInputChange}
        />

        {/* SNF */}
        <label htmlFor="snf">SNF:</label>
        <input
          type="number"
          id="snf"
          name="snf"
          value={formData.snf}
          onChange={handleInputChange}
        />

        

        {/* Submit Button */}
        <button type="submit" className="btn1">
          Save
        </button>
      </form>
    </div>
  );
};

export default Add_Milk_Record;
