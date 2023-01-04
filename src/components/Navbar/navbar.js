import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav>
            <Link to={"/home"}>Home</Link>
            <Link to={"/cart"}>Cart</Link>
            <Link to={"/register"}>Register</Link>
            <Link to={"/login"}>Login</Link>
        </nav>
    );
}

export default Navbar;
