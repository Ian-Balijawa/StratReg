import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import "normalize-css";
import "./App.css";
import * as ROUTES from "./constants/routes";
import { Home, Signin, Signup, Notfound, Dashboard, ViewInterns } from "./pages";

const App = () => {
	return (
		<Router>
			<Switch>
				<Route exact path={ROUTES.SIGNIN}>
					<Signin />
				</Route>
				<Route exact path={ROUTES.SIGNUP}>
					<Signup />
				</Route>
				<Route exact path={ROUTES.DASHBOARD}>
					<Dashboard />
				</Route>
				<Route exact path={ROUTES.INTERNS}>
					<ViewInterns />
				</Route>
				<Route exact path={ROUTES.NOT_FOUND}>
					<Notfound />
				</Route>
				<Route exact path={ROUTES.HOME}>
					<Home />
				</Route>
				<Redirect to={ROUTES.NOT_FOUND} />
			</Switch>
		</Router>
	);
};

export default App;
