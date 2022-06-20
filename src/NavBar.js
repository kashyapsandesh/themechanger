import React from "react";
import Toggle from "./Toggle";

const NavBar = (props) => {
  return (
    <div className="nav-bar">
      <nav className="navbar bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Navbar
          </a>
          <Toggle onclick={props.onClick} />
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
