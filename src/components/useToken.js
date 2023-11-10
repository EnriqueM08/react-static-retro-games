import { useState } from 'react';

export default function useToken() {
    const getToken = () => {
        const tokenString = sessionStorage.getItem('token');
        return tokenString?.token
    };
    const [token, setToken] = useState();

    const saveToken = userToken => {
        sessionStorage.setItem('token', userToken);
        setToken(userToken.token);
    }

    console.log(getToken);
    return {
        setToken: saveToken,
        token
    }
}