import SearchLocations from "./SearchLocations";
import LocationsContainer from "./LocationsContainer";
// API
import auth_key from "../config";
import "follow-redirects";
import "fs";
import { useEffect, useState } from "react";
///
function Home() {
	const [city, setCity] = useState([]);
	const [search, setSearch] = useState("");

	useEffect(() => {
		fetch(
			`https://api.roadgoat.com/api/v2/destinations/auto_complete?q=la`, //${search}
			{
				method: "GET",
				hostname: "api.roadgoat.com",
				port: 80,
				path: `/api/v2/destinations/auto_complete?q=New-York`, //${search}
				headers: {
					Authorization: `Basic ${auth_key}`,
				},
				maxRedirects: 20,
			}
		)
			.then((resp) => resp.json())
			.then((data) => setCity(data));
	}, []);
	// [search] in array dependencies for active search but API will run out quickly.  Save for presentation

	// console.log(city.data)
	console.log(city);
	return (
		<div>
			<h3>Home Page</h3>
			<SearchLocations search={search} setSearch={setSearch} />
			<LocationsContainer location={city} />
		</div>
	);
}
export default Home;
