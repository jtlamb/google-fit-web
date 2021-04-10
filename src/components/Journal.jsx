/* Packages */
import React, { useState, useEffect } from 'react';
/* Util */
import {renderPieChart } from '../util/HomeGraphs';
import { mToMi, getMonth } from '../util/Conversions';
/* Styles */
import '../styles/Journal.scss'

export default function Journal(props) {
    const requestURL = `https://www.googleapis.com/fitness/v1/users/me/dataset:aggregate`;
    let d = new Date(), e = new Date(d);
    const msSinceMidnight = e - d.setHours(0,0,0,0);
    const hour = 3600000;
    const day = 86400000;
    const week = 7*day;

    const [ dateEnd, setDateEnd ] = useState(new Date(d));
    const [ selectedDate, setSelectedDate ] = useState(new Date(d));

    const stdTimezoneOffset = () => {
        var jan = new Date(0, 1)
        var jul = new Date(6, 1)
        return Math.max(jan.getTimezoneOffset(), jul.getTimezoneOffset())
    }
    const isDstObserved = (today) => {
        return today.getTimezoneOffset() < stdTimezoneOffset()
    }

    
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

    const handleSelectedDate = (i) => {
        const tempDate = new Date(dateEnd.getTime() - i*day);
        if (!isDstObserved(tempDate) && isDstObserved(dateEnd)) {
            setSelectedDate(new Date(tempDate.getTime() + hour));
        } else if (isDstObserved(tempDate) && !isDstObserved(dateEnd)) {
            setSelectedDate(new Date(tempDate.getTime() - hour));
        } else {
            setSelectedDate(tempDate);
        }
}

    // ------------HEART POINTS API CALL------------
    const [ heartPoints, setHeartPoints ] = useState({actual: 0, goal: 0, color: '', title: ''});

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

    /* HEART POINTS API CALL */
    useEffect(() => {
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

        
    }, [selectedDate]); // eslint-disable-line react-hooks/exhaustive-deps

    // ------------STEPS API CALL------------
    const [ steps, setSteps ] = useState({actual: 0, goal: 0, color: '', title: ''});

    const stepsBody = {
        "aggregateBy": [{
            "dataTypeName": "com.google.step_count.delta",
            "dataSourceId": "derived:com.google.step_count.delta:com.google.android.gms:estimated_steps"
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
    useEffect(() => {
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
    }, [selectedDate]); // eslint-disable-line react-hooks/exhaustive-deps
    
    

    return (
        <div className="page">
            <div className="pageTitle">Your Fitness Journal</div> 
            <div className="topNav">
                <div className="monthYear">
                    {getMonth(dateEnd.getMonth()+1) + " " + dateEnd.getFullYear()}
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
                    <div class="mdc-data-table">
                        <div class="mdc-data-table__table-container">
                            <table class="mdc-data-table__table">
                                <thead>
                                    <tr class="mdc-data-table__header-row">
                                        <th class="mdc-data-table__header-cell"><span className="tableTitle">Log</span></th>
                                    </tr>
                                </thead>
                                <tbody class="mdc-data-table__content">
                                    <tr class="mdc-data-table__row">
                                        <th class="mdc-data-table__cell" scope="row">Activity 1</th>
                                        <td class="mdc-data-table__cell mdc-data-table__cell--numeric">Activity 1 data</td>
                                    </tr>
                                    <tr class="mdc-data-table__row">
                                    <th class="mdc-data-table__cell" scope="row">Activity 2</th>
                                        <td class="mdc-data-table__cell mdc-data-table__cell--numeric">Activity 2 data</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <div className="journalGraphs">
                    <div className="stepsData">
                        <span class="material-icons stepsIcon">directions_walk</span>
                        <div className="stepsText">
                            {steps.actual} Steps
                        </div>
                    </div>
                    <div className="heartPointsData">
                        <span class="material-icons heartPointsIcon">favorite_border</span>
                        <div className="heartPointsText">
                            {heartPoints.actual} Heart Points
                        </div>
                    </div>
                    <div className="goalData">
                        <div className="logDataGraphTitle">% Daily Goal</div>
                        <div className="goalDataGraphs">
                            {renderPieChart(steps.actual, steps.goal, steps.color, steps.title)}
                            {renderPieChart(heartPoints.actual, heartPoints.goal, heartPoints.color, heartPoints.title)}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}