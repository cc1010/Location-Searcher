import { useEffect, useState } from "react";
import BucketListContainer from "./BucketListContainer"
import BucketListFilter from "./BucketListFilter";
//json-server --watch db.json --port 3001

function BucketList({setLanLon}) {
	const [filter, setFilter] = useState("")
	const [bucket, setBucket] = useState([])

	useEffect(() => {
		fetch("http://localhost:3001/places")
		.then(r => r.json())
		.then(data => setBucket(data))
	  },[])

	  const filteredList = 
	  bucket.filter(place => place.name.toLowerCase().includes(filter.toLowerCase()))

	  function deletePlace(id){
		const updatedPlace= bucket.filter(place => place.id !== id)
		setBucket(updatedPlace)
	  }

	return (
		<div>
			<BucketListFilter filter={filter} setFilter={setFilter} />
			<BucketListContainer onDelete={deletePlace} bucketPlace={filteredList} setLanLon={setLanLon} />
		</div>
	);
}
export default BucketList;
