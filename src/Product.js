// Updated Product.js for React Filtering

import React, { useState } from 'react';
import './Product.css';

const products = [
    { id: 1, name: "Farm Fresh Homogenised Cow Milk", category: "Milk", price: "₹37 / 500ml", img: "img1.png" },
    { id: 2, name: "Farm Fresh Non Homogenised Cow Milk", category: "Milk", price: "₹37 / 500ml", img: "img2.png" },
    { id: 3, name: "Buffalo Toned Milk", category: "Milk", price: "₹35 / 500ml", img: "img3.png" },
    { id: 4, name: "Farm Fresh Buffalo Milk", category: "Milk", price: "₹47 / 500ml", img: "img4.png" },
    { id: 5, name: "Natural Cow Ghee", category: "Ghee", price: "₹500 / 500ml", img: "img5.png" },
    { id: 6, name: "Buffalo Ghee", category: "Ghee", price: "₹400 / 500ml", img: "img6.png" },
    { id: 7, name: "Pravarsha Natural Paneer", category: "Paneer", price: "₹100 / 200gms", img: "img7.png" },
<<<<<<< HEAD
    { id: 8, name: "Farm Fresh Homogenised Cow Milk", category: "Milk", price: "₹37 / 500ml", img: "img1.png" },
    { id: 9, name: "Farm Fresh Non Homogenised Cow Milk", category: "Milk", price: "₹37 / 500ml", img: "img2.png" },
    { id: 10, name: "Buffalo Toned Milk", category: "Milk", price: "₹35 / 500ml", img: "img3.png" },
    { id: 11, name: "Farm Fresh Buffalo Milk", category: "Milk", price: "₹47 / 500ml", img: "img4.png" },
    { id: 12, name: "Natural Cow Ghee", category: "Ghee", price: "₹500 / 500ml", img: "img5.png" },
    { id: 13, name: "Buffalo Ghee", category: "Ghee", price: "₹400 / 500ml", img: "img6.png" },
    { id: 14, name: "Pravarsha Natural Paneer", category: "Paneer", price: "₹100 / 200gms", img: "img7.png" },
=======
>>>>>>> 88f86fa1f9c7eef529b94341abfd584893c31faa
];

const Product = () => {
    const [selectedCategory, setSelectedCategory] = useState('All');
    const categories = ['All', ...new Set(products.map(product => product.category))];

    const filteredProducts = selectedCategory === 'All'
        ? products
        : products.filter(product => product.category === selectedCategory);

    return (
        <div className="product-app">
            <h1>Product Catalog</h1>
            <div className="filter-container">
                {categories.map(category => (
                    <button
                        key={category}
                        className={`filter-btn ${selectedCategory === category ? 'active' : ''}`}
                        onClick={() => setSelectedCategory(category)}
                    >
                        {category}
                    </button>
                ))}
            </div>
            <div className="product-container">
                {filteredProducts.map(product => (
<<<<<<< HEAD
                    <div key={product.id} className="product-card   card">
=======
                    <div key={product.id} className="product-card">
>>>>>>> 88f86fa1f9c7eef529b94341abfd584893c31faa
                        <img src={product.img} alt={product.name} className="product-image" />
                        <h3>{product.name}</h3>
                        <p>{product.price}</p>
                        <p className="in-stock">In Stock</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Product;
