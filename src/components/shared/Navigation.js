import {React} from 'react';
import { Link } from 'react-router-dom';
import {Navbar, Container, NavDropdown, Nav} from 'react-bootstrap';

export function Header(){
    return (        
        <Navbar collapseOnSelect expand="lg" variant="dark">
            <Container>
                <Navbar.Brand><Link exact to="/"><img src="../img/icon-dark.jfif"></img></Link></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" className="align-middle m-0 p-0 " />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav><Link to="/petList">Feed a Pet</Link></Nav>
                        <Nav><Link to="/about">About Us</Link></Nav>
                        <Nav><Link to="/">My Pets</Link></Nav>
                    </Nav>
                    <Nav>
                        <NavDropdown title="My Profile" id="collasible-nav-dropdown">
                            <NavDropdown.Item><Link to="#action/3.1">Sign in</Link></NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    // <nav className="navbar navbar-default">
    //     <div className="container-fluid">
    //         <div className="navbar-header">
    //             <NavLink exact={true} className="navbar-brand" to="/"><img src="../img/icon-dark.jfif"></img></NavLink>
    //         </div>            
        
    //         <ul className="nav navbar-nav">
    //             <li><NavLink to="/petList">Feed a Pet</NavLink></li>
    //             <li><NavLink to="/about">About Us</NavLink></li> 
    //             <li><NavLink to="/">My Pets</NavLink></li>
    //         </ul>

    //         <ul className="nav navbar-nav navbar-right">                 
    //             <div className="btn btn-outline-dark" href="#" role="button" id="sign-in-btn">
    //                 <div className="login">
    //                     <NavLink to="/">Log In</NavLink>
    //                 </div>
    //             </div> 

    //         </ul>
    //     </div>
    // </nav> 
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