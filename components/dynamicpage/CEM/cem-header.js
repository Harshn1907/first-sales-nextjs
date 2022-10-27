import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function cemheader() {
    return (
      <div>
        <Navbar bg="light" expand="md" style={{ height: "80px" }}>
          <Container>
            <img src="https://firstsales.io/wp-content/uploads/2022/05/Logo_FS_fin.svg" alt="..." className="cem-header-logo" />
  
  
            <Navbar.Brand href="#home" className= "cem-header"></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
  

                <Nav.Link href="#home" className='cem-header' style={{ marginLeft: "2px" }}>About</Nav.Link>
                <Nav.Link href="#home" className='cem-header' style={{ marginLeft: "2px" }}>Email Out Reach Tool</Nav.Link>
                <Nav.Link href="#link" className='cem-header' style={{ marginLeft: "2px" }}> Email Warm Up Tool </Nav.Link>
                <Nav.Link href="#home" className='cem-header' style={{ marginLeft: "2px" }}>Wall Of Love ❤️</Nav.Link>
                <Nav.Link href="#home" className='cem-header' style={{ marginLeft: "2px" }}>Schedule a Demo</Nav.Link>
                <button className='btn'>Login</button>
                </Nav>
                           </Navbar.Collapse>
          </Container>
  
        </Navbar>
      </div>
    )
  }
  export default cemheader
