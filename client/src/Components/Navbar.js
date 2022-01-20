import React from 'react';
import auth from '../Utils/auth';

function Navbar({ currentPage, handlePageChange }) {
    const logout = (event) => {
        event.preventDefault();
        auth.logout();
    };

    // return <aside> <ul>

    return (
        <aside></aside>
    );
}