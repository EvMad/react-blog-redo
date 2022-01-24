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
        <header></header>
    );
}

export default Navbar;