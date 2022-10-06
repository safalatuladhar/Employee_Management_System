import React from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";
import { AiOutlineLogout } from "react-icons/ai";

export default function Navbar(props) {
  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-light bg-light nav-container">
        <div class="container-fluid d-flex justify-content-between align-items-center">
          <div class=" navbar" id="navbarNav">
            <ul class="navbar-nav fs-5 fw-bold align-items-center">
              <li class="nav-item  me-3">
                <div class="nav-title " aria-current="page">
                  EMS
                </div>
              </li>
              <li class="nav-item me-3">
                <NavLink
                  to="/"
                  activeClassName="active"
                  class="nav-link "
                  aria-current="page"
                >
                  Dashboard
                </NavLink>
              </li>
              <li class="nav-item me-3">
                <NavLink
                  to="/user"
                  activeClassName="active"
                  class="nav-link  "
                  aria-current="page"
                >
                  User
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="logout-btn">
            <button
              className="btn btn-danger"
              onClick={() => props.setIsLoggedIn(false)}
            >
              <AiOutlineLogout size={18} className="me-2" /> Logout
            </button>
          </div>
        </div>
      </nav>
      {props.children}
    </>
  );
}
