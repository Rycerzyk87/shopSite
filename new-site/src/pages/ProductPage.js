import React from 'react';
import Product from '../components/Product';
import { Link } from 'react-router-dom';


const ProductPage = () => {
    return (
        <>
            <div>Strona produktu</div>
            <ProductPage />
            <Link to="/products">Powrót do listy</Link>
        </>
    );
}

export default ProductPage;
