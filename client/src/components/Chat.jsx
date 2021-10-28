import React, { useState } from "react";
import joy1 from "../assets/joy1.png";
import joy2 from "../assets/joy2.png";
import joy3 from "../assets/joy3.png";
import joy4 from "../assets/joy4.png";
import joy5 from "../assets/joy5.png";
import Nav from "./Nav";
import "../styles/chat.scss";
import { RiSendPlane2Fill as Send } from "react-icons/ri";

const Chat = () => {
	const joys = [joy1, joy2, joy3, joy4, joy5];
	let joy = joys[Math.floor(Math.random() * joys.length)];

	const [message, setMessage] = useState("");
	const handleMessage = (e) => {
		setMessage(e.target.value);
	};

	return (
		<>
			<Nav />
			<div className="chat">
				<div className="chatbox">
					<div className="box">
						<div className="input-area">
							<input
								type="text"
								id="message"
								name="message"
								onChange={(e) => handleMessage(e)}
							/>
							<button>
								<Send size={30} />
							</button>
						</div>
						<div className="chat-display"></div>
					</div>
				</div>
				<div className="joy">
					<img src={joy} alt="Joy: The ChatBot" />
				</div>
			</div>
		</>
	);
};

export default Chat;
