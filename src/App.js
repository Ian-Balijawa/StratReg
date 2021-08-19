import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "normalize-css";
import "./App.css";
import * as ROUTES from "./constants/routes";
import Home from "./pages/home";
import Signin from "./pages/signin";
import Signup from "./pages/signup";
import Notfound from "./pages/not-found";
import ManageInterns from "./pages/interns";
import SigninAdmin from "./pages/signin-admin";
import SignupAdmin from "./pages/signup-admin";
import UserProfile from "./pages/user-profile";
import Dashboard from "./pages/dashboard";
import { IsUserRedirect, ProtectedRoute } from "./helpers/routes";
import useAuthListener from "./hooks/auth-listener";

const App = () => {
	const { user } = useAuthListener();
	return (
		<Router>
			<Switch>
				<IsUserRedirect
					path={ROUTES.SIGNIN}
					user={user}
					loggedInPath={ROUTES.DASHBOARD}
					exact>
					<Signin />
				</IsUserRedirect>
				<IsUserRedirect
					path={ROUTES.SIGNUP}
					user={user}
					loggedInPath={ROUTES.DASHBOARD}
					exact>
					<Signup />
				</IsUserRedirect>

				<Route exact path={ROUTES.ADMIN_SIGNIN} component={SigninAdmin} />
				<Route exact path={ROUTES.INTERNS} component={ManageInterns} />
				<Route exact path={ROUTES.PROFILE} component={UserProfile} />
				<Route exact path={ROUTES.ADMIN_SIGNUP} component={SignupAdmin} />

				<ProtectedRoute user={user} path={ROUTES.Dashboard} exact>
					<Dashboard />
				</ProtectedRoute>
				<IsUserRedirect
					path={ROUTES.HOME}
					user={user}
					loggedInPath={ROUTES.DASHBOARD}
					exact>
					<Home />
				</IsUserRedirect>
				<Route component={Notfound} />
			</Switch>
		</Router>
	);
};

export default App;
