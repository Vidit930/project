import React, { useState } from 'react';
import './Navbar.css';
import Orders from './Orders'; // Import Orders component

const Navbar = ({ currentPrice }) => {
    const [showLogin, setShowLogin] = useState(false);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [loggedIn, setLoggedIn] = useState(false);
    const [lettuce, setLettuce] = useState(0);
    const [tomato, setTomato] = useState(0);
    const [cheese, setCheese] = useState(0);
    const [meat, setMeat] = useState(0);

    const toggleLogin = () => {
        setShowLogin(!showLogin);
    };

    const handleLogin = (e) => {
        e.preventDefault();
        // Perform validation or authentication logic here
        // For simplicity, let's assume any non-empty username/password combination is considered valid
        if (username.trim() !== '' && password.trim() !== '') {
            // Call the onLogin function passed as prop
            setUsername(username);
            setPassword(password);
            setLoggedIn(true);
            setShowLogin(false);
        } else {
            // Handle invalid login attempt
            console.log('Invalid username or password');
        }
    };

    const handleLogout = () => {
        setUsername('');
        setPassword('');
        setLoggedIn(false);
    };

    const handleOrder = () => {
        if (loggedIn) {
            // Logic to handle order when user is logged in
            const ingredients = [];
            if (lettuce > 0) ingredients.push(`Lettuce: ${lettuce}`);
            if (tomato > 0) ingredients.push(`Tomato: ${tomato}`);
            if (cheese > 0) ingredients.push(`Cheese: ${cheese}`);
            if (meat > 0) ingredients.push(`Meat: ${meat}`);
            
            alert(`Order placed by: ${username}\nIngredients: ${ingredients.join(', ')}\nTotal Price: $${currentPrice}`);
        } else {
            // Logic to handle order when user is not logged in
            alert('Please login to place an order.');
        }
    };

    return (
        <div className="Toolbar__Toolbar__2hkfg">
            <div className="BurgerBuilder">
                Burger Builder
            </div>
            {loggedIn ? (
                <div className="Login" onClick={handleLogout}>
                    Logout ({username})
                </div>
            ) : (
                <div className="Login" onClick={toggleLogin}>
                    Login
                </div>
            )}
            <Orders
                currentPrice={currentPrice}
                loggedIn={loggedIn}
                username={username}
                ingredients={[lettuce, tomato, cheese, meat]}
                onOrder={handleOrder}
            />
            {showLogin && (
                <div className="login-form">
                    <form onSubmit={handleLogin}>
                        <input
                            type="text"
                            placeholder="Username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                        <input
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <button type="submit">Login</button>
                    </form>
                </div>
            )}
        </div>
    );
}

export default Navbar;
