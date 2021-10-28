import React from "react";
import { Link } from "react-router-dom";
import gh from "../assets/gh.png";
import { useAuth0 } from "@auth0/auth0-react";

const Login = () => {
	const { loginWithRedirect } = useAuth0();

	return (
		<div className="login">
			<div className="card">
				<div className="regular-login">
					<label htmlFor="email">E-mail</label>
					<input type="text" id="email" name="email" />
					<label htmlFor="passwprd">Passwprd</label>
					<input type="text" id="email" name="email" />
					<button>Login</button>
				</div>
				<div className="login-btns">
					<img src={gh} alt="gh" style={{ width: "5rem" }} />
				</div>
				<div className="reg">
					<span>Don't have a account?</span>
					<Link to="/register">Register</Link>
				</div>
			</div>
		</div>
	);
};

export default Login;
