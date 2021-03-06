/* Packages */
import React, { useEffect, useState } from 'react';
/* Styles */
import '../styles/Profile.scss'

export default function Profile(props) {

    const m = {
        "aggregateBy": [{
          "dataTypeName": "com.google.step_count.delta",
          "dataSourceId": "derived:com.google.step_count.delta:com.google.android.gms:estimated_steps"
        }],
        "bucketByTime": { "durationMillis": 86400000 },
        "startTimeMillis": 1438705622000,
        "endTimeMillis": 1439310422000
      };

    useEffect(() => {
        fetch(
            `https://www.googleapis.com/fitness/v1/users/me/dataset:aggregate`,
            {
                method: "POST",
                body: JSON.stringify(m),
                headers: {
                    'Content-Type': 'application/json;encoding=utf-8',
                    'Authorization': `Bearer ${props.user.accessToken}`
                }
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
                        <th class="mdc-data-table__header-cell" role="columnheader" scope="col">Dessert</th>
                        <th class="mdc-data-table__header-cell mdc-data-table__header-cell--numeric" role="columnheader" scope="col">Carbs (g)</th>
                        <th class="mdc-data-table__header-cell mdc-data-table__header-cell--numeric" role="columnheader" scope="col">Protein (g)</th>
                        <th class="mdc-data-table__header-cell" role="columnheader" scope="col">Comments</th>
                        </tr>
                    </thead>
                    <tbody class="mdc-data-table__content">
                        <tr class="mdc-data-table__row">
                        <th class="mdc-data-table__cell" scope="row">Frozen yogurt</th>
                        <td class="mdc-data-table__cell mdc-data-table__cell--numeric">24</td>
                        <td class="mdc-data-table__cell mdc-data-table__cell--numeric">4.0</td>
                        <td class="mdc-data-table__cell">Super tasty</td>
                        </tr>
                        <tr class="mdc-data-table__row">
                        <th class="mdc-data-table__cell" scope="row">Ice cream sandwich</th>
                        <td class="mdc-data-table__cell mdc-data-table__cell--numeric">37</td>
                        <td class="mdc-data-table__cell mdc-data-table__cell--numeric">4.33333333333</td>
                        <td class="mdc-data-table__cell">I like ice cream more</td>
                        </tr>
                        <tr class="mdc-data-table__row">
                        <th class="mdc-data-table__cell" scope="row">Eclair</th>
                        <td class="mdc-data-table__cell mdc-data-table__cell--numeric">24</td>
                        <td class="mdc-data-table__cell mdc-data-table__cell--numeric">6.0</td>
                        <td class="mdc-data-table__cell">New filing flavor</td>
                        </tr>
                    </tbody>
                    </table>
                </div>
            </div>
        </>
    );
}