import HomeLocation from "./HomeLocation";

function LocationsContainer({ location }) {
	console.log(location);

	const dataList = Object.values(location);
	const pictures = Object.values({ ...dataList[1] });
	const info = Object.values({ ...dataList[0] });
	// console.log(location)
	return (
		<div className="App">
			{info.map((item, index) => (
				<HomeLocation key={index} place={item} pictures={pictures} />
			))}
		</div>
	);
}
export default LocationsContainer;
