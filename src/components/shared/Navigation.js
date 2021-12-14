import {React} from 'react';
import { Link } from 'react-router-dom';
import {Navbar, Container, NavDropdown, Nav} from 'react-bootstrap';
import { getAuth, signOut } from 'firebase/auth';

export function Header(props){
    const handleSignOut = (event) => {
        signOut(getAuth());
      }
    return (        
        <Navbar collapseOnSelect expand="lg" variant="dark">
            <Container>
                <Navbar.Brand><Link to="/"><img src="../img/icon-dark.jfif" alt="feed me icon"></img></Link></Navbar.Brand>
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
        <footer>
            <div>
                <p><span className="material-icons" aria-label='email icon'> email</span> <Link to="mailto:feedme@gmail.com" className='text-light'>feedme@gmail.com</Link></p>
                <p><span className="material-icons" aria-label='phone icon'> phone</span> <Link to="tel:123-456-789" className='text-light'>(123)-456-789</Link></p>
                <p>&copy; Info340 FeedMe Project 2021. All rights reserved.</p>             
            </div>
        </footer>
    );
}