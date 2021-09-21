import React, { useEffect, useState, useContext } from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

const NavBar = (props) => {


    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-teal">
            <div className="container">
                {/* <a className="navbar-brand">Jimmie Designs<img src="" width="100" alt="" /></a> */}
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNavDropdown"
                    aria-controls="navbarNavDropdown"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div
                    className="collapse navbar-collapse"
                    id="navbarNavDropdown"
                >
                    <ul className="navbar-nav w-100 justify-content-around d-flex flex-row">
                        <li className="nav-item text-center">
                            <NavLink className="nav-link" exact to="/">
                                <FontAwesomeIcon icon={faHome} className="fa-2x" />
                                <br />Home
                            </NavLink>
                        </li>
                        <li className="nav-item text-center">
                            <a href="http://github.com/jimmie-swaggerty" target="_blank" className="nav-link">
                                <FontAwesomeIcon icon={faGithub} className="fa-2x" />
                                <br />Github
                            </a>
                        </li>
                        <li className="nav-item text-center">
                            <a href="http://linkedin.com/in/jimmie-swaggerty" target="_blank" className="nav-link">
                                <FontAwesomeIcon icon={faLinkedin} className="fa-2x" />
                                <br />LinkedIn
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;
