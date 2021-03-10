/* Packages */
import React, { useEffect, useState } from 'react';
/* Styles */
import '../styles/Profile.scss'
/* Util */
import  apikey  from '../secrets/apikey.json'
import reportWebVitals from '../reportWebVitals';
export default function Profile(props) {

    const [ bDate, setBDate ] = useState('');
    const [ gender, setGender ] = useState('');

    /* Name, Birthday, Gender */
    const peopleRequestUrl = new URL('https://people.googleapis.com');
    peopleRequestUrl.protocol = 'https';
    peopleRequestUrl.hostname = 'people.googleapis.com';
    peopleRequestUrl.pathname = '/v1/people/me';
    peopleRequestUrl.searchParams.append('personFields', 'birthdays,genders,names');
    peopleRequestUrl.searchParams.append('sources', 'READ_SOURCE_TYPE_PROFILE');

    useEffect(() => {
        fetch(
            peopleRequestUrl,
            {
                method: "GET",
                headers: {
                    'Accept': 'application/json',
                    'Authorization': `Bearer ${props.user.accessToken}`,
                }
            }
        )
        .then(res => res.json())
        .then(response => {
            console.log(response)
            setBDate(`${response.birthdays[0].date.month}/${response.birthdays[0].date.day}/${response.birthdays[0].date.year}`);
            setGender(`${response.genders[0].formattedValue}`);
        })
        .catch(error => console.log(error));
    }, []);

    /* Height, Weight */
    const fitRequestUrl = new URL(`https://www.googleapis.com`);
    fitRequestUrl.protocol = 'https';
    fitRequestUrl.hostname = 'googleapis.com';
    fitRequestUrl.pathname = '/fitness/v1/users/me';
    fitRequestUrl.searchParams.append('dataTypeName', 'com.google.height');

    const m = {
        "dataTypeName": "com.google.height",
        "dataSourceId": "derived:com.google.height:com.google.android.gms:merge_height/datasets/-"
    };
    useEffect(() => {
        fetch(
            fitRequestUrl,
            {
                method: 'GET',
                headers: {
                    'Accept': 'application/json',
                    'Authorization': `Bearer ${props.user.accessToken}`,
                },
            }
        )
        .then(res => res.json())
        .then(response => console.log(response))
        .catch(error => console.log(error));
    }, [])    

    return (
        <>
            <h2 className="title">Profile</h2>
            <div className="name">
                <img src={props.user.pfPic} alt="Profile Picture" className="pfp"/>
                <div>{props.user.fname} {props.user.lname}</div>
            </div>
            <div class="mdc-data-table">
                <div class="mdc-data-table__table-container">
                    <table class="mdc-data-table__table" aria-label="Dessert calories">
                    <thead>
                        <tr class="mdc-data-table__header-row">
                            Basic Information
                        </tr>
                    </thead>
                    <tbody class="mdc-data-table__content">
                        <tr class="mdc-data-table__row">
                            <th class="mdc-data-table__cell" scope="row">Birthday</th>
                            <td class="mdc-data-table__cell mdc-data-table__cell--numeric">{bDate}</td>
                        </tr>
                        <tr class="mdc-data-table__row">
                            <th class="mdc-data-table__cell" scope="row">Gender</th>
                            <td class="mdc-data-table__cell mdc-data-table__cell--numeric">{gender}</td>
                        </tr>
                        <tr class="mdc-data-table__row">
                            <th class="mdc-data-table__cell" scope="row">Weight</th>
                            <td class="mdc-data-table__cell mdc-data-table__cell--numeric">24</td>
                        </tr>
                        <tr class="mdc-data-table__row">
                            <th class="mdc-data-table__cell" scope="row">Height</th>
                            <td class="mdc-data-table__cell mdc-data-table__cell--numeric">24</td>
                        </tr>
                    </tbody>
                    </table>
                </div>
            </div>
        </>
    );
}