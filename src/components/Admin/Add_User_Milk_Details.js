// AddMilkDetails.js
import React, { useState } from "react";
import "../Admin/AddusermilkDetail.css"

export default function Add_User_Milk_Details() {
  const [formData, setFormData] = useState({
    date: "",
    cattle: "cow",
    id: "",
    name: "",
    litre: 0,
    pricePerLitre: 0,
    totalAmount: 0,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Save to localStorage
    const storedData = JSON.parse(localStorage.getItem("milkDetails")) || [];
    storedData.push({
      ...formData,
      litre: parseFloat(formData.litre),
      pricePerLitre: parseFloat(formData.pricePerLitre),
      totalAmount: parseFloat(formData.litre) * parseFloat(formData.pricePerLitre),
    });
    localStorage.setItem("milkDetails", JSON.stringify(storedData));

    alert("Milk Details Saved Successfully!");

    // Clear the form
    setFormData({
      date: "",
      cattle: "cow",
      id: "",
      name: "",
      litre: 0,
      pricePerLitre: 0,
      totalAmount: 0,
    });
  };

  return (
    <div className="milk-form-container">
      <h2>Add Milk Details</h2>
      <form onSubmit={handleSubmit}>
        <label>Date:</label>
        <input type="date" name="date" value={formData.date} onChange={handleInputChange} />

        <label>Cattle:</label>
        <select name="cattle" value={formData.cattle} onChange={handleInputChange}>
          <option value="cow">Cow</option>
          <option value="buffalo">Buffalo</option>
        </select>

        <label>Id No:</label>
        <input type="text" name="id" value={formData.id} onChange={handleInputChange} />

        <label>Name:</label>
        <input type="text" name="name" value={formData.name} onChange={handleInputChange} />

        <label>Litre:</label>
        <input type="number" name="litre" value={formData.litre} onChange={handleInputChange} />

        <label>P/Litre:</label>
        <input
          type="number"
          name="pricePerLitre"
          value={formData.pricePerLitre}
          onChange={handleInputChange}
        />

        <label>Total Amount:</label>
        <input type="number" name="totalAmount" value={formData.totalAmount} readOnly />

        <button type="submit">Save</button>
      </form>
    </div>
  );
}
