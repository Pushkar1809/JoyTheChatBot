import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useAuth } from "./context/AuthContext";

const PrivateRoute = ({ component: Component, path }) => {
	const { currentUser } = useAuth();
	return (
		<Route>
			path={path}
			render=
			{(props) => {
				return currentUser ? <Component {...props} /> : <Redirect to="/" />;
			}}
		</Route>
	);
};

export default PrivateRoute;
