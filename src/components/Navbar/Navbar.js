import { NavLink } from "react-router-dom";
import classes from "./Navbar.module.scss";
function Navbar() {
  return (
    <div className={classes.Navbar}>
      <div>
        <NavLink to="/">Home</NavLink>
      </div>
      <div>
        <NavLink to="/products">Products</NavLink>
      </div>
      <div>
        <NavLink to="/contacts">Contacts</NavLink>
      </div>
    </div>
  );
}

export default Navbar;
