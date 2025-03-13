import React from 'react';
import { FaFacebook, FaLinkedin } from 'react-icons/fa';
import { IoIosMail } from 'react-icons/io';

const Footer = () => {
    return (
        <footer id='footer' className="footer footer-horizontal footer-center bg-gray-900 text-white rounded p-10">

            <nav>
                <div className="grid grid-flow-col gap-4">

                    <a href="https://www.facebook.com/profile.php?id=61561510311365" target="_blank" rel="noopener noreferrer">
                        <FaFacebook className="text-3xl hover:text-blue-700" />
                    </a>

                    <a href="https://www.linkedin.com/in/anjuman-ara-anny/" target="_blank" rel="noopener noreferrer">
                        <FaLinkedin className="text-3xl hover:text-blue-400" />
                    </a>
                    <a href="mailto:anjuanny2024@gmail.com" target="_blank" rel="noopener noreferrer">
                        <IoIosMail className="text-3xl hover:text-blue-400" />
                    </a>
                </div>
            </nav>
            <aside>
                <p>Copyright © {new Date().getFullYear()} - All right reserved by Anjuman Ara</p>
            </aside>
        </footer>
    );
};

export default Footer;