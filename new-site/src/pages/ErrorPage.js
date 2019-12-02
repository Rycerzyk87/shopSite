import React from 'react';

const ErrorPage = () => {
    return (
        <>
            <div className="errorMessage">Podana strona nie istnieje ;-(</div>
            <a href="/" className="backButton">Powrót na stronę główną</a>
        </>
    );
}

export default ErrorPage;
