import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import DateFnsUtils from "@date-io/date-fns";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import { BrowserRouter as Router } from "react-router-dom";
import { UIProvider } from "./Context/UIContext";
import * as serviceWorkerRegistration from "./serviceWorkerRegistration";
import ScrollTop from "./ui/ScrollTop";

ReactDOM.render(
	<React.StrictMode>
		<Router>
			<ScrollTop />
			<UIProvider>
				<MuiPickersUtilsProvider utils={DateFnsUtils}>
					<App />
				</MuiPickersUtilsProvider>
			</UIProvider>
		</Router>
	</React.StrictMode>,
	document.getElementById("root")
);

serviceWorkerRegistration.unregister();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
