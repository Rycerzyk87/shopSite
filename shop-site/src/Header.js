import React from 'react';
import { BrowserRouter, Link } from 'react-router-dom'

class Header extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <div>
                    <header>
                        <ul>
                            <li><Link to="/">Start</Link></li>
                            <li><Link to="/news">Aktua</Link></li>
                            <li><Link to="/contact">Kontakt</Link></li>
                        </ul>
                    </header>
                </div>
            </BrowserRouter>
        )
    }
}

export default Header;