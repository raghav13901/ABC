import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

function NavB() {
  return (
        <Navbar bg="dark" variant="dark" className="nav">
            <Nav className="mr-auto">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/file">Images</Nav.Link>
                <Nav.Link href="/Slideshow">Slideshow</Nav.Link>
            </Nav>
        </Navbar>
  );
}

export default NavB;
