import React from "react";
import { Link } from "react-router-dom";
import littlelemon_logo from "../images/littlelemon_logo.png";

const Nav = () => {
    return(
        <nav role="navigation" aria-label="Main navigation">
            <Link to="/" aria-label="Little Lemon Home">
                <img src={littlelemon_logo} alt="Little Lemon Restaurant Logo" />
            </Link>
            <ul>
                <li><Link to="/" aria-current="page">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/menu">Menu</Link></li>
                <li><Link to="/booking">Reservations</Link></li>
                <li><Link to="/order">Order Online</Link></li>
                <li><Link to="/login">Login</Link></li>
            </ul>
        </nav>
    );
};

export default Nav;