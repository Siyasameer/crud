import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

function Topbar() {
  return (
    <div>
       <Navbar className="bg-primary">
      <Container>
        <Navbar.Brand href="#home" className='text-light'>EMPLOYMENT-CRUD</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
                  <Button as={Link} to='/register' variant="secondary">ADD NEW</Button>

          {/* <Navbar.Text>
             <a href="#login" className='text-light'>ADD NEW</a>
          </Navbar.Text> */}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  
    </div>
  )
}

export default Topbar
