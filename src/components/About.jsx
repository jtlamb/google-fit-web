/* Packages */
import React from 'react';
/* Styles */
import '../styles/About.scss';

export default function About() {

    return (
        <div className="about">
            <div className="header-about">About</div>
            <p className="content-about">
                Google Fit Web is a web application in which users are able to see their fitness data acquired by the Google Fit mobile and wearable app. 
                The experience of using this web application is meant to resemble the user experience of using the mobile app but on a larger screen.
                With a larger screen, more data is able to be displayed and presented.
            </p>
            <h2>Motivation</h2>
            <p className="content-about">
                Google acquired Fitbit and has put a lot more effort in their wearable software such as Wear OS. These acquisitions and efforts can result in an influx of new users who will want options when it comes to seeing their fitness data.
                This website aims to be a web alternative to the Google Fit mobile and wearable app.
            </p>
            <h2>Privacy</h2>
            <p className="content-about">
                Google Fit Web will not store or share any user information. The site only reads and writes information from users' Google accounts after sign in. 
                The data displayed is simply read using the Google Fit REST API and the Google People API. 
                No cookies, local storage, or database is used to store personal information nor information retrieved from the users' Google accounts.
                For more information on your privacy, please visit the <a href='https://github.com/jtlamb/google-fit-web/blob/master/PRIVACY_POLICY.md#google-fit-web-privacy-policy' target='_blank'>Privacy Policy</a>.
            </p>
            <h2>Disclaimer</h2>
            <p className="content-about">
                This project is not a product from Google themselves nor do I have any affiliation with Google. This is an independent student project for CS 4365 at the Georgia Institute of Technology. 
            </p>
        </div>
    )
}