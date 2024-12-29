import React, { useState } from 'react';
import './UHome.css';

const productList = [
    { id: 1, name: "Farm Fresh Homogenised Cow Milk", category: "Milk", price: "₹37 / 500ml", img: "img1.png" },
    { id: 2, name: "Farm Fresh Non Homogenised Cow Milk", category: "Milk", price: "₹37 / 500ml", img: "img2.png" },
    { id: 3, name: "Buffalo Toned Milk", category: "Milk", price: "₹35 / 500ml", img: "img3.png" },
    { id: 4, name: "Farm Fresh Buffalo Milk", category: "Milk", price: "₹47 / 500ml", img: "img4.png" },
    { id: 5, name: "Natural Cow Ghee", category: "Ghee", price: "₹500 / 500ml", img: "img5.png" },
    { id: 6, name: "Buffalo Ghee", category: "Ghee", price: "₹400 / 500ml", img: "img6.png" },
    { id: 7, name: "Pravarsha Natural Paneer", category: "Paneer", price: "₹100 / 200gms", img: "img7.png" },
    { id: 8, name: "Farm Fresh Homogenised Cow Milk", category: "Milk", price: "₹37 / 500ml", img: "img1.png" },
    { id: 9, name: "Farm Fresh Non Homogenised Cow Milk", category: "Milk", price: "₹37 / 500ml", img: "img2.png" },
    { id: 10, name: "Buffalo Toned Milk", category: "Milk", price: "₹35 / 500ml", img: "img3.png" },
    { id: 11, name: "Farm Fresh Buffalo Milk", category: "Milk", price: "₹47 / 500ml", img: "img4.png" },
    { id: 12, name: "Natural Cow Ghee", category: "Ghee", price: "₹500 / 500ml", img: "img5.png" },
    { id: 13, name: "Buffalo Ghee", category: "Ghee", price: "₹400 / 500ml", img: "img6.png" },
    { id: 14, name: "Pravarsha Natural Paneer", category: "Paneer", price: "₹100 / 200gms", img: "img7.png" },
];

const UHome = () => {
    const [activeCategory, setActiveCategory] = useState('All');

    const categoryList = ['All', ...new Set(productList.map(product => product.category))];

    const displayedProducts = activeCategory === 'All'
        ? productList
        : productList.filter(product => product.category === activeCategory);

    return (
        <div className="catalog-container">
            <h1>Product Catalog</h1>
            {/* <div className="row">
                <div className="col-xl-4"> */}
                <div className="category-filters">
                {categoryList.map(category => (
                    <button
                        key={category}
                        className={`filter-button ${activeCategory === category ? 'filter-active' : ''}`}
                        onClick={() => setActiveCategory(category)}
                    >
                        {category}
                    </button>
                ))}
            </div>
            <div className="product-list">
                {displayedProducts.map(product => (
                    <div key={product.id} className="product-item">
                        <img src={product.img} alt={product.name} className="product-img" />
                        <h3>{product.name}</h3>
                        <p>{product.price}</p>
                        <p className="stock-indicator">In Stock</p>
                    </div>
                ))}
            </div>
                </div>
        //     </div>
        // </div>
    );
};

export default UHome;
