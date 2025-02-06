import { NavLink } from "react-router-dom";
import "../Styles.css";


const Navbar = () => {
  return (
    <nav className="navbar">
    
      <div className="nav-items">
        <NavLink to="/" className="nav-item">Home</NavLink>
        <NavLink to="/about" className="nav-item">Project</NavLink>
        <NavLink to="/mission" className="nav-item">Blog</NavLink>
       
      </div>
    </nav>
  );
};

export default Navbar;
