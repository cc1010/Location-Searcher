import HomeLocation from "./HomeLocation";

function LocationsContainer({ setOnBucket, onBucket, location, setLanLon }) {
	
	const dataList = Object.values(location);
	const pictures = Object.values({ ...dataList[1] });
	const info = Object.values({ ...dataList[0] });
	
	return (
		<div className="ui three stackable cards">
			{info.map((item, index) => (
				<HomeLocation setOnBucket={setOnBucket} onBucket={onBucket} key={index} place={item} pictures={pictures} setLanLon={setLanLon}/>
			))}
		</div>
	);
}
export default LocationsContainer;
