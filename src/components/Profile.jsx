/* Packages */
import React, { useEffect, useState } from 'react';
/* Styles */
import '../styles/Profile.scss'
/* Util */
import  apikey  from '../secrets/apikey.json'
import reportWebVitals from '../reportWebVitals';


function kToLbs(kg) {
    return kg * 2.20462;
}
function mToFt(m) {
    let ft = m * 3.28084;
    let inches = (ft % ft.toFixed(0)) * 12;
    ft = ft.toFixed(0);
    inches = Math.round(inches).toFixed(0)
    return {
        ft,
        inches
    }
}
function getMonth(m) {
    switch(m) {
        case 1: return "January";
        case 2: return "February";
        case 3: return "March";
        case 4: return "April";
        case 5: return "May";
        case 6: return "June";
        case 7: return "July";
        case 8: return "August";
        case 9: return "September";
        case 10: return "October";
        case 11: return "November";
        case 12: return "December";
        default: return "Invalid Month"
    }
}

export default function Profile(props) {

    const [ loaded, setLoaded ] = useState(true);
    const [ bDate, setBDate ] = useState('');
    const [ gender, setGender ] = useState('');
    const [ height, setHeight ] = useState(0);
    const [ weight, setWeight ] = useState(0);

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
            setBDate(`${getMonth(response.birthdays[0].date.month)} ${response.birthdays[0].date.day}, ${response.birthdays[0].date.year}`);
            setGender(`${response.genders[0].formattedValue}`);
        })
        .catch(error => console.log(error));
    }, []);

    /* Height, Weight */
    // const d = new Date();
    // const presentationOfGoogleFit = 86400000 * 16246;
    // const end = d.getTime();
    // console.log(end);

    // const requestURL = `https://www.googleapis.com/fitness/v1/users/me/dataset:aggregate`;
    // const weightBody = {
    //     "aggregateBy": [{
    //         "dataTypeName": "com.google.weight",
    //         "dataSourceId": "derived:com.google.weight:com.google.android.gms:merge_weight"
    //     }],
    //     "startTimeMillis": end - 86400000,
    //     "endTimeMillis": end,
    //     "bucketByTime": {
    //         "durationMillis": 86400000,
    //         "period": {
    //             "type": "day",
    //             "value": 1,
    //             "timeZoneId": "America/New_York"
    //         }
    //     }
    // };
    // const heightBody = {
    //     "aggregateBy": [{
    //         "dataTypeName": "com.google.height",
    //         "dataSourceId": "derived:com.google.height:com.google.android.gms:merge_height"
    //     }],
    //     "startTimeMillis": end - 86400000,
    //     "endTimeMillis": end,
    //     "bucketByTime": {
    //         "durationMillis": 86400000,
    //         "period": {
    //             "type": "day",
    //             "value": 1,
    //             "timeZoneId": "America/New_York"
    //         }
    //     }
    // };
    // // get weight
    // useEffect(() => {
    //     fetch(
    //         requestURL,
    //         {
    //             method: 'POST',
    //             headers: {
    //                 'Content-Type': 'application/json;encoding=utf-8',
    //                 'Authorization': `Bearer ${props.user.accessToken}`,
    //             },
    //             body: JSON.stringify(weightBody)
    //         }
    //     )
    //     .then(res => res.json())
    //     .then(response => {
    //         console.log(response);
    //         setWeight(response.bucket[0].dataset[0].point[0].value[0].fpVal);
    //     })
    //     .catch(error => console.log(error));
    // }, [props.user.authenticated])  
    // // get height
    // useEffect(() => {
    //     fetch(
    //         requestURL,
    //         {
    //             method: 'POST',
    //             headers: {
    //                 'Content-Type': 'application/json;encoding=utf-8',
    //                 'Authorization': `Bearer ${props.user.accessToken}`,
    //             },
    //             body: JSON.stringify(heightBody)
    //         }
    //     )
    //     .then(res => res.json())
    //     .then(response => {
    //         console.log(response);
    //         setHeight(response.bucket[0].dataset[0].point[0].value[0].fpVal);
    //         setLoaded(true);
    //     })
    //     .catch(error => console.log(error));
    // }, [props.user.authenticated])  

    return (
        <div className="profile">
            <img src={props.user.pfPic} alt="Profile" className="pfp"/>
            <div className="name">{props.user.fname} {props.user.lname}</div>
            {loaded 
            ?  
                <div class="mdc-data-table basic-info">
                    <div class="mdc-data-table__table-container">
                        <table class="mdc-data-table__table">
                            <thead>
                                <tr class="mdc-data-table__header-row">
                                    <th class="mdc-data-table__header-cell"><span className="title">Basic Information</span></th>
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
                                {/* <tr class="mdc-data-table__row">
                                    <th class="mdc-data-table__cell" scope="row">Weight</th>
                                    <td class="mdc-data-table__cell mdc-data-table__cell--numeric">{Math.round(kToLbs(weight))} lbs</td>
                                </tr>
                                <tr class="mdc-data-table__row">
                                    <th class="mdc-data-table__cell" scope="row">Height</th>
                                    <td class="mdc-data-table__cell mdc-data-table__cell--numeric">{mToFt(height).ft} ft {mToFt(height).inches} in</td>
                                </tr> */}
                            </tbody>
                        </table>
                    </div>
                </div>
            :
                <div>
                    <span className="loading">Loading User Info ...</span> 
                    <br/>
                    <span className="material-icons loading-icon">loop</span>
                </div>
            }
        </div>
    );
}