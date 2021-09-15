

function SearchLocations({search, setSearch}) {
	
	return (
		<div className="searchbar">
		  <label htmlFor="search">Search: </label>
		  <input
			type="text"
			id="search"
			placeholder="Type to search..."
			value={search}
			onChange={(e) => setSearch(e.target.value)}
		  />
		</div>
	  );
}
export default SearchLocations;
