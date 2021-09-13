import SearchLocations from "./SearchLocations";
import LocationsContainer from "./LocationsContainer";
// API
import auth_key from "../config";
import "follow-redirects";
import "fs";
import { useEffect } from "react";
///
function Home() {
	useEffect(() => {
		fetch(
			`https://api.roadgoat.com/api/v2/destinations/auto_complete?q=bryn_mawr_pa`,
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
		<div>
			<h3>Home Page</h3>
			<SearchLocations />
			<LocationsContainer />
		</div>
	);
}
export default Home;
