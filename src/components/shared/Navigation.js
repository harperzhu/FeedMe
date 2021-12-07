import {React} from 'react';
import { NavLink } from 'react-router-dom';

export function Header(){
    return (        
    <nav className="navbar navbar-default">
        <div className="container-fluid">
            <div className="navbar-header">
                <NavLink exact={true} className="navbar-brand" to="/"><img src="../img/icon-dark.jfif"></img></NavLink>
            </div>            
        
            <ul className="nav navbar-nav">
                <li><NavLink to="/petList">Feed a Pet</NavLink></li>
                <li><NavLink to="/about">About Us</NavLink></li> 
                <li><NavLink to="/">My Pets</NavLink></li>
            </ul>

            <ul className="nav navbar-nav navbar-right">                 
                <div className="btn btn-outline-dark" href="#" role="button" id="sign-in-btn">
                    <div className="login">
                        <NavLink to="/">Log In</NavLink>
                    </div>
                </div> 

            </ul>
        </div>
    </nav> 
    );
}

export function Footer() {
    return (
        <footer>
            <div id="contact-info">
                <p><span className="material-icons">email</span> <a href="mailto:feedme@gmail.com">feedme@gmail.com</a></p>
                <p><span className="material-icons">phone</span> <a href="tel:123-456-789">(123)-456-789</a></p> 
                <p>&copy; Info340 FeedMe Project 2021. All rights reserved.</p>             
            </div>
        </footer>
    );
}