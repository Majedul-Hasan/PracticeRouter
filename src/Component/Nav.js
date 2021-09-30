import React from "react";
import "./Component.css";
import { Link} from "react-router-dom";

const Nav = () => {
  const navStyle = {
    color: "white",
    hover: "green",
  };
  return (
    <nav>
      <h3>Logo</h3>

        <ul className="nav-links">
          <Link style={navStyle} to="/about">
            <li> about</li>
          </Link>
          <Link style={navStyle} to="/shop">
            <li> shop</li>
          </Link>
        </ul>
   
    </nav>
  );
};

export default Nav;
