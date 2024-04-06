import React from 'react';
import './Orders.css';

const Orders = ({ loggedIn, username, ingredients, currentPrice, onOrder }) => {
    // Logic for handling orders
    const handleOrder = () => {
        if (loggedIn) {
            // Logic to handle order when user is logged in
            alert(`Order Details:\n\nIngredients: ${ingredients.join(', ')}\nTotal Price: $${currentPrice}\nOrdered by: ${username}`);
        } else {
            // Logic to handle order when user is not logged in
            alert('Please login to place an order.');
        }
    };

    return (
        <div className="Orders">
            <button onClick={handleOrder}>Orders</button>
        </div>
    );
}

export default Orders;
