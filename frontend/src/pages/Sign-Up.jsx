import React from "react";
import { useState, useEffect } from "react";
import './Sign-Up.css';

const SignUp = () => {
    const { email, setEmail } = useState("");
    const { password, setPassword } = useState("");
    const { passwordConfirmed, setPasswordConfirmed } = useState("");

    

    return (
        <>
            <div id="login-box">
                <div className="left">
                    <h1>Sign up</h1>

                    <input type="email" name="email" value={email} placeholder="E-mail" />
                    <input type="password" name="password" value={password} placeholder="Password" />
                    <input type="password" name="passwordConfrimed" value={passwordConfirmed} placeholder="Confirm password" />

                    <input type="submit" name="signup_submit" value="Sign me up" />
                </div>
            </div>
        </>
    );
};
export default SignUp;