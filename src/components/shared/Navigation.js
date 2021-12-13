import {React} from 'react';
import { Link } from 'react-router-dom';
import {Navbar, Container, NavDropdown, Nav} from 'react-bootstrap';
import { getAuth, signOut } from 'firebase/auth';
import { useState } from 'react';

export function Header(props){

    const handleSignOut = (event) => {
        signOut(getAuth());
      }
    return (        
        <Navbar collapseOnSelect expand="lg" variant="dark">
            <Container>
                <Navbar.Brand><Link exact to="/"><img src="../img/icon-dark.jfif"></img></Link></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" className="align-middle m-0 p-0 " />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav><Link to="/petList">Feed a Pet</Link></Nav>
                        <Nav><Link to="/about">About Us</Link></Nav>
                        <Nav><Link to="/liked">My Pets</Link></Nav>
                    </Nav>
                    <Nav>
                    {!props.user &&
                        <Nav><Link to="/signin">Sign in</Link></Nav>
                    }
                    {props.user &&
                            <NavDropdown title={"Hello, " + props.user.displayName} id="collasible-nav-dropdown">
                                <NavDropdown.Item onClick={handleSignOut}>Sign out</NavDropdown.Item>
                            </NavDropdown>
                    }  
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export function Footer() {
    return (
        <footer className="">
            <div id="contact-info">
                <p><span className="material-icons"> email</span> <a href="mailto:feedme@gmail.com">feedme@gmail.com</a></p>
                <p><span className="material-icons"> phone</span> <a href="tel:123-456-789">(123)-456-789</a></p>
                <p>&copy; Info340 FeedMe Project 2021. All rights reserved.</p>             
            </div>
        </footer>
    );
}