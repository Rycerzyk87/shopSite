import React from 'react';

const ErrorPage = () => {
    return (
        <>
            <div className="errorMessage">Podana strona nie istnieje ;(</div>
            <a href="/" className="backButton">Strona główna</a>
        </>
    );
}

export default ErrorPage;
