import React from "react";
import { Link } from "react-router-dom";
import small_logo from "../images/small_logo.png";

const Footer = () => {
    return(
        <footer role="contentinfo">
            <section>
                <div>
                    <img 
                        src={small_logo} 
                        alt="Little Lemon restaurant logo"
                    />
                </div>
                <div>
                    <h3>Navigation</h3>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/menu">Menu</Link></li>
                        <li><Link to="/booking">Reservations</Link></li>
                        <li><Link to="/order">Order Online</Link></li>
                        <li><Link to="/login">Login</Link></li>
                    </ul>
                </div>
                <div>
                    <h3>Contact</h3>
                    <ul>
                        <li>123 Mediterranean Ave</li>
                        <li>Chicago, IL 60601</li>
                        <li>(312) 555-0123</li>
                        <li>info@littlelemon.com</li>
                    </ul>
                </div>
                <div>
                    <h3>Follow Us</h3>
                    <ul>
                        <li><a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a></li>
                        <li><a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a></li>
                        <li><a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a></li>
                    </ul>
                </div>
            </section>
        </footer>
    );
};

export default Footer;