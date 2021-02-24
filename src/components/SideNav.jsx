import React from 'react';
import { Link } from 'react-router-dom';
import SignInOut from './SignInOut';
import '../styles/SideNav.scss';
import {MDCList} from "@material/list";

export default function SideNav() {

    return (
        <div className="SideNav">
            <aside className="mdc-drawer">
                <div className="mdc-drawer__content">
                    <nav className="mdc-list">
                    <h2>Google Fit Web</h2>
                    <hr class="mdc-list-divider" />
                    <Link to="/" className="mdc-list-item nav" aria-current="page">
                        <span className="mdc-list-item__ripple"></span>
                        <i className="material-icons mdc-list-item__graphic" aria-hidden="true">inbox</i>
                        <span className="mdc-list-item__text">Home</span>
                    </Link>
                    <Link to="/profile" className="mdc-list-item nav">
                        <span className="mdc-list-item__ripple"></span>
                        <i className="material-icons mdc-list-item__graphic" aria-hidden="true">drafts</i>
                        <span className="mdc-list-item__text">Profile</span>
                    </Link>
                    <Link to="/journal" className="mdc-list-item nav">
                        <span className="mdc-list-item__ripple"></span>
                        <i className="material-icons mdc-list-item__graphic" aria-hidden="true">drafts</i>
                        <span className="mdc-list-item__text">Journal</span>
                    </Link>
                    <hr class="mdc-list-divider" />
                    <Link to="/about" className="mdc-list-item nav">
                        <span className="mdc-list-item__ripple"></span>
                        <i className="material-icons mdc-list-item__graphic" aria-hidden="true">drafts</i>
                        <span className="mdc-list-item__text">About</span>
                    </Link>
                    </nav>
                </div>
                <div className="login">
                    <SignInOut />
                </div>
            </aside>            
        </div>
    )
}