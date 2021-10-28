import React from "react";
import joy1 from "../assets/joy1.png";
import joy2 from "../assets/joy2.png";
import joy3 from "../assets/joy3.png";
import joy4 from "../assets/joy4.png";
import joy5 from "../assets/joy5.png";

const Chat = () => {
	const joys = [joy1, joy2, joy3, joy4, joy5];
	let joy = joys[Math.floor(Math.random() * joys.length)];

	return (
		<div className="chat">
			<div className="joy">
				<img src={joy} alt="Joy: The ChatBot" style={{ width: "10rem" }} />
			</div>
			<div className="chatbox">
				<div className="chat-display"></div>
				<input type="text" id="message" name="message" />
				<button>send</button>
			</div>
		</div>
	);
};

export default Chat;
