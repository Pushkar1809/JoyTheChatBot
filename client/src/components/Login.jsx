import React from "react";
import { Link } from "react-router-dom";
import "../styles/auth.scss";

const Login = () => {
	return (
		<div className="login">
			<div className="card">
				<h1>Login</h1>
				<div className="inps">
					<div className="email inp">
						<label htmlFor="email">E-mail</label>
						<input type="text" id="email" name="email" />
					</div>
					<div className="pass inp">
						<label htmlFor="password">Password</label>
						<input type="password" id="password" name="password" />
					</div>
					<button>Login</button>
				</div>
				<div className="switch">
					<span>Don't have a account?</span>
					<Link to="/register">Register</Link>
				</div>
			</div>
		</div>
	);
};

export default Login;
