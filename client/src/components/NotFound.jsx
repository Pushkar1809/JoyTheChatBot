import React from "react";
import { Link } from "react-router-dom";
import notFound from "../assets/not-found.png";

const NotFound = () => {
	return (
		<div className="not-found">
			<div className="icon">
				<img src={notFound} alt="Not-Found" />
			</div>
			<div className="texr">
				<span>404</span>
				<span>Page Not-Found</span>
			</div>
			<div className="to-chat">
				<Link to="/app">Back to chat</Link>
			</div>
		</div>
	);
};

export default NotFound;
