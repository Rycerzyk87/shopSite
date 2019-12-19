import React from 'react';
import '../styles/Footer.css';

const Footer = () => {
    return (
        <div className="main">
            <div className="links">
                <span className="adress">3604  Golden Ridge Schenectady NY 1303</span>
                <a href="https://pl-pl.facebook.com" className="fa fa-facebook" target="_blank" rel="noopener noreferrer"> </a>
                <a href="https://www.instagram.com" className="fa fa-instagram" target="_blank" rel="noopener noreferrer"> </a>
                <a href="https://www.google.pl" className="fa fa-google" target="_blank" rel="noopener noreferrer"> </a>
                <a href="https://twitter.com" className="fa fa-twitter" target="_blank" rel="noopener noreferrer"> </a>
                <span className="reserved">Copyright© 2019 Design by Rycerzyk87</span>
            </div>
        </div>
    )
}

export default Footer;