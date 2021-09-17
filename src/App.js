import "./App.css";
import {useState} from "react"
import { Switch, Route} from "react-router-dom";
import HeaderComp from "./components/HeaderComp";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import BucketList from "./components/BucketList";
import Map from "./components/Map";

function App() {
	
	const [onBucket, setOnBucket] = useState(false)
	const [latLon, setLanLon] = useState({lan: 40.730610, lon: -73.935242})
	
	return (
		<div className="App">
			<HeaderComp />
			<NavBar />
			<Switch>
				<Route exact path="/bucketlist">
					<BucketList  setLanLon={setLanLon}/>
				</Route>
				<Route exact path="/map">
					<Map latLon={latLon}  />
				</Route>
				<Route exact path="/">
					<Home onBucket={onBucket}  setOnBucket={setOnBucket} setLanLon={setLanLon} />
				</Route>
			</Switch>
		</div>
	);
}

export default App;
