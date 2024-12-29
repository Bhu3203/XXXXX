import React, { useState } from 'react';
import './Dash.css';

const data = [
  {
    id: 1,
    category: 'COW',
    rate: 8,
    createdAt: '8/25/2024, 10:54:04 PM',
    updatedAt: '8/25/2024, 11:30:58 PM',
    status: 'Active',
    milkCollected: 150, // in liters
    snfCollected: 50, // in liters
  },
  {
    id: 2,
    category: 'BUFFALO',
    rate: 12,
    createdAt: '8/25/2024, 10:54:40 PM',
    updatedAt: '8/25/2024, 10:54:40 PM',
    status: 'Active',
    milkCollected: 200, // in liters
    snfCollected: 70, // in liters
  },
];

function Dash() {
  const [filterCategory, setFilterCategory] = useState('');
  const [filterStatus, setFilterStatus] = useState('');

  const filteredData = data.filter(
    (item) =>
      (filterCategory === '' || item.category === filterCategory) &&
      (filterStatus === '' || item.status === filterStatus)
  );

  // Calculate totals
  const totalMilkCow = data
    .filter((item) => item.category === 'COW')
    .reduce((sum, item) => sum + item.milkCollected, 0);
  const totalMilkBuffalo = data
    .filter((item) => item.category === 'BUFFALO')
    .reduce((sum, item) => sum + item.milkCollected, 0);
  const totalSNF = data.reduce((sum, item) => sum + item.snfCollected, 0);
  const totalUsers = data.length;

  return (
    <div className="dashboard">
      <h1>Milk Rate Dashboard</h1>

      <div className="stats">
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

      <div className="cards">
        {filteredData.map((item) => (
          <div className="card" key={item.id}>
            <h2>{item.category}</h2>
            <p>Rate: ₹ {item.rate}/Fat</p>
            <p>Milk Collected: {item.milkCollected} Liters</p>
            <p>SNF Collected: {item.snfCollected} Liters</p>
            <p>Created At: {item.createdAt}</p>
            <p>Updated At: {item.updatedAt}</p>
            <div className="card-footer">
              <button className="edit-btn">Edit</button>
              <span className="status">{item.status}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Dash;
