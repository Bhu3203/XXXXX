
import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./CattelListingForm.css";

export default function BuyAndSellCattle() {
  const [formData, setFormData] = useState({
    sellerName: "",
    mobileNo: "",
    district: "",
    village: "",
    price: "",
    breed: "",
    image: null,
  });

  const [cattleList, setCattleList] = useState([]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleImageChange = (e) => {
    setFormData({ ...formData, image: e.target.files[0] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.image) {
      alert("Please upload an image of the cattle.");
      return;
    }

    setCattleList([...cattleList, formData]);
    setFormData({
      sellerName: "",
      mobileNo: "",
      district: "",
      village: "",
      price: "",
      breed: "",
      image: null,
    });
  };

  return (
    <div className="buy-sell-container container mt-4 ">
      <div className="form-card p-4 ">
        <h1 className="text-center mb-4 text-white">Sell Your Cattle</h1>
        <form onSubmit={handleSubmit} className="mb-4">
          <div className="mb-3">
            <label className="form-label text-white">Seller Name:</label>
            <input
              type="text"
              name="sellerName"
              value={formData.sellerName}
              onChange={handleInputChange}
              className="form-control"
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label text-white">Mobile Number:</label>
            <input
              type="text"
              name="mobileNo"
              value={formData.mobileNo}
              onChange={handleInputChange}
              className="form-control"
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label text-white">Village:</label>
            <input
              type="text"
              name="village"
              value={formData.village}
              onChange={handleInputChange}
              className="form-control"
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label text-white">District:</label>
            <input
              type="text"
              name="district"
              value={formData.district}
              onChange={handleInputChange}
              className="form-control"
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label text-white">Breed:</label>
            <input
              type="text"
              name="breed"
              value={formData.breed}
              onChange={handleInputChange}
              className="form-control"
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label text-white">Price (₹):</label>
            <input
              type="number"
              name="price"
              value={formData.price}
              onChange={handleInputChange}
              className="form-control"
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label text-white">Upload Image:</label>
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="form-control"
              required
            />
          </div>

          <button type="submit" className="btn btn-primary w-100">
            Add Cattle
          </button>
        </form>
      </div>

      {cattleList.length > 0 && (
        <div className="available-cattle mt-5 p-4">
          <h2 className="text-center mb-3 text-white">Available Cattle</h2>
          <table className="table table-dark table-hover">
            <thead>
              <tr>
                <th>Seller Name</th>
                <th>Mobile No</th>
                <th>District</th>
                <th>Village</th>
                <th>Price (₹)</th>
                <th>Breed</th>
                <th>Image</th>
              </tr>
            </thead>
            <tbody>
              {cattleList.map((cattle, index) => (
                <tr key={index}>
                  <td>{cattle.sellerName}</td>
                  <td>{cattle.mobileNo}</td>
                  <td>{cattle.district}</td>
                  <td>{cattle.village}</td>
                  <td>{cattle.price}</td>
                  <td>{cattle.breed}</td>
                  <td>
                    <img
                      src={URL.createObjectURL(cattle.image)}
                      alt="Cattle"
                      className="img-fluid"
                      style={{ maxWidth: "100px", maxHeight: "100px" }}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
