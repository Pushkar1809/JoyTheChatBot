import "./App.css";

import Chat from "./components/Chat";
import Feed from "./components/Feed";
import Login from "./components/Login";
import Register from "./components/Register";
import Psy from "./components/Psy";
import NotFound from "./components/NotFound";
import Default from "./components/Default";

import {
	BrowserRouter as Router,
	Route,
	Switch,
	Redirect,
} from "react-router-dom";

function App() {
	return (
		<div className="App">
			<Router>
				<Switch>
					<Route path="/not-found">
						<NotFound />
					</Route>
					<Route path="/psy">
						<Psy />
					</Route>
					<Route path="/app">
						<Chat />
					</Route>
					<Route path="/feed">
						<Feed />
					</Route>
					<Route path="/register">
						<Register />
					</Route>
					<Route path="/login">
						<Login />
					</Route>
					<Route path="/" exact>
						<Default />
					</Route>
					<Redirect to="/not-found" />
				</Switch>
			</Router>
		</div>
	);
}

export default App;
