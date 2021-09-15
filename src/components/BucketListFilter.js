function BucketListFilter({filter, setFilter}) {
	return (
		<div className="searchbar">
		  <label htmlFor="search">Filter Places:</label>
		  <input
			type="text"
			id="search"
			placeholder="Type a place to filter..."
			value={filter}
			onChange={(e) => setFilter(e.target.value)}
		  />
		</div>
	)
}
export default BucketListFilter;
