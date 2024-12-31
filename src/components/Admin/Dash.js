import React, { useState, useEffect, useMemo } from "react";
import "./Dash.css";

const initialData = [
  {
    id: 1,
    category: "COW",
    rate: 8,
    createdAt: "8/25/2024, 10:54:04 PM",
    updatedAt: "8/25/2024, 11:30:58 PM",
    status: "Active",
    milkCollected: 150,
    snfCollected: 50,
  },
  {
    id: 2,
    category: "BUFFALO",
    rate: 12,
    createdAt: "8/25/2024, 10:54:40 PM",
    updatedAt: "8/25/2024, 10:54:40 PM",
    status: "Active",
    milkCollected: 200,
    snfCollected: 70,
  },
];

function Dash() {
  const [filterCategory, setFilterCategory] = useState("");
  const [filterStatus, setFilterStatus] = useState("");
  const [data, setData] = useState(initialData);
  const [farmerData, setFarmerData] = useState([]);

  // Load farmer registration data from localStorage
  useEffect(() => {
    const storedFarmers =
      JSON.parse(localStorage.getItem("farmerRecords")) || [];
    setFarmerData(storedFarmers);
  }, []);

  // Combine predefined data with farmer data
  const combinedData = useMemo(
    () => [...data, ...farmerData],
    [data, farmerData]
  );

  // Filtered Data
  const filteredData = useMemo(() => {
    return combinedData.filter(
      (item) =>
        (filterCategory === "" || item.category === filterCategory) &&
        (filterStatus === "" || item.status === filterStatus)
    );
  }, [filterCategory, filterStatus, combinedData]);

  // Aggregated Calculations
  const totalRegisteredFarmers = useMemo(() => farmerData.length, [farmerData]);
  const totalMilkCow = useMemo(
    () =>
      combinedData
        .filter((item) => item.category === "COW")
        .reduce((sum, item) => sum + (parseFloat(item.milkCollected) || 0), 0),
    [combinedData]
  );

  const totalMilkBuffalo = useMemo(
    () =>
      combinedData
        .filter((item) => item.category === "BUFFALO")
        .reduce((sum, item) => sum + (parseFloat(item.milkCollected) || 0), 0),
    [combinedData]
  );

  const totalSNF = useMemo(
    () =>
      combinedData.reduce(
        (sum, item) => sum + (parseFloat(item.snfCollected) || 0),
        0
      ),
    [combinedData]
  );

  const totalUsers = useMemo(() => combinedData.length, [combinedData]);

  return (
    <div className="dashboard">
      <h1>Milk Rate Dashboard</h1>

      {/* Stats Section */}
      <div className="stats">
        <div className="stat-card">
          <h3>Total Registered Farmers</h3>
          <p>{totalRegisteredFarmers}</p>
        </div>
        <div className="stat-card">
          <h3>Total Registered Users</h3>
          <p>{totalUsers}</p>
        </div>
        <div className="stat-card">
          <h3>Total Milk Collected (Cow)</h3>
          <p>{totalMilkCow} Liters</p>
        </div>
        <div className="stat-card">
          <h3>Total Milk Collected (Buffalo)</h3>
          <p>{totalMilkBuffalo} Liters</p>
        </div>
        <div className="stat-card">
          <h3>Total SNF Collected</h3>
          <p>{totalSNF} Liters</p>
        </div>
      </div>

      {/* Filters Section */}
      <div className="filters">
        <select
          onChange={(e) => setFilterCategory(e.target.value)}
          value={filterCategory}
        >
          <option value="">Filter by Category</option>
          <option value="COW">Cow</option>
          <option value="BUFFALO">Buffalo</option>
        </select>

        <select
          onChange={(e) => setFilterStatus(e.target.value)}
          value={filterStatus}
        >
          <option value="">Filter by Status</option>
          <option value="Active">Active</option>
        </select>

        <button className="add-btn">Add New Rate</button>
      </div>

      {/* Cards Section */}
      <div className="cards">
        {filteredData.length > 0 ? (
          filteredData.map((item) => (
            <div
              className="card"
              key={item.id || item.farmerId || Math.random()}
            >
              <h2>{item.category || "N/A"}</h2>
              <p>Rate: ₹ {item.rate || "N/A"}/Fat</p>
              <p>Milk Collected: {item.milkCollected || "0"} Liters</p>
              <p>SNF Collected: {item.snfCollected || "0"} Liters</p>
              <p>Created At: {item.createdAt || "N/A"}</p>
              <p>Updated At: {item.updatedAt || "N/A"}</p>
              <div className="card-footer">
                <button className="edit-btn">Edit</button>
                <span className="status">{item.status || "N/A"}</span>
              </div>
            </div>
          ))
        ) : (
          <p>No records found.</p>
        )}
      </div>
    </div>
  );
}

export default Dash;
