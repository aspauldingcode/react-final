import React from "react";
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
// import DOMPurify from 'dompurify';
// Import pages from /pages
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import 'bootstrap/dist/css/bootstrap.min.css';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import './App.css';


// Main application here:
export default function App() {
    return (
        <BrowserRouter basename={process.env.PUBLIC_URL}>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="/react-final">Final Forums</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <NavDropdown title="Socials" id="collasible-nav-dropdown">
                                <NavDropdown.Item target='_blank' href="https://github.com/aspauldingcode">Github</NavDropdown.Item>
                                <NavDropdown.Item target='_blank' href="https://www.linkedin.com/in/aspauldingcode/">LinkedIn</NavDropdown.Item>
                                <NavDropdown.Item target='_blank' href="https://twitter.com/aspauldingcode">Twitter</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item target='_blank' href="https://open.spotify.com/artist/0yxFOuFrlhvzlHOeNw3x0p?si=TgwRFrZgQBeddpQXTk69-A">My Music</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                        <Nav>
                            <Nav.Link href="/react-final/contact">Contact</Nav.Link>
                            <Nav.Link href="/react-final/about">About</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            <Routes>
                <Route path="/react-final" element={<Home />} />
                <Route path="/react-final/contact" element={<Contact />} />
                <Route path="/react-final/about" element={<About />} />
            </Routes>
        </BrowserRouter>
    );
}
