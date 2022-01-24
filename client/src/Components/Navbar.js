import React from 'react';
import './css/navbar.css';
import auth from '../Utils/auth';

function Navbar({ currentPage, handlePageChange }) {
    const logout = (event) => {
        event.preventDefault();
        auth.logout();
    };

    // return <aside> <ul>

    return (
        <header>
            <ul className="nav-bar">
                <li className="nav-item">
                <a href="/" onClick={() => handlePageChange('Explore')}
                className={currentPage === 'Explore' ? 'nav-link active' : 'nav-link'}>Explore</a>
                </li>
            </ul>
        </header>
    );
}

export default Navbar;