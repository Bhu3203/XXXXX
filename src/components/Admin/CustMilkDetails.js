import React, { useState, useEffect } from "react";
import "../Admin/AddusermilkDetail.css";

export default function CustMilkDetails() {
    const [milkData, setMilkData] = useState([]);
    const [searchQuery, setSearchQuery] = useState("");
  
    useEffect(() => {
        const storedData = JSON.parse(localStorage.getItem("milkDetails")) || [];
        setMilkData(storedData);
    }, []);
  
    const filteredData = milkData.filter((item) =>
        item.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
  
    return (
        <div className="milk-display-container">
            <h2>Milk Details Records</h2>
            <input
                type="text"
                placeholder="Search by Name"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
            />
            <table>
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Cattle</th>
                        <th>Litre</th>
                        <th>P/Lit</th>
                        <th>Total Amount</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredData.map((data, index) => (
                        <tr key={index}>
                            <td>{data.date}</td>
                            <td>{data.id}</td>
                            <td>{data.name}</td>
                            <td>{data.cattle}</td>
                            <td>{data.litre}</td>
                            <td>{data.pricePerLitre}</td>
                            <td>{data.totalAmount}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
