import { Image } from "semantic-ui-react";
import { useHistory } from "react-router-dom";


function BucketlistLocation({ onDelete, name, image, id, setLanLon, lan1, lon1}) {
	const history = useHistory();
	function handleDelete(){
		fetch(`http://localhost:3001/places/${id}`,{
			method:'DELETE'
		  })
		  onDelete(id)
	}

	function handleMap(){
		setLanLon(
			{lan: lan1, lon: lon1}
			
		)
		history.push("/map")
	}
	return (
		<div className="ui card eight wide column cityTile">
			<Image src={image} alt="Failed to Load"  />
			<h3>{name}</h3>
			<button onClick={handleDelete}>Delete</button>
			<button onClick={handleMap}>See in Map</button>
		</div>
	)
}
export default BucketlistLocation;
