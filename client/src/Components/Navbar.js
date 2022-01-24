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

               {auth.loggedIn() ? (

                    <li className="nav-item">
                        <a href="createpost" 
                        onClick={() => handlePageChange('Create Post')}
                        className={currentPage === 'Create Post' ? 'nav-link active' : 'nav-link'}
                         >
                         Create Post
                        </a>
                        <li>
                        <a className="nav-item" onClick={logout}>Logout</a>
                    </li>
                    </li>
                    
               )  : (
                <li className="nav-item">
                    <a href="login"
                    onClick={() => handlePageChange('Login')}
                    className={currentPage === 'Login' ? 'nav-link active' : 'nav-link'}>
                        Login
                    </a>
                </li>
               )}

            </ul>
        </header>
    );
}

export default Navbar;