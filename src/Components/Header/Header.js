
import React from "react";
import { Container, Nav, Navbar, Button } from "react-bootstrap";
import './Header.css';
import useAuth from '../../Hooks/useAuth';
import { Link } from "react-router-dom";

const Header = () => {

  const {user,logOut} = useAuth()

  return (
    <Navbar collapseOnSelect expand="lg" bg="info" variant="dark">
  <Container>
  <Navbar.Brand href="#home"><img src="https://www.tour-planners.com/images/logo.png" alt="" /></Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="ms-auto">
      <Nav.Link as={Link} className="text-dark fw-bold" to="/home">Home</Nav.Link>
      <Nav.Link as={Link} className="text-dark fw-bold" to="/manageservice">Manage all services</Nav.Link>
      <Nav.Link as={Link} className="text-dark fw-bold" to="/myservices">My services</Nav.Link>
      {user?.email ? (
               <>
                <Button  className="text-danger fw-bold" onClick={logOut} variant="light">
                  Logout
                </Button>
               
               </>

              ) : (
                <Nav.Link className="text-white fw-bold border" as={Link} to="/login">
                  Login
                </Nav.Link>
              )}
      
    </Nav>
   
  </Navbar.Collapse>
  </Container>
</Navbar>
  );
};

export default Header;
