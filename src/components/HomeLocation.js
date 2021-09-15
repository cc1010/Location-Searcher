// import { useRef } from "react";
// import { List, Image, Button } from "semantic-ui-react";
import { useHistory } from "react-router-dom";
import { List, Image } from "semantic-ui-react";
function HomeLocation({ onBucket, setOnBucket, place, pictures, setLanLon }) {
	
	const history = useHistory();

	const collectKnownFor = [];

	const { id } = { ...place.relationships.featured_photo.data }; // type is other prop

	const currentPic = pictures.find((item) => id === item.id);

	const idFor = [...place.relationships.known_for.data];

	if (idFor.length > 0) {
		const forCollection = idFor.map((item) => item.id);
		forCollection.map((id) => {
			return pictures.find((item) =>
				id === item.id
					? collectKnownFor.push({
							name: item.attributes.name,
							icon: item.attributes.icon + "-48.png",
					  })
					: null
			);
		});
	}

	function handlePost() {
		fetch("http://localhost:3001/places", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				name: place.attributes.long_name,
				image: currentPic
				? currentPic.attributes.image.medium
				: "https://cdn.pixabay.com/photo/2018/01/31/05/43/web-3120321_960_720.png"
			}),
		});
		setOnBucket(!onBucket)
		history.push("/bucketlist")
	}
	function handleMap(){
		setLanLon(
			{lan: place.attributes.latitude, lon: place.attributes.longitude}
			
		)
		history.push("/map")
	}
	return (
		<div className="ui card eight wide column cityTile">
			<Image
				src={
					currentPic
						? currentPic.attributes.image.medium
						: "https://cdn.pixabay.com/photo/2018/01/31/05/43/web-3120321_960_720.png"
				} 
				alt="Failed to Load"
			/>
			<h3>{place.attributes.long_name}</h3>
			<p>
				Latitude :{place.attributes.latitude} | Longitude:{" "}
				{place.attributes.longitude}
			</p>
			<button onClick={handlePost}>Save to Bucket List</button>
			<button onClick={handleMap}>See in Map</button>
			<List>
				{collectKnownFor.map((item, index) => (
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
