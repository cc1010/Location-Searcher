function BucketListFilter({filter, setFilter}) {
	return (
		<div className="searchbar">
		  <label htmlFor="search">Filter Bucket List: </label>
		  <input
			type="text"
			id="search"
			placeholder="Type to filter..."
			value={filter}
			onChange={(e) => setFilter(e.target.value)}
		  />
		</div>
	)
}
export default BucketListFilter;
