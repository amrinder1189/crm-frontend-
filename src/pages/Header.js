import React from "react";
import { Button, Container } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { LinkContainer } from "react-router-bootstrap";
import { useNavigate } from "react-router-dom";

export const Header = () => {
  const navigate = useNavigate();
  // e.preventDefault();
  const LogoutHandlue = () => {
    navigate("/");
    // console.log("llplplp");
  };
  return (
    <Navbar bg="light" variant="light">
      <Container>
        <LinkContainer to="/">
          <Navbar.Brand href="">CRM Tickiting app </Navbar.Brand>
        </LinkContainer>
        <Nav className="me-auto">
          <LinkContainer to="/dashboard">
            <Nav.Link href="#home">Dashboard</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/ticketlist">
            <Nav.Link href="#home">Ticket</Nav.Link>
          </LinkContainer>

          <Nav.Link onClick={LogoutHandlue}>Logout</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};
