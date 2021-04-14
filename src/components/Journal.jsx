/* Packages */
import React, { useState, useEffect } from 'react';
/* Util */
import {renderPieChart } from '../util/HomeGraphs';
import { mToMi, getMonth } from '../util/Conversions';
/* Styles */
import '../styles/Journal.scss'

export default function Journal(props) {
    // basic constants to use throughout the file
    const requestURL = `https://www.googleapis.com/fitness/v1/users/me/dataset:aggregate`;
    let d = new Date(), e = new Date(d);
    d.setHours(0,0,0,0);
    const hour = 3600000;
    const day = 86400000;
    const week = 7*day;

    // determine whether or not the data is loaded yet
    const [ loaded, setLoaded ] = useState(false);

    // ------------NAVIGATION LOGIC------------
    const [ dateEnd, setDateEnd ] = useState(new Date(d));
    const [ selectedDate, setSelectedDate ] = useState(new Date(d));

    // functions to handle daylight savings -- doesn't work perfectly for the log, but does handle the navigation correctly
    const stdTimezoneOffset = () => {
        var jan = new Date(0, 1)
        var jul = new Date(6, 1)
        return Math.max(jan.getTimezoneOffset(), jul.getTimezoneOffset())
    }
    const isDstObserved = (today) => {
        return today.getTimezoneOffset() < stdTimezoneOffset()
    }

    // render the days as buttons in the navigation bar
    const renderDays = () => {
        let dates = [];
        for (let i = 14; i > 0; i--) {
            const tempDate = new Date(dateEnd.getTime()-2*week+i*day);
            if (!isDstObserved(tempDate) && isDstObserved(dateEnd)) {
                dates.push(new Date(tempDate.getTime() + hour));
            } else if (isDstObserved(tempDate) && !isDstObserved(dateEnd)) {
                dates.push(new Date(tempDate.getTime() - hour));
            } else {
                dates.push(tempDate);
            }
        }

        return (
            <div className="days">
                {dates.map((x,i) => <div className="day"><button class={x.getTime() === selectedDate.getTime() ? "mdc-icon-button dateSelected" : "mdc-icon-button"} onClick={() => handleSelectedDate(i)}>{x.getDate()}</button></div>)}
            </div>
        );
    }

    // handle the arrows being selected in the navigation bar - shifts the dates by 2 weeks
    const handleNav = (val) => {
        const tempDate = new Date(dateEnd.getTime() + val * 2 * week);
        if (tempDate.getTime() <= e.getTime()) {
            if (!isDstObserved(tempDate) && isDstObserved(dateEnd)) {
                setDateEnd(new Date(tempDate.getTime() + hour));
            } else if (isDstObserved(tempDate) && !isDstObserved(dateEnd)) {
                setDateEnd(new Date(tempDate.getTime() - hour));
            } else {
                setDateEnd(tempDate);
            }
        } else {
            console.log("Stopped user from navigating to future dates.");
        }
    }

    // handle a date being selected in the navigation bar
    const handleSelectedDate = (i) => {
        setLoaded(false);
        const tempDate = new Date(dateEnd.getTime() - i*day);
        if (!isDstObserved(tempDate) && isDstObserved(dateEnd)) {
            setSelectedDate(new Date(tempDate.getTime() + hour));
        } else if (isDstObserved(tempDate) && !isDstObserved(dateEnd)) {
            setSelectedDate(new Date(tempDate.getTime() - hour));
        } else {
            setSelectedDate(tempDate);
        }
    }

    // month/year displayed above navigation
    const getMonthTitle = () => {
        const dateStart = new Date(dateEnd.getTime() - 2 * week + day);
        if (dateEnd.getFullYear() !== dateStart.getFullYear()) {
            return `${getMonth(dateStart.getMonth()+1)} ${dateStart.getFullYear()} — ${getMonth(dateEnd.getMonth()+1)} ${dateEnd.getFullYear()}`;
        }
        if (dateEnd.getMonth() !== dateStart.getMonth()) {
            return `${getMonth(dateStart.getMonth()+1)} — ${getMonth(dateEnd.getMonth()+1)} ${dateEnd.getFullYear()}`;
        }
        return `${getMonth(dateEnd.getMonth()+1)} ${dateEnd.getFullYear()}`;
    }

    // ------------API CALLS------------
    const [ heartPoints, setHeartPoints ] = useState({actual: 0, goal: 0, color: '', title: ''});
    const [ heartPointsLog, setHeartPointsLog ] = useState([0]);
    const [ steps, setSteps ] = useState({actual: 0, goal: 0, color: '', title: ''});
    const [ logSteps, setLogSteps ] = useState([0]);
    const [ distLog, setDistLog ] = useState([0]);
    const [ calsLog, setCalsLog ] = useState([0]);
    const [ moveMinsLog, setMoveMinsLog ] = useState([0]);

    useEffect(() => {
    // ------------HEART POINTS API CALL------------
        const hpBody = {
            "aggregateBy": [{
                "dataTypeName": "com.google.heart_minutes",
            }],
            "startTimeMillis": selectedDate.getTime(),
            "endTimeMillis": selectedDate.getTime() + day - 1,
            "bucketByTime": {
                "durationMillis": day,
                "period": {
                    "type": "day",
                    "value": 1,
                    "timeZoneId": "America/New_York"
                }
            }
        };
        const hpLogBody = {
            "aggregateBy": [{
                "dataTypeName": "com.google.heart_minutes",
            }],
            "startTimeMillis": selectedDate.getTime(),
            "endTimeMillis": selectedDate.getTime() + day - 1,
            "bucketByTime": {
                "durationMillis": hour,
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
                body: JSON.stringify(hpBody)
            }
        )
        .then(res => res.json())
        .then(response => {
            if (response.bucket[0].dataset[0].point.length !== 0) {
                let obj = {
                    actual: response.bucket[0].dataset[0].point[0].value[0].fpVal, 
                    goal: 36, 
                    color: '#06bf9a', 
                    title: 'Heart Points'
                }
                setHeartPoints(obj);
            } else {
                let obj = {
                    actual: 0, 
                    goal: 36, 
                    color: '#06bf9a', 
                    title: 'Heart Points'
                }
                setHeartPoints(obj);
            }
        })
        .catch(error => console.log(error));
        fetch(
            requestURL,
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json;encoding=utf-8',
                    'Authorization': `Bearer ${props.user.accessToken}`,
                },
                body: JSON.stringify(hpLogBody)
            }
        )
        .then(res => res.json())
        .then(response => {
            let hplist = [];
            response.bucket.forEach(x => {
                if (x.dataset[0].point.length !== 0) {
                    hplist.push(x.dataset[0].point[0].value[0].fpVal);
                } else {
                    hplist.push(0);
                }
            });
            setHeartPointsLog(hplist);
        })
        .catch(error => console.log(error));
        
    // ------------STEPS API CALL------------
        const stepsBody = {
            "aggregateBy": [{
                "dataTypeName": "com.google.step_count.delta",
                "dataSourceId": "derived:com.google.step_count.delta:com.google.android.gms:estimated_steps"
            }],
            "startTimeMillis": selectedDate.getTime(),
            "endTimeMillis": selectedDate.getTime() + day,
            "bucketByTime": {
                "durationMillis": day,
                "period": {
                    "type": "day",
                    "value": 1,
                    "timeZoneId": "America/New_York"
                }
            }
        };
        const stepsLogBody = {
            "aggregateBy": [{
                "dataTypeName": "com.google.step_count.delta",
                "dataSourceId": "derived:com.google.step_count.delta:com.google.android.gms:estimated_steps"
            }],
            "startTimeMillis": selectedDate.getTime(),
            "endTimeMillis": selectedDate.getTime() + day - 1,
            "bucketByTime": {
                "durationMillis": hour,
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
                body: JSON.stringify(stepsBody)
            }
        )
        .then(res => res.json())
        .then(response => {
            if (response.bucket[0].dataset[0].point.length !== 0) {
                let obj = {
                    actual: response.bucket[0].dataset[0].point[0].value[0].intVal, 
                    goal: 15000, 
                    color: '#4285F4', 
                    title: 'Steps'
                }
                setSteps(obj);
            } else {
                let obj = {
                    actual: 0, 
                    goal: 15000, 
                    color: '#4285F4', 
                    title: 'Steps'
                }
                setSteps(obj);
            }
        })
        .catch(error => console.log(error));
        fetch(
            requestURL,
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json;encoding=utf-8',
                    'Authorization': `Bearer ${props.user.accessToken}`,
                },
                body: JSON.stringify(stepsLogBody)
            }
        )
        .then(res => res.json())
        .then(response => {
            let steplist = [];
            response.bucket.forEach(x => {
                if (x.dataset[0].point.length !== 0) {
                    steplist.push(x.dataset[0].point[0].value[0].intVal);
                } else {
                    steplist.push(0);
                }
            });
            setLogSteps(steplist);
        })
        .catch(error => console.log(error));


    // ------------DIST API CALL------------
        const distBody = {
            "aggregateBy": [{
                "dataTypeName": "com.google.distance.delta",
            }],
            "startTimeMillis": selectedDate.getTime(),
            "endTimeMillis": selectedDate.getTime() + day - 1,
            "bucketByTime": {
                "durationMillis": hour,
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
                body: JSON.stringify(distBody)
            }
        )
        .then(res => res.json())
        .then(response => {
            let temp = [];
            response.bucket.forEach(x => {
                if (x.dataset[0].point.length !== 0) {                       
                    temp.push(mToMi(x.dataset[0].point[0].value[0].fpVal).toFixed(2));
                } else {
                    temp.push(mToMi(0).toFixed(2));
                }
            });
            setDistLog(temp);
        })
        .catch(error => console.log(error));

    // ------------CALS API CALL------------
        const calsBody = {
            "aggregateBy": [{
                "dataTypeName": "com.google.calories.expended",
            }],
            "startTimeMillis": selectedDate.getTime(),
            "endTimeMillis": selectedDate.getTime() + day - 1,
            "bucketByTime": {
                "durationMillis": hour,
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
                body: JSON.stringify(calsBody)
            }
        )
        .then(res => res.json())
        .then(response => {
            let temp = [];
            response.bucket.forEach(x => {
                if (x.dataset[0].point.length !== 0) {
                    temp.push(Math.round(x.dataset[0].point[0].value[0].fpVal));
                } else {
                    temp.push(0);
                }
            });
            setCalsLog(temp);
        })
        .catch(error => console.log(error));

    // ------------MOVE MINS API CALL------------
        const mmBody = {
            "aggregateBy": [{
                "dataTypeName": "com.google.active_minutes",
            }],
            "startTimeMillis": selectedDate.getTime(),
            "endTimeMillis": selectedDate.getTime() + day - 1,
            "bucketByTime": {
                "durationMillis": hour,
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
                body: JSON.stringify(mmBody)
            }
        )
        .then(res => res.json())
        .then(response => {
            let temp = [];
            response.bucket.forEach(x => {
                if (x.dataset[0].point.length !== 0) {
                    temp.push(x.dataset[0].point[0].value[0].intVal);
                } else {
                    temp.push(0);
                }
            });
            setMoveMinsLog(temp);
            setLoaded(true);
        })
        .catch(error => console.log(error));

    }, [selectedDate]); // eslint-disable-line react-hooks/exhaustive-deps

    // ------------LOG ROW DATA POPULATION------
    const [ rows, setRows ] = useState([{time: '', hp: 0, step: 0, dist: 0, cals: 0, mm: 0}]);
    useEffect(() => {
        let row = [];

        for(let i = 0; i < logSteps.length; i++) {
            const entry = {
                time: new Date(selectedDate.getTime() + i * hour).toLocaleTimeString(),
                hp: heartPointsLog[i],
                step: logSteps[i],
                dist: distLog[i],
                cals: calsLog[i],
                mm: moveMinsLog[i]
            }
            row.push(entry);
        }
        setRows(row);
    }, [ selectedDate, heartPointsLog, logSteps, distLog, calsLog, moveMinsLog]); // eslint-disable-line react-hooks/exhaustive-deps
    
    

    // ------------SESSIONS API CALL------------
    // it turns out sessions only track manually entered SESSIONS which (for some reason) is seperate from activities tracked in the Google Fit app.
    // Future Implementation: add ability to insert a session in the website
    //                         - like in home add chips to switch between the hourly log and session data

    // let sessionsRequestUrl = new URL('https://www.googleapis.com');
    // sessionsRequestUrl.protocol = 'https';
    // sessionsRequestUrl.hostname = 'www.googleapis.com';
    // sessionsRequestUrl.pathname = '/fitness/v1/users/me/sessions';
    // sessionsRequestUrl.searchParams.append('startTime', `${selectedDate.toISOString()}`);
    // sessionsRequestUrl.searchParams.append('endTime', `${new Date(selectedDate.getTime() + day - 1).toISOString()}`);
    // console.log(sessionsRequestUrl);
    // useEffect(() => {
    //     fetch(
    //         sessionsRequestUrl,
    //         {
    //             method: "GET",
    //             headers: {
    //                 'Accept': 'application/json;encoding=utf-8',
    //                 'Authorization': `Bearer ${props.user.accessToken}`,
    //             }
    //         }
    //     )
    //     .then(res => res.json())
    //     .then(response => {
    //         console.log(response);
    //     })
    //     .catch(error => console.log(error));
    // }, [selectedDate]); // eslint-disable-line react-hooks/exhaustive-deps

    return (
        <div className="page">
            <div className="pageTitle">Your Fitness Journal</div> 
            <div className="topNav">
                <div className="monthYear">
                    {getMonthTitle()}
                </div>
                <div className="topDates">
                    <button class="mdc-icon-button material-icons" onClick={() => handleNav(-1)}>keyboard_arrow_left</button>
                    {renderDays()}
                    <button class="mdc-icon-button material-icons" onClick={() => handleNav(1)}>keyboard_arrow_right</button>
                </div>
            </div>
            <div className="bottomSection">
                <div className="log">
                    <span className="currDate">{getMonth(selectedDate.getMonth()+1) + " " + selectedDate.getDate() + "," + selectedDate.getFullYear()}</span>
                    <div class="mdc-data-table mdc-data-table--sticky-header">
                        <div class="mdc-data-table__table-container">
                            <table class="mdc-data-table__table">
                                <thead>                                    
                                    <tr class="mdc-data-table__header-row">
                                        <th class="mdc-data-table__header-cell header-text" role="columnheader" scope="col">Time</th>
                                        <th class="mdc-data-table__header-cell mdc-data-table__header-cell--numeric header-text" role="columnheader" scope="col">Heart Points</th>
                                        <th class="mdc-data-table__header-cell mdc-data-table__header-cell--numeric header-text" role="columnheader" scope="col">Steps</th>
                                        <th class="mdc-data-table__header-cell mdc-data-table__header-cell--numeric header-text" role="columnheader" scope="col">Distance (mi)</th>
                                        <th class="mdc-data-table__header-cell mdc-data-table__header-cell--numeric header-text" role="columnheader" scope="col">Calories (kCal)</th>
                                        <th class="mdc-data-table__header-cell mdc-data-table__header-cell--numeric header-text" role="columnheader" scope="col">Move Minutes</th>
                                    </tr>
                                </thead>
                                <tbody class="mdc-data-table__content">
                                    {loaded ? rows.map(x => 
                                        <tr class="mdc-data-table__row">
                                            <th class="mdc-data-table__cell" scope="row">{x.time}</th>
                                            <td class="mdc-data-table__cell mdc-data-table__cell--numeric">{x.hp}</td>
                                            <td class="mdc-data-table__cell mdc-data-table__cell--numeric">{x.step}</td>
                                            <td class="mdc-data-table__cell mdc-data-table__cell--numeric">{x.dist}</td>
                                            <td class="mdc-data-table__cell mdc-data-table__cell--numeric">{x.cals}</td>
                                            <td class="mdc-data-table__cell mdc-data-table__cell--numeric">{x.mm}</td>
                                        </tr>
                                    )
                                    : rows.map(x => 
                                        <tr class="mdc-data-table__row">
                                            <th class="mdc-data-table__cell" scope="row">{x.time}</th>
                                            <td class="mdc-data-table__cell mdc-data-table__cell--numeric">—</td>
                                            <td class="mdc-data-table__cell mdc-data-table__cell--numeric">—</td>
                                            <td class="mdc-data-table__cell mdc-data-table__cell--numeric">—</td>
                                            <td class="mdc-data-table__cell mdc-data-table__cell--numeric">—</td>
                                            <td class="mdc-data-table__cell mdc-data-table__cell--numeric">—</td>
                                        </tr>
                                    )}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <div className="journalGraphs">
                    <div className="stepsData">
                        <span class="material-icons stepsIcon">directions_walk</span>
                        <div className="stepsText">
                            {loaded ? steps.actual : '—'} Steps
                        </div>
                    </div>
                    <div className="heartPointsData">
                        <span class="material-icons heartPointsIcon">favorite_border</span>
                        <div className="heartPointsText">
                            {loaded ? heartPoints.actual : '—'} Heart Points
                        </div>
                    </div>
                    <div className="goalData">
                        <div className="logDataGraphTitle">% Daily Goal</div>
                        <div className="goalDataGraphs">
                            {loaded ? renderPieChart(steps.actual, steps.goal, steps.color, steps.title) : renderPieChart(0,1,'','Loading..')}
                            {loaded ? renderPieChart(heartPoints.actual, heartPoints.goal, heartPoints.color, heartPoints.title) : renderPieChart(0,1,'','Loading..')}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}