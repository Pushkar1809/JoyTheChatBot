import React from "react";
import { Link } from "react-router-dom";
import { BsFillChatSquareFill as ChatIcon } from "react-icons/bs";
import { CgMediaPodcast as Media } from "react-icons/cg";
import {
	SiHandshake as HandshakeIcon,
	SiRobotframework as Robo,
} from "react-icons/si";
import { GoPerson as ProfileIcon } from "react-icons/go";
import "../styles/nav.scss";

const Nav = () => {
	return (
		<nav className="navbar">
			<ul className="navbar-nav">
				<li className="nav-item logo-item">
					<Link to="/app" className="logo">
						<span className="logo-text">JOY</span>
					</Link>
				</li>
				<li className="nav-item chat-item">
					<Link to="/app" className="nav-link">
						<ChatIcon size={40} />
					</Link>
				</li>
				<li className="nav-item feed-item">
					<Link to="/feed" className="nav-link">
						<Media size={40} />
					</Link>
				</li>
				<li className="nav-item psy-item">
					<Link to="/psy" className="nav-link">
						<HandshakeIcon size={40} />
					</Link>
				</li>
				<li className="nav-item profile-item">
					<Link to="#" className="nav-link">
						<ProfileIcon size={40} />
					</Link>
				</li>
			</ul>
			{/* <div className="chat-icon"></div>
			<div className="feed-icon"></div>
			<div className="psy-icon"></div>
			<div className="profile-icon"></div> */}
		</nav>
	);
};

export default Nav;
