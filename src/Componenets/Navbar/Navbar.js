import React, { useState } from "react";
import "./Navbar.scss";
import { NavLink, Link, useHistory, useLocation } from "react-router-dom";
import ListIcon from "@material-ui/icons/List";
import ClearIcon from "@material-ui/icons/Clear";
import { logout } from "../../database/FirebaseConfig";
import { useDispatch, useSelector } from "react-redux";
import { setAuth } from "../../store/authSlice";
import GitHubIcon from "@material-ui/icons/GitHub";
function Navbar() {
  const { isAuth } = useSelector((state) => state.auth);
  // const location = useHistory().location.pathname;
  const newlocation = useLocation().pathname;
  const dispatch = useDispatch();
  console.log(newlocation);
  const [OpenDiv, setOpenDiv] = useState(false);
  const logoutf = async () => {
    dispatch(setAuth({ auth: null }));
    logout();
  };
  return (
    <>
      <nav className="container navbar">
        <a href="/" className="cLink">
          JR<span className="dot">.</span>
        </a>

        <div className="minirow">
          <NavLink
            activeClassName="activeNavLink"
            exact
            className="navlink mr-10"
            to="/"
          >
            Home
          </NavLink>
          {newlocation === "/" ? (
            <>
              <a className="navlink ml-10 mr-10" href="#portfolio">
                Portfolio
              </a>
              <a className="navlink ml-10 mr-10" href="#contact">
                Contact
              </a>
            </>
          ) : (
            <>
              <Link className="navlink mr-10" to="/#portfolio">
                Portfolio
              </Link>
              <Link className="navlink mr-10" to="/#contact">
                Contact
              </Link>
            </>
          )}
          <NavLink
            className="navlink ml-10 mr-10"
            activeClassName="activeNavLink"
            exact
            to="/aboutMe"
          >
            About us
          </NavLink>
          {isAuth ? (
            <>
              <NavLink
                className="navlink ml-10 mr-10"
                activeClassName="activeNavLink"
                to="/Dashboard"
                exact
              >
                Dashboard
              </NavLink>
              <button className="mr-10 ml-10 logoutButton" onClick={logoutf}>
                logout
              </button>
            </>
          ) : (
            <NavLink
              className="navlink ml-10 mr-10"
              activeClassName="activeNavLink"
              to="/login"
              exact
            >
              Login
            </NavLink>
          )}
          <a
            className="navlink ml-10 mr-10"
            href="https://github.com/JawadRaza8372"
          >
            <GitHubIcon style={{ fontSize: "35px" }} />
          </a>
        </div>
        <button className="extendbutton" onClick={() => setOpenDiv(!OpenDiv)}>
          {!OpenDiv ? <ListIcon /> : <ClearIcon />}
        </button>
      </nav>
      {OpenDiv && (
        <div className="navShow">
          <NavLink
            activeClassName="activeNavLink"
            exact
            className="navlink mb-15 mr-10"
            to="/"
          >
            Home
          </NavLink>
          {newlocation === "/" ? (
            <>
              <a className="navlink ml-10 mb-15 mr-10" href="#portfolio">
                Portfolio
              </a>
              <a className="navlink ml-10 mb-15 mr-10" href="#contact">
                Contact
              </a>
            </>
          ) : (
            <>
              <Link
                activeClassName="activeNavLink"
                className="navlink mb-15 mr-10"
                to="/#portfolio"
              >
                Portfolio
              </Link>
              <Link
                activeClassName="activeNavLink"
                className="navlink mr-10 mb-15"
                to="/#contact"
                exact
              >
                Contact
              </Link>
            </>
          )}
          <NavLink
            className="navlink ml-10 mb-15 mr-10"
            activeClassName="activeNavLink"
            to="/aboutMe"
            exact
          >
            About us
          </NavLink>
          {isAuth ? (
            <>
              <NavLink
                className="navlink mb-15 ml-10 mr-10"
                activeClassName="activeNavLink"
                to="/Dashboard"
                exact
              >
                Dashboard
              </NavLink>
              <button
                className="mr-10 ml-10 mb-15 logoutButton"
                onClick={logoutf}
              >
                logout
              </button>
            </>
          ) : (
            <NavLink
              className="navlink ml-10 mb-15"
              activeClassName="activeNavLink"
              to="/login"
              exact
            >
              Login
            </NavLink>
          )}
          <a
            className="navlink mb-15 ml-10 mr-10"
            href="https://github.com/JawadRaza8372"
          >
            <GitHubIcon style={{ fontSize: "35px" }} />
          </a>
        </div>
      )}
    </>
  );
}

export default Navbar;
