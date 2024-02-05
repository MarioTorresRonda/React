import { redirect } from "react-router-dom";

export function getTokenExpiration() {
    const storedexpiration = localStorage.getItem('expiration');
    const expirationDate = new Date(storedexpiration);
    const nowDate = new Date();
    const duration = expirationDate.getTime() - nowDate.getTime();
    return duration;
}

export function getAuthToken() {
    const token = localStorage.getItem('token');

    if ( !token ) {
        return null;
    }

    const tokenDuration = getTokenExpiration();

    if ( tokenDuration < 0) {
        return 'EXPIRED';
    }

    return token;
}

export function loader() {
    return getAuthToken();
}

export function checkAuthLoader() {
    const token = getAuthToken();
    if ( !token ) {
        return redirect('/');
    }
    return null;
}