import React from 'react';

const ErrorPage = () => {
    return (
        <>
            <div className="errorMessage"><p>Podana strona nie istnieje ;(</p></div>
            <a href="/" className="backButton">Strona główna</a>
        </>
    );
}

export default ErrorPage;
