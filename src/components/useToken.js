import { useState } from 'react';

export default function useToken() {
    const getToken = () => {
        const tokenString = sessionStorage.getItem('token');
        return tokenString?.token
    };
    const [token, setToken] = useState();

    const saveToken = tokenString => {
        sessionStorage.setItem('token', tokenString);
        setToken(tokenString.token);
    }

    console.log(getToken);
    return {
        setToken: saveToken,
        token
    }
}