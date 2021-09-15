
import BucketlistLocation from "./BucketlistLocation";

function BucketListContainer({onDelete, bucketPlace}){
    console.log(bucketPlace)
    const locationList = bucketPlace.map(place => <BucketlistLocation onDelete={onDelete} key={place.id} id={place.id} name={place.name} image={place.image}/> )
    return(
        <div className="ui three stackable cards">
			{locationList}
        </div>
    )
}

export default BucketListContainer