import React from 'react';

export default function ShopItem({ item }) {
    return (
        <div className="shop-item">
        <img src={item.img} alt={item.name} />
        <h3>{item.name}</h3>
        <div className="color" style={{ backgroundColor: item.color }}></div>
        <div className="price">${item.price}</div>
        <button>Add to cart</button>
        </div>
    );
}