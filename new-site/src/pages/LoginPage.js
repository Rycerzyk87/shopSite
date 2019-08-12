import React from 'react';
import '../styles/LoginPage.css'

const LoginPage = () => {
    return (
        <div>
            <label htmlFor="">Podaj Login<input type="text" /></label><br></br>
            <label htmlFor="">Podaj Hasło<input type="password" /></label><br></br>
            <button>Zaloguj</button>
        </div>
    );
}

export default LoginPage;