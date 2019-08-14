import React from 'react';
// import { NavLink } from 'react-router-dom';


const ErrorPage = () => {
    return (
        <>
            <div className="errorMessage">Wskazana strona nie istnieje ;-(</div>
            <a href="/" className="backButton">Powrót na stronę główną</a>
        </>
    );
}

export default ErrorPage;
