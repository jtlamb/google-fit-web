import React from 'react';
import { Link } from 'react-router-dom';
import SignInOut from './SignInOut';


export default function SideNav() : JSX.Element {

    return (
        <div>
            <h2>Google Fit Web</h2>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/profile">Profile</Link>
                    </li>
                    <li>
                        <Link to="/journal">Journal</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                </ul>
            </nav>
            <SignInOut/>
        </div>
    )
}