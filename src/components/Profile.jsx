/* Packages */
import React, { useEffect, useState } from 'react';
/* Util */
import { getMonth, kToLbs, mToFt } from '../util/Conversions';
/* Styles */
import '../styles/Profile.scss'

export default function Profile(props) {
    const d = new Date();
    const day = 86400000;

    const [ loaded, setLoaded ] = useState(false);
    const [ bDate, setBDate ] = useState('');
    const [ gender, setGender ] = useState('');
    const [ weight, setWeight ] = useState(-1);
    const [ height, setHeight ] = useState(-1);

    /* request urls */
    const peopleRequestUrl = new URL('https://people.googleapis.com');
    peopleRequestUrl.protocol = 'https';
    peopleRequestUrl.hostname = 'people.googleapis.com';
    peopleRequestUrl.pathname = '/v1/people/me';
    peopleRequestUrl.searchParams.append('personFields', 'birthdays,genders,names');
    peopleRequestUrl.searchParams.append('sources', 'READ_SOURCE_TYPE_PROFILE');
    const requestURL = `https://www.googleapis.com/fitness/v1/users/me/dataset:aggregate`;

    useEffect(() => {
    // get name, birthday, gender
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

    // get weight if recorded in the past 90 days
        const weightBody = {
            "aggregateBy": [{
                "dataTypeName": "com.google.weight",
                "dataSourceId": "derived:com.google.weight:com.google.android.gms:merge_weight"
            }],
            "startTimeMillis": d.getTime() - 90 * day,
            "endTimeMillis": d.getTime(),
            "bucketByTime": {
                "durationMillis": day,
                "period": {
                    "type": "day",
                    "value": 1,
                    "timeZoneId": "America/New_York"
                }
            }
        };
        fetch(
            requestURL,
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json;encoding=utf-8',
                    'Authorization': `Bearer ${props.user.accessToken}`,
                },
                body: JSON.stringify(weightBody)
            }
        )
        .then(res => res.json())
        .then(response => {
            console.log(response);
            response.bucket.forEach(x => {
                if (x.dataset[0].point.length !== 0 && weight === -1) {
                    setWeight(x.dataset[0].point[0].value[0].fpVal);
                }
            });
        })
        .catch(error => console.log(error));

    // get height if recorded in the past 90 days
        const heightBody = {
            "aggregateBy": [{
                "dataTypeName": "com.google.height",
                "dataSourceId": "derived:com.google.height:com.google.android.gms:merge_height"
            }],
            "startTimeMillis": d.getTime() - 90 * day,
            "endTimeMillis": d.getTime(),
            "bucketByTime": {
                "durationMillis": day,
                "period": {
                    "type": "day",
                    "value": 1,
                    "timeZoneId": "America/New_York"
                }
            }
        };
        fetch(
            requestURL,
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json;encoding=utf-8',
                    'Authorization': `Bearer ${props.user.accessToken}`,
                },
                body: JSON.stringify(heightBody)
            }
        )
        .then(res => res.json())
        .then(response => {
            response.bucket.forEach(x => {
                if (x.dataset[0].point.length !== 0 && height === -1) {
                    setHeight(x.dataset[0].point[0].value[0].fpVal);
                }
            });

        })
        .catch(error => console.log(error));

        setLoaded(true);

    }, [props.user.authenticated])  // eslint-disable-line react-hooks/exhaustive-deps

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
                            <tr class="mdc-data-table__row">
                                <th class="mdc-data-table__cell" scope="row">Weight</th>
                                <td class="mdc-data-table__cell mdc-data-table__cell--numeric">{weight === -1 ? '—' : Math.round(kToLbs(weight)) + ' lbs'}</td>
                            </tr>
                            <tr class="mdc-data-table__row">
                                <th class="mdc-data-table__cell" scope="row">Height</th>
                                <td class="mdc-data-table__cell mdc-data-table__cell--numeric">{height === -1 ? '—' : mToFt(height).ft + ' ft ' + mToFt(height).inches + ' in'}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div className="footnote">
                *Shows most recent height and weight data inputted within the last 90 days
            </div>
        </div>
    );
}