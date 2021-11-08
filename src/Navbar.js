import { NavLink } from "react-router-dom";
import "./Navbar.css";

const ACTIVE_STYLES = {
    fontWeight: "bold",
    color: "white",
  };

const Navbar = () => {
    return (
        <nav className="Navbar">
            <NavLink className="Navbar-link" to="/mtndew" activeStyle={ ACTIVE_STYLES }>Mountain Dew</NavLink>   
            <NavLink className="Navbar-link" to="/snickers" activeStyle={ ACTIVE_STYLES }>Snickers</NavLink> 
            <NavLink className="Navbar-link" to="/doritos" activeStyle={ ACTIVE_STYLES }>Doritos</NavLink>   
        </nav>
    );
}

export default Navbar;