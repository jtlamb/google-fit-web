/* Packages */
import React, { useContext, useState } from 'react';
import { GoogleLogin, GoogleLogout } from 'react-google-login';
/* Contexts */
import { userContext } from './App';
/* Utils */
import keys from '../secrets/oauth2.keys.json';
import { createUser, blankUser } from '../util/UserProfile';

// Credit : https://github.com/ZoeLiao/React-Google-SignIn-SignOut-Demo/blob/master/src/GoogleBtn.js

const CLIENT_ID = keys.web.client_id;
const SCOPES = [
    "https://www.googleapis.com/auth/fitness.activity.read",
    "https://www.googleapis.com/auth/fitness.body.read"
];

/** Google Sign In and Sign Out Button */
export default function SignInOut() {
    // chooses whether to render sign in or sign out button
    const [ isLoggedIn, setIsLoggedIn ] = useState(false);

    // contexts to propagate to App
    const { setUser } = useContext(userContext);

    // handle login
    const login = (response) => {
        if (response.accessToken){
            setIsLoggedIn(true);
            setUser(
                createUser(
                    true,
                    response.getBasicProfile().getName(),
                    response.getBasicProfile().getGivenName(),
                    response.getBasicProfile().getFamilyName(),
                    response.getBasicProfile().getImageUrl(),
                    response.getBasicProfile().getEmail(),
                    response.accessToken
                )
            )
        }
    }

    // handle logout
    const logout = () => {
        setIsLoggedIn(false);
        setUser(blankUser);
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
                    scopes={SCOPES}
                />
            }
        </div>
    );
}