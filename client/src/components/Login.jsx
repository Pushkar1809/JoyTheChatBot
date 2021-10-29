import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import "../styles/auth.scss";
import { useAuth } from "../context/AuthContext";

const Login = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [err, setErr] = useState("");
	const [loading, setLoading] = useState(false);
	const { login } = useAuth();
	let history = useHistory();

	const handleEmail = (e) => {
		setEmail(e.target.value);
	};

	const handlePassword = (e) => {
		setPassword(e.target.value);
	};

	const handleLogin = async (e) => {
		e.preventDefault();

		try {
			setErr("");
			setLoading(true);
			await login(email, password);
		} catch (err) {
			setErr(err.message);
		}

		setLoading(false);
		setEmail("");
		setPassword("");
		history.push("/app");
	};

	return (
		<div className="register">
			<div className="card">
				<h1>Register</h1>
				<div className="inps">
					<div className="email inp">
						<label htmlFor="email">E-mail</label>
						<input
							type="text"
							id="email"
							name="email"
							onChange={(e) => handleEmail(e)}
						/>
					</div>
					<div className="pass inp">
						<label htmlFor="password">Password</label>
						<input
							type="password"
							id="password"
							name="password"
							onChange={(e) => handlePassword(e)}
						/>
					</div>
					<button disabled={loading} onClick={handleLogin}>
						Login
					</button>
				</div>
				<div className="switch">
					<span>Already a user?</span>
					<Link to="/login">Login</Link>
				</div>
			</div>
			{!err && (
				<div className="err">
					<p>{err}</p>
				</div>
			)}
		</div>
	);
};

export default Login;
