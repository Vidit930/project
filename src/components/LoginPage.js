import React, { useState } from 'react';
import './LoginPage.css';
const LoginPage = ({ onLogin, currentPrice }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent the default form submission behavior
        
        // Perform validation or authentication logic here
        // For simplicity, let's assume any non-empty username/password combination is considered valid
        if (username.trim() !== '' && password.trim() !== '') {
            // Call the onLogin function passed as prop
            onLogin(currentPrice);
        } else {
            // Handle invalid login attempt
            console.log('Invalid username or password');
        }
    };

    return (
        <div className="login-page">
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
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
    );
}

export default LoginPage;
