import React, { useState } from "react";
import "./Add_Milk_Record.css";

const Add_Milk_Record = ({ onSave }) => {
  const [formData, setFormData] = useState({
    date: "",
    time: "M", // Default to morning
    cattle: "cow", // Default cattle type
    farmer: "farmer1", // Default farmer name
    idNo: "",
    litre: 0,
    fat: 0,
    snf: 0,
    totalAmount: 0,
  });

  const pricePerLitre = 50; // Constant price per litre

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => {
      const updatedData = { ...prev, [name]: value };
      // Recalculate total amount when fat or snf changes
      if (name === "fat" || name === "snf") {
        const totalAmount =
          (parseFloat(updatedData.fat) + parseFloat(updatedData.snf)) * pricePerLitre;
        updatedData.totalAmount = isNaN(totalAmount) ? 0 : totalAmount;
      }
      return updatedData;
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const savedRecords = JSON.parse(localStorage.getItem("milkRecords")) || [];
    const updatedRecords = [...savedRecords, formData];
    localStorage.setItem("milkRecords", JSON.stringify(updatedRecords));
    alert("Information saved successfully!");
    onSave(formData); // Trigger the callback to notify parent

    // Reset form after saving
    setFormData({
      date: "",
      time: "M",
      cattle: "cow",
      farmer: "farmer1",
      idNo: "",
      litre: 0,
      fat: 0,
      snf: 0,
      totalAmount: 0,
    });
  };

  return (
    <div className=" milk-collection">
      <form onSubmit={handleSubmit}>
        <label htmlFor="date">Date:</label>
        <input
          type="date"
          id="date"
          name="date"
          value={formData.date}
          onChange={handleInputChange}
          required
        />

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

        <label htmlFor="farmer">Farmer Name:</label>
        <input
          type="text"
          id="farmer"
          name="farmer"
          value={formData.farmer}
          onChange={handleInputChange}
          required
        />

        <label htmlFor="idNo">Id No:</label>
        <input
          type="text"
          id="idNo"
          name="idNo"
          value={formData.idNo}
          onChange={handleInputChange}
        />

        <label htmlFor="litre">Litre:</label>
        <input
          type="number"
          id="litre"
          name="litre"
          value={formData.litre}
          onChange={handleInputChange}
        />

        <label htmlFor="fat">Fat:</label>
        <input
          type="number"
          id="fat"
          name="fat"
          value={formData.fat}
          onChange={handleInputChange}
        />

        <label htmlFor="snf">SNF:</label>
        <input
          type="number"
          id="snf"
          name="snf"
          value={formData.snf}
          onChange={handleInputChange}
        />

        <label htmlFor="totalAmount">Total Amount (₹):</label>
        <input
          type="number"
          id="totalAmount"
          name="totalAmount"
          value={formData.totalAmount}
          readOnly
        />

        <button type="submit" className="btn1">
          Save
        </button>
      </form>
    </div>
  );
};

export default Add_Milk_Record;
