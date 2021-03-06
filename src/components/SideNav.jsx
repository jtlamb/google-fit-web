/* Packages */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
/* Child Components */
import SignInOut from './SignInOut';
/* Styles */
import '../styles/SideNav.scss';
/* Utils */
import FitLogo from '../imgs/GoogleFit_Logo_Vertical.png'

/** Sidebar Navigation
 *  conatins all of the navigation for the site
 * @param props.authenticated chooses what to render based on whether or not the user is authenticated
 */
export default function SideNav(props) {

    // selected will track the current index of the selected item
    const [ selected, setSelected ] = useState(0);

    const handleClick = (i) => {
        setSelected(i);
    }

    return (
        <div className="SideNav">
            <aside className="mdc-drawer">
                <div className="mdc-drawer__content">
                    <nav className="mdc-list">
                        <div className="mdc-drawer__header">
                            <Link to="/" className="nav header" onClick={() => handleClick(0)}>
                                <img src={FitLogo} alt="Google Fit Logo" className="logo"/>
                            </Link>
                        </div>
                        {props.authenticated 
                        ? 
                            <div>
                                <hr class="mdc-list-divider" />
                                <Link to="/" className={selected === 0 ? "mdc-list-item nav mdc-list-item--activated" : "mdc-list-item nav"} onClick={() => handleClick(0)}> 
                                    <i className="material-icons mdc-list-item__graphic" aria-hidden="true">home</i>
                                    <span className="mdc-list-item__text">Home</span>
                                </Link>
                                <Link to={props.authenticated ? "/profile" : "/"} className={selected === 1 ? "mdc-list-item nav mdc-list-item--activated" : "mdc-list-item nav"} onClick={() => handleClick(1)}>
                                    <i className="material-icons mdc-list-item__graphic" aria-hidden="true">account_circle</i>
                                    <span className="mdc-list-item__text">Profile</span>
                                </Link>
                                <Link to={props.authenticated ? "/journal" : "/"} className={selected === 2 ? "mdc-list-item nav mdc-list-item--activated" : "mdc-list-item nav"} onClick={() => handleClick(2)}>
                                    <i className="material-icons mdc-list-item__graphic" aria-hidden="true">assignment</i>
                                    <span className="mdc-list-item__text">Journal</span>
                                </Link>
                            </div>
                        :
                            <></>
                        }
                        <hr class="mdc-list-divider" />
                        <Link to="/about" className={selected === 3 ? "mdc-list-item nav mdc-list-item--activated" : "mdc-list-item nav"} onClick={() => handleClick(3)}>
                            <i className="material-icons mdc-list-item__graphic" aria-hidden="true">info</i>
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