/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";
import logo from "../images/logo.png";
import "bootstrap/dist/css/bootstrap.min.css";
import FontAwesome from "react-fontawesome";

import { Navbar, Nav, Form, FormControl } from "react-bootstrap";
class Navbars extends Component {
  state = {};
  render() {
    return (
      <>
        <Navbar variant="light" className="nav1">
          <Navbar.Brand href="#home" className="logo-0 h1">
            <img
              alt=""
              src={logo}
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{" "}
            Orange Flick
            <p className="sentence">Flick to Remember</p>
          </Navbar.Brand>
          <Nav className="mr-auto logo-1">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Movies</Nav.Link>
            <Nav.Link href="#pricing">Tv Series</Nav.Link>
          </Nav>
          <Nav className="logo-1">
            <Nav.Link>
              <FontAwesome className="fas fa-user"></FontAwesome>
              Profile
            </Nav.Link>
            <Form className="form-inline mr-auto">
              <FormControl
                className="form-control mr-sm-2"
                type="text"
                placeholder="Search"
                aria-label="Search"
              />
              <button
                class="btn btn-secondary btn-rounded btn-sm my-0"
                type="submit"
              >
                Search
              </button>
            </Form>
          </Nav>
        </Navbar>
      </>
    );
  }
}

export default Navbars;
