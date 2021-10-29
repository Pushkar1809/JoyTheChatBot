import React, { useState, useEffect } from "react";
import joy1 from "../assets/joy1.png";
import joy2 from "../assets/joy2.png";
import joy3 from "../assets/joy3.png";
import joy4 from "../assets/joy4.png";
import joy5 from "../assets/joy5.png";
import Nav from "./Nav";
import "../styles/chat.scss";
import { RiSendPlane2Fill as Send } from "react-icons/ri";

const Chat = () => {
	const [joy, setJoy] = useState(joy1);
	const [message, setMessage] = useState("");
	const [intents, setIntents] = useState([]);

	useEffect(() => {
		const joys = [joy1, joy2, joy3, joy4, joy5];
		setJoy(joys[Math.floor(Math.random() * joys.length)]);
	}, []);

	const handleMessage = (e) => {
		e.preventDefault();
		setMessage(e.target.value);
	};

	const handleSend = () => {
		fetch("http://127.0.0.1:5000/predict", {
			method: "POST",
			body: JSON.stringify({ message: message }),
			mode: "cors",
			headers: { "Content-Type": "application/json" },
		})
			.then((response) => response.json())
			.then((response) => {
				let answer = response.answer;
				let intent = response.intent;
				setIntents([...intents, intent]);
				let newMeg = { name: "Joy", message: answer };
				updateUi(newMeg);
			});
	};

	const updateUi = (newMeg) => {};

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
							<button onClick={() => handleSend}>
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
