import HomeLocation from "./HomeLocation";

function LocationsContainer({location}) {
	const locationData = location.data
	const locationPic = location.included
	const cityPic = locationPic[0].attributes.image.medium
	const cityData = locationData.map(city => {
		return(
			<div className="ui card eight wide column cityTile" key={city.id}>
				<img src={cityPic} alt={city.attributes.name} />
				<h3>{city.attributes.name}</h3>
				<br></br>
				Latitude :{city.attributes.latitude}
				<br></br>
				Longitude: {city.attributes.longitude} 
			</div>
		)
	})

	console.log(location)
	return (
		<div className="ui three stackable cards" >
			{cityData}
		</div>
	)
}
export default LocationsContainer;
