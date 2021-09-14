import { useRef } from "react";
import { List, Image } from "semantic-ui-react";
function HomeLocation({ place, pictures }) {
	const collect = useRef([]);
	const { id, type } = { ...place.relationships.featured_photo.data };

	const currentPic = pictures.find((item) => id === item.id);

	const idFor = [...place.relationships.known_for.data];

	if (idFor.length > 0) {
		const forCollection = idFor.map((item) => item.id);
		forCollection.map((id) => {
			pictures.find((item) =>
				id === item.id
					? collect.current.push({
							name: item.attributes.name,
							icon: item.attributes.icon + "-48.png",
					  })
					: null
			);
		});
	}

	return (
		<div className="ui card eight wide column cityTile">
			<img
				src={currentPic ? currentPic.attributes.image.medium : null}  // Default Pic? or Don't render if no info/pic
				alt=""
			/>
			<h3>{place.attributes.long_name}</h3>
			<p>
				Latitude :{place.attributes.latitude} | Longitude:{" "}
				{place.attributes.longitude}
			</p>
			<List>
				{collect.current.map((item, index) => (
					<List.Item key={index}>
						<Image avatar src={item.icon} />
						<List.Content>
							<List.Header>{item.name}</List.Header>
						</List.Content>
					</List.Item>
				))}
			</List>
		</div>
	);
}
export default HomeLocation;

// const cityData = locationData.map(city => {
// 	return(
// 		<div className="ui card eight wide column cityTile" key={city.id}>
// 			<img src={cityPic} alt={city.attributes.name} />
// 			<h3>{city.attributes.name}</h3>
// 			<br></br>
// 			Latitude :{city.attributes.latitude}
// 			<br></br>
// 			Longitude: {city.attributes.longitude}
// 		</div>
// 	)
// })
