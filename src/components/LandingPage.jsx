/* Packages */
import React from 'react';
/* Utils */
import Logo from '../imgs/GoogleFit_Logo_Vertical.png';
/* Styles */
import '../styles/LandingPage.scss';

export default function LandingPage() {

    return (
        <div className="landing">
            <div className="header-landing">
                <img src={Logo} alt="Google Fit Logo" className="header-image-landing"/>
            </div>
            <div className="content-landing">
                <span className="content-text-landing">Login to view your Google Fit data or select About to learn more about this site.</span>
            </div>
        </div>
    )
}