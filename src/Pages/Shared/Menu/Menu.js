import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import useAuth from './../../../hooks/useAuth';
import logo from '../../../images/logo.webp'
import './Menu.css'

const Menu = () => {
    const { allContext } = useAuth();
    const { user, logOut } = allContext;
    console.log(user)
    return (
        <>
            <Navbar bg="info" variant="dark" sticky="top" collapseOnSelect expand="lg">
                <Container>
                    <Navbar.Brand as={NavLink} to="/home">
                        <img src={logo} alt="" />
                    </Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Nav.Link as={NavLink} className="text-dark" to="/home#home">HOME</Nav.Link>
                        <Nav.Link as={NavLink} className="text-dark" to="/about">ABOUT US</Nav.Link>
                        <Nav.Link as={NavLink} className="text-dark" to="/contact">CONTACTS</Nav.Link>

                        {!user?.email ? (
                            <>
                                <Nav.Link as={NavLink} to="/signin" className=" ms-2 menu-items">
                                    <div className="btn btn-primary">
                                        SIGN IN
                                    </div>
                                </Nav.Link>
                            </>
                        ) : (
                            <>
                        <Nav.Link as={NavLink} className="text-dark" to="/mybookings">MY BOOKINGS</Nav.Link>
                            
                            <NavDropdown
                                title={
                                    <img
                                        style={{
                                            width: "45px",
                                            borderRadius: "50%",
                                        }}
                                        src={user?.photoURL}
                                        alt="" />}>
                                            
                                <div className="text-center mx-auto">
                                    <h6>{user?.displayName}</h6>
                                    <p className="m-0 mb-2">{user?.email}</p>
                                    <button onClick={logOut} className="btn btn-primary">
                                        SIGN OUT
                                    </button>
                                </div>
                            </NavDropdown>
                        </>
                        )}
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Menu;