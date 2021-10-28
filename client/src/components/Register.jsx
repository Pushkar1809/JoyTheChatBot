import React from "react";
import { Link } from "react-router-dom";
import gh from "../assets/gh.png";

const Register = () => {
	return (
		<div className="register">
			<div className="card">
				<div className="regular-register">
					<label htmlFor="email">E-mail</label>
					<input type="text" id="email" name="email" />
					<label htmlFor="passwprd">Passwprd</label>
					<input type="text" id="email" name="email" />
					<button>Register</button>
				</div>
				<div className="reg-btns">
					<img src={gh} alt="gh" style={{ width: "5rem" }} />
				</div>
				<div className="log">
					<span>Already a user?</span>
					<Link to="/login">Login</Link>
				</div>
			</div>
		</div>
	);
};

export default Register;
