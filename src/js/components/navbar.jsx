import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <ul className="nav-bar">
            <li><Link to="/">Intro</Link></li>
            <li><Link to="/experience">Experience</Link></li>
        </ul>
    )
}

export default Navbar;