import React from "react";
import { useState, useEffect } from "react";
import './Sign-Up.css';

const LogIn = () => {
    const { email, setEmail } = useState("");
    const { password, setPassword } = useState("");



    return (
        <>
            <div id="login-box" className="login">
                <div className="left">
                    <h1>Login</h1>

                    <input type="email" name="email" value={email} placeholder="E-mail" />
                    <input type="password" name="password" value={password} placeholder="Password" />

                    <input type="submit" name="signup_submit" value="Log me in" />
                </div>
            </div>
        </>
    );
};
export default LogIn;