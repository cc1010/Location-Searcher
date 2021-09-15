import "./App.css";
import {useState} from "react"
import { Switch, Route} from "react-router-dom";
import HeaderComp from "./components/HeaderComp";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import BucketList from "./components/BucketList";

function App() {
	const [onBucket, setOnBucket] = useState(false)

	return (
		<div className="App">
			<HeaderComp />
			<NavBar />
			<Switch>
				<Route exact path="/bucketlist">
					<BucketList  />
				</Route>
				<Route exact path="/">
					<Home onBucket={onBucket}  setOnBucket={setOnBucket}  />
				</Route>
			</Switch>
		</div>
	);
}

export default App;
