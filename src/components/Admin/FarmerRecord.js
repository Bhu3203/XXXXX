import React, { useState, useEffect } from "react";
import "./FarmerRecord.css";
import { useNavigate } from "react-router-dom";

export default function FarmerRecord() {
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [selectedFarmer, setSelectedFarmer] = useState("");
  const [records, setRecords] = useState([]);
  const [filteredRecords, setFilteredRecords] = useState([]);

  const navigate = useNavigate();

  
  useEffect(() => {
    const storedRecords = JSON.parse(localStorage.getItem("milkRecords")) || [];
    setRecords(storedRecords);
    setFilteredRecords(storedRecords);
  }, []);


  useEffect(() => {
    let filtered = records;
    if (selectedFarmer) {
      filtered = filtered.filter((record) =>
        record.farmer.toLowerCase().includes(selectedFarmer.toLowerCase())
      );
    }

   
    if (startDate && endDate) {
      filtered = filtered.filter((record) => {
        const recordDate = new Date(record.date);
        return recordDate >= new Date(startDate) && recordDate <= new Date(endDate);
      });
    }

    setFilteredRecords(filtered);
  }, [selectedFarmer, records, startDate, endDate]);

  const handleGenerateReport = () => {
    navigate("/admindash/milkreport", { state: { farmerRecords: filteredRecords } });
  };

  return (
    <div className="milk-record-container">
 
      <div className="filters">
        <label>
          Select start date:
          <input
            type="date"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
          />
        </label>
        <label>
          Select end date:
          <input
            type="date"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
          />
        </label>
        <label>
          Select a farmer:
          <input
            type="text"
            value={selectedFarmer}
            onChange={(e) => setSelectedFarmer(e.target.value)}
            placeholder="Enter Farmer Name"
          />
        </label>
        <button onClick={handleGenerateReport}>Generate Report</button>
      </div>


      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>Date</th>
              <th>Time</th>
              <th>Cattle</th>
              <th>Milk (Ltr)</th>
              <th>Fat</th>
              <th>SNF</th>
              <th>Total Amount</th>
              <th>Farmer</th>
            </tr>
          </thead>
          <tbody>
            {filteredRecords.map((record, index) => (
              <tr key={index}>
                <td>{record.date}</td>
                <td>{record.time}</td>
                <td>{record.cattle}</td>
                <td>{record.litre}</td>
                <td>{record.fat}</td>
                <td>{record.snf}</td>
                <td>{record.totalAmount}</td>
                <td>{record.farmer}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>


      <div className="footer-stats">
        <table>
          <thead>
            <tr>
              <th>Total & Avg</th>
              <th>Total Entries</th>
              <th>Avg FAT</th>
              <th>Avg SNF</th>
              <th>Avg Degree/%</th>
              <th>Total Milk/L</th>
              <th>Total Amount/₹</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Summary</td>
              <td>{filteredRecords.length}</td>
              <td>
                {filteredRecords.length > 0
                  ? (
                      filteredRecords.reduce((sum, record) => sum + parseFloat(record.fat || 0), 0) / 
                      filteredRecords.length
                    ).toFixed(2)
                  : "0.00"}
              </td>
              <td>
                {filteredRecords.length > 0
                  ? (
                      filteredRecords.reduce((sum, record) => sum + parseFloat(record.snf || 0), 0) / 
                      filteredRecords.length
                    ).toFixed(2)
                  : "0.00"}
              </td>
              <td>--</td>
              <td>
                {filteredRecords.reduce((sum, record) => sum + parseFloat(record.litre || 0), 0)}
              </td>
              <td>
                {filteredRecords.reduce((sum, record) => sum + parseFloat(record.totalAmount || 0), 0)}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
