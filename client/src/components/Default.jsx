import React from "react";
import chatting from "../assets/chatting.png";
import { Link } from "react-router-dom";
import "../styles/default.scss";

const Default = () => {
	return (
		<div className="def">
			<div className="joy">
				<img src={chatting} alt="cover" />
			</div>
			<div className="btns">
				<Link to="/login">Login</Link>
				<span>OR</span>
				<Link to="/register">Register</Link>
			</div>
		</div>
	);
};

export default Default;
