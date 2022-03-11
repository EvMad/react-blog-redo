import React from 'react';
import './css/navbar.css';
import auth from '../Utils/auth';

function Navbar({ currentPage, handlePageChange }) {
    const logout = (event) => {
        event.preventDefault();
        auth.logout();
    };

    // function for nav bar burger and responsive nav slide

    function navSlide() {
        const burger = document.querySelector(".burger");
    const nav = document.querySelector(".nav-bar");
    const navLinks = document.querySelectorAll(".nav-bar li");

    burger.addEventListener("click", () => {
        //Toggle Nav
        nav.classList.toggle("nav-active");
        
        //Animate Links
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = ""
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.5}s`;
            }
        });
        //Burger Animation
        burger.classList.toggle("toggle");
    });
    }
    navSlide();
    



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
                        <a href="CreatePost" 
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
                    <a href="Login"
                    onClick={() => handlePageChange('Login')}
                    className={currentPage === 'Login' ? 'nav-link active' : 'nav-link'}>
                        Login
                    </a>
                    <li>
                        <a href="SignUp"
                        onClick={() => handlePageChange('Signup')}
                        className={currentPage === 'Signup' ? 'nav-link active' : 'nav-link'}>
                            Signup
                        </a>
                    </li>
                </li>
               )}

<div class="burger">
        <div class="line1"></div>
        <div class="line2"></div>
        <div class="line3"></div>
    </div>

            </ul>
        </header>
    );
}

export default Navbar;