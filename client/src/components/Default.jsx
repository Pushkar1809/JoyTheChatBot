import React from "react";
import chatting from "../assets/chatting.png";
import { Link } from "react-router-dom";
import "../styles/default.scss";

const Default = () => {
	return (
		<div className="def">
			<div className="joy">
				<img src={chatting} alt="cover" style={{ width: "10rem" }} />
			</div>
			<div className="btns">
				<Link to="/login">Login</Link>
				<Link to="/register">Register</Link>
			</div>
		</div>
	);
};

export default Default;
