import { useRef } from "react";
import { List, Image } from "semantic-ui-react";



function HomeLocation({ place, pictures }) {
	const collect = useRef([]);
	const { id } = { ...place.relationships.featured_photo.data }; // type is other prop

	const currentPic = pictures.find((item) => id === item.id);

	const idFor = [...place.relationships.known_for.data];

	if (idFor.length > 0) {
		const forCollection = idFor.map((item) => item.id);
		forCollection.map((id) => {
			return (
			pictures.find((item) =>
				id === item.id
					? collect.current.push({
							name: item.attributes.name,
							icon: item.attributes.icon + "-48.png",
					  })
					: null
			)
		)});
	}

	function handlePost(){
		fetch("http://localhost:3001/places",{
			method:"POST",
      		headers: {
        		"Content-Type":"application/json"
      		},
      		body: JSON.stringify({name : place.attributes.long_name, image : currentPic.attributes.image.medium })
    	})
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
			<button onClick={handlePost}>Save to Bucket List</button>
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

