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
                <span className="material-icons" aria-label='email icon'> email</span>
                <p className='text-light'>Harper Zhu: harperzhu@yahoo.com   /   </p>
                <p className='text-light'>Ashley Zhao: zhao8@uw.edu   /   </p>
                <p className='text-light'>Aurora Yin: zyin5@uw.edu   /   </p>
                <p className='text-light'>Crosby Huang: crosbyhz@uw.edu   /   </p>
                <p>&copy; Image Source: <br/>
                    <a href="https://instagram.com/samoyed.hagan?utm_medium=copy_link" target="_blank">Bear's instagram </a>, 
                    <a href=" https://instagram.com/reverethecat?utm_medium=copy_link" target="_blank"> Blot's instagram </a>, 
                    <a href="https://instagram.com/ashtontherescuehusky?utm_medium=copy_link" target="_blank"> Logan's instagram </a>, 
                    <a href=" https://instagram.com/woody_the_hound_dog?utm_medium=copy_link" target="_blank"> Periwinkle's instagram </a>, 
                    <a href="https://instagram.com/lela_and_gracie?utm_medium=copy_link" target="_blank"> Rusty's instagram </a>, 
                    <a href="https://www.instagram.com/onecupof.coffee/" target="_blank"> Coffee's instagram </a>, 
                    Muffin photo credits to Harper Zhu,
                    Pochi photo credits to Crosby Huang
                </p>  

                <p>&copy; Info340 FeedMe Project 2021. All rights reserved.</p>   
            </div>
        </footer>
    );
}