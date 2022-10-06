import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <nav>
            <Navbar bg="warning" >
                <Container>
                    <Navbar.Brand href="/">Meal DB React</Navbar.Brand>
                    <Nav className="h5 me-5">
                        <NavLink className={({ isActive }) => isActive ? 'text-decoration-none me-3 text-danger' : 'text-decoration-none me-3 text-dark'} to="/home">
                            Home
                        </NavLink>
                        <NavLink className={({ isActive }) => isActive ? 'text-decoration-none me-3 text-danger' : 'text-decoration-none me-3 text-dark'} to="/about">
                            About
                        </NavLink>
                    </Nav>
                </Container>
            </Navbar>
        </nav>
    );
};

export default Header;