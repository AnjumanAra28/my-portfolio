import React from 'react';
import logo from '/src/assets/logo (2).jpg';

const Navbar = () => {
    return (
        <div className="navbar bg-gray-900 text-white mt-0 ">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        <li><a href='#about'>About </a></li>
            
                        <li><a href='#skills'>My Skills</a></li>
                        <li><a href='#projects'>My Projects</a></li>
                        <li><a href='#footer'>Contact Me</a></li>
                    </ul>
                </div>
                <a href="#" className=" md:ml-4 rounded-full text-xl">
                    <img  src={logo} alt="Logo" className="h-10 w-auto rounded-full" /> 
                </a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 ">
                    <li><a href='#about'>About</a></li>
                    <li><a href='#skills'>My Skills</a></li>
                    <li><a href='#projects'>My Projects</a></li>
                    <li><a href='#footer'>Contact Me</a></li>
                </ul> 
            </div>
            <div className="navbar-end">
                <a className="btn">Download Resume</a>
            </div>
        </div>
    );
};

export default Navbar;