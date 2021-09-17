import BucketlistLocation from "./BucketlistLocation";

function BucketListContainer({onDelete, bucketPlace, setLanLon}){
    
    const locationList = bucketPlace.map(place => <BucketlistLocation onDelete={onDelete} key={place.id} id={place.id} name={place.name} image={place.image} setLanLon={setLanLon} lan1={place.lan} lon1={place.lon}/> )
    return(
        <div className="ui three stackable cards">
			{locationList}
        </div>
    )
}

export default BucketListContainer