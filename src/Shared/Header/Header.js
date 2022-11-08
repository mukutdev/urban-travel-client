import { Navbar } from "flowbite-react";
import React from "react";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  const activeClass = {
    backgroundColor: "#ea580c",
    color: "#fff",
  };

  return (
    <div className="container mx-auto py-4">
      <Navbar fluid={true} rounded={true}>
        <Link
          to={"/"}
          className="self-center whitespace-nowrap text-xl font-semibold dark:text-white"
        >
          Travel Agency
        </Link>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <NavLink
            className="text-xl font-medium px-6 py-2"
            to={"/"}
          >
            Home
          </NavLink>
          <NavLink
            style={({ isActive }) => (isActive ? activeClass : undefined)}
            className="text-xl font-medium px-6 py-2 rounded-sm"
            to={"/services"}
          >
            Services
          </NavLink>
          <NavLink
            className="text-xl font-medium px-6 py-2 bg-sky-500 text-white rounded-sm"
            to={"/login"}
          >
            Log in
          </NavLink>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Header;
