import React from "react";
import { render } from "react-dom";
import App from "./App";
import { firebase } from "./lib/firebase.prod";
import { FirebaseContext } from "./context/firebase";
render(
	<FirebaseContext.Provider value={{ firebase }}>
		<App />
	</FirebaseContext.Provider>,
	document.getElementById("root")
);
