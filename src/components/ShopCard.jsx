import React from 'react';

export default function ShopCard({ card }) {
    return (
        <div className="shop-card">
        <h3>{card.name}</h3>
        <div className="color" style={{ backgroundColor: card.color }}></div>
        <img src={card.img} alt={card.name} />
        <div className="price">${card.price}</div>
        <button>Add to cart</button>
        </div>
    );
}