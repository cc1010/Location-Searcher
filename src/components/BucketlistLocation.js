
function BucketlistLocation({ onDelete, name, image, id}) {
	function handleDelete(){
		fetch(`http://localhost:3001/places/${id}`,{
			method:'DELETE'
		  })
		  onDelete(id)
	}
	return (
		<div className="ui card eight wide column cityTile">
			<img src={image} alt={name} />
			<h3>{name}</h3>
			<button onClick={handleDelete}>Delete</button>
		</div>
	)
}
export default BucketlistLocation;
