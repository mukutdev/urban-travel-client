import { Navbar } from "flowbite-react";
import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthProvider } from "../../context/AuthContext";

const Header = () => {

  const {user , handleLogoutUser} = useContext(AuthProvider)
  const activeClass = {
    backgroundColor: "#ea580c",
    color: "#fff",
  };

  const logout = ()=>{
    handleLogoutUser()
    .then(() =>{})
    .catch(err => console.log(err))
  }
  return (
    <div className="container mx-auto py-4">
      <Navbar fluid={true} rounded={true}>
        <Link
          to={"/"}
          className="self-center whitespace-nowrap text-xl font-semibold text-sky-500 dark:text-white"
        >
          URBAN TRAVEL
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
            className="text-xl font-medium px-6 py-2 rounded"
            to={"/services"}
          >
            Services
          </NavLink>
           
           {
            user?.uid ? <div>
              <NavLink
            style={({ isActive }) => (isActive ? activeClass : undefined)}
            className="text-xl font-medium px-6 py-2 rounded"
            to={"/addnewservice"}
          >
            Add Service
          </NavLink>
          <NavLink
            style={({ isActive }) => (isActive ? activeClass : undefined)}
            className="text-xl font-medium px-6 py-2 rounded"
            to={"/myreviews"}
          >
            My Reviews
          </NavLink>
            <span className="text-lg mr-2"> Hello , {user?.displayName}</span>
            <button onClick={logout}
            className="text-xl font-medium px-6 py-2 bg-sky-500 hover:bg-orange-500 text-white rounded"
            to={"/login"}
          >
            Log Out
          </button></div> :
           <NavLink
           className="text-xl font-medium px-6 py-2 bg-orange-500 hover:bg-sky-500 text-white rounded"
           to={"/login"}
         >
           Log in
         </NavLink>

           }
         
          
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Header;
