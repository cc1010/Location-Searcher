import SearchLocations from "./SearchLocations";
import LocationsContainer from "./LocationsContainer";
// API
import auth_key from "../config";
import "follow-redirects";
import "fs";
import { useEffect, useState } from "react";
///
function Home({setOnBucket, onBucket }) {
	const [city, setCity] = useState([]);
	const [search, setSearch] = useState("");

	//json-server --watch db.json --port 3001

	useEffect(() => {
		fetch(
			`https://api.roadgoat.com/api/v2/destinations/auto_complete?q=${search}`, 
			{
				method: "GET",
				hostname: "api.roadgoat.com",
				port: 80,
				path: `/api/v2/destinations/auto_complete?q=${search}`, 
				headers: {
					Authorization: `Basic ${auth_key}`,
				},
				maxRedirects: 20,
			}
		)
			.then((resp) => resp.json())
			.then((data) => setCity(data));
	}, [search]);
	


	// console.log(city)
	return (
		<div>
			<SearchLocations search={search} setSearch={setSearch} />
			<LocationsContainer onBucket={onBucket} setOnBucket={setOnBucket}  location={city} />
		</div>
	);
}
export default Home;
