import React from 'react'
import { color } from '@mui/system';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
//import styles from '../styles/navbar.module.css'
// import "../../pages/styles/navbar.module.css";
function Navbars() {
  return (
    <div>
      <Navbar bg="light" expand="md" style={{ height: "80px" }}>
        <Container>
          <img src="https://firstsales.io/wp-content/uploads/2022/05/Logo_FS_fin.svg" alt="..." className="image" />


          <Navbar.Brand href="#home" className= "header"></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">

              <NavDropdown title="Solution" id="basic-nav-dropdown" className="header">
                <NavDropdown.Item href="#action/3.1" className='dropdown-contents'>Email Out Reach Tool</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2" className='dropdown-contents'>
                  Email Warmup Tool
                </NavDropdown.Item>
              </NavDropdown>

              <Nav.Link href="#home" className='header' style={{ marginLeft: "2px" }}>CEM 🎓</Nav.Link>
              <Nav.Link href="#link" className='header' style={{ marginLeft: "2px" }}>Sales Cohort 🤑 </Nav.Link>

              <NavDropdown title="Wall Of Love ❤️" id="basic-nav-dropdown" className="header" style={{ marginLeft: "2px" }}>
                <NavDropdown.Item href="/Aboutus" className='dropdown-contents'>About US</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2" className='dropdown-contents'>
                  Our Story
                </NavDropdown.Item>
              </NavDropdown>

              <NavDropdown title="Resources" id="basic-nav-dropdown" className="header" style={{ marginLeft: "2px" }}>
                <NavDropdown.Item href="#action/3.1" className='dropdown-contents'>Case Studies</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2" className='dropdown-contents'>
                  Cold Email templates
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3" className='dropdown-contents'>400+ Proven Subject Lines</NavDropdown.Item>

                <NavDropdown.Item href="#action/3.4" className='dropdown-contents'>
                  First Sales Friday Podcast
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.4" className='dropdown-contents'>
                  Cold Email Master Class
                </NavDropdown.Item>

                <NavDropdown.Item href="#action/3.4" className='dropdown-contents'>
                  Blog
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.4" className='dropdown-contents'>
                  Knowledgebase
                </NavDropdown.Item>

                <NavDropdown.Item href="#action/3.4" className='dropdown-contents'>
                  Twitter Value Bomb
                </NavDropdown.Item>

              </NavDropdown>

              <button className='btn'>Start Generating Leads</button>

            </Nav>
          </Navbar.Collapse>
        </Container>

      </Navbar>
    </div>
  )
}
export default Navbars