import {React} from 'react';

export function Header(){
    return (        
    <nav className="navbar navbar-default">
        <div className="container-fluid">
            <div className="navbar-header">
                <a href="#" className="navbar-brand"><img src="../img/icon-dark.jfif"></img></a>
            </div>            
        
            <ul className="nav navbar-nav">
                <li class="active"><a href="index.html">Feed a Pet</a></li>
                <li><a href="about.html">About Us</a></li> 
                <li><a href="#">My Pets</a></li>
            </ul>

            <ul className="nav navbar-nav navbar-right">                 
                <div className="btn btn-outline-dark" href="#" role="button" id="sign-in-btn">
                    <div className="login">
                        <a href="#">Log In</a>
                    </div>
                </div> 

                <div className="btn btn-danger" href="#" role="button" id="sign-in-btn">
                    <div className="login">
                        <a href="#">Sign Up</a>
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