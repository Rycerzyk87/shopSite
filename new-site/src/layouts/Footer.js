import React from 'react';
import '../styles/Footer.css';

const Footer = () => {
    return (
        <div className="main">

            <div className="links">
                <span className="adress">3604  Golden Ridge Road Schenectady NY 12303</span>
                <a href="www.facebook.pl" class="fa fa-facebook"></a>
                <a href="www.instagram.pl" class="fa fa-instagram"></a>
                <a href="www.google.pl" class="fa fa-google"></a>
                <a href="www.twitter.pl" class="fa fa-twitter"></a>
                <span className="reserved">Copyright © 2019 Design Rycerzyk87</span>
            </div>
        </div>
    )
}

export default Footer;