import React from 'react';
import { Link } from 'react-router-dom';

import '../styles/ProductListPage.css';

const products = ["Pomidor", "Ogórek", "Dynia", "Cebula"]

const PorductListPage = () => {
    const list = products.map(product => (
        <li>
            <Link to={`/product/${product}`}>{product}</Link>
        </li>
    ))
    return (
        <div className="products">
            <h2>Dostępne produkty w ofercie</h2>
            <ul>
                {list}
            </ul>
        </div>

    );
}

export default PorductListPage;