/* Packages */
import React, { useEffect, useState } from 'react';
/* Util */
import { getMonth } from '../util/Conversions';
/* Styles */
import '../styles/Profile.scss'

export default function Profile(props) {

    const [ loaded, setLoaded ] = useState(false);
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
            setBDate(`${getMonth(response.birthdays[0].date.month)} ${response.birthdays[0].date.day}, ${response.birthdays[0].date.year}`);
            setGender(`${response.genders[0].formattedValue}`);
            setLoaded(true);
        })
        .catch(error => console.log(error));
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    /* Height, Weight  TODO :: ????? can only get aggregate data from user manually entered values, find a way to get latest value */
    // const [ height, setHeight ] = useState(0);
    // const [ weight, setWeight ] = useState(0);

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
            <span className="name">{props.user.fname} {props.user.lname}</span>
            <div class="mdc-data-table basic-info">
                <div class="mdc-data-table__table-container">
                    <table class="mdc-data-table__table">
                        <thead>
                            <tr class="mdc-data-table__header-row">
                                <th class="mdc-data-table__header-cell"><span className="tableTitle">Basic Information</span></th>
                            </tr>
                        </thead>
                        <tbody class="mdc-data-table__content">
                            <tr class="mdc-data-table__row">
                                <th class="mdc-data-table__cell" scope="row">Birthday</th>
                                <td class="mdc-data-table__cell mdc-data-table__cell--numeric">{loaded ? bDate : '—'}</td>
                            </tr>
                            <tr class="mdc-data-table__row">
                                <th class="mdc-data-table__cell" scope="row">Gender</th>
                                <td class="mdc-data-table__cell mdc-data-table__cell--numeric">{loaded ? gender : '—'}</td>
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
        </div>
    );
}