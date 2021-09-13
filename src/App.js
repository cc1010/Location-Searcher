import "./App.css";

import { Switch, Route, Link } from "react-router-dom";
/// componenets
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import BucketList from "./components/BucketList";

function App() {
	return (
		<div className="App">
			<Header />
			<NavBar />
			<Switch>
				<Route path="/home">
					<Home />
				</Route>
				<Route path="/bucketlist">
					<BucketList />
				</Route>
				<Route exact path="/">
					<h4>home-main</h4>
				</Route>
			</Switch>
		</div>
	);
}

export default App;
