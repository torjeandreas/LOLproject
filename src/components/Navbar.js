import React from 'react';

import './Navbar.css'

function Navbar() {
    return (
        <nav className="navbar">
            <ul className="nav-list">
                <li><a href="/">Home</a></li>
                <li><a href="/Ladder">Ladder</a></li>
                <li><a href="/"></a>
                 <input type="text" placeholder="search..." className="navbar-searchbar"/>
                </li>p
                
            </ul> 
        </nav>
    )
}

export default Navbar;