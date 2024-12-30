import React, { useState, useEffect } from 'react';

export default function LoanAndFeedRecord() {
  const [feedRecords, setFeedRecords] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

 
  useEffect(() => {
    const storedFeeds = JSON.parse(localStorage.getItem('cattleFeeds')) || [];
    const enrichedFeeds = storedFeeds.map((record, index) => ({
      farmerId: `F00${index + 1}`,
      farmerName: record.farmerName || '',
      date: record.date || '',
      feedType: record.feedType || '',
      quantity: record.quantity || 0,
      unitPrice: record.cost || 0,
      totalCost: (record.quantity || 0) * (record.cost || 0),
      amountPaid: 0, 
      amountLeft: (record.quantity || 0) * (record.cost || 0),
      dueDate: '', 
      supplier: record.supplierName || '',
      remarks: 'Pending',
    }));
    setFeedRecords(enrichedFeeds);
  }, []);

  
  const filteredRecords = feedRecords.filter(
    (record) =>
      record.farmerName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      record.farmerId.toLowerCase().includes(searchQuery.toLowerCase())
  );


  const handleAmountPaidChange = (index, value) => {
    const updatedRecords = [...feedRecords];
    const amountPaid = parseFloat(value) || 0;
    updatedRecords[index].amountPaid = amountPaid;
    updatedRecords[index].amountLeft = updatedRecords[index].totalCost - amountPaid;
    setFeedRecords(updatedRecords);
  };

  return (
    <div>
      <h1>Cattle Feed Management</h1>

  
      <div style={{ marginBottom: '20px' }}>
        <input
          type="text"
          placeholder="Search by Farmer Name or ID"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          style={{ padding: '8px', width: '300px' }}
        />
      </div>

   
      <table border="1" style={{ width: '100%', borderCollapse: 'collapse', marginTop: '20px' }}>
        <thead>
          <tr>
            <th>Farmer ID</th>
            <th>Farmer Name</th>
            <th>Date</th>
            <th>Feed Type</th>
            <th>Quantity (kg)</th>
            <th>Unit Price (₹)</th>
            <th>Total Cost (₹)</th>
            <th>Amount Paid (₹)</th>
            <th>Amount Left (₹)</th>
            <th>Payment Due Date</th>
            <th>Supplier</th>
            <th>Remarks</th>
          </tr>
        </thead>
        <tbody>
          {filteredRecords.map((record, index) => {
            const isHighlighted =
              record.farmerName.toLowerCase().includes(searchQuery.toLowerCase()) ||
              record.farmerId.toLowerCase().includes(searchQuery.toLowerCase());

            return (
              <tr
                key={index}
                style={{
                  backgroundColor: isHighlighted ? 'yellow' : 'white',
                  fontWeight: isHighlighted ? 'bold' : 'normal',
                }}
              >
                <td>{record.farmerId}</td>
                <td>{record.farmerName}</td>
                <td>{record.date}</td>
                <td>{record.feedType}</td>
                <td>{record.quantity}</td>
                <td>{record.unitPrice}</td>
                <td>{record.totalCost}</td>
                <td>
                  <input
                    type="number"
                    value={record.amountPaid}
                    onChange={(e) => handleAmountPaidChange(index, e.target.value)}
                    style={{ width: '80px' }}
                  />
                </td>
                <td>{record.amountLeft}</td>
                <td>{record.dueDate || 'N/A'}</td>
                <td>{record.supplier}</td>
                <td>{record.remarks}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
