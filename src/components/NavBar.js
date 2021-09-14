import { NavLink } from "react-router-dom";

const linkStyles = {
  display: "inline-block",
  width: "100px",
  padding: "5px",
  margin: "0 6px 6px",
  background: "blue",
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
			  background: "black",
			}}
		  >
		  Home
		</NavLink>
		<NavLink
			to="/bucketlist"
			exact
			style={linkStyles}
			activeStyle={{
			background: "black",
			}}
			>
			Bucket List
		</NavLink>
		</div>
	)
}
export default NavBar;
