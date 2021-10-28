import React from "react";
import { Link } from "react-router-dom";

const Register = () => {
	return (
		<div className="register">
			<div className="card">
				<h1>Register</h1>
				<div className="inps">
					<div className="email inp">
						<label htmlFor="email">E-mail</label>
						<input type="text" id="email" name="email" />
					</div>
					<div className="pass inp">
						<label htmlFor="password">Password</label>
						<input type="password" id="password" name="password" />
					</div>
					<button>Register</button>
				</div>
				<div className="switch">
					<span>Already a user?</span>
					<Link to="/login">Login</Link>
				</div>
			</div>
		</div>
	);
};

export default Register;
