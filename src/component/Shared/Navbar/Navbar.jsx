import React, { useState, useRef } from "react";
import logo from "../../../assets/images/logo.png";
import "./Navbar.css";
import { Link, NavLink } from "react-router-dom";
import PopUp from "../PopUp/PopUp";
import { Button, Modal } from "react-bootstrap";

const Navbar = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const navbarCollapseRef = useRef(null);
  const handleNavLinkClick = () => {
    if (navbarCollapseRef.current && navbarCollapseRef.current.classList.contains("show")) {
      navbarCollapseRef.current.classList.remove("show");
    }
  };

  return (
    <header className="fixed-top bg-white">
      <nav className="navbar navbar-expand-lg containe py-3 py-lg-0 mt-lg-2 mt-xxl-5">
        <Link to="/" className="navbar-brand">
          <img className="logo" src={logo} alt="" />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent"  ref={navbarCollapseRef}>
          <ul className="navbar-nav ms-auto mb-lg-0">
            <li className="nav-item">
              <NavLink to="/" className="nav-link " onClick={handleNavLinkClick}>
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-link " onClick={handleNavLinkClick}>
                About Us
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/services" className="nav-link " onClick={handleNavLinkClick}>
                Services
              </Link>
            </li>
            <li className="nav-item">
              <NavLink to="/track-record" className="nav-link " onClick={handleNavLinkClick}>
                Track Record
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/media" className="nav-link " onClick={handleNavLinkClick}>
                Media
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/contact-us" className="nav-link " onClick={handleNavLinkClick}>
                Contacts
              </NavLink>
            </li>
            <li className="nav-item   mt-2 mt-lg-0">
              <button onClick={handleShow} className="nav-link text-white ">
                Order Service
              </button>
            </li>
          </ul>
        </div>
      </nav>
      <PopUp show={show} handleClose={handleClose}></PopUp>
    </header>
  );
};

export default Navbar;
