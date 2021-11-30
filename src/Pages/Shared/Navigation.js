import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Navigation.css";

const Navigation = () => {
  return (
    <div class="container">
      <Navbar collapseOnSelect className="p-3" expand="lg">
        <Link class="navbar-brand me-auto name color-gray" to="/home">
          Asadullah <span class="title-color">Ahmed</span>
        </Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse
          id="responsive-navbar-nav"
          className="justify-content-end"
        >
          <Link class="nav-link link nav-item2" aria-current="page" to="/home">
            Home
          </Link>
          <Link
            class="nav-link link nav-item2"
            aria-current="page"
            to="/resume"
          >
            Resume
          </Link>
          <Link
            class="nav-link link nav-item2"
            aria-current="page"
            to="/contact"
          >
            Contact
          </Link>
          <Link class="nav-link link nav-item2" aria-current="page" to="/blog">
            Blog
          </Link>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Navigation;
