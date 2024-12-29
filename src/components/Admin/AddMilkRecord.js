import React, { useEffect, useState } from "react";
import "./Add_Milk_Record.css"; // Make sure this CSS is properly defined

const AddMilkRecord = () => {
  const [records, setRecords] = useState([]);

  useEffect(() => {
    const storedRecords = JSON.parse(localStorage.getItem("milkRecords")) || [];
    setRecords(storedRecords);
  }, []);

  // Calculate totals and averages for the footer
  const totalMilk = records.reduce((sum, record) => sum + parseFloat(record.litre || 0), 0);
  const totalAmount = records.reduce((sum, record) => sum + parseFloat(record.totalAmount || 0), 0);
  const avgFat = records.length > 0 ? (records.reduce((sum, record) => sum + parseFloat(record.fat || 0), 0) / records.length).toFixed(2) : "0.00";
  const avgSNF = records.length > 0 ? (records.reduce((sum, record) => sum + parseFloat(record.snf || 0), 0) / records.length).toFixed(2) : "0.00";

  return (
    <div className="container5">
      <h2 className="text-center">Milk Records</h2>
      <div className="col-xl-8">
        <table>
          <thead>
            <tr>
              <th>Date</th>
              <th>Time</th>
              <th>Animal</th>
              <th>Milk (Ltr)</th>
              <th>Fat</th>
              <th>SNF</th>
              <th>Payment</th>
              <th>Farmer</th>
            </tr>
          </thead>
          <tbody>
            {records.map((record, index) => (
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
              <td>{records.length}</td>
              <td>{avgFat}</td>
              <td>{avgSNF}</td>
              <td>--</td>
              <td>{totalMilk}</td>
              <td>{totalAmount}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AddMilkRecord;
