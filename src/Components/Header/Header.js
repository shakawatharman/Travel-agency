
import React from "react";
import { Container, Nav, Navbar, Button } from "react-bootstrap";
import './Header.css';
import useAuth from '../../Hooks/useAuth';
import { Link } from "react-router-dom";

const Header = () => {

  const {user,logOut} = useAuth()

  return (
    <Navbar className="nav-menu" collapseOnSelect expand="lg" variant="dark">
  <Container>
  <Navbar.Brand href="#home"><img src="https://i.ibb.co/9HD59d8/logo.png" alt="" /></Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="ms-auto">
      <Nav.Link as={Link} className="text-dark fw-bold" to="/home">Home</Nav.Link>
      <Nav.Link as={Link} className="text-dark fw-bold" to="/destination">Explore</Nav.Link>
      <Nav.Link as={Link} className="text-dark fw-bold" to="/manageAllOrders">Manage All Bookings</Nav.Link>
      <Nav.Link as={Link} className="text-dark fw-bold" to="/addservice">Add Package</Nav.Link>
      
      {user?.email ? (
               <>
              <Nav.Link as={Link} className="text-dark fw-bold" to="/myservices">My Bookings</Nav.Link>
              
                <Button  className="text-danger fw-bold" onClick={logOut} variant="light">
                  Logout
                </Button>
               
               </>

              ) : (
                <Nav.Link className="text-danger fw-bold border" as={Link} to="/login">
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
