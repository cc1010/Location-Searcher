import logo from "./logo.svg";
import "./App.css";
import auth_key from "./config";
import "follow-redirects";
import "fs";
import { useEffect } from "react";

function App() {
	useEffect(() => {
		fetch(
			`https://api.roadgoat.com/api/v2/destinations/auto_complete?q=new-york`,
			{
				method: "GET",
				hostname: "api.roadgoat.com",
				port: 80,
				path: "/api/v2/destinations/auto_complete?q=barcelona",
				headers: {
					Authorization: `Basic ${auth_key}`,
				},
				maxRedirects: 20,
			}
		)
			.then((resp) => resp.json())
			.then((data) => console.log(data));
	}, []);

	return (
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<p>
					Edit <code>src/App.js</code> and save to reload.
				</p>
				<a
					className="App-link"
					href="https://reactjs.org"
					target="_blank"
					rel="noopener noreferrer"
				>
					Learn React
				</a>
			</header>
		</div>
	);
}

export default App;
