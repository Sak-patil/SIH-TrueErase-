import React from 'react';
import './SignUp.css';

function SignUp({ onSignUp }) {
    const handleFormSubmit = (event) => {
        event.preventDefault();
        onSignUp();
    };

    return (
        <div className="signup-page">
            <div className="signup-container">
                <h2>Create Your Account</h2>
                <p>Join TrueErase to start securely managing your data wipes.</p>
                <form className="signup-form" onSubmit={handleFormSubmit}>
                    <div className="form-group">
                        <label htmlFor="name">Full Name</label>
                        <input type="text" id="name" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email Address</label>
                        <input type="email" id="email" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" required />
                    </div>
                    <button type="submit" className="signup-button">Sign Up</button>
                </form>
            </div>
        </div>
    );
}

export default SignUp;
