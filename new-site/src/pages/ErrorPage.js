import React from 'react';
// import { NavLink } from 'react-router-dom';
// import panic from '../images/panic';

const ErrorPage = () => {
    return (
        <>
            <div className="errorMessage">Podana strona nie istnieje ;-(</div>
            {/* <img src={panic} alt="don't panic" /> */}
            <a href="/" className="backButton">Powrót na stronę główną</a>
        </>
    );
}

export default ErrorPage;
