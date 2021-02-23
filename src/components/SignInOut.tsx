import React, { useState } from 'react';
import { GoogleLogin, GoogleLogout } from 'react-google-login';

import keys from '../secrets/oauth2.keys.json';

// Credit : https://github.com/ZoeLiao/React-Google-SignIn-SignOut-Demo/blob/master/src/GoogleBtn.js

const CLIENT_ID = keys.web.client_id;

/**
 *  Google Sign In Button
 */
export default function SignInOut() {
    const [ isLoggedIn, setIsLoggedIn ] = useState(false);
    const [ accessToken, setAccessToken ] = useState('');


    const login = (response : any) => {
        if (response.accessToken){
            setIsLoggedIn(true);
            setAccessToken(response.accessToken);
        }
    }

    const logout = () => {
        setIsLoggedIn(false);
        setAccessToken('');
    }

    const handleLoginFailure = () => {
        alert('Failed to login');
    }

    const handleLogoutFailure = () => {
        alert('Failed to logout');
    }

    return (
        <div>
            { isLoggedIn ?
                <GoogleLogout
                    clientId = {CLIENT_ID}
                    buttonText = 'Logout'
                    onLogoutSuccess={logout}
                    onFailure={handleLogoutFailure}
                />
                : 
                <GoogleLogin
                    clientId={CLIENT_ID}
                    buttonText='Login'
                    onSuccess={login}
                    onFailure={handleLoginFailure}
                    cookiePolicy={'single_host_origin'}
                    responseType='code,token'
                />
            }
            { accessToken ? <h5>Your Access Token: <br/><br/> {accessToken}</h5> : null }
        </div>
    );
}