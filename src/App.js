import "./App.css";

import { Switch, Route} from "react-router-dom";
import HeaderComp from "./components/HeaderComp";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import BucketList from "./components/BucketList";

function App() {
	

	return (
		<div className="App">
			<HeaderComp />
			<NavBar />
			<Switch>
				<Route exact path="/bucketlist">
					<BucketList  />
				</Route>
				<Route exact path="/">
					<Home  />
				</Route>
			</Switch>
		</div>
	);
}

export default App;
