import { NavLink } from "react-router-dom";

const linkStyles = {
  display: "inline-block",
  width: "100px",
  padding: "5px",
  margin: "0 6px 6px",
  background: "black",
  textDecoration: "none",
  color: "white",
};

function NavBar() {
	return (
		<div className="navbar">
		<NavLink
			to="/"
			/* set exact so it knows to only set activeStyle when route is deeply equal to link */
			exact
			/* add styling to Navlink */
			style={linkStyles}
			/* add prop for activeStyle */
			activeStyle={{
			  background: "blue",
			}}
		  >
		  Search
		</NavLink>
		<NavLink
			to="/bucketlist"
			exact
			style={linkStyles}
			activeStyle={{
			background: "blue",
			}}
			>
			Bucket List
		</NavLink>
		<NavLink
			to="/map"
			exact
			style={linkStyles}
			activeStyle={{
			background: "blue",
			}}
			>
			Map
		</NavLink>
		</div>
	)
}
export default NavBar;
